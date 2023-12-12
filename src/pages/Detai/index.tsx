import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';

export default function Detai({navigation}) {

    navigation.setOptions({
      headerTitle: 'Notebook'
    }) 


 return (
   <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/foto3.webp')}
        style={styles.image}
        resizeMode='cover'
      />

      <View>
          <View>
           <Text style={styles.title}>R$2.500,00</Text>
          </View>   
          <View>
           <Text style={styles.title}>Notebook VAIO®</Text>
          </View>  
           
           <View style={styles.textContent}>
            <Text style={styles.textContent}>
            Notebook VAIO® FE14 Intel® Core™ i7
           Windows 11 Home 8GB 256GB SSD Full HD - Cinza Grafite
            </Text>
           </View>

           <Button />
           
            <View style={styles.line}/>

           <Footer />
           
         </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     width: '100%',
     backgroundColor: '#fff'

  },
  image:{
      width: 400,
      height: 500
  },
  title: {
    paddingHorizontal: '2%',
    fontSize: 30
  }, 
  textContent: {
     paddingHorizontal: '1%',
     fontSize: 20
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
})