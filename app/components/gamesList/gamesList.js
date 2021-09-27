import React from 'react';
import { SafeAreaView, StatusBar, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DATA = [
    {
      id: '1',
      icon:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/dcjf1g7-ef5c3044-7449-4cce-a87c-32c5b79ca798.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3OGJjM2ZjLTlmMDgtNDdjYS04MWFlLWQ4OTA1NWM3ZWM0OVwvZGNqZjFnNy1lZjVjMzA0NC03NDQ5LTRjY2UtYTg3Yy0zMmM1Yjc5Y2E3OTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CJd_R1wU_2Ci5ZnqqGu34bQtv9slysOVrnJsKtxSN4s', 
      title: 'Hollow Knight',
    },
    {
      id: '2',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3648106f-36c8-4a88-8139-40330bb03b0f/de9hoaj-d521097d-29e0-4bd7-8c37-b67e4445d684.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2NDgxMDZmLTM2YzgtNGE4OC04MTM5LTQwMzMwYmIwM2IwZlwvZGU5aG9hai1kNTIxMDk3ZC0yOWUwLTRiZDctOGMzNy1iNjdlNDQ0NWQ2ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0YuctR-p8mibyI8-eyJjnczKFZZmYFu-pNJw9RhxH2s',
      title: 'Outer Wilds',
    },
    {
      id: '3',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dd8n7h4-1ddcabf8-9d75-4974-9847-2875061b26de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGQ4bjdoNC0xZGRjYWJmOC05ZDc1LTQ5NzQtOTg0Ny0yODc1MDYxYjI2ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gZXg2AXrvX1mGkVzN7jcdTfBcPLiuLofStQY7LQh-l0',
      title: 'Call Of Duty',
    },
    {
      id: '4',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8830f0-679a-4974-977c-bd5802617c82/d8n8zc0-44c67a32-50a5-4cb8-a4ee-3f3005270992.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmODgzMGYwLTY3OWEtNDk3NC05NzdjLWJkNTgwMjYxN2M4MlwvZDhuOHpjMC00NGM2N2EzMi01MGE1LTRjYjgtYTRlZS0zZjMwMDUyNzA5OTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e79kAYOGWmxeL14SkJevdA_D7mkapR9BeGXSnh_pPfI',
      title: 'Uncharted 4',
    },
    {
        id: '5',
        icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dawh21c-a025d55e-a654-4100-a221-60c96c0bd1d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGF3aDIxYy1hMDI1ZDU1ZS1hNjU0LTQxMDAtYTIyMS02MGM5NmMwYmQxZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pWx2H8Jj3c-eRZ45Fsd91Vrf432AAQZduxwTySPLh2g',
        title: 'Tekken 7',
    },
  ];
const DATAV =[]
  
  const Item = ({ icon, title, id}) => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress={() => navigation.navigate('Detalles' ,{id: id})}>
        <View style={styles.item}>
            <Image source={{uri: icon}} style={styles.rexImages}/>
            <Text style={styles.title}>{title}</Text> 
        </View>
    </TouchableOpacity>
    );}
  const ListEmpty = () => {
    return (
      //View to show when list is empty.
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>No Data Found</Text>
      </View>
    );
  }
export default function gamesList() {
    
    const renderItem = ({item}) => (
        <Item icon={item.icon} title={item.title} id={item.id}/>
      );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={ListEmpty}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: 'white',
      flexDirection: "row",
    },
    title: {
      fontSize: 20,
      paddingTop: 10,
    },
    rexImages: {
      borderRadius: 30,
      width: 50,
      height: 50,
      marginRight: 10,
    },
  });