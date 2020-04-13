import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 45%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    background-color:rgba(255, 255, 255, 0.83);
    padding: 10px;

    @media (max-width: 750px) {
        width: 80%;
    }
    button {
    margin-left: auto;
    margin-top: 10px;
    margin-bottom:10px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  display:flex;
  justify-content: center;
            @media (max-width: 600px) {
                font-size: 12px;
            }
  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-left: auto;
  font-size: 26px;
  margin-top: 10px;
  
`;

export const WarningContainer = styled.div`
   text-align: center;
   margin: 10px 0px;
   color: red;
    line-height: 30px;
`;
