import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CardFilme({ filme }) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert('Filme', `Você clicou em ${filme.titulo}`)}>
            <Image
                source={{ uri: filme.capa }}
                style={{ width: 100, height: 150 }}
                resizeMode='cover'
            />
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
        flex: 1,
        backgroundColor: '#1F1F1F',
        flexDirection: 'column',
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        elevation: 3,
    },
    foto: {
        width: '100%',
        height: 150,
    },
    info: {
        padding: 8,
        alignItems: 'center',
    },
    titulo: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    ano: {
        color: '#AAA',
        fontSize: 10,
        textAlign: 'center',
    },
    genero: {
        color: '#AAA',
        fontSize: 10,
        textAlign: 'center',
    },
});
