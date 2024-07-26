import React, {useState} from 'react';
import { HeroBlog, HeroContainer, InfoContainer, InfoWrapper, InfoRow, Column1,Column2,TextWrapper,
TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap,
VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,
ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import image from '../../images/healthcare-professionals.jpg';
import {Button} from '../ButtonElements';
const HeroSection = (lightBg) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <div>
        <HeroContainer lightBg={false} id='hero'>
            <InfoWrapper>
                <InfoRow imgStart={false}>
                    <Column1>
                        <TextWrapper>
                            <Heading lightText={false}>Elite Nursing and Allied Healthcare Workforce Solutions</Heading>
                            <Subtitle darkText={true}>
                              Zeni Healthcare Solutions delivers world-class staffing services globally, specializing in travel, temporary-to-hire, 
                              permanent, and contract placements. By providing top-tier nursing and allied healthcare professionals, Zeni ensures exceptional 
                              patient care and seamless healthcare operations. Our customized recruitment approach is precisely tailored to meet each client’s 
                              unique needs.
                            </Subtitle>
                            <Subtitle>Curating a Diverse Talent Pool: They meticulously source and vet highly qualified IT professionals
                            across various specialties, ensuring they match the specific needs of their clients.</Subtitle>
                            <Subtitle>Streamlined Recruitment: CoreBuild leverages efficient recruitment processes to identify
                            and connect the best candidates with the most suitable opportunities.</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={image} alt='hello'/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </HeroContainer>
    </div>
    );
};

export default HeroSection;
