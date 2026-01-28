import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native";


import Detalhes from "../Modal";


export default function Filmes({ data }) {
    const [modalVisible, setModalVisible] = useState(false);


    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image 
                    source={{uri: data.foto}}
                    style={styles.capa}
                />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={ styles.botao } onPress={()=> setModalVisible( true )}>
                        <Text style={ styles.textoBotao }>Detalhes !</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Modal 
                        visible={ modalVisible }
                        animationType="slide"
                        transparent={ true }
                    >
                        <Detalhes filmes={ data } voltar={ () => setModalVisible(false) } />

                    </Modal>
                </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({ 
    card: {
        backgroundColor: '#131313',
        elevation: 2,
        margin: 6,
        borderRadius: 10,
        padding: 10,
    },
    capa: {
        height: 250,
        zIndex: 2,
        borderRadius: 10,
    },
    titulo: {
        paddingTop: 2,
        paddingBottom: 16,
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    },
    areaBotao: { 
        width: 120,
        alignSelf: 'center',
        marginTop: 18,
        marginBottom: 5,
    },
    botao: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 50,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
});