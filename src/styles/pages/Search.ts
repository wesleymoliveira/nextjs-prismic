import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }
  }
`;

export const ProductPrice = styled.text`
  align-self: center;
  color: #7159c1;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0 5px;
`;

export const ProductTitle = styled.text`
  align-self: center;
  color: #7159c1;
  font-size: 21px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

