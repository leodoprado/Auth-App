import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #00B37E;
        --background: #2c2c2c;
        --text: #FFF;
        --caption: #e4e4e4;
        --gray: #E1E1E6;
        --background-light: rgba(255, 255, 255, 0.05);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        color: var(--text);

        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    button {
        font-family: 'Ubuntu', sans-serif;
        font-size: 14px;
        cursor: pointer;
    }
`