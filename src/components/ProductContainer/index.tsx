import React from 'react';

import { ProductContainer } from './styles';

interface ProductContainerProps {
}

const Container: React.FC<ProductContainerProps> = ({
  children,
}) => (
  <ProductContainer >
    {children}
  </ProductContainer>
  );
export default ProductContainer;