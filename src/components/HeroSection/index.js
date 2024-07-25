import React, {useState} from 'react';
import { HeroBlog, HeroContainer, 
VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,
ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import Image from '../../images/goku.jpg';
import {Button} from '../ButtonElements';
const HeroSection = (lightBg) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <div>
        <HeroContainer lightBg={true} id='hero'>
            {/* <HeroBlog> */}
            {/*     <VideoBg src={Video} type='video2/mp4' /> */}
            {/* </HeroBlog> */}
            <HeroContent>
                <HeroH1>Elite Nursing and Allied Healthcare Workforce Solutions</HeroH1>
                <HeroP>
                  Zeni Healthcare Solutions delivers world-class staffing services globally, specializing in travel, temporary-to-hire, permanent, 
                  and contract placements. By providing top-tier nursing and allied healthcare professionals, Zeni ensures exceptional patient care and 
                  seamless healthcare operations. Our customized recruitment approach is precisely tailored to meet each client’s unique needs.
                </HeroP>
                {/* <HeroBtnWrapper> */}
                {/*     <Button to="footer" onMouseEnter={onHover}  */}
                {/*     smooth={true} duration={500} spy={true} exact={true} offset={-80} */}
                {/*     onMouseLeave={onHover} */}
                {/*     primary="true" */}
                {/*     dark="true"> */}
                {/*         Connect with us {hover ? <ArrowForward /> : <ArrowRight  */}
                {/*         />} */}
                {/*     </Button> */}
                {/* </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    </div>
    );
};

export default HeroSection;
