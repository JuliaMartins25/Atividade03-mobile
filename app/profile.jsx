import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
    return (
        
        <View style= {StyleSheet.container}> 
            <Text> Perfil do usuário </Text>
            <Text style={styles.text}>Nome: Ana Clara Mendes
Idade: 26 anos
E-mail: ana.mendes@email.com
Cidade: Rio de Janeiro, RJ
Sobre:  Sou uma apaixonada por design e tecnologia. Trabalho como designer de interfaces e adoro criar experiências visuais que encantam os usuários. Nos meus tempos livres, gosto de praticar yoga, ler livros de ficção e explorar novos cafés na cidade. Acredito que a criatividade é a chave para resolver problemas e estou sempre em busca de novas inspirações.</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    },
    
    text: {
    fontSize: 20, 
    color: '#333',
    },
});

