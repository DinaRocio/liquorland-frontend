// import styled from "@emotion/styled";
// import  CardCart from "../components/CardCart";
// import Template from "../templates/Template";
// import Counter from "../UI/Counter"
import Navbar from "../UI/Navbar"

// export default function Cart() {
//   return (
//     <Template>
//       <Heading>My Cart</Heading>
//       <Overlay></Overlay>
//         <CardCart/>
//     </Template>
//   );
// }


export default function Cart(){
  return(
    <div>
      <Navbar/>
    </div>
  );
}


// const Heading = styled.h3`
//     font-family: ABeeZee;
//     font-style: italic;
//     font-weight: normal;
//     font-size: 20px;
//     line-height: 18px;
//     text-align:center;
//     margin-bottom:10px;
// `;

// const Overlay =styled.div`
//       color:#E2E2E2;
//       width:940px;
//       height:14px;
//       border-bottom:1px solid;
//       margin-top:32px;
//       margin-bottom:15px;
// `;