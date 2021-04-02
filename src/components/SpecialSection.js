import styled from "@emotion/styled";
import { colors } from "../ui";
import Icon from "../UI/Icon";

export default function SpecialSection() {
  return (
    <>
      <Headers>
        <p>Best Selling</p>
        <a href="#">See all</a>
      </Headers>
      <SpecialContent>
        <SpecialCard>
          <img
            src="https://www.duvel.com/files/contentBuilder/_660x750_crop_center-center_82_line/Duvel_Social_Rebranding_WebsiteStills_DuvelClassic_International_transparant_v3.png"
            alt="card_pic"
          />
          <Titles>
            <h5>Duvel</h5>
            <p>Botellas de 33cl</p>
          </Titles>
          <Actions>
            <p>$13.25</p>
            <button>
              <Icon type="add" fill="white" size={25} />
            </button>
          </Actions>
        </SpecialCard>
        <SpecialCard>
          <img
            src="https://www.duvel.com/files/contentBuilder/_660x750_crop_center-center_82_line/Duvel_Social_Rebranding_WebsiteStills_DuvelClassic_International_transparant_v3.png"
            alt="card_pic"
          />
          <Titles>
            <h5>Duvel</h5>
            <p>Botellas de 33cl</p>
          </Titles>
          <Actions>
            <p>$13.25</p>
            <button>
              <Icon type="add" fill="white" size={25} />
            </button>
          </Actions>
        </SpecialCard>
        <SpecialCard>
          <img
            src="https://www.duvel.com/files/contentBuilder/_660x750_crop_center-center_82_line/Duvel_Social_Rebranding_WebsiteStills_DuvelClassic_International_transparant_v3.png"
            alt="card_pic"
          />
          <Titles>
            <h5>Duvel</h5>
            <p>Botellas de 33cl</p>
          </Titles>
          <Actions>
            <p>$13.25</p>
            <button>
              <Icon type="add" fill="white" size={25} />
            </button>
          </Actions>
        </SpecialCard>
      </SpecialContent>
    </>
  );
}

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Abel;
  font-size: 24px;
  line-height: 31px;
  color: ${colors.dark0};
  margin-bottom:18px;
  & > a {
    font-family: Abel;
    font-size: 16px;
    line-height: 20px;
    color: #53b175;
  }
`;
const SpecialContent = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    margin-bottom:30px;
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
  }
`;
