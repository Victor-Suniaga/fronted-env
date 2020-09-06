import styled from 'styled-components';

const Body = styled.div`
    position: absolute;
    z-index: -1;
    right: 0px;
    left: 0px;
    height: 100vh;
`;
export const BodyContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    background: transparent;
`;
export const BackgroundCold = styled(Body)`
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 1%, rgba(0,212,255,1) 70%);
`;

export const BackgroundWarm = styled(Body)`
    background: rgb(116,0,0);
    background: linear-gradient(0deg, rgba(116,0,0,1) 0%, rgba(185,14,14,1) 12%, rgba(255,250,0,1) 91%);
`;
