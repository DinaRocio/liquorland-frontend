import { useMediaQuery } from 'react-responsive'
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../UI/Navbar";
import CardCart from "../components/CardCart";
import bebida from "../assets/bebida.svg";
import {
  fetchDeleteCart,
  fetchIndexCart,
  updateCartStatus,
} from "../features/cart/cartSlice";
import Template from "../templates/Template";
import TemplateDesktop from "../templates/TemplateDesktop";
import Icon from "../UI/Icon";
import { colors } from "../ui";

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
  const [checkoutOpen, setCheckoutOpen] = useState(false);
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
    <>
      {isDesktopOrLaptop &&
      <ContainerTwo>
        <Container>
          <div className="bar"><Navbar/></div>
            <Tittle>Shopping cart</Tittle>
            <Table>
              <p>Products</p>
              <p>Detail</p>
              <p>Amount</p>
            </Table>
            <div className="content">
                <CardCart
                  setUrl={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
                <CardCart
                  setUrl={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                /> 
                <CardCart
                  setUrl={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                /> 
                <CardCart
                  setUrl={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
                <CardCart
                  setUrl={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
                <CardCart
                  setUrl={bebida}
                  name={"Trappistes Rochefort 8"}
                  presentation={"Lata 335 ml."}
                  price={"12.99"}
                />
            </div>
            <div className="foo"><Footer/></div>
        </Container>
        <Checkout>
                <p className="heading">TOTAL</p>
                <div className="licor">
                  <Icon type="beer" fill="black" size={30}/>
                  <p className="location">StoreImageLIQUORLAND4940 N Tarrant Pkwy,Fort Worth, TX</p>
                </div>
                <p className="sub">SUB-TOTAL	$30.99</p>
                <p className="tax"> TAX	$2.56</p>
                <p className="sav">SAVINGS	-$0.00</p>
                <p className="total">TOTAL	$33.55</p>
                <button>PLACE ORDER</button>
        </Checkout>
      </ContainerTwo>
      }
      {isTabletOrMobileDevice && 
        <>
            <CheckoutModal isOpen={checkoutOpen}>
              <CheckoutCard>
                <Header>
                  <p>Checkout</p>
                  <Icon
                    type="close"
                    fill="black"
                    size={30}
                    onClick={() => setCheckoutOpen(!checkoutOpen)}
                  />
                </Header>
                <CheckoutContent>
                  <div>
                    <Option>
                      <p>Delivery</p>
                      <h5>Delivery</h5>
                    </Option>
                    <Option>
                      <p>Payment</p>
                      <Icon type="money" size={20} />
                    </Option>
                    <Option>
                      <p>Total Cost</p>
                      <h5>$13.97</h5>
                    </Option>
                  </div>
                  <p>
                    By placing an order you agree to our <br></br>Terms And Conditions
                  </p>
                  <button>Place Order</button>
                </CheckoutContent>
              </CheckoutCard>
            </CheckoutModal>
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
              <CartButton onClick={() => setCheckoutOpen(!checkoutOpen)}>
                Go to Checkout
              </CartButton>
          </Template>
        </> }
    </>
  );
}

const Checkout = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:165px;
    margin-left:-190px;
    padding:15px;
    gap:15px;
    width:500px;
    height:100%;
    background-color:white;
    & div {
      display:flex;
      gap:15px;
      width:100%;
      height:45px;
      border-bottom:1px solid  ${colors.gray4};
    }
    & > p {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    align-items: center;
    color: #7c7c7c;
    }
    & > button {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    align-items: center;
    background: ${colors.light2};
    cursor: pointer;
    color: white;
    outline:none;
    border:none;
    width:150px;
    height:40px;
    }
`;

const ContainerTwo =styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    width:100%;
    height:100%;
`;

const Container =styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-top:55px;
    margin-bottom:55px;
    & > .bar {
      display:flex;
      justify-content:center;
      margin-left:300px;
    }
    & > .content {
      display:flex;
      width:900px;
      flex-direction:column;
      margin-bottom:5px;
      margin-left:100px;
      bottom:0;
      justify-content:center;
    }
    & > .foo {
      display:flex;
      margin-top:55px;
      margin-bottom:-55px;
      margin-left:580px;
      bottom:0;
      justify-content:center;
    }
`;


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
const CheckoutModal = styled.div(
  ({ isOpen }) => `
  display: ${isOpen ? "flex" : "none"};
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,255,0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 11;
  `
);
const CheckoutCard = styled.div`
  width: 100%;
  background: #f2f3f2;
  border-radius: 30px 30px 0px 0px;
  z-index: 13;
  padding: 25px;
  position: absolute;
  bottom: 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(226, 226, 226, 0.7);
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
`;
const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #7c7c7c;
    margin-top: 80px;
  }
  & > button {
    padding: 14px;
    margin-top: 30px;
    background: ${colors.light2};
    outline: none;
    border: none;
    border-radius: 10px;
    color: ${colors.white};
    font-size: 23px;
    line-height: 18px;
    text-align: center;
  }
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 10px;
  border-bottom: 1px solid rgba(226, 226, 226, 0.7);
  & > p {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #7c7c7c;
  }
  & > h5 {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: right;

    color: #181725;
  }
`;
const CartButton = styled.button`
  font-family: ABeeZee;
  padding: 14px 24px;
  margin-top: 30px;
  background: #5dd39e;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
`;
