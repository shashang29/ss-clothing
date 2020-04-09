import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoComponent } from '../../assets/logo.svg';


export const HeaderContainer = styled.div`
 padding-right: 20px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: white;

  @media (max-width: 620px) {
    height: 50px;
  }
`
export const LogoContainer = styled(Link)`
height: 100px;
width: 70px;
padding: 20px;
`
export const Logo = styled(LogoComponent)`
 position: absolute;
    height: 85px;
    width: 120px;
    top: 10px;
    transition: all .2s ease-in-out;

    @media (max-width: 620px) {
     height: 60px;
    }
  &:hover{
    transform: scale(1.1);
  }
`

export const OptionsContainer = styled.div`
 width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
 padding: 10px 15px;
      cursor: pointer;
      white-space: nowrap;
      transition: all .2s ease-in-out;

      @media (max-width: 550px) {
        padding: 5px 5px;
        font-size: 14px;
      }
      &:hover{
        transform: scale(1.1);
      }
`