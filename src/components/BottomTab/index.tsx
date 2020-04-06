import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Container } from './styles';
import { MyProps } from './type';

export default function BottomTab(props: MyProps) {
  const { name, iconName, size, focused, color } = props

  const wh = useMemo(() => size + 20, [size]);
  
  return (
    <Container size={size}>
      <Animated.View style={[{
        width: wh,
        height: wh,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
      }, {
        backgroundColor: 'transparent',
      }]}>
        <Icon size={size} color={color} name={iconName} />
      </Animated.View>
        {/* <Text style={{ color: 'white' }}>{name}</Text> */}
    </Container>
  );
}
