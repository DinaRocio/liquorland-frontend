import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { colors } from "../ui";
import Icon from "../UI/Icon";
import search from "../assets/search.svg";
import heading from "../assets/heading.svg";

function Search(){
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
           <Heading>
               <img src={heading} />
            </Heading>
            <img src={search} />
            <StyledInputD
                placeholder="Find your drink"
                type="search"
            />
            <Button>Search</Button>
       </StyledDesktop>}

        {isTabletOrMobileDevice && 
        <SearchBar>
            <Icon type="search" fill="black" size={18} />
            <StyledInput
                placeholder="Search store"
                type="search"
            />
            </SearchBar>}
       </>
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

const StyledDesktop =styled.div`
    display:flex;
    position: relative;
    margin-top:10px;
    & img {
        width:100%;
        height:100%;
        border-radius:20px;
    }
`;

const Heading = styled.div`
    display:flex;
    position: absolute;
    margin-top:150px;
    margin-left:65px;
`;

const Button = styled.button`
    display:flex;
    position:absolute;
    margin-top:355px;
    margin-left:775px;
    width: 100px;
    height: 45px;
    border:none;
    outline:none;
    background: #5DD39E;
    border-radius: 17px;
    justify-content:center;
    align-items:center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 16px;
    color: #FFFFFF;
    cursor: pointer;
`;

const StyledInputD = styled.input`
    display:flex;
    position: absolute;
    margin-top:355px;
    margin-left:65px;
    width: 50%;
    height: 45px;
    border:none;
    border-radius: 7px;
    background-color: ${colors.gray2};
    padding: 18px 18px 18px 37px;
    outline:none;
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 18px;
    color: #7C7C7C;
`;