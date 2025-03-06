import { View, Text } from "react-native";

export default function News() {
    return (
        <View styles = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Últimas Notícias</Text>
            <Text>Inovações em Energia Renovável

Recentemente, pesquisadores da Universidade de Tecnologia desenvolveram um novo painel solar que é 30% mais eficiente do que os modelos anteriores. Essa inovação promete tornar a energia solar uma opção ainda mais viável para residências e empresas.

Além disso, novas turbinas eólicas estão sendo instaladas em regiões com ventos mais fracos, ampliando as áreas que podem se beneficiar da energia eólica. Com o aumento da conscientização sobre as mudanças climáticas, essas inovações são passos importantes rumo a um futuro mais sustentável.</Text>
        </View>
    );
}

