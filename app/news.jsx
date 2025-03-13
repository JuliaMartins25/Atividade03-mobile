import { View, Text, Image , StyleSheet } from "react-native";

export default function News() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Última Notícia</Text>
            <Image
          source={require('./src/assets/imagem.jpg')}
          style={styles.imagem} />

<View style={styles.containerPai}>
            <Text style={styles.texto}>Inovações em Energia Renovável

                Recentemente, pesquisadores da Universidade de Tecnologia desenvolveram um novo painel solar que é 30% mais eficiente do que os modelos anteriores. Essa inovação promete tornar a energia solar uma opção ainda mais viável para residências e empresas.

                Além disso, novas turbinas eólicas estão sendo instaladas em regiões com ventos mais fracos, ampliando as áreas que podem se beneficiar da energia eólica. Com o aumento da conscientização sobre as mudanças climáticas, essas inovações são passos importantes rumo a um futuro mais sustentável.</Text>
        </View>
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

    containerPai:{
        margin: 40,
        height: '30%',
        width: '80%',
        textAlign: 'justify',
    },

    titulo: {
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 50,
    },

    text0: {
        fontSize: 22,
        color: '#333',
    },

    imagem: {
        width: 300,
    },
});



