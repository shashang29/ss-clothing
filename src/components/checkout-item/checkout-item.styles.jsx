import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 10px;
    font-size: 18px;
    align-items: center;
    @media (max-width: 750px) {
      width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
    display: flex;
      justify-content: center;
      width: 23%;
      padding: 15px;
      @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
