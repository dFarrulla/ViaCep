import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export const Panagrama = () => {
  const [inputJson, setInputJson] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');

  const handleParseJson = () => {
    try {
      const jsonData = JSON.parse(inputJson);

      // Verifique se os campos existem no JSON antes de definir os estados
      if (jsonData.cep && jsonData.logradouro && jsonData.bairro) {
        setCep(jsonData.cep);
        setLogradouro(jsonData.logradouro);
        setBairro(jsonData.bairro);
      } else {
        alert('JSON não contém todos os campos necessários.');
      }
    } catch (error) {
      alert('Erro ao analisar o JSON.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Insira o JSON:</Text>
      <TextInput
        multiline
        placeholder="Insira o JSON aqui"
        onChangeText={setInputJson}
        value={inputJson}
        style={styles.input}
      />
      <Button title="Analisar JSON" onPress={handleParseJson} />
      <View style={styles.resultContainer}>
        <Text>CEP: {cep}</Text>
        <Text>Logradouro: {logradouro}</Text>
        <Text>Bairro: {bairro}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    padding: 8,
  },
  resultContainer: {
    marginTop: 16,
  },
});
