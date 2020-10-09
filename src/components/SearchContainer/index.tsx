import React from 'react';

import { SearchContainer } from './styles';

interface SearchContainerProps {
}

const Container: React.FC<SearchContainerProps> = ({
  children,
}) => (
  <SearchContainer >
    {children}
  </SearchContainer>
  );
export default SearchContainer;