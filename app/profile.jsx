import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>

                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>Perfil do Usuário</Text>
                </View>

            </View>
            <View style={styles.containerPaiTexto}>
                <Text style={styles.text}><Text style={styles.textTitulo}>Nome: </Text> Ana Clara Mendes</Text>
                <Text style={styles.text}><Text style={styles.textTitulo}>Idade: </Text> 26 anos</Text>
                <Text style={styles.text}><Text style={styles.textTitulo}>Profissão: </Text> Designer de Interfaces </Text>
                <Text style={styles.text}><Text style={styles.textTitulo}>E-mail: </Text> ana.mendes@email.com</Text>
                <Text style={styles.text}><Text style={styles.textTitulo}>Telefone: </Text>+55 (21) 99999-9999</Text>
                <Text style={styles.text}><Text style={styles.textTitulo}>Cidade: </Text> Rio de Janeiro, RJ</Text>
                <Text style={styles.text}><Text style={styles.textTitulo}>Sobre: </Text>  Sou uma apaixonada por design e tecnologia. Trabalho como designer de interfaces e adoro criar experiências visuais que encantam os usuários. Nos meus tempos livres, gosto de praticar yoga, ler livros de ficção e explorar novos cafés na cidade. Acredito que a criatividade é a chave para resolver problemas e estou sempre em busca de novas inspirações.</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f',
    },

    containerTitulo: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 0,
    },

    containerPaiTexto: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        height: '40%',
        width: '80%',
        textAlign: 'justify',
        gap: 20,
    },

    titulo: {
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 0,
    },

    text: {
        fontSize: 20,
        color: '#333',
    },

    textTitulo: {
        fontWeight: 'bold',
    },
});

