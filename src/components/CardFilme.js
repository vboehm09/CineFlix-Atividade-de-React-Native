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
        backgroundColor: '#1F1F1F',
        flexDirection: 'column', // Mudou para coluna
        flex: 1, // Ocupa o espaço da grade
        margin: 5, // Espaçamento entre os filmes
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
    },
    foto: {
        width: '100%', // Ocupa a largura da coluna
        height: 150, // Altura do pôster
    },
    info: {
        padding: 8,
        alignItems: 'center', // Centraliza o texto
    },
    titulo: {
        color: '#FFF',
        fontSize: 12, // Título menor para caber na grade
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ano: {
        color: '#AAA',
        fontSize: 10,
    },
    // Pode remover o estilo 'genero' se ficar muito apertado
});