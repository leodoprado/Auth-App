import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 40px;
        color: var(--text);
    }

    span {
        font-size: 20px;
        color: var(--caption);
    }

    button {
        margin-top: 20px;
        height: 40px;
        width: 550px;
        font-weight: 700;
        font-size: 16px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 18px;
            margin-left: 2px;
        }
    }
`