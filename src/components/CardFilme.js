import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavoritos } from '../context/FavoritosContext';

export default function CardFilme({ filme }) {
    const { isFavorito, toggleFavorito } = useFavoritos();
    const favorito = isFavorito(filme.id);
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Image
                    source={{ uri: filme.capa }}
                    style={{ width: 100, height: 150 }}
                    resizeMode='cover'
                />
            </TouchableOpacity>

            <View style={styles.info}>
                <Text style={styles.titulo}>{filme.titulo}</Text>
                <Text style={styles.ano}>{filme.ano}</Text>
                <Text style={styles.genero}>{filme.genero}</Text>
                <TouchableOpacity style={styles.favButton} onPress={() => toggleFavorito(filme.id)}>
                    <Ionicons
                        name={favorito ? 'heart' : 'heart-outline'}
                        size={20}
                        color={favorito ? '#E50914' : '#FFF'}
                    />
                </TouchableOpacity>
            </View>

            <Modal visible={visible} animationType='slide' transparent>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{filme.titulo}</Text>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Ionicons name='close' size={24} color='#FFF' />
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            <Image
                                source={{ uri: filme.capa }}
                                style={styles.modalPoster}
                                resizeMode='cover'
                            />
                            <View style={{ padding: 12 }}>
                                <Text style={styles.modalMeta}>
                                    {filme.ano} • {filme.duracao ? filme.duracao : ''}
                                </Text>
                                <Text style={styles.modalSinopse}>{filme.sinopse}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                                    <TouchableOpacity style={styles.trailerBtn}>
                                        <Ionicons name='play' size={16} color='#FFD700' />
                                        <Text style={styles.trailerTxt}> Trailer</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.favButton, { marginLeft: 12 }]}
                                        onPress={() => toggleFavorito(filme.id)}>
                                        <Ionicons
                                            name={favorito ? 'heart' : 'heart-outline'}
                                            size={20}
                                            color={favorito ? '#E50914' : '#FFF'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
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
    favButton: {
        marginTop: 8,
        padding: 6,
        borderRadius: 20,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        height: '75%',
        backgroundColor: '#1F1F1F',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#2b2a33',
    },
    modalTitle: {
        color: '#FFD700',
        fontSize: 20,
        fontWeight: '700',
    },
    modalPoster: {
        width: '100%',
        height: 180,
    },
    modalMeta: {
        color: '#AAA',
        marginBottom: 8,
    },
    modalSinopse: {
        color: '#BBB',
        lineHeight: 20,
        marginTop: 6,
    },
    trailerBtn: {
        backgroundColor: '#2b2a33',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    trailerTxt: {
        color: '#FFD700',
        fontWeight: '700',
    },
});
