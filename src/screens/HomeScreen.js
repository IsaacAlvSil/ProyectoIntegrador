import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
    return (
        <LinearGradient
            colors={['#0F172A', '#1E293B', '#334155']}
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hola, Isaac</Text>
                        <Text style={styles.subtitle}>Tu radar ejecutivo está activo</Text>
                    </View>
                    <TouchableOpacity style={styles.profileIcon}>
                        <Text style={styles.profileInitials}>IS</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.metricsRow}>
                    <View style={styles.metricCard}>
                        <Ionicons name="eye-outline" size={24} color="#3B82F6" />
                        <Text style={styles.metricNumber}>18</Text>
                        <Text style={styles.metricLabel}>Vistas a tu perfil</Text>
                    </View>
                    <View style={styles.metricCard}>
                        <Ionicons name="search-outline" size={24} color="#10B981" />
                        <Text style={styles.metricNumber}>5</Text>
                        <Text style={styles.metricLabel}>Búsquedas Top</Text>
                    </View>
                    <View style={styles.metricCard}>
                        <Ionicons name="briefcase-outline" size={24} color="#F59E0B" />
                        <Text style={styles.metricNumber}>2</Text>
                        <Text style={styles.metricLabel}>Procesos Activos</Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Oportunidades Top Match</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>Ver todas</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.jobCard}>
                    <View style={styles.jobHeader}>
                        <View style={styles.jobInfoContainer}>
                            <Text style={styles.jobTitle}>Plant Manager</Text>
                            <Text style={styles.jobLocation}>Parque Opción, San José Iturbide</Text>
                        </View>
                        <View style={styles.matchBadge}>
                            <Text style={styles.matchText}>92% Match</Text>
                        </View>
                    </View>
                    <Text style={styles.jobDetail}>Requiere cert. IATF 16949 y exp. en inyección de plásticos.</Text>
                    <View style={styles.tagRow}>
                        <Text style={styles.tag}>Confidencial</Text>
                        <Text style={styles.tag}>+$120k MXN</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.jobCard}>
                    <View style={styles.jobHeader}>
                        <View style={styles.jobInfoContainer}>
                            <Text style={styles.jobTitle}>Director de Supply Chain</Text>
                            <Text style={styles.jobLocation}>OEM Armadora, Silao</Text>
                        </View>
                        <View style={styles.matchBadge}>
                            <Text style={styles.matchText}>88% Match</Text>
                        </View>
                    </View>
                    <Text style={styles.jobDetail}>Gestión de presupuesto + $50M USD y logística Just-In-Time.</Text>
                    <View style={styles.tagRow}>
                        <Text style={styles.tag}>Híbrido</Text>
                        <Text style={styles.tag}>Inglés Bilingüe</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Radar Automotriz (Bajío)</Text>
                </View>
                <TouchableOpacity style={styles.newsCard}>
                    <Ionicons name="trending-up-outline" size={24} color="#6366F1" style={styles.newsIcon} />
                    <View style={styles.newsTextContainer}>
                        <Text style={styles.newsTitle}>Nueva inversión en El Marqués</Text>
                        <Text style={styles.newsSubtitle}>Tier 1 asiática anuncia planta de componentes para EV.</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
                </TouchableOpacity>

                <View style={styles.actionCard}>
                    <View style={styles.actionIconBg}>
                        <Ionicons name="document-text-outline" size={24} color="#FFFFFF" />
                    </View>
                    <View style={styles.actionTextContainer}>
                        <Text style={styles.actionTitle}>Destaca tu perfil internacional</Text>
                        <Text style={styles.actionSubtitle}>Sube tu CV en inglés para acceder a las nuevas vacantes de nearshoring.</Text>
                    </View>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Subir</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    greeting: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 14,
        color: '#94A3B8',
        marginTop: 4,
    },
    profileIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#3B82F6',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    profileInitials: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    metricCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        padding: 15,
        width: '31%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    metricNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 8,
    },
    metricLabel: {
        fontSize: 10,
        color: '#CBD5E1',
        textAlign: 'center',
        marginTop: 4,
    },
    sectionHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    seeAll: {
        fontSize: 14,
        color: '#3B82F6',
        fontWeight: '600',
        marginTop: 4,
    },
    jobCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 15,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    jobInfoContainer: {
        flex: 1,
        paddingRight: 10,
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0F172A',
        flexWrap: 'wrap',
    },
    jobLocation: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 4,
    },
    matchBadge: {
        backgroundColor: '#ECFDF5',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#10B981',
        alignSelf: 'flex-start',
    },
    matchText: {
        color: '#10B981',
        fontSize: 11,
        fontWeight: 'bold',
    },
    jobDetail: {
        fontSize: 13,
        color: '#475569',
        marginBottom: 12,
        lineHeight: 18,
    },
    tagRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#F1F5F9',
        color: '#475569',
        fontSize: 11,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        fontWeight: '600',
        marginRight: 8,
        marginBottom: 8,
    },
    newsCard: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    newsIcon: {
        marginRight: 15,
    },
    newsTextContainer: {
        flex: 1,
    },
    newsTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    newsSubtitle: {
        color: '#94A3B8',
        fontSize: 12,
    },
    actionCard: {
        flexDirection: 'row',
        backgroundColor: '#3B82F6',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
        marginTop: 30,
    },
    actionIconBg: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 10,
        marginRight: 15,
    },
    actionTextContainer: {
        flex: 1,
    },
    actionTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    actionSubtitle: {
        color: '#DBEAFE',
        fontSize: 11,
        lineHeight: 16,
    },
    actionButton: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        marginLeft: 10,
    },
    actionButtonText: {
        color: '#3B82F6',
        fontSize: 12,
        fontWeight: 'bold',
    }
});

export default HomeScreen;