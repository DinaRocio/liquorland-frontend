import { useEffect, useState } from "react";
import { colors } from "../ui";
import styled from "@emotion/styled";
import Collapse from '@material-ui/core/Collapse';
import { useMediaQuery } from 'react-responsive'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { fetchDeleteFavorite } from "../features/favorites/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../UI/Icon";
import bebida from "../assets/bebida.svg"

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(90deg)",
  },
}));

function FavoriteCard({ favorite, name , presentation, price, setURL}){
    const dispatch = useDispatch();
    const token = useSelector((state) => state.session.token);
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleRemoveItem = (id) => {
      console.log(id);
      dispatch(fetchDeleteFavorite({token, favoriteId: id}))
    }
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
    })

    return(
    <>
        {isDesktopOrLaptop && 
        <StyledDesktop>
            <div className="icon">
              <Icon className="heart" type="heart" size={30} />
            </div>
            <img src={setURL} />
            <div className="inf">
              <p className="name">{name}</p>
              <p className="presentation">{presentation}</p>
            </div>
            <p className="price">${price}</p>
            <div className="shop">
              <Icon className="cart" type="cart" size={30} />
            </div>
        </StyledDesktop>
        }

        {isTabletOrMobileDevice && 
          <StyledCard>
            <img src={favorite.drink.image_url} alt="coke" />
            <div>
              <Inf>
                <p className="drinkName">{favorite.drink.name}</p>
                <p>{favorite.drink.presentation}, Price</p>
                <Icon type="fillHeart" fill="#f8137f" size={20} onClick={() => handleRemoveItem(favorite.id)}/>
              </Inf>
      
              <StyledAction>
                <Price>${favorite.drink.price}</Price>
                <ActionIcon
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Icon type="forwardArrow" fill="black" size={18} />
                </ActionIcon>
              </StyledAction>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Heading>Product Detail</Heading>
                <p>
                Bigfoot is a beast of a beer, packed with bittersweet malt and heaps of aggressive whole-cone Pacific Northwest hops. First introduced in the winter of 1983, Bigfoot is a cult-classic brewed in the barleywine style—strong and robust with the refined intensity of a wine. Bigfoot is prized by beer collectors for aging in cellars. Under the proper conditions, it can develop enticing new flavors and character as it matures in the bottle. Each new release or “expedition” is vintage dated. Collect your own and savor the evolving flavors.
                </p>
              </CardContent>
            </Collapse>
          </StyledCard>
        }
        
    </>
    );
}
export default FavoriteCard;

//styles for desktop

const StyledDesktop = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 300px;
    height: 370px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    background-color: ${colors.white};
    border-radius:15px;
    & > .icon {
        margin-top:20px;
        margin-right:220px;
        & > .heart {
            border:2px solid #2FBFA1;
        }
    }
    & img {
        margin-top:-25px;
        width:230px;
        height:230px;
    }
    & > .inf {
      display: flex;
      width: 230px;
      flex-direction: column;
      text-align: initial;
      margin-left: -5px;
      & > .name {
        font-size: 20px;
        color: ${colors.black} ;
    }
      & > .presentation {
          color: ${colors.gray} ;
      }
    }

    & > .price {
        color: ${colors.light2} ;
        margin-top:20px;
        margin-right:150px;
        font-size: 20px;
    }
    & > .shop {
        margin-top:-24px;
        margin-left:150px;
        & > .cart {
        }
    }
`;

//styles for mobile
const StyledCard = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #e2e2e2;
  & img {
    width: 44px;
    height: 90px;
    margin: 5px;
  }
  & > div {
    width: 100%;
    display:flex;
    border-bottom:1px solid #E2E2E2;
    & img {
        width:44px;
        height:90px;
        margin:5px;
    }
  }
`;
const Inf = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
 .drinkName{
    font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  }
  & > svg{
    cursor: pointer;
  }
`;
const Heading = styled.p`
        font-family: ABeeZee;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        margin-top:-10px;
        margin-left:10px;
`;
const Presentation = styled.p`
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #7C7C7C;
        margin-left:15px;
        margin-top:2px;
`;
const Price = styled.p`
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #181725;
`;
const ActionIcon =styled.button`
        text-align:center;
        cursor: pointer;
        background-color:transparent;
        align-items:center;
        justify-content:center;
        text-align:center;
        height:35px;
        width:35px;
        border-radius:50px;
        border:none;
        outline:none;
        &:hover{
            background-color: #E2E2E2;
        }
`;
const CardContent = styled.div`
  font-size: 13px;
  line-height: 21px;
  color: #7c7c7c;
  text-align: justify;
`;
const StyledAction = styled.div`
  display: flex;
  gap: 1px;
align-items: flex-start;

`;
