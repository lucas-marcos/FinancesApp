import React, { useState } from 'react';
import { Modal, FormControl, Input, Button, Switch } from 'native-base';

export default function ModalAddExpense({ isOpen, onClose, requestPost, listAll }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [ehEntrada, setEhEntrada] = useState(false);

  const handlePress = async () => {
    try {
      const response = await requestPost({ name: descricao, value: valor.replace(',', '.'), description: '', transactionType: ehEntrada ? 1 : 0 });

      console.log('Dados adicionados com sucesso:', response);

      setDescricao('');
      setValor('');

      if (response.id > 0) {
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
              onChangeText={(text) => setValor(text)}
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Entrada</FormControl.Label>
            <Switch
              size="sm"
              value={ehEntrada}
              onToggle={() => setEhEntrada(!ehEntrada)}
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
