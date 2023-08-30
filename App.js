import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function App() {
  const [valorLitro, setValorLitro] = useState('');
  const [quantidadeAbas, setQuantidadeAbas] = useState('');
  const [kmRodado, setKmRodado] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Valor do Litro </Text>
      <View style={styles.viewInput}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Digite o valor"
            style={styles.input}
          />
        </View>
        <Text style={styles.titulo2}> Quantidade abestecida </Text>
      <View style={styles.viewInput}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Digite o valor"
            style={styles.input}
          />
        </View>
        <Text style={styles.titulo3}> Km rodado </Text>
      <View style={styles.viewInput}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Digite o valor"
            style={styles.input}
          />
        </View>
        <View style={styles.center}>
        <Pressable
            onPress={() => calcrArea(baseMaior, baseMenor, altura)}
            style={styles.botao}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Calcular
            </Text>
          </Pressable>
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
    width: 200,
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
  }

});
