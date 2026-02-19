import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationScreen = () => (
    <View style={styles.container}>
        <Text>Notificaciones - Próximamente</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default NotificationScreen;