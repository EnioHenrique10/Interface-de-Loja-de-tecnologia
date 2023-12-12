import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


export default function Produtos(props){

    function filterDesc(desc){
           if(desc.length < 27){
            return desc;
           }
           return `${desc.substring(0, 15)}...`
    }

    return(
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
              source={props.img}
              style={styles.produtosImg}
            />
            <Text style={styles.produtoText}>
              {filterDesc(props.children)}
            </Text>
            
            <Text style={styles.produtoText}>{props.cost}</Text>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
       paddingVertical: '3%',
       alignItems: 'center',
       justifyContent: 'center'

    },
    produtosImg:{
       width: 170,
       height: 170,
        
    },
  produtoText: {
    fontSize: 16,

  }

})