import React from "react";
import { Button, Modal, VStack, HStack, Text, Radio, Center, NativeBaseProvider } from "native-base";

function returnCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

export default function ModalDeleteFinance({ showModal, setShowModal, data, deleteRequest }) {
    return (
        <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350">
                    <Modal.CloseButton />
                    <Modal.Header>Você deseja deletar o item</Modal.Header>
                    <Modal.Body>
                        <VStack space={3}>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">Nome</Text>
                                <Text color="blueGray.400">{data.name}</Text>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">Valor</Text>
                                <Text color="blueGray.400">{returnCurrency(data.value)}</Text>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">Adicionado dia</Text>
                                <Text color="blueGray.400">{new Date(data.date).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                })}</Text>
                            </HStack>
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button flex="1" backgroundColor="danger.600" onPress={() => {
                            deleteRequest(data.id)

                            setShowModal(false);
                        }}>
                            Excluir
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>

        </Center>
    );
}