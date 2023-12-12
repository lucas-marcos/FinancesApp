import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Select } from "native-base";
import { useState } from 'react';

export default function Actions() {
    const [mes, setMes] = useState("");

    function updateMes(mes) {
        setMes(mes);
    }

    return (
        <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                <TouchableOpacity style={styles.actionButton}>

                    <View style={styles.areaButton}>
                        <AntDesign name='addfolder' size={26} color="#000"></AntDesign>
                    </View>
                    <Text style={styles.labelButton}>Entradas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>

                    <View style={styles.areaButton}>
                        <AntDesign name='tagso' size={26} color="#000"></AntDesign>
                    </View>
                    <Text style={styles.labelButton}>Compras</Text>
                </TouchableOpacity>

                <Select selectedValue={mes} minWidth="120" accessibilityLabel="Mês" placeholder="Selecione o mês" mt={4} onValueChange={itemValue => updateMes(itemValue)}>
                    <Select.Item label="Jan." value="jan" />
                    <Select.Item label="Fev." value="fev" />
                    <Select.Item label="Mar." value="mar" />
                    <Select.Item label="Abr." value="abr" />
                    <Select.Item label="Mai." value="mai" />
                    <Select.Item label="Jun." value="jun" />
                    <Select.Item label="Jul." value="jul" />
                    <Select.Item label="Ago." value="ago" />
                    <Select.Item label="Set." value="set" />
                    <Select.Item label="Out." value="out" />
                    <Select.Item label="Nov." value="nov" />
                    <Select.Item label="Dez." value="dez" />
                </Select>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})