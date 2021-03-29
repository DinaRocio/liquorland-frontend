import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { colors } from "../ui";
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

    return(
      <>
        {isDesktopOrLaptop &&
        <div>
          <Heading>Categories</Heading>
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
            <StyledCard>
              <img drinkUrl={drinkUrl} />
              <p>{name}</p>
            </StyledCard>
          </StyledCategory>
        }
      </>
    );
}

export default CardCategory;

const StyledCategory = styled.div`
      display:grid;
      grid-template-columns: repeat(2, 140px);
      grid-gap:15px;
      margin-top:10px;
`;

const StyledCard = styled.div`
    width:140px;
    height:140px;
    border-radius:10px;
    background-color:${colors.light2};
    & img {
        margin-left:19px;
        margin-top:19px;
    }
    & p {
      font-family: ABeeZee;
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-transform:capitalize;
      text-align:center;
    }
`;

const SContainer = styled.div`
    display:flex;
    justify-content:center;
`;

const Heading = styled.p`
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