import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RequestsScreen = () => (
    <LinearGradient
        colors={['#0F172A', '#1E293B', '#334155']}
        style={styles.container}
    >
        <View style={styles.card}>
            <Text style={styles.title}>Vacantes</Text>
            <Text style={styles.subtitle}></Text>
        </View>
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        borderRadius: 16,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#64748B',
        textAlign: 'center'
    }
});

export default RequestsScreen;