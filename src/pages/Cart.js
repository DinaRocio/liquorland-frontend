import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import CardCart from "../components/CardCart";
import { fetchIndexCart } from "../features/cart/cartSlice";
import Template from "../templates/Template";

export default function Cart() {
  const token = useSelector((state) => state.session.token);
  const cartList = useSelector((state) => state.cart.list);
  const cartStatus = useSelector((state) => state.cart.status);
  const dispatch = useDispatch();

  useEffect((_) => {
    if (token && cartStatus.index === "idle") dispatch(fetchIndexCart(token));
  }, []);

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
            setUrl={cartItem.drink.image_url}
            name={cartItem.drink.name}
            presentation={cartItem.drink.presentation}
            price={cartItem.drink.price}
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
  margin-bottom: 10px;
`;

const Overlay = styled.div`
  color: #e2e2e2;
  width: 940px;
  height: 14px;
  border-bottom: 1px solid;
  margin-top: 32px;
  margin-bottom: 15px;
`;
