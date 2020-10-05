import * as React from 'react';
import {Container, HeaderPrimary} from './Heading.style';

interface HeadingProps {
  children:React.ReactNode;
}

const Heading = (props:HeadingProps) => {
  return(
    <Container>
      <HeaderPrimary>{props.children}</HeaderPrimary>
    </Container>
  )
}

export {Heading}