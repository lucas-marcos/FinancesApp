import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Select } from "native-base";

export default function Actions({selectedMonth, onUpdateMonth, setTypeTransaction, typeTransaction }) {
    return (
        <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                <TouchableOpacity style={styles.actionButton}     onPress={() => {
                        if (typeTransaction == 1) {
                            setTypeTransaction(null);
                        }else{
                            setTypeTransaction(1);
                        }
                    }}>

                    <View style={styles.areaButton}>
                        <AntDesign name='addfolder' size={26} color="#000"></AntDesign>
                    </View>
                    <Text style={styles.labelButton}>Entradas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}     onPress={() => {
                        if (typeTransaction == 0) {
                            setTypeTransaction(null);
                        }
                        else{
                            setTypeTransaction(0);
                        }
                    }}>

                    <View style={styles.areaButton}>
                        <AntDesign name='tagso' size={26} color="#000"></AntDesign>
                    </View>
                    <Text style={styles.labelButton}>Compras</Text>
                </TouchableOpacity>

                <Select selectedValue={selectedMonth} minWidth="120" accessibilityLabel="Mês" placeholder="Selecione o mês" mt={4} onValueChange={itemValue => onUpdateMonth(itemValue)}>
                    <Select.Item label="Jan." value="1" />
                    <Select.Item label="Fev." value="2" />
                    <Select.Item label="Mar." value="3" />
                    <Select.Item label="Abr." value="3" />
                    <Select.Item label="Mai." value="5" />
                    <Select.Item label="Jun." value="6" />
                    <Select.Item label="Jul." value="7" />
                    <Select.Item label="Ago." value="8" />
                    <Select.Item label="Set." value="9" />
                    <Select.Item label="Out." value="10" />
                    <Select.Item label="Nov." value="11" />
                    <Select.Item label="Dez." value="12" />
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