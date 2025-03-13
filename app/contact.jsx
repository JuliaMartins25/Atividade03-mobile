import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Entre em contato conosco</Text>

            <View style={styles.containerPai}>

                <View style={styles.containerNum}>
                    <Text style={styles.numero}> Ligue para </Text> <Text style={styles.numeroCor}> +55 (19) 99700-7070 </Text>

                </View>

                <View style={styles.containerE}>

                    <Text style={styles.textE}>E-mail: </Text> <Text style={styles.emailCor}> nossoapp@gmail.com </Text>

                </View>
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
        gap: 50,
    },

    containerPai: {
        margin: 0,
        backgroundColor: '#333',
        height: 100,
        width: 500,
    },

    containerNum: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        margin: 0,
    },

    textE: {
        fontSize: 24,
        color: '#333',
        cursor: 'pointer',
        margin: 0,
    },

    titulo: {
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold',
    },

    numero: {
        fontSize: 24,
    },

    numeroCor: {
        fontSize: 25,
        color: 'blue',
        cursor: 'pointer',
    },

    emailCor: {
        fontSize: 25,
        color: 'blue',
        cursor: 'pointer',
    },

    containerE: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        margin: 0,
    }
});
