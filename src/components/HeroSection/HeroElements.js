import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightbg}) => (lightbg ? '#f9f9f9' : '#00B9F1')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 2100px;
    position: relative;
    top: 0;
    right: 20px;
    bottom: 0;
    left: -114px;

    margin-right: auto;
    margin-left: auto;
    padding: 124px 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    max-width: 1000px;
    padding-bottom: 20px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.div`
    color: #01bf71;
    font-size: 16px;
    line-heigth: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.div`
    max-width: 640px;
    margin-bottom: 75px;
    font-size: 15px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 455px;
    height: 100%;
`;

export const Img = styled.img`
    width: 160%;
    margin: 0 0 400px 60px;
    padding-right: 0; 
`;
export const HeroContainer = styled.div`
    color: #fff;
    background: ${({lightbg}) => (lightbg ? '#f9f9f9' : 'white')};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1025px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%), 
        rgba(0.0.0.0.6) 100%, linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%),
        z-index: 2;
    }
`;

export const HeroBlog = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width = 100%;
    height: 100%;
    filter: blur(2px);
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1012px;
    position: absolute;
    top: 250px;
    right: 0;
    bottom: 0;
    left: 440px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.div`
    color: black;
    font-size: 40px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.div`
    margin-top: 40px;
    color: black;
    font-size: 20px;
    text-align: center;
    max-width: 8000px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
