import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
 font-family: 'Special Elite', cursive;
  padding: 20px;
  background:
linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
linear-gradient(45deg, #ECEDDC 25%, transparent 25%);
background-size: 100px 100px;
background-color: rgba(16, 194, 132, 0.926);

@media screen and (max-width: 600px){
    padding: 10px;
}

}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}


`