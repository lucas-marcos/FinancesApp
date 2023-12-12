import React, { useState, useEffect  } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
import ModalAddExpense from '../../modals/ModalAddExpense';
import axios from 'axios';


export default function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://efd0-2804-37c4-82c3-cd44-70f4-e7aa-6f8b-c644.ngrok-free.app/api/finances');

        setList(response.data); 
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header name="Lucas Marcos"></Header>

      <Balance saldo="9.250,90" gastos="-527,00"></Balance>

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      ></FlatList>

      <ModalAddExpense isOpen={modalVisible} onClose={() => setModalVisible(false)} />

      <TouchableOpacity style={styles.actionButton}>
        <View>
          <AntDesign name='plus' size={50} color="#FFF" onPress={() => setModalVisible(!modalVisible)}></AntDesign>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FaFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  actionButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'green',
    borderRadius: 500,
    padding: 5,
    marginBottom: 30
  }
});
