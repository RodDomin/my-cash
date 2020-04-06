import styled from 'styled-components/native';

import { ContainerProps } from './type'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${({ size }: ContainerProps) => size + 50}px;
  height: ${({ size }: ContainerProps) => size + 20}px;

  margin-top: 10px;
`;

