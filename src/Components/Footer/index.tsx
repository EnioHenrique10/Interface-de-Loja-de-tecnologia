import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Produtos from "../Produtos";

export default function Footer(){
    return(
        <View>
            <Text style={styles.title}>Você Também pode gostar </Text>
             <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{marginHorizontal: 10}}>
                    <Produtos img={require('../../assets/pcgamer.webp')} cost="4.241,50">
                       Pc Gamer
                    </Produtos>
                  </View>

                  <View style={{marginHorizontal: 10}}>
                    <Produtos img={require('../../assets/foto3.webp')} cost="2.500,00">
                    Notebook VAIO®
                    </Produtos>
                  </View>

                  <View style={{marginHorizontal: 10}}>
                    <Produtos img={require('../../assets/teclado2.webp')} cost="R$99.90">
                       Teclado Gamer 
                    </Produtos>
                  </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
      title: {
        fontSize: 23,
        marginVertical: '2%',
        marginHorizontal: '2%',
        paddingHorizontal: '2%'

      }
})