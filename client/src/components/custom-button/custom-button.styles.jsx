import styled, { css } from 'styled-components';

const googleSignInStyles = css`
 background-color: #4285f4;
    color: white;
 
    &:hover {
      background-color: #357ae8;
      border: none;
    }
`

const invertedStyles = css`
   background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

const buttonStyles = css`
 background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles
    }
    return props.inverted ? invertedStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  width: auto;
  padding: 15px;
  letter-spacing: 0.5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Special Elite', cursive;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}

  @media (max-width: 800px){
padding: 10px 5px 10px 5px;
  }
`