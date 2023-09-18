import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [valorLitro, setValorLitro] = useState('');
  const [quantidadeAbas, setQuantidadeAbas] = useState('');
  const [kmRodado, setKmRodado] = useState('');
  const [resultado, setResultado] = useState('');

  const calcrRs = (valorLitro, quantidadeAbas, kmRodado) => {
    let intvl = parseFloat(valorLitro);
    let intqa = parseFloat(quantidadeAbas);
    let intkr = parseFloat(kmRodado);
    setResultado(((intvl * intqa) / intkr).toFixed(2));
  };

  const limparDados = () => {
    setValorLitro('');
    setQuantidadeAbas('');
    setKmRodado('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Autonomia de Gasto de Combustível</Text>
      <Text style={styles.titulo}> Valor do Litro </Text>
      <View style={styles.viewInput}>
          <TextInput
            value={valorLitro}
            onChangeText={setValorLitro}
            keyboardType="number-pad"
            placeholder="Digite o valor"
            style={styles.input}
          />
        </View>
        <Text style={styles.titulo2}> Quantidade abestecida </Text>
      <View style={styles.viewInput}>
          <TextInput
            value={quantidadeAbas}
            onChangeText={setQuantidadeAbas}
            keyboardType="number-pad"
            placeholder="Digite o valor"
            style={styles.input}
          />
        </View>
        <Text style={styles.titulo3}> Km rodado </Text>
      <View style={styles.viewInput}>
          <TextInput
            value={kmRodado}
            onChangeText={setKmRodado}
            keyboardType="number-pad"
            placeholder="Digite o valor"
            style={styles.input}
          />
        </View>
        <View style={styles.center}>
        </View>
        <View style={styles.botoes}>
          <Pressable
              onPress={() => calcrRs(valorLitro, quantidadeAbas, kmRodado)}
              style={styles.botao}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                Calcular
              </Text>
            </Pressable>
          <Pressable onPress={limparDados} style={styles.botao}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                Limpar Conteúdo
              </Text>
            </Pressable>h
          </View>
          <View style={styles.center}>
          <View style={styles.botaoResultado}>
            <Text style={styles.textoBotao}>Resultado R$: </Text>
            <Text style={styles.textoBotao}>{resultado}</Text>
          </View>
        </View>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdd6d2',

  },
  texto:{
    textAlign: 'center'
  },
  viewInput: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#a5c8ca',
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#e3e5d7',
    borderRadius: 20,
    height: 50,
    width: 200,
    fontSize: 15,

  },
  titulo:{
    color: '#f6eddc',
    fontSize: 20,
  },
  titulo2:{
    color: '#f6eddc',
    fontSize: 20,
    paddingTop: 12
  },
  titulo3:{
    color: '#f6eddc',
    fontSize: 20,
    paddingTop: 12
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#a5c8ca',
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#e3e5d7',
    borderRadius: 20,
    height: 50,
    width: 150,
    fontSize: 15,
    color: '#f6eddc',
  },
  botaoResultado: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#a5c8ca',
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#e3e5d7',
    borderRadius: 20,
    height: 50,
    width: 200,
    fontSize: 15,
    color: '#f6eddc',
  },
  textoBotao:{
    fontSize: 20,
    color: 'white', 
  },
  botoes: {
    flexDirection: 'row',
  },

});
