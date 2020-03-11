import { Dimensions, FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.Modal.attrs({
  transparent: true,
  animated: true,
  animationType: 'fade',
})`
  flex: 1;
  position: absolute;

  background-color: black;
`;

export const ModalCont = styled.View`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  background-color: rgba(0, 0, 0, 0.5);

  justify-content: center;
`;

export const ModalBox = styled.View`
  width: ${Dimensions.get('window').width * 0.9};
  background-color: white;

  margin: 15px auto 0px;

  border-radius: 25px;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;

  text-align: center;
  margin: 15px 0px;
`;

export const SubList = styled(FlatList).attrs({
  scrollEnabled: true,
})`
  /* border-color: red;
  border-width: 4px; */

  background-color: rgb(240, 240, 240);
`;

export const SaveButtonContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin: 15px 0px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: rgb(250, 203, 80);

  align-items: center;
  border-radius: 15px;

  padding: 15px 25px;
`;

export const SaveButtonTitle = styled.Text`
  color: white;
  text-align: center;

  font-size: 18px;
`;

export const ItemBox = styled.View`
  margin: 10px 15px 0px 25px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding-bottom: 10px;

  border-bottom-width: 1px;
  border-color: rgb(220, 220, 220);
`;

export const ItemTitle = styled.Text`
  font-size: 18px;

  width: 100px;
`;

export const ItemText = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 4,
  autoCorrect: true,
  textAlignVertical: 'top',
})`
  border-width: 1px;
  border-color: rgb(250, 203, 80);

  height: 50px;
  width: 200px;

  font-size: 18px;

  background-color: #fff;
`;

export const Button = styled.Text`
  font-size: 28px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
`;

export const Text = styled.Text`
  margin: 10px 20px;
  font-size: 16px;
`;
