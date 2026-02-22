import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState({
    nombre: 'Usuario',
    titulo: 'Director de Operaciones',
    area: 'Operaciones y Manufactura',
    nivel: 'Ejecutivo Senior',
    email: 'Usuario.16@gmail.com',
    telefono: '+52 555 123 4567',
    ubicacion: 'Querétaro, México',
    industria: 'Automotriz - Tier 1',
    verificado: true,
    foto: null,
    especialidades: ['Manufactura', 'Lean Six Sigma', 'IATF 16949'],
    añosExperiencia: 15,
  });

  const [experiencia, setExperiencia] = useState([
    {
      id: 1,
      puesto: 'Director de Operaciones',
      empresa: 'TechAuto SA (Tier 1)',
      periodo: '2020 - 2026',
      descripcion: 'Liderazgo de operaciones estratégicas para línea de ensamblaje de sistemas de dirección. Gestión de 500+ operadores.',
      logros: ['Reducción de scrap en 15%', 'Implementación de Lean Manufacturing'],
    },
    {
      id: 2,
      puesto: 'Gerente de Producción',
      empresa: 'AutoParts Global (Tier 2)',
      periodo: '2015 - 2020',
      descripcion: 'Gestión de planta de manufactura de componentes metálicos para BMW y Mercedes.',
      logros: ['Incremento de OEE en 20%', 'Certificación IATF 16949'],
    },
  ]);

  const [certificaciones, setCertificaciones] = useState([
    { id: 1, nombre: 'Lean Six Sigma Black Belt', entidad: 'ASQ', año: '2024', tipo: 'Mejora Continua' },
    { id: 2, nombre: 'PMP - Project Management', entidad: 'PMI', año: '2023', tipo: 'Gestión de Proyectos' },
    { id: 3, nombre: 'IATF 16949:2016 Lead Auditor', entidad: 'SGS', año: '2022', tipo: 'Calidad Automotriz' },
  ]);

  const [habilidades, setHabilidades] = useState([
    { id: 1, nombre: 'Lean Manufacturing', nivel: 'Experto' },
    { id: 2, nombre: 'IATF 16949', nivel: 'Experto' },
    { id: 3, nombre: 'Six Sigma', nivel: 'Black Belt' },
    { id: 4, nombre: 'APQP / PPAP', nivel: 'Avanzado' },
  ]);

  const [clientes, setClientes] = useState(['BMW', 'Mercedes-Benz', 'Ford', 'Tesla', 'GM']);

  const [documentos, setDocumentos] = useState([
    { id: 1, nombre: 'Curriculum Vitae - Automotriz', tipo: 'PDF', fecha: '10 Feb 2026', verificado: true },
    { id: 2, nombre: 'Certificación IATF 16949', tipo: 'PDF', fecha: '05 Feb 2026', verificado: true },
  ]);

  const [progreso, setProgreso] = useState({ porcentaje: 90 });

  const Seccion = ({ titulo, icon, children, onAgregar }) => (
    <View style={styles.card}>
      <View style={styles.sectionHeaderRow}>
        <View style={styles.sectionTitleWrap}>
          <Ionicons name={icon} size={20} color="#3B82F6" style={styles.sectionIcon} />
          <Text style={styles.tituloSeccion}>{titulo}</Text>
        </View>
        {onAgregar && (
          <TouchableOpacity onPress={onAgregar} style={styles.btnAgregar}>
            <Ionicons name="add" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );

  return (
    <LinearGradient colors={['#0F172A', '#1E293B', '#334155']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        <View style={styles.card}>
          <View style={styles.fotoContainer}>
            {usuario.foto ? (
              <Image source={{ uri: usuario.foto }} style={styles.fotoPerfil} />
            ) : (
              <View style={styles.fotoPlaceholder}>
                <Text style={styles.fotoPlaceholderText}>{usuario.nombre.charAt(0)}</Text>
              </View>
            )}
            <TouchableOpacity style={styles.editPhotoBtn}>
              <Ionicons name="camera" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.infoHeader}>
            <Text style={styles.nombre}>{usuario.nombre}</Text>

            <View style={styles.tituloRow}>
              <Text style={styles.titulo}>{usuario.titulo}</Text>
              {usuario.verificado && (
                <View style={styles.badgeVerificado}>
                  <Ionicons name="checkmark-circle" size={14} color="#10B981" style={{ marginRight: 4 }} />
                  <Text style={styles.badgeTextoVerificado}>Verificado</Text>
                </View>
              )}
            </View>

            <View style={styles.badgesContainer}>
              <View style={styles.badgeIndustria}><Text style={styles.badgeIndustriaTexto}>{usuario.area}</Text></View>
              <View style={styles.badgeIndustria}><Text style={styles.badgeIndustriaTexto}>{usuario.nivel}</Text></View>
            </View>

            <View style={styles.contactoContainer}>
              <View style={styles.contactoRow}><Ionicons name="mail-outline" size={16} color="#64748B" /><Text style={styles.contactoItem}>{usuario.email}</Text></View>
              <View style={styles.contactoRow}><Ionicons name="call-outline" size={16} color="#64748B" /><Text style={styles.contactoItem}>{usuario.telefono}</Text></View>
              <View style={styles.contactoRow}><Ionicons name="location-outline" size={16} color="#64748B" /><Text style={styles.contactoItem}>{usuario.ubicacion}</Text></View>
            </View>

            <TouchableOpacity style={styles.btnEditar}>
              <Ionicons name="pencil" size={16} color="#FFFFFF" style={{ marginRight: 8 }} />
              <Text style={styles.btnEditarTexto}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Seccion titulo="Completitud del Perfil" icon="pie-chart-outline">
          <View style={styles.progresoHeader}>
            <Text style={styles.progresoLabel}>Perfil Ejecutivo</Text>
            <Text style={styles.progresoPorcentaje}>{progreso.porcentaje}%</Text>
          </View>
          <View style={styles.barraProgresoBg}>
            <View style={[styles.barraProgresoFill, { width: `${progreso.porcentaje}%` }]} />
          </View>
        </Seccion>

        <Seccion titulo="Experiencia Laboral" icon="briefcase-outline" onAgregar={() => { }}>
          {experiencia.map((item, index) => (
            <View key={item.id} style={[styles.itemExperiencia, index === experiencia.length - 1 && styles.noBorder]}>
              <Text style={styles.puesto}>{item.puesto}</Text>
              <Text style={styles.empresa}>{item.empresa}</Text>
              <Text style={styles.periodo}>{item.periodo}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
              <View style={styles.logrosContainer}>
                {item.logros.map((logro, idx) => (
                  <View key={idx} style={styles.logroRow}>
                    <Ionicons name="caret-forward" size={12} color="#3B82F6" />
                    <Text style={styles.logro}>{logro}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </Seccion>

        <Seccion titulo="Clientes Automotrices" icon="car-sport-outline" onAgregar={() => { }}>
          <View style={styles.tagsContainer}>
            {clientes.map((cliente, index) => (
              <View key={index} style={styles.tagBadge}>
                <Text style={styles.tagTexto}>{cliente}</Text>
              </View>
            ))}
          </View>
        </Seccion>

        <Seccion titulo="Competencias Técnicas" icon="construct-outline" onAgregar={() => { }}>
          {habilidades.map((item, index) => (
            <View key={item.id} style={[styles.habilidadItem, index === habilidades.length - 1 && styles.noBorder]}>
              <Text style={styles.habilidadNombre}>{item.nombre}</Text>
              <View style={[
                styles.nivelBadge,
                item.nivel === 'Experto' ? styles.nivelExperto : item.nivel === 'Black Belt' ? styles.nivelBlackBelt : styles.nivelAvanzado
              ]}>
                <Text style={styles.nivelTexto}>{item.nivel}</Text>
              </View>
            </View>
          ))}
        </Seccion>

        <Seccion titulo="Certificaciones" icon="ribbon-outline" onAgregar={() => { }}>
          {certificaciones.map((item, index) => (
            <View key={item.id} style={[styles.itemLista, index === certificaciones.length - 1 && styles.noBorder]}>
              <View style={styles.certHeader}>
                <Text style={styles.certNombre}>{item.nombre}</Text>
                <View style={styles.certTipoBadge}>
                  <Text style={styles.certTipoTexto}>{item.tipo}</Text>
                </View>
              </View>
              <Text style={styles.certEntidad}>{item.entidad} • {item.año}</Text>
            </View>
          ))}
        </Seccion>

        <Seccion titulo="Documentos" icon="document-text-outline" onAgregar={() => { }}>
          {documentos.map((item, index) => (
            <View key={item.id} style={[styles.itemLista, index === documentos.length - 1 && styles.noBorder]}>
              <View style={styles.docRow}>
                <Ionicons name="document" size={24} color="#94A3B8" style={{ marginRight: 10 }} />
                <View style={styles.docInfo}>
                  <Text style={styles.docNombre}>{item.nombre}</Text>
                  <Text style={styles.docMeta}>{item.tipo} • {item.fecha}</Text>
                </View>
                {item.verificado && (
                  <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                )}
              </View>
            </View>
          ))}
        </Seccion>

        <TouchableOpacity
          style={styles.btnLogout}
          onPress={() => {
            console.log('Cerrando sesion');
          }}
        >
          <Text style={styles.btnLogoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 15, paddingTop: 50 },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  fotoContainer: { alignItems: 'center', marginBottom: 15, position: 'relative' },
  fotoPlaceholder: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#0F172A',
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: '#F1F5F9',
  },
  fotoPlaceholderText: { color: '#FFFFFF', fontSize: 36, fontWeight: 'bold' },
  editPhotoBtn: {
    position: 'absolute', bottom: 0, right: '35%',
    backgroundColor: '#3B82F6', width: 28, height: 28, borderRadius: 14,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: '#FFFFFF',
  },
  infoHeader: { alignItems: 'center' },
  nombre: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginBottom: 4, textAlign: 'center' },
  tituloRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center' },
  titulo: { fontSize: 15, color: '#64748B', marginRight: 8 },
  badgeVerificado: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFDF5', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, borderWidth: 1, borderColor: '#10B981' },
  badgeTextoVerificado: { color: '#10B981', fontSize: 11, fontWeight: 'bold' },

  badgesContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 15 },
  badgeIndustria: { backgroundColor: '#F1F5F9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6, margin: 4 },
  badgeIndustriaTexto: { color: '#475569', fontSize: 12, fontWeight: '600' },

  contactoContainer: { width: '100%', marginBottom: 20, backgroundColor: '#F8FAFC', padding: 15, borderRadius: 10 },
  contactoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  contactoItem: { fontSize: 13, color: '#475569', marginLeft: 10 },

  btnEditar: { flexDirection: 'row', backgroundColor: '#0F172A', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 8, alignItems: 'center' },
  btnEditarTexto: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },

  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#F1F5F9', paddingBottom: 10 },
  sectionTitleWrap: { flexDirection: 'row', alignItems: 'center' },
  sectionIcon: { marginRight: 8 },
  tituloSeccion: { fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
  btnAgregar: { width: 28, height: 28, borderRadius: 6, backgroundColor: '#3B82F6', justifyContent: 'center', alignItems: 'center' },
  noBorder: { borderBottomWidth: 0, paddingBottom: 0, marginBottom: 0 },

  progresoHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progresoLabel: { fontSize: 13, color: '#64748B', fontWeight: '600' },
  progresoPorcentaje: { fontSize: 13, fontWeight: 'bold', color: '#3B82F6' },
  barraProgresoBg: { height: 8, backgroundColor: '#E2E8F0', borderRadius: 4 },
  barraProgresoFill: { height: 8, backgroundColor: '#3B82F6', borderRadius: 4 },

  itemExperiencia: { marginBottom: 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  puesto: { fontSize: 15, fontWeight: 'bold', color: '#0F172A' },
  empresa: { fontSize: 13, color: '#3B82F6', marginTop: 2, fontWeight: '600' },
  periodo: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
  descripcion: { fontSize: 13, color: '#475569', marginTop: 6, lineHeight: 18 },
  logrosContainer: { marginTop: 8 },
  logroRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 4 },
  logro: { fontSize: 12, color: '#64748B', marginLeft: 6, flex: 1 },

  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  tagBadge: { backgroundColor: '#F8FAFC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: '#E2E8F0', marginRight: 8, marginBottom: 8 },
  tagTexto: { color: '#0F172A', fontSize: 12, fontWeight: '600' },

  habilidadItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  habilidadNombre: { fontSize: 14, color: '#475569', fontWeight: '500' },
  nivelBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  nivelExperto: { backgroundColor: '#DBEAFE' },
  nivelBlackBelt: { backgroundColor: '#0F172A' },
  nivelAvanzado: { backgroundColor: '#F1F5F9' },
  nivelTexto: { color: '#0F172A', fontSize: 10, fontWeight: 'bold' },

  itemLista: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  certHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  certNombre: { fontSize: 14, color: '#0F172A', fontWeight: '600', flex: 1 },
  certTipoBadge: { backgroundColor: '#F8FAFC', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginLeft: 8 },
  certTipoTexto: { color: '#64748B', fontSize: 10, fontWeight: 'bold' },
  certEntidad: { fontSize: 12, color: '#94A3B8' },

  docRow: { flexDirection: 'row', alignItems: 'center' },
  docInfo: { flex: 1 },
  docNombre: { fontSize: 14, color: '#0F172A', fontWeight: '500' },
  docMeta: { fontSize: 12, color: '#94A3B8', marginTop: 2 },

  btnLogout: {
    flexDirection: 'row',
    backgroundColor: '#ff0000',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff0000',
  },
  btnLogoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});

export default ProfileScreen;