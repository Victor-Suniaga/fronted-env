import styled from 'styled-components';

export const SearchInput = styled.input`
    width: 100%;
    font-size: 1em;
    border-radius: 5px;
    text-align: center;
    height: 40px;
    border: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    :focus {
        outline: none;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const SearchButton = styled.button `
    position: absolute;
    right: 50px;
    height: 42px;
    width: 44px;
    z-index: 10;
    border: none;
    background-color: white;
    cursor: pointer;
    :focus {
        outline: none;
    }
`