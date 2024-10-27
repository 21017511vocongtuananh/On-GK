import { StatusBar } from "expo-status-bar";
import { StyleSheet , View , Text , TextInput, Image,ScrollView, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const categories = [
//     { id: '1', name: 'Resort', image: require('../assets/images/resort.png') },
//     { id: '2', name: 'Homestay', image: require('../assets/images/homestay.png') },
//     { id: '3', name: 'Hotel', image: require('../assets/images/hotel.png') },
//     { id: '4', name: 'Lodge', image: require('../assets/images/lodge.png') },
//     { id: '5', name: 'Villa', image: require('../assets/images/villa.png') },
//     { id: '6', name: 'Apartment', image: require('../assets/images/apartment.png') },
//     { id: '7', name: 'Hostel', image: require('../assets/images/hostel.png') },
//     { id: '8', name: 'See All', image: require('../assets/images/seeall.png') },
// ];

// const locations = [
//     { id: '1', image: require('../assets/images/photo1.png') },
//     { id: '2', image: require('../assets/images/photo2.png') },
//     { id: '3', image: require('../assets/images/photo3.png') },
//     { id: '4', image: require('../assets/images/photo4.png') },
//     { id: '5', image: require('../assets/images/photo5.png') },
// ];

export default function App() {

    const [category,setCategory] = useState();
    const [location,setLocation] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get('https://671d8d5a09103098807d478d.mockapi.io/categories');
                setCategory(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategory();
    }, []);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get('https://671d8d5a09103098807d478d.mockapi.io/locations');
                setLocation(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLocation();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{
                width:'100%',
                height:500,
            }}>
            <View style={{
                backgroundColor: '#5958b2',
                height: 160,
                width:'100%',
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:30,
                }}>
                    <Image style={{
                        width: 50,
                        height: 50,
                        borderRadius: 20,
                        marginRight:20,
                    }} source={require('../assets/images/logoicon.png')} />
                    <View style={{
                        flexDirection: "row",
                        width: '60%',
                        height: 40,
                        borderRadius: 10,
                        backgroundColor:'#fff',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <TextInput style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                        }} placeholder="Search here..."/>
                        <Image style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            marginLeft: 40,
                            marginRight:20,
                        }} source={require('../assets/images/searchicon.png')} />
                    </View>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:10,
                }}>
                    <Image style={{
                        width:40,
                        height:40,
                        borderRadius:20,
                        resizeMode:'contain',
                      }} source={require('../assets/images/personicon.png')}/>
                    <View style={{
                        marginRight:60,
                        marginLeft:30,
                    }}>
                      <Text style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:"#ccc",
                      }}>Welcome!</Text>
                      <Text style={{
                        fontSize:15,
                        fontWeight:'bold',
                        color:"#ccc",
                      }}>Donna Stroupe</Text>
                    </View>
                    <Image style={{
                        width:30,
                        height:30,
                        borderRadius:20,
                        marginLeft:20,
                    }} source={require('../assets/images/ringicon.png')}/>

                </View>
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:"center",
                alignItems: 'center',
                marginTop:20,

            }}>
               <Text style={{
                marginHorizontal:160,
                fontSize:20,
                fontWeight:'bold',
               }}>Category</Text>
               <Image style={{
                width:40,
                height:40,
                resizeMode:'contain',
                marginRight:160,
               }} source={require('../assets/images/3gach.png')}/>
            </View>
            <FlatList
            data={category.slice(0,8)}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={{
                alignItems: 'center',
                marginRight:25,
                marginTop:30,
                }}>
                    <Image style={{
                      width:50,
                      height:50,
                      borderRadius:30,
                    }} source={item.image}/>
                    <Text style={{fontSize:10, fontWeight:'bold'}}>{item.name}</Text>
                </View>
            )}  
            numColumns={4}
            contentContainerStyle={{
                marginHorizontal:60,
              }}
            />
            <View style={{
                alignItems:'center',
                flexDirection:'row',
                marginTop:20,
                marginBottom:20,
            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    marginHorizontal:50,
                }}>Popular Destination</Text>
                <Image style={{
                width:40,
                height:40,
                resizeMode:'contain',
               }} source={require('../assets/images/3gach.png')}/>
            </View>
            <FlatList
            data={location.slice(0,3)}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
               <View style={{
                  flexDirection:"row",
                  alignItems:'center',
                  
               }}>
                <Image style={{
                    width:80,
                    height:80,
                    borderRadius:10,
                    marginRight:20,
                }} source={item.image}/>
               </View>
            )}
            contentContainerStyle={{
                marginHorizontal:50,
                justifyContent: 'center',
              }}
            />
            <View>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    marginHorizontal:50,
                    marginTop:20,
                    marginBottom:20,
                }}>Recommended</Text>
            </View>
            <FlatList
            data={location.slice(0,2)}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
               <View style={{
                  flexDirection:"row",
                  alignItems:'center',
               }}>
                <Image style={{
                    width:130,
                    height:90,
                    borderRadius:10,
                    marginRight:20,
                }} source={item.image}/>
               </View>
            )}
            contentContainerStyle={{
                marginHorizontal:50,
                justifyContent: 'center',
              }}
            />
            </ScrollView>
            <View style={{
                backgroundColor: '#5958b2',
                height: 120,
                width:'100%',
                flexDirection:"row",
                alignItems:'center',
                justifyContent:'center',
            }}>
               <TouchableOpacity style={{
                alignItems:'center',
               }}>
                 <Image style={styles.imgfooter} source={require("../assets/images/homeicon.png")}/>
                 <Text style={styles.textfooter}>Search</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                alignItems:'center',
               }}>
                 <Image style={styles.imgfooter} source={require("../assets/images/exploreicon.png")}/>
                 <Text style={styles.textfooter}>Search</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                alignItems:'center',
               }}>
                 <Image style={styles.imgfooter} source={require("../assets/images/searchicon.png")}/>
                 <Text style={styles.textfooter}>Search</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                alignItems:'center',
               }}>
                 <Image style={styles.imgfooter} source={require("../assets/images/profileicon.png")}/>
                 <Text style={styles.textfooter}>Search</Text>
               </TouchableOpacity>
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    imgfooter:{
        width:40,
                    height:40,
                    resizeMode:"contain",
                    marginHorizontal:30,
    },
    textfooter:{
        fontSize:10,
        fontWeight:'bold',
        color:"#fff",
    }
});
