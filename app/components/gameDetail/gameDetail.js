import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, Text, Image} from 'react-native';
import { useRoute } from '@react-navigation/core';
const DATA = [
    {
      id: '1',
      image:'https://static-cdn.jtvnw.net/ttv-boxart/Hollow%20Knight-144x192.jpg',
      title: 'Hollow Knight',
      desc: '¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado...',
    },
    {
      id: '2',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Outer%20Wilds-144x192.jpg',
      title: 'Outer Wilds',
      desc: 'Outer Wilds, nombrado juego del año 2019 por Giant Bomb, Polygon, Eurogamer y The Guardian, es un galardonado título de mundo abierto, que se desarrolla en un enigmático sistema solar confinado a un bucle temporal infinito.',
    },
    {
      id: '3',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Warzone-144x192.jpg',
      title: 'Call Of Duty',
      desc: 'Call of Duty es un videojuego de disparos en primera persona de tipo bélico desarrollado por Infinity Ward. El videojuego es el primer título de la franquicia en ser lanzado para las videoconsolas de séptima generación.​',
    },
    {
      id: '4',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Uncharted%204:%20A%20Thief%27s%20End-144x192.jpg',
      title: 'Uncharted 4',
      desc: 'Varios años después de su última aventura, el retirado cazador de fortunas, Nathan Drake, es obligado a regresar al mundo de los ladrones. Con intereses mucho más personales, Drake se embarca en un viaje alrededor del mundo persiguiendo una conspiración histórica conectada con un legendario tesoro pirata. Su mejor aventura probará sus límites físicos, su capacidad de resolución, y en definitiva qué está dispuesto a sacrificar para salvar a sus seres amados.',
    },
    {
        id: '5',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/Tekken%207-144x192.jpg',
        title: 'Tekken 7',
        desc: 'Descubre el épico final de la prolongada contienda entre miembros del clan Mishima. La legendaria saga de juegos de lucha vuelve a la carga con este título creado con Unreal Engine 4 que ofrece espectaculares batallas con cinemáticas narrativas e intensos duelos para disfrutar con amigos y rivales.',
    },
  ];
export default function gameDetail() {
    const route = useRoute();
    const { id } = route.params;
    const juego = DATA.find(data => data.id == id);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{juego.title}</Text>
            <View style={styles.imageCont}>
                <Image source={{uri: juego.image}} style={styles.rexImages}/>
            </View>
            <Text style={styles.description}>{juego.desc}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'white',
      },
    title: {
      fontSize: 20,
      paddingLeft: 10,
      marginTop: 20,
    },
    description: {
        fontSize: 15,
        paddingHorizontal: 10,
    },
    imageCont: {
        marginVertical: 20,
        alignItems: 'center',
    },
    rexImages: {
        width: 200,
        height: 200,
    },
  });