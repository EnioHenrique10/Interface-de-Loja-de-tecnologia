import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Produtos from '../../Components/Produtos';
import { useNavigation } from '@react-navigation/native';





export default function Home() {

  const navigation = useNavigation()
 

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/Banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>TecnologiaCenter</Text>
            
            
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <Produtos img={require('../../assets/note2.webp')} cost="R$6.110,03" onClick={() => navigation.navigate('Detail')}>Notebook Galaxy Book3 360 Windows 11 Home Intel Core i5-1335U 8 GB 256 GB SSD 13.3" Full HD AMOLED 1.16 kg - Samsung</Produtos>

         <Produtos img={require('../../assets/foto3.webp')} cost="R$2.500,00" onClick={() => navigation.navigate('Detai')}>Notebook VAIO® FE14 Intel® Core™ i7
           Windows 11 Home 8GB 256GB SSD Full HD - Cinza Grafite</Produtos>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <Produtos img={require('../../assets/teclado2.webp')} cost="R$99.90" onClick={() => alert( 'OK')}>Teclado Gamer Multimidia Fortrek Spider Black Preto</Produtos>

         <Produtos img={require('../../assets/teclado3.jpg')} cost="R$179.90" onClick={() => alert( 'OK')}>Teclado Kit Gamer Mouse Gamer V-100 USB Para Jogos Azul</Produtos>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <Produtos img={require('../../assets/compu.jpg')} cost="R$1.300" onClick={() => alert( 'OK')}>Computador Pc Completo Intel Core i3 8GB HD 500GB Wi-fi
           Marca: AMORIM SHOP</Produtos>

         <Produtos img={require('../../assets/pcgamer.webp')} cost="R$4.241,50" onClick={() => alert( 'OK')}>Pc Gamer I7, Gtx 1650, 16gb, Monitor 24, Kit Completo, 1tb - Pc Gamer com Cadeira</Produtos>
          </View>
        

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    marginTop: '5%',
    
    backgroundColor: '#FFF',
    
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: 400,
    height: 190
    
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
   
    fontSize: 20,
    marginHorizontal: '2%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});