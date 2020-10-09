import styled from 'styled-components';

interface StyledButtonProps {
  type: "submit" ;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 0.5px solid #dcdcdc;
  background: #7159c1;
  color: #FFF;
  font-size: 2rem;
  padding: .5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  margin-left: 1rem;

  &:hover {
    background: #fdfdfd;
    cursor: pointer;
    color: #666;
    outline: none;
  }
`;


