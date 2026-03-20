import { StyleSheet, View, FlatList, SafeAreaView, Text, StatusBar } from 'react-native';

import { DADOS_FILMES } from './src/data/filmes';
import CardFilme from './src/components/CardFilme';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.titulo}>CineFlix</Text>
        
            <FlatList
                data={DADOS_FILMES}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CardFilme filme={item} />}
                numColumns={3}
                contentContainerStyle={styles.lista}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: StatusBar.currentHeight || 0
    },
    topo: {
        backgroundColor: '#1F1F1F',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#E50914',
        textAlign: 'center',
        marginVertical: 16
    },
    lista: {
        paddingBottom: 16
    },
    foto: {
        width: 90,    // Defina uma largura
        height: 130,  // Defina uma altura
        borderRadius: 8,
        backgroundColor: '#333', // Dica: coloque um fundo cinza para teste
},
});