import React, { useState, useRef, useCallback } from 'react';

import {
  Container,
  ModalCont,
  ModalBox,
  Title,
  SaveButton,
  SaveButtonContainer,
  SaveButtonTitle,
  Text,
} from './styles';

interface MyProps {
  title: string;
  content: string;
}

export default function Alert() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const show = useCallback(({ title, content }: MyProps) => {
    setTitle(title)
    setContent(content)
  }, [visible]);

    return (
      <Container visible={visible}>
        <ModalCont>
          <ModalBox>
            <Title>{title}</Title>
            <Text>{content}</Text>
            <SaveButtonContainer>
              <SaveButton onPress={() => setVisible(false)}>
                <SaveButtonTitle>RETORNAR</SaveButtonTitle>
              </SaveButton>
            </SaveButtonContainer>
          </ModalBox>
        </ModalCont>
      </Container>
    );
}
