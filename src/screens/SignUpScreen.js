import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Candidato</Text>
            <Text style={styles.info}>Interfaz de registro en construcción...</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>VOLVER AL LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#002E5D', marginBottom: 10 },
    info: { fontSize: 16, color: '#666', marginBottom: 30 },
    button: { backgroundColor: '#002E5D', padding: 15, borderRadius: 8 },
    buttonText: { color: '#FFF', fontWeight: 'bold' }
});

export default SignUpScreen;