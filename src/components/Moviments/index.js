import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDeleteFinance from '../../modals/ModalDeleteFinance';

export default function Moviments({ data, deleteRequest }) {
    const [showValue, setShowValue] = useState(true);
    const [showModal, setShowModal] = useState(false);

    function returnCurrency(value) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }


    return (
        <View>
            <ModalDeleteFinance data={data} showModal={showModal} setShowModal={setShowModal} deleteRequest={deleteRequest}></ModalDeleteFinance>

            <TouchableOpacity style={styles.container} onLongPress={() => setShowModal(true)} onPress={() => setShowValue(!showValue)}>
                <Text style={styles.date}>{data.date ? new Date(data.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                }) : ''}
                </Text>

                <View style={styles.content}>
                    <Text style={styles.label}>{data.name}</Text>

                    {showValue ? (
                        <Text style={data.transactionType === 1 ? styles.value : styles.expenses}>
                            {returnCurrency(data.value)}</Text>
                    ) : (
                        <View style={styles.skeleton}></View>
                    )}
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})