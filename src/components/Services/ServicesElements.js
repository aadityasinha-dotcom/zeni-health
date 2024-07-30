import styled from 'styled-components';

export const ServicesContainer =styled.div`
    height: 800px;
    max-width: 21000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 2100px;
    margin: 0 auto;
    display: flex;
    grid-template-column: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;


export const ServicesCard = styled.div`
    background: #white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0px;
    height: 500px;
    width: 450px;
    cursor: pointer;
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        background-color: #00B9F1;
    }
`;

export const ServiceIcon = styled.img`
    height: 260px;
    width: 220px;
    padding-top: 20px;
    margin-bottom: 40px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2rem;
    color: black;
    padding-top: 110px;
    margin-left: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h1`
    font-size: 2rem;
    color: black;
    margin-bottom: 50px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesP = styled.div`
    font-size: 1rem;
    padding-top: 20px;
    color: black;
    margin-left: 20px;
`;
