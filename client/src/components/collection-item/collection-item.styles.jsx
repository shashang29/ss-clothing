import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  background-color: black;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media  (max-width: 800px) {
    width: 45vw;
  }
  @media  (max-width: 500px) {
    width: 40vw;
    margin: 5px;
    height: 300px;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 50%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  padding: 10px;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
  }
  @media screen and (max-width: 500px) {
    display: block;
    opacity: 0.9;
    top: 200px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  background-color:black;
  color: white;
  padding: 10px 10px 0px 10px;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 500px) {
    font-size:12px;
    }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;