import React from 'react';
import {Button} from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1,Column2,TextWrapper,
TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap
} from './infoElements';
import image from '../../images/pic1.jpg';

const InfoSection = (id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary, 
    darkText) => {

  console.log(description);
  return (
    <>
        <InfoContainer lightBg={false} id='about'>
            <InfoWrapper>
                <InfoRow imgStart={false}>
                    <Column1>
                        <TextWrapper>
                            {/* <TopLine>hello everyone</TopLine> */}
                            <Heading lightText={true}>About CoreBuild Technologies</Heading>
                            <Subtitle darkText={false}>CoreBuild Technologies is a rising IT staffing and solutions company headquartered in New Jersey.
                              CoreBuild aims to become a leading force in connecting top IT talent
                              with innovative companies across the state.
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
        </InfoContainer>
    </>
  );
};

export default InfoSection;
