import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled';
import { colors } from "../ui";
import dina  from "../assets/dina.svg"
import frank from "../assets/frank.svg"
import diana from "../assets/diana.svg"

export default function Footer(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
        })

    return(
        <>
            {isDesktopOrLaptop && 
                <div>
                    <div>
                      <img src={dina} />
                    </div>

                    <div>
                      <img src={frank} />
                    </div>

                    <div>
                      <img src={diana} />
                    </div>
                </div>
            }
        </>
    );
}