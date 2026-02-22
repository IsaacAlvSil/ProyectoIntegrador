import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Datos del usuario
  const [usuario, setUsuario] = useState({
    nombre: 'Juan Pérez González',
    titulo: 'Director de Operaciones',
    area: 'Operaciones y Manufactura',
    nivel: 'Ejecutivo Senior',
    email: 'juan.perez@auto-talento.com',
    telefono: '+52 555 123 4567',
    ubicacion: 'Querétaro, México',
    industria: 'Automotriz - Tier 1',
    verificado: true,
    foto: null,
    especialidades: ['Manufactura', 'Lean Six Sigma', 'IATF 16949'],
    añosExperiencia: 15,
  });

  // Experiencia Laboral
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

  // Certificaciones
  const [certificaciones, setCertificaciones] = useState([
    {
      id: 1,
      nombre: 'Lean Six Sigma Black Belt',
      entidad: 'ASQ',
      año: '2024',
      tipo: 'Mejora Continua',
    },
    {
      id: 2,
      nombre: 'PMP - Project Management',
      entidad: 'PMI',
      año: '2023',
      tipo: 'Gestión de Proyectos',
    },
    {
      id: 3,
      nombre: 'IATF 16949:2016 Lead Auditor',
      entidad: 'SGS',
      año: '2022',
      tipo: 'Calidad Automotriz',
    },
    {
      id: 4,
      nombre: 'VDA 6.3 - Auditor de Procesos',
      entidad: 'TÜV',
      año: '2021',
      tipo: 'Calidad Automotriz',
    },
  ]);

  // Habilidades técnicas
  const [habilidades, setHabilidades] = useState([
    { id: 1, nombre: 'Lean Manufacturing', nivel: 'Experto' },
    { id: 2, nombre: 'IATF 16949', nivel: 'Experto' },
    { id: 3, nombre: 'Six Sigma', nivel: 'Black Belt' },
    { id: 4, nombre: 'APQP / PPAP', nivel: 'Avanzado' },
    { id: 5, nombre: 'FMEA', nivel: 'Avanzado' },
    { id: 6, nombre: 'Control de Procesos', nivel: 'Experto' },
  ]);

  // Clientes atendidos
  const [clientes, setClientes] = useState([
    'BMW', 'Mercedes-Benz', 'Ford', 'Tesla', 'GM'
  ]);

  // Documentos
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      nombre: 'Curriculum Vitae - Automotriz',
      tipo: 'PDF',
      fecha: '10 Feb 2026',
      verificado: true,
    },
    {
      id: 2,
      nombre: 'Certificación IATF 16949',
      tipo: 'PDF',
      fecha: '05 Feb 2026',
      verificado: true,
    },
    {
      id: 3,
      nombre: 'Resultados de Planta',
      tipo: 'PDF',
      fecha: '01 Feb 2026',
      verificado: false,
    },
    {
      id: 4,
      nombre: 'Cartas de Recomendación (BMW)',
      tipo: 'PDF',
      fecha: '15 Ene 2026',
      verificado: true,
    },
  ]);

  // Progreso del perfil
  const [progreso, setProgreso] = useState({
    infoBasica: true,
    experiencia: true,
    certificaciones: true,
    habilidades: true,
    documentosClave: false,
    porcentaje: 90,
  });

  const Seccion = ({ titulo, children, onAgregar }) => (
    <View style={styles.seccion}>
      <View style={styles.tituloRow}>
        <Text style={styles.tituloSeccion}>{titulo}</Text>
        {onAgregar && (
          <TouchableOpacity onPress={onAgregar} style={styles.btnAgregar}>
            <Text style={styles.btnAgregarTexto}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header del Perfil */}
        <View style={styles.header}>
          <View style={styles.fotoContainer}>
            {usuario.foto ? (
              <Image source={{ uri: usuario.foto }} style={styles.fotoPerfil} />
            ) : (
              <View style={styles.fotoPlaceholder}>
                <Text style={styles.fotoPlaceholderText}>
                  {usuario.nombre.charAt(0)}
                </Text>
              </View>
            )}
          </View>
          
          <View style={styles.infoHeader}>
            <Text style={styles.nombre}>{usuario.nombre}</Text>
            <View style={styles.tituloRow}>
              <Text style={styles.titulo}>{usuario.titulo}</Text>
              {usuario.verificado && (
                <View style={styles.badgeVerificado}>
                  <Text style={styles.badgeTexto}>✓ Verificado</Text>
                </View>
              )}
            </View>
            
            {/* Badges de industria */}
            <View style={styles.badgesContainer}>
              <View style={styles.badgeIndustria}>
                <Text style={styles.badgeIndustriaTexto}>{usuario.area}</Text>
              </View>
              <View style={styles.badgeIndustria}>
                <Text style={styles.badgeIndustriaTexto}>{usuario.nivel}</Text>
              </View>
            </View>

            <View style={styles.contactoContainer}>
              <Text style={styles.contactoItem}> {usuario.email}</Text>
              <Text style={styles.contactoItem}> {usuario.telefono}</Text>
              <Text style={styles.contactoItem}> {usuario.ubicacion}</Text>
              <Text style={styles.contactoItem}> {usuario.industria}</Text>
            </View>
            
            <TouchableOpacity style={styles.btnEditar}>
              <Text style={styles.btnEditarTexto}>EDITAR PERFIL</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Completitud del Perfil */}
        <Seccion titulo="COMPLETITUD DEL PERFIL">
          <View style={styles.progresoContainer}>
            <View style={styles.progresoHeader}>
              <Text style={styles.progresoLabel}>Perfil Ejecutivo</Text>
              <Text style={styles.progresoPorcentaje}>{progreso.porcentaje}%</Text>
            </View>
            <View style={styles.barraProgreso}>
              <View 
                style={[
                  styles.barraProgresoFill, 
                  { width: `${progreso.porcentaje}%` }
                ]} 
              />
            </View>
            <View style={styles.checklist}>
              <Text style={styles.checkItem}>✓ Información básica</Text>
              <Text style={styles.checkItem}>✓ Experiencia en automotriz</Text>
              <Text style={styles.checkItem}>✓ Certificaciones IATF/Six Sigma</Text>
              <Text style={styles.checkItem}>✓ Habilidades técnicas</Text>
              <Text style={styles.checkItem}>○ Documentos de respaldo</Text>
            </View>
          </View>
        </Seccion>

        {/* Experiencia Laboral */}
        <Seccion titulo="EXPERIENCIA LABORAL" onAgregar={() => {}}>
          {experiencia.map((item) => (
            <View key={item.id} style={styles.itemExperiencia}>
              <Text style={styles.puesto}>{item.puesto}</Text>
              <Text style={styles.empresa}>{item.empresa}</Text>
              <Text style={styles.periodo}> {item.periodo}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
              <View style={styles.logrosContainer}>
                {item.logros.map((logro, index) => (
                  <Text key={index} style={styles.logro}> {logro}</Text>
                ))}
              </View>
            </View>
          ))}
        </Seccion>

        {/* Clientes Atendidos */}
        <Seccion titulo="CLIENTES AUTOMOTRICES" onAgregar={() => {}}>
          <View style={styles.clientesContainer}>
            {clientes.map((cliente, index) => (
              <View key={index} style={styles.clienteBadge}>
                <Text style={styles.clienteTexto}>{cliente}</Text>
              </View>
            ))}
          </View>
        </Seccion>

        {/* Habilidades Técnicas */}
        <Seccion titulo="COMPETENCIAS TÉCNICAS" onAgregar={() => {}}>
          {habilidades.map((item) => (
            <View key={item.id} style={styles.habilidadItem}>
              <Text style={styles.habilidadNombre}>{item.nombre}</Text>
              <View style={[
                styles.nivelBadge,
                item.nivel === 'Experto' ? styles.nivelExperto :
                item.nivel === 'Black Belt' ? styles.nivelBlackBelt :
                styles.nivelAvanzado
              ]}>
                <Text style={styles.nivelTexto}>{item.nivel}</Text>
              </View>
            </View>
          ))}
        </Seccion>

        {/* Certificaciones */}
        <Seccion titulo="CERTIFICACIONES" onAgregar={() => {}}>
          {certificaciones.map((item) => (
            <View key={item.id} style={styles.itemCertificacion}>
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

        {/* Documentos */}
        <Seccion titulo="DOCUMENTOS" onAgregar={() => {}}>
          {documentos.map((item) => (
            <View key={item.id} style={styles.itemDocumento}>
              <View style={styles.docInfo}>
                <Text style={styles.docNombre}>{item.nombre}</Text>
                <Text style={styles.docMeta}>
                  {item.tipo} • {item.fecha}
                </Text>
              </View>
              {item.verificado && (
                <View style={styles.badgeVerificadoDoc}>
                  <Text style={styles.badgeTextoDoc}>Verificado</Text>
                </View>
              )}
            </View>
          ))}
        </Seccion>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}></Text>
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}></Text>
          <Text style={styles.navText}>Vacantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}></Text>
          <Text style={styles.navText}>Postulaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActivo]}>
          <Text style={[styles.navIcon, styles.navIconActivo]}></Text>
          <Text style={[styles.navText, styles.navTextActivo]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  fotoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  fotoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#002E5D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoPlaceholderText: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  infoHeader: {
    alignItems: 'center',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002E5D',
    marginBottom: 5,
  },
  tituloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  titulo: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  badgeVerificado: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTexto: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: '500',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 8,
  },
  badgeIndustria: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  badgeIndustriaTexto: {
    color: '#002E5D',
    fontSize: 12,
    fontWeight: '500',
  },
  contactoContainer: {
    width: '100%',
    marginBottom: 15,
  },
  contactoItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  btnEditar: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#002E5D',
  },
  btnEditarTexto: {
    color: '#002E5D',
    fontWeight: 'bold',
    fontSize: 14,
  },
  seccion: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  tituloRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E5D',
  },
  btnAgregar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#002E5D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAgregarTexto: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  progresoContainer: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
  },
  progresoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progresoLabel: {
    fontSize: 14,
    color: '#666',
  },
  progresoPorcentaje: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#002E5D',
  },
  barraProgreso: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 15,
  },
  barraProgresoFill: {
    height: 8,
    backgroundColor: '#002E5D',
    borderRadius: 4,
  },
  checklist: {
    gap: 5,
  },
  checkItem: {
    fontSize: 13,
    color: '#666',
  },
  itemExperiencia: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  puesto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  empresa: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  periodo: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  descripcion: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  logrosContainer: {
    marginTop: 8,
    paddingLeft: 8,
  },
  logro: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  clientesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  clienteBadge: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#002E5D',
  },
  clienteTexto: {
    color: '#002E5D',
    fontSize: 13,
    fontWeight: '500',
  },
  habilidadItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  habilidadNombre: {
    fontSize: 15,
    color: '#333',
  },
  nivelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  nivelExperto: {
    backgroundColor: '#002E5D',
  },
  nivelBlackBelt: {
    backgroundColor: '#2E7D32',
  },
  nivelAvanzado: {
    backgroundColor: '#F57C00',
  },
  nivelTexto: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '500',
  },
  itemCertificacion: {
    marginBottom: 12,
  },
  certHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  certNombre: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  certTipoBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginLeft: 8,
  },
  certTipoTexto: {
    color: '#2E7D32',
    fontSize: 10,
    fontWeight: '500',
  },
  certEntidad: {
    fontSize: 13,
    color: '#999',
  },
  itemDocumento: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  docInfo: {
    flex: 1,
  },
  docNombre: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  docMeta: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  badgeVerificadoDoc: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeTextoDoc: {
    color: '#2E7D32',
    fontSize: 11,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navItemActivo: {
    opacity: 1,
  },
  navIcon: {
    fontSize: 20,
    color: '#999',
  },
  navIconActivo: {
    color: '#002E5D',
  },
  navText: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  navTextActivo: {
    color: '#002E5D',
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 60,
  },
});

export default ProfileScreen;