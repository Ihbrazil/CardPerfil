import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Capa from "./assets/images/capa.png";
import Foto from "./assets/images/foto.png";

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.capa} source={ Capa } />
      <View style={estilos.boxDesenvolvedor}>
          <Image style={estilos.foto} source={ Foto } />
          <Text style={estilos.titulo}>Isaias Horta Brazil</Text>
          <Text style={estilos.texto}>Bacharel em Sistemas de Informação e desenvolvedor FullStack, especializado nas tecnologias JavaScript, React e Reat Native</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  capa: {
    flex: 1,
  },

  boxDesenvolvedor: {
    flex: 1,
    borderColor: "#fff",
    alignItems: "center",
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "normal",
  },

  texto: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: "normal",
    marginHorizontal: 10,
  },
});
