import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';

export default function Detail({navigation}) {

    navigation.setOptions({
      headerTitle: 'Notebook Galaxy'
    }) 


 return (
   <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/note2.webp')}
        style={styles.image}
        resizeMode='cover'
      />

      <View>
          <View>
           <Text style={styles.title}>R$6.110,03</Text>
          </View>   
          <View>
           <Text style={styles.title}>Notebook Galaxy</Text>
          </View>  
           
           <View style={styles.textContent}>
            <Text style={styles.textContent}>
                Notebook Galaxy Book3 360 Windows 11 Home Intel Core i5-1335U 8 GB 256 GB SSD 13.3" Full HD AMOLED 1.16 kg - Samsung
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
      width: '100%'
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