import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title } from './styles';
import { ComponentProps } from './types';

const Card: React.FC<ComponentProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Card