import React from 'react';
import { Modal, Button, Input, FormControl } from 'native-base';

export default function ModalAddExpense({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} avoidKeyboard justifyContent="flex-end" bottom="4" size="full">
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Body>
                    <FormControl mt="3">
                        <FormControl.Label>Descrição</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Valor</FormControl.Label>
                        <Input />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button flex="1" onPress={onClose} backgroundColor="#8000ff">
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}