import { useMediaQuery } from 'react-responsive'
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
import TemplateDesktop from "../templates/TemplateDesktop";

export default function Cart() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })
  const token = useSelector((state) => state.session.token);
  const cartList = useSelector((state) => state.cart.list);
  const cartStatus = useSelector((state) => state.cart.status);

  const dispatch = useDispatch();

  useEffect((_) => {
    if (token && cartStatus.index === "idle") dispatch(fetchIndexCart(token));
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
    <>
      {isDesktopOrLaptop &&
        <TemplateDesktop>
          <Tittle>Shopping cart</Tittle>
          <Table>
            <p>Products</p>
            <p>Detail</p>
            <p>Amount</p>
          </Table>
          <CardCart/>
        </TemplateDesktop>
      }
      {isTabletOrMobileDevice && 
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
      }
    </>
  );
}

const Table = styled.p`
    display:flex;
    flex-direction:row;
    margin-top:30px;
    margin-left:162px;
    gap:210px;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 18px;
    color: #181725;
`;

const Tittle = styled.p`
    margin-top:25px;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 18px;
    color: #181725;
    margin-left:20px;
`;

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
