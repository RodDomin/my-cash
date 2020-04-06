import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text, TouchableOpacity, View, StatusBar } from 'react-native';

import Card from '../../components/Card'
import { Container, AddButton } from './styles';

export default function Home() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Text style={{ color: 'white' }}>Home</Text>
      <Text style={{ fontSize: 24, color: 'white' }}>Teste</Text>
      <View>
        <Card title="Valores" />
      </View>
      <AddButton>
          <Icon name="plus" color="black" size={25} />
        </AddButton>
    </Container>
  );
}
