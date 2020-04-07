import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`;

export const TitleContainer = styled.h1`
  margin: 0 auto;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  width: fit-content;
  
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;