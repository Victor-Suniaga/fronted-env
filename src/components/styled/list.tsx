import styled from 'styled-components';

export const ListContainer = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const TempContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
    max-height: 160px;
    justify-content: center;
`
export const Temperature = styled.h1`
    max-width: 80px;
    font-size: 80px;
    flex: 1;
    max-height: 80px;
    margin: 0px
`


export const ListElement = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
`


export const Icon = styled.i`
    font-size: 30px;
    flex: 1;
    max-width: 50px;
    padding-top: 10px;
`;

export const ListText = styled.p`
    font-size: 20px;
    flex: 1;
    max-width: 120px;
`;

export const TempIcon = styled(Icon)`
    padding-top: 30px;
`