import React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import { DADOS_FILMES } from '../data/filmes';
import CardFilme from '../components/CardFilme';

export default function HomeScreen() {

    const HeaderHome = () => (
        <View style={styles.headerContainer}>
            <Text style={styles.saudacao}>Olá, Usuário! 👋</Text>
            <Text style={styles.subtitulo}>O que vamos assistir hoje?</Text>

            <View style={styles.secaoTitulo}>
                <Text style={styles.tituloSecao}>Populares da Semana</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DADOS_FILMES}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CardFilme filme={item} />}
                numColumns={2}
                ListHeaderComponent={HeaderHome}
                contentContainerStyle={styles.lista}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    headerContainer: {
        padding: 20,
        paddingTop: 40,
    },
    saudacao: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitulo: {
        color: '#AAA',
        fontSize: 16,
        marginBottom: 20,
    },
    secaoTitulo: {
        borderLeftWidth: 4,
        borderLeftColor: '#E50914', // Vermelho estilo Netflix
        paddingLeft: 10,
        marginBottom: 15,
    },
    tituloSecao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    lista: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
});
