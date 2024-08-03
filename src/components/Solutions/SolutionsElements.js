import styled from 'styled-components';

export const SolutionsDiv = styled.div`
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

export const SolutionsContainer = styled.div`
    height: 800px;
    max-width: 21000px;
    display: flex;
    padding: 0px;
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

export const SolutionsWrapper = styled.div`
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
    justify-content: center;
`

export const SolutionsRow = styled.div`
    display: flex;
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
    max-width: 1740px;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
`;

export const SolutionsH1 = styled.h1`
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

export const SolutionsH2 = styled.div`
    max-width: 1340px;
    margin-left: 250px;
    margin-bottom: 75px;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: '#010606';
`;
