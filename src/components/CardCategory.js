import styled from '@emotion/styled';
import { colors } from "../ui";

function CardCategory({children}) {
    return(
        <StyledCategory>
            <StyledCard>
              {children}
            </StyledCard>
        </StyledCategory>
    );
}

export default CardCategory;

const StyledCategory = styled.div`
      display:grid;
      grid-template-columns: repeat(2, 150px);
      grid-gap:15px;
`;

const StyledCard = styled.div`
      width:150px;
      height:150px;
      border-radius:10px;
      background-color:red;
`;