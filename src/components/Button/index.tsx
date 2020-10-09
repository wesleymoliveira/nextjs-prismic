import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  type: "submit" ;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
}) => (
  <StyledButton type={type}>
    {children}
  </StyledButton>
  );
export default Button;