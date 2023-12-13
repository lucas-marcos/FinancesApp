import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
import ModalAddExpense from '../../modals/ModalAddExpense';
import { requestPost, requestGetAllByMonthNumber, getAllByMonthNumberAndTransactionType, deleteRequest } from '../../services/api';

export default function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [list, setList] = useState([]);
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [typeTransaction, setTypeTransaction] = useState(null);

  function returnCurrency(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  async function listAll() {
    let data;
    if(typeTransaction != null){
       data = await getAllByMonthNumberAndTransactionType(selectedMonth, typeTransaction);
    }
    else{
      data = await requestGetAllByMonthNumber(selectedMonth);
    }

    const expenseValue = data
      .filter(x => x.transactionType === 0)
      .reduce((soma, elemento) => soma + elemento.value, 0);

    const incomeValue = data
      .filter(x => x.transactionType === 1)
      .reduce((soma, elemento) => soma + elemento.value, 0);

    setExpense(returnCurrency(expenseValue));
    setIncome(returnCurrency(incomeValue));
    setList(data);
  }

  async function deleteItem(data){
    await deleteRequest(data);

    listAll();
  }

  async function updateSelectecMonth(numberMonth) {
    await setSelectedMonth(String(numberMonth));
  }

  useEffect(() => {
    let numberMonth = new Date().getMonth() + 1;

    updateSelectecMonth(String(numberMonth));
  }, []);

  useEffect(() => {
    listAll();
  },[selectedMonth, typeTransaction]) 

  return (
    <View style={styles.container}>
      <Header name="Lucas Marcos"></Header>

      <Balance income={income} expense={expense}></Balance>

      <Actions selectedMonth={selectedMonth} onUpdateMonth={updateSelectecMonth} typeTransaction={typeTransaction} setTypeTransaction={setTypeTransaction} />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} deleteRequest={deleteItem} />}
      ></FlatList>

      <ModalAddExpense isOpen={modalVisible} listAll={listAll} requestPost={requestPost} onClose={() => setModalVisible(false)} />

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
