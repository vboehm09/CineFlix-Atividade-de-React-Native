import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CardFilme({ filme }) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert("Filme", `Você clicou em ${filme.titulo}`)}
        >
            <Image source={{ uri: filme.capa }} style={styles.capa} />
            <View style={styles.info}>
                <Text style={styles.titulo}>{filme.titulo}</Text>
                <Text style={styles.ano}>{filme.ano}</Text>
                <Text style={styles.genero}>{filme.genero}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1F1F1F',
        flexDirection: 'row',
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    capa: {
        width: 100,
        height: 150,
        resizeMode: 'cover'
    },
    info: {
        padding: 16
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    },
    ano: {
        fontSize: 14,
        color: '#CCC'
    },
    genero: {
        fontSize: 12,
        color: '#AAA'
    }
});