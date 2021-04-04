import { useState } from 'react';
import { colors } from "../ui";
import styled from "@emotion/styled";
import Collapse from '@material-ui/core/Collapse';
import { useMediaQuery } from 'react-responsive'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Icon from "../UI/Icon";
import bebida from "../assets/bebida.svg"

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(90deg)',
      },
}));

function FavoriteCard({ drinkUrl , name, presentation, price}){
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
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
            <div className="icon">
              <Icon className="heart" type="heart" size={30} />
            </div>
            <img src={bebida} />
            <p className="name">name</p>
            <p className="presentation">presentation</p>
            <p className="price">price</p>
        </StyledDesktop>
        }

        {isTabletOrMobileDevice && 
        <StyledCard>
            <img  src={bebida} alt="coke"/>
            <Inf>
                <Heading>Sprite Can</Heading>
                <Presentation>325ml, Price</Presentation>
            </Inf>
            <StyledAction>
                <Price>$1.50</Price>
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
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Heading>Product Detail</Heading>
                <p>Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.</p>
            </CardContent>
            </Collapse>
        </StyledCard>
        }
        
    </>
    );
}
export default FavoriteCard;

//styles for desktop

const StyledDesktop = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 300px;
    height: 370px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    background-color: ${colors.gray2};
    border-radius:15px;
    text-align:justify;
    & > .icon {
        margin-top:20px;
        margin-right:220px;
        & > .heart {
            border:2px solid #2FBFA1;
        }
    }
    & img {
        margin-top:-25px;
        width:230px;
        height:230px;
    }
    & > .name {
        font-size: 24px;
        color: ${colors.black} ;
        margin-right:180px;
    }
    & > .presentation {
        color: ${colors.gray} ;
        margin-right:150px;
    }
`;

//styles for mobile
const StyledCard = styled.div`
    display:flex;
    border-bottom:1px solid #E2E2E2;
    & img {
        width:44px;
        height:90px;
        margin:5px;
    }
`;
const Inf = styled.div`
   margin-left:20px;
   margin-top:10px;
`;
const Heading = styled.p`
        font-family: ABeeZee;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        margin-top:-10px;
        margin-left:10px;
`;
const Presentation = styled.p`
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #7C7C7C;
        margin-left:15px;
        margin-top:2px;
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
        margin-right:-7px;
        margin-top:-59px;
`;
const ActionIcon =styled.button`
        text-align:center;
        cursor: pointer;
        background-color:transparent;
        align-items:center;
        justify-content:center;
        text-align:center;
        height:35px;
        width:35px;
        border-radius:50px;
        border:none;
        outline:none;
        &:hover{
            background-color: #E2E2E2;
        }
`;
const CardContent = styled.div`
        margin-top:128px;
        margin-left:-295px;
        width:220px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 21px;
        color: #7C7C7C;

`;
const StyledAction = styled.div`
        margin-top:30px;
        margin-left:90px;
        display:flex;
        align-items:baseline;
        gap:10px;
`;