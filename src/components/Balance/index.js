import { View, Text, StyleSheet } from 'react-native';

export default function Balance({income, expense}) {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Entradas</Text>
                <View style={styles.content}>
                    <Text style={styles.balance}>{income}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saídas</Text>
                <View style={styles.content}>
                    <Text style={styles.expensive}>{expense}</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle: {
        fontSize: 20,
        color: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expensive: {
        fontSize: 22,
        color: '#e74c3c'
    }
})