import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "../UI/Icon";
import coke from "../assets/coke.png";
import { fetchDeleteFavorite } from "../features/favorites/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";

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

function FavoriteCard({ favorite }) {
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
  return (
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
  );
}
export default FavoriteCard;

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
    justify-content: space-between;
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
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
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

const ActionIcon = styled.button`
  text-align: center;
  cursor: pointer;
  background-color: transparent;

  height: 35px;
  width: 35px;
  border-radius: 50px;
  border: none;
  outline: none;
  &:hover {
    background-color: #e2e2e2;
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
