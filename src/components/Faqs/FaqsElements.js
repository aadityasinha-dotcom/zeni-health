import styled from 'styled-components';

export const FaqsDiv = styled.div`
    height: 2500px;
    max-width: 2100px;
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

export const FaqsWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: auto;
    max-width: 1500px;
    position: relative;
    top: 0;
    right: 20px;
    bottom: 0;
    left: -114px;

    margin-right: 100px;
    margin-left: 450px;
    padding-bottom: 10px;
    justify-content: flex;
`

export const FaqsH1 = styled.h1`
    font-size: 2rem;
    color: black;
    text-align: center;
    padding-top: 20px;
    margin-left: 100px;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const FaqsH2 = styled.div`
    max-width: 1340px;
    margin-left: 250px;
    margin-bottom: 75px;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: '#010606';
`;
