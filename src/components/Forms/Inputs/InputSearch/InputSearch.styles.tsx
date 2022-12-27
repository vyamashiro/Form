import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #dfe1e5;
    border-radius: 20px;
    height: 44px;
    margin: 0 auto;
    padding: 5px;
    text-indent: 10px;
    width: 400px;
    max-width: 584px;

    &:hover {
        background-color: #fff;
        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
        border-color: rgba(223,225,229,0);
    }

    &:focus {
        outline: 0 none;
        box-shadow: 0 0 0 3px rgb(255 255 255 / 50%), 0 0 0 3px #1ea7fd;
        border-color: #1ea7fd;
    }
`
