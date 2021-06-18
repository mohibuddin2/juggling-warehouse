import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Modal, ScrollView, Pressable } from 'react-native';
import { Input, Button,CheckBox } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions';



function DetailScreen({ navigation }) {

    const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "def", image: require('../../assets/02-tile.png') }, { title: "ghi", image: require('../../assets/03-tile.png') }, { title: "ghi", image: require('../../assets/01-tile.png') }, { title: "ghi", image: require('../../assets/02-tile.png') }, { title: "ghi", image: require('../../assets/03-tile.png') }]);
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyl={{ height: 700 }}>
                {/* <View style={{ flexGrow: 1 }}> */}
                <View style={styles.box2}>
                    <Image
                        style={{ width: "100%", height: 200 }}
                        source={require('../../assets/vedio.png')} />
                </View>
                <View style={styles.box3}>
                    <View style={styles.downsec}>
                        <View style={{ flex: 2, }}>
                            <Text style={styles.motivation2}>About Motivations</Text></View>
                        <View style={{ flex: 1.5, alignItems: "flex-end", paddingLeft: 1, }}>
                            <Image style={styles.list} source={require('../../assets/list.png')} />
                        </View>
                        <View style={{ flex: 1, alignItems: "center", paddingLeft: 3, }}>
                            <Image style={styles.download} source={require('../../assets/download.png')} />
                        </View>
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.rats}>2021</Text>
                        <Image style={styles.star} source={require('../../assets/rating.png')} />
                        <Text style={styles.rats}>20.5</Text>
                        <Image style={styles.star} source={require('../../assets/loading.png')} />
                        <Text style={styles.rats}>152mins</Text>
                        <Text style={styles.hdsc}>HD</Text>
                    </View>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla temporibus ratione doloremque. Vero cum esse blanditiis quisquam omnis repellendus recusandae distinctio.Vel, quasi dolores blanditiis delectus nihil, Lorem ipsum dolor</Text>
                </View>
                <View style={styles.box5}>
                    <Button
                        onPress={() => setModalVisible(true)}
                        title="Watch Now"
                    />
                </View>
                <View style={styles.box6}>
                    <View style={styles.video}>
                        <Text style={styles.related}>Related Videos</Text>
                        <Text style={styles.viewall}>View All</Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index}
                        data={reason}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ height: 100, width: 100 }}>
                                    <Image style={styles.tile} source={item.image} />
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
                {/* </View> */}
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            > 
                <View style={styles.centeredView}>
                        <View style={{backgroundColor:"#24243c",paddingHorizontal:58,paddingVertical:40}}>
                         <View style={styles.popupicon}>
                        <Image style={styles.popup} source={require("../../assets/popdownload.png")} />
                        </View>
                        <Text style={styles.modalText}>Download Film</Text>
                        </View>
                        <View style={{backgroundColor:"#191931",padding:20}}>
                            <View style={{flexDirection:"row", paddingVertical:10}}>
                            <View>
                            <Image style={styles.tick} source={require("../../assets/tick.png")} />
                            </View>
                            <View style={{flexDirection:"row",paddingRight:8}}>
                                <Text style={styles.hihtdv}>High</Text>
                                <Text style={styles.rate}>720</Text>
                            </View>
                            <Text style={styles.soundgb}>3.5 GB</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingVertical:10}}>
                            <View>
                            <Image style={styles.tick} source={require("../../assets/tick.png")} />
                            </View>
                            <View style={{flexDirection:"row",paddingRight:8}}>
                            <Text style={styles.hihtdv}>High</Text>
                                <Text style={styles.rate}>720</Text>
                            </View>
                            <Text style={styles.soundgb}>3.5 GB</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingVertical:10}}>
                            <View>
                            <Image style={styles.tick} source={require("../../assets/tick.png")} />
                            </View>
                            <View style={{flexDirection:"row",paddingRight:8}}>
                            <Text style={styles.hihtdv}>High</Text>
                                <Text style={styles.rate}>720</Text>
                            </View>
                            <View>
                                <Text style={styles.soundgb}>3.5 GB</Text>
                            </View>
                            </View>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Download</Text>
                        </Pressable>
                        </View>
                </View>
            </Modal>
        </View>
    );
}



const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
};

export default connect(mapStateToProps)(DetailScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e101f",
        paddingHorizontal: 10
    },
    box1: {
        flex: 1,
        // backgroundColor: "green",
    },
    back: {
        height: 17,
        width: 20,
    },
    about: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 25,
        paddingHorizontal: 14,
    },
    motivation: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    dots: {
        width: 4, height: 16,
    },
    box2: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    box3: {
        flex: 1.5,
        paddingTop: 10,
    },
    motivation2: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10,
    },
    downsec: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    rating: {
        flexDirection: "row",
        paddingHorizontal: 3,
    },
    rats: {
        color: "#ffffff",
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 12,
    },
    hdsc: {
        color: "#ffffff",
        fontSize: 10,
        borderWidth: 1,
        borderColor: "#ffffff"
    },
    list: {
        width: 18,
        height: 18,
        marginVertical: 10,
    },
    star: {
        width: 12,
        height: 12,
        marginTop: 2,
    },
    download: {
        width: 20,
        height: 20,
        marginVertical: 10,
    },
    box4: {
        flex: 2.5,
    },
    para: {
        color: "#ffffff",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    box5: {
        flex: 1.5,
        paddingTop: 20,
    },
    btn: {
        color: "#ffffff",
    },
    box6: {
        flex: 3,
        paddingTop: 30
    },
    video: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        paddingVertical: 10
    },
    tile: {
        width: 85,
        height: 110,
        resizeMode: "cover",
        marginVertical: 6,
        marginHorizontal: 4,
    },
    related: {
        color: "#ffffff",
    },
    viewall: {
        color: "#1971b8",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#0e101f90"
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 8,
        elevation: 2,
        // marginHorizontal:18
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        marginHorizontal:20,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding:10,
      
      },
      modalText: {
        textAlign: "center",
        color:"#fff"
        
      },
      tick:{
          width:15,
          height:15,
          marginRight:12,
      },
      soundgb:{
          paddingLeft:44,
          color:"#b2b1b6",
          fontSize:12
      },
      hihtdv:{
        color:"#b2b1b6",
        fontSize:12
      },
      rate:{
        color:"#b2b1b6",
        paddingLeft:4,
        fontSize:12
      },
      popup:{
        width:30,
        height:30,
      },
    //   popupicon:{
    //       flex:1,
    //   }
})

