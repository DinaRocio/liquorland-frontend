import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Icon from "../UI/Icon";
import styled from "@emotion/styled";
import { colors } from "../ui";
import { fetchBestSelling } from "../features/categories/categoriesSlice";
import { useEffect } from "react";

export default function BestSelling() {
  let history = useHistory();
  const dispatch = useDispatch();
  const bestSelling = useSelector((state) => state.categories.bestSellingItems);
  const statusSpecialCategory = useSelector(
    (state) => state.categories.statusSpecialCategory
  );

  useEffect(() => {
    dispatch(fetchBestSelling());
  }, []);
  return (
    <TwoTemplate>
      {statusSpecialCategory === "succeeded" && (
        <>
          <Heading>
            <Icon
              type="backArrow"
              fill="black"
              size={20}
              onClick={() => history.goBack()}
            />
            {bestSelling.name}
            <Icon type="filter" fill="black" size={20} />
          </Heading>

          <Description>
            <p>{bestSelling.description}</p>
          </Description>
          <ProductsContainer>
            {statusSpecialCategory === "succeeded" &&
              bestSelling.drinks.map((drink) => (
                <SpecialCard>
                  <img
                    src="https://www.duvel.com/files/contentBuilder/_660x750_crop_center-center_82_line/Duvel_Social_Rebranding_WebsiteStills_DuvelClassic_International_transparant_v3.png"
                    alt="card_pic"
                  />
                  <Titles>
                    <h5>{drink.name}</h5>
                    <p>{drink.presentation}</p>
                  </Titles>
                  <Actions>
                    <p>${drink.price}</p>
                    <button>
                      <Icon type="add" fill="white" size={25} />
                    </button>
                  </Actions>
                </SpecialCard>
              ))}
          </ProductsContainer>
        </>
      )}
    </TwoTemplate>
  );
}

const TwoTemplate = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px;
`;
const Heading = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;
const Description = styled.div`
  border-top: 1px solid rgba(226, 226, 226, 0.7);
  border-bottom: 1px solid rgba(226, 226, 226, 0.7);
  margin-bottom: 30px;
  margin-top: 35px;
  & > p {
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    color: ${colors.gray};
    text-align: center;
  }
`;
const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  grid-gap: 15px;
`;
const SpecialCard = styled.div`
  width: 162px;
  height: 238px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  border-radius: 18px;
  padding: 14px;
  & > img {
    width: 100px;
  }
`;
const Titles = styled.div`
  & > h5 {
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: ${colors.dark0};
  }
  & > p {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #7c7c7c;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  & > p {
    font-family: Abel;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;

    color: #181725;
  }
  & > button {
    display: flex;
    background: ${colors.light2};
    border-radius: 17px;
    border: none;
    outline: none;
    padding: 2px;
  }`