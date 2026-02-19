import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation, onLogin }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.brand}>AUTO-TALENT</Text>
            <Text style={styles.tagline}>Executive Recruitment</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo Corporativo"
                placeholderTextColor="#999"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                secureTextEntry
            />

            <TouchableOpacity style={styles.primaryBtn} onPress={onLogin}>
                <Text style={styles.btnText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.link}>¿Eres nuevo? Regístrate aquí</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#FFF' },
    brand: { fontSize: 32, fontWeight: 'bold', color: '#002E5D', textAlign: 'center' },
    tagline: { fontSize: 12, color: '#666', textAlign: 'center', marginBottom: 40, letterSpacing: 2 },
    input: { borderWidth: 1, borderColor: '#EEE', padding: 15, borderRadius: 10, marginBottom: 15, backgroundColor: '#F9F9F9' },
    primaryBtn: { backgroundColor: '#002E5D', padding: 18, borderRadius: 10, alignItems: 'center' },
    btnText: { color: '#FFF', fontWeight: 'bold' },
    link: { marginTop: 20, color: '#007AFF', textAlign: 'center' }
});

export default LoginScreen;