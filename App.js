import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MinhaListaScreen from './src/screens/MinhaListaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor='#121212' />

            <Tab.Navigator
                screenOptions={{
                    headerShown: false, 
                    tabBarStyle: { backgroundColor: '#1F1F1F', borderTopColor: '#333', height: 60 },
                    tabBarActiveTintColor: '#FFD700',
                    tabBarInactiveTintColor: '#888',
                }}>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ tabBarLabel: 'Início' }}
                />
                <Tab.Screen
                    name='MinhaLista'
                    component={MinhaListaScreen}
                    options={{ tabBarLabel: 'Minha Lista' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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
