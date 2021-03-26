import styled from '@emotion/styled';
import { colors } from "../ui";
import Icon from "../UI/Icon"

function Search(){
    return(
        <SearchBar>
        <Icon type="search" fill="black" size={18} />
        <StyledInput
            placeholder="Search store"
            type="search"
        />
        </SearchBar>
    );
}

export default Search;

const SearchBar = styled.div`
& > svg {
    position: absolute;
top: 107px;
left: 52px;
}
`

const StyledInput = styled.input`
    width: 100%;
    height: 29px;
    border:none;
    border-radius: 7px;
    background-color: ${colors.gray2};
    padding: 18px 18px 18px 37px;
    outline:none;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #7C7C7C;
`;