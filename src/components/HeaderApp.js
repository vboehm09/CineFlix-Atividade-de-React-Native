import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderApp() {
    return (
        <View>
            <View style={styles.topBar}>
                <Text style={styles.title}>Cinelist</Text>
                <TouchableOpacity style={styles.profileBtn}>
                    <Ionicons name='person' size={20} color='#FFD700' />
                </TouchableOpacity>
            </View>
            <View style={styles.underBar} />
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        height: 64,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    title: {
        color: '#FFD700',
        fontSize: 28,
        fontWeight: '700',
    },
    profileBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFD700',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
