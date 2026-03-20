import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text, StatusBar } from 'react-native';

import { DADOS_FILMES } from './src/data/filmes';
import CardFilme from './src/components/CardFilme';

export default function App() {
    const PerfilTopo = () => (
        <View style={styles.perfilContainer}>
            <View style={styles.topoPreto}></View>

            <View style={styles.infoUsuario}>
                <View style={styles.avatarCirculo}>
                    <Text style={styles.iconeAvatar}>👤</Text>
                </View>

                <Text style={styles.nomeUsuario}>Minha Lista</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />

            <FlatList
                data={DADOS_FILMES}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={PerfilTopo}
                renderItem={({ item }) => <CardFilme filme={item} />}
                numColumns={3}
                contentContainerStyle={styles.listaConteudo}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    perfilContainer: {
        backgroundColor: '#121212',
        marginBottom: 20,
    },
    topoPreto: {
        height: 100,
        backgroundColor: '#000',
    },
    infoUsuario: {
        backgroundColor: '#1F1F1F',
        paddingTop: 0,
        paddingBottom: 25,
        marginTop: -50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    avatarCirculo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#333',
        borderWidth: 3,
        borderColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    iconeAvatar: {
        fontSize: 50,
    },
    nomeUsuario: {
        color: '#FFD700',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listaConteudo: {
        paddingBottom: 20,
    },
});
