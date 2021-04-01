import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import CardCart from "../components/CardCart";
import {
  fetchDeleteCart,
  fetchIndexCart,
  updateCartStatus,
} from "../features/cart/cartSlice";
import Template from "../templates/Template";

export default function Cart() {
  const token = useSelector((state) => state.session.token);
  const cartList = useSelector((state) => state.cart.list);
  const cartStatus = useSelector((state) => state.cart.status);

  const dispatch = useDispatch();

  useEffect((_) => {
    if (token) dispatch(fetchIndexCart(token));
  }, []);

  useEffect(() => {
    if (cartStatus.delete === "SUCCESS") {
      dispatch(updateCartStatus({ status: "delete", value: "idle" }));
    }
  }, [cartStatus.delete]);

  const handleRemoveItem = (id) => {
    console.log(id);
    dispatch(fetchDeleteCart({ token, cartId: id }));
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Template>
      <Heading>My Cart</Heading>
      <Overlay />
      {cartStatus.index === "LOADING" && <span>Cargando...</span>}
      {cartStatus.index === "FAILED" && <span>Something was wrong!</span>}
      {cartStatus.index === "SUCCESS" &&
        cartList.map((cartItem) => (
          <CardCart
            key={cartItem.id}
            id={cartItem.id}
            setUrl={cartItem.drink.image_url}
            name={cartItem.drink.name}
            presentation={cartItem.drink.presentation}
            price={cartItem.drink.price}
            quantity={cartItem.quantity}
            handleRemoveItem={() => handleRemoveItem(cartItem.id)}
          />
        ))}
    </Template>
  );
}

const Heading = styled.h3`
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
`;

const Overlay = styled.div`
  color: #e2e2e2;
  width: 100%;
  border-bottom: 1px solid;
  margin-top: 32px;
`;
