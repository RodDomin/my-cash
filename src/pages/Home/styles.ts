import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;

  background-color: black;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  style: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  }
})`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #051100;
  width: 75px;
  height: 75px;
  border-radius: 37.5px;
  justify-content: center;
  align-items: center;
`;
