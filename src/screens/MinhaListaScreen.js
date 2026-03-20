import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { DADOS_FILMES } from '../data/filmes';
import CardFilme from '../components/CardFilme';
import { useFavoritos } from '../context/FavoritosContext';
import HeaderApp from '../components/HeaderApp';

export default function MinhaListaScreen() {
    const { favoritos } = useFavoritos();

    const filmesFavoritos = DADOS_FILMES.filter((f) => favoritos.includes(f.id));

    const HeaderPerfil = () => (
        <View style={styles.perfilContainer}>
            <View style={styles.faixaSuperior} />
            <View style={styles.areaUsuario}>
                <View style={styles.avatar}>
                    <Text style={{ fontSize: 50 }}>👤</Text>
                </View>
                <Text style={styles.nomeUsuario}>Minha Lista</Text>
                <Text style={styles.stats}>15 filmes assistidos</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <HeaderApp />
            <FlatList
                data={filmesFavoritos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CardFilme filme={item} />}
                ListHeaderComponent={<HeaderPerfil />}
                ListEmptyComponent={() => (
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#AAA' }}>
                            Sua lista está vazia. Adicione filmes clicando no coração.
                        </Text>
                    </View>
                )}
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
    faixaSuperior: {
        height: 80,
        backgroundColor: '#000',
    },
    areaUsuario: {
        backgroundColor: '#1F1F1F',
        alignItems: 'center',
        marginTop: -40,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 20,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#333',
        borderWidth: 2,
        borderColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    nomeUsuario: {
        color: '#FFD700',
        fontSize: 22,
        fontWeight: 'bold',
    },
    stats: {
        color: '#888',
        fontSize: 14,
    },
    lista: {
        paddingBottom: 20,
    },
});
