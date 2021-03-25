import styled from '@emotion/styled';
import { colors } from "../ui";

function CardCategory({ drinkUrl, name}) {
    return(
        <StyledCategory>
            <StyledCard>
              <img drinkUrl={drinkUrl} />
              <p>{name}</p>
            </StyledCard>
        </StyledCategory>
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