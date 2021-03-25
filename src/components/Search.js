import styled from '@emotion/styled';
import { colors } from "../ui";
import Icon from "../UI/Icon"

function Search(){
    return(
        <StyledInput
            placeholder="Search store"
            type="search"
        />
    );
}

export default Search;

const StyledInput = styled.input`
    width: 270px;
    height: 29px;
    border:none;
    border-radius: 7px;
    background-color: ${colors.gray2};
    padding:8px 18px;
    outline:none;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #7C7C7C;
`;