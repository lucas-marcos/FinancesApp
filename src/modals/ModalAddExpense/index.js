import React, { useState } from 'react';
import { Modal, FormControl, Input, Button } from 'native-base'; 

export default function ModalAddExpense({ isOpen, onClose, requestPost, listAll }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);

  const handlePress = async () => {
    try {
      const response = await requestPost({ name: descricao, value: valor, description: '', transactionType: 0 });

      console.log('Dados adicionados com sucesso:', response);

      setDescricao('');
      setValor('');

      if(response.id > 0){
        onClose();
      }
      listAll();
    } catch (error) {
      console.error('Erro ao adicionar os dados:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} avoidKeyboard={true} justifyContent="center" bottom="12" size="full">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body>
          <FormControl mt="3">
            <FormControl.Label>Descrição</FormControl.Label>
            <Input
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Valor</FormControl.Label>
            <Input
              value={valor}
              keyboardType="numeric"
              onChangeText={(text) => setValor(parseInt(text))}
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button flex="1" onPress={() => handlePress()} backgroundColor="#8000ff">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
