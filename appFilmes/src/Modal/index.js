import React, {useState} from "react"; 
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native";   


export default function Detalhes(props) {

    return(
        <View style={styles.conteiner}>
            <View style={styles.modalContent}>

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao}  onPress={props.voltar}>
                        <Text style={styles.textoBotao}> Voltar </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titulo}> {props.filmes.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>
                    {props.filmes.sinopse}
                </Text>

            </View>
        </View>

    );

};


const styles = StyleSheet.create({ 
    conteiner: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: '97%',
        height: '80%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },    
    areaBotao: { 
        width: 120,
        alignSelf: 'center',
        marginTop: 18,
        marginBottom: 5,
    },
    botao: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
    },
    textoBotao: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },

    titulo: { 
        textAlign: 'center',
        color: 'black',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 15,
        alignSelf: 'center',
        paddingHorizontal: 25,
        
    },
    sinopse: {
        color: 'black',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 10,
    },
    descricao:{
        color: 'black',
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'justify',
        padding: 10,
    }
});