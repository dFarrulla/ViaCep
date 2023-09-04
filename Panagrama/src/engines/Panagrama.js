import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

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
    <View>
      <Text>Insira o JSON:</Text>
      <TextInput
        multiline
        placeholder="Insira o JSON aqui"
        onChangeText={setInputJson}
        value={inputJson}
      />
      <Button title="Analisar JSON" onPress={handleParseJson} />
      <Text>CEP: {cep}</Text>
      <Text>Logradouro: {logradouro}</Text>
      <Text>Bairro: {bairro}</Text>
    </View>
  );
};
