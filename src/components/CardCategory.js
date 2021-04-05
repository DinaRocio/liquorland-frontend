import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { colors } from "../ui";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";
import { Link } from "react-router-dom";
import wine from "../assets/wine.svg"
import beer from "../assets/beer.svg"
import milk from "../assets/milk.svg"


function CardCategory({ drinkUrl, name}) {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const statusIndex = useSelector((state) => state.categories.statusIndex);

  if (statusIndex === "idle") {
    dispatch(fetchCategories());
  }

    return(
      <>
        {isDesktopOrLaptop &&
        <div>
           <SContainer>
            <SCategory>
                  <CategoryCard>
                    <img src={wine} />
                    <div className="overlay">
                      <First>Wine category</First>
                    </div>
                  </CategoryCard>

                  <CategoryCard>
                    <img src={beer} />
                    <div className="overlay">
                    <Second>Beer category</Second>
                    </div>
                  </CategoryCard>

                  <CategoryCard>
                    <img src={milk} />
                    <div className="overlay">
                    <Third>No alcohol</Third>
                    </div>
                  </CategoryCard>
            </SCategory>
          </SContainer> 
        </div>
        }

        {isTabletOrMobileDevice && 
         <StyledCategory>
         {categories &&
           categories.map((category) => (
             <Link to={`/categories/${category.id}`} key={category.id}>
               <StyledCard color={category.color}>
                 <img src={category.cover_url} alt="category_pic" />
                 <p>{category.name}</p>
               </StyledCard>
             </Link>
           ))}
       </StyledCategory>
        }
      </>
    );
}

export default CardCategory;

const StyledCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 140px);
  grid-gap: 15px;
  margin-top: 10px;
`;

const StyledCard = styled.div(
  ({ color, cssProp }) => css`
    width: 140px;
    height: 140px;
    border-radius: 10px;
    background-color: #${color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
      border-radius: 50%;
      width: 90px;
      height: 90px;
    }
    & p {
      color: ${colors.dark0};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-transform: capitalize;
      text-align: center;
    }
    ${cssProp}
  `
);


const SContainer = styled.div`
    display:flex;
    justify-content:center;
`;

const StyledHeading= styled.div`
  margin:25px;
  width:100%;
  height:70px;
  color:white;
  background-color:${colors.light2};
`;

const Heading = styled.p`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:25px;
    margin-left:85px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 72px;
`;

const SCategory = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 150px);
    margin-top:15px;
    grid-gap:150px;
    font-family: ABeeZee;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: white; 
    text-shadow:
   -1px -1px 0 #534A4A,  
    1px -1px 0 #534A4A,
   -1px 1px 0 #534A4A,
    1px 1px 0 #534A4A;
`;

const CategoryCard = styled.div`
      display:flex;
      & img {
      display:flex;
      position:relative;
      width: 180px;
      border-radius:10px;
      }
      & > .overlay {
      position:absolute;
      width: 180px;
      height: 249px;
      border-radius:10px;
      opacity: 0;
      transition: .5s ease;
      background: rgba(196, 196, 196, 0.3);
      backdrop-filter: blur(10px);
      &:hover {
        opacity:1;
        cursor: pointer;
      }
    }
`;

const First = styled.p`
    display:flex;
    position: absolute;
    margin-top:120px;
    margin-left:20px;
`;

const Second = styled.p`
    display:flex;
    position: absolute;
    margin-top:120px;
    margin-left:25px;
`;
const Third = styled.p`
    display:flex;
    position: absolute;
    margin-top:120px;
    margin-left:37px;
`;
