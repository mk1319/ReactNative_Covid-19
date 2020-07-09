import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper'


const SingleCountry=({route,navigation})=>{
    navigation.setOptions({ title: route.params[1].name })

        return(
            <View style={{flex:1}}>
                    <Card style={{margin:15}}>
                            <View style={{justifyContent: 'center',flexDirection: 'row',margin:15}}>
                                    <Image source={{uri:`https://www.countryflags.io/${route.params[1].CountryCode}/flat/64.png`}}
                                            style={{width:150, height:120,borderRadius:20,backgroundColor:"#f5f5f5"}}
                                    /> 
                            </View>
                    </Card>
                        <Card style={{margin:10,marginTop:0,paddingBottom:20}}>         
                             <View style={styles.TextView}>
                                <View style={styles.InsideTextView}>
                                    <Text style={styles.TextStyle}>Confirm</Text>
                                    <Text style={styles.TextCount}>{route.params[0].total}</Text>                                        
                                </View>
                                <View style={styles.InsideTextView}>
                                    <Text style={styles.TextStyle}>Recovered</Text>
                                    <Text style={styles.TextCount}>{route.params[0].recovered}</Text>                                      
                                </View>
                                <View style={styles.InsideTextView}>
                                    <Text style={styles.TextStyle}>Deaths</Text>
                                    <Text style={styles.TextCount}>{route.params[2].total}</Text>                                      
                                </View>
                            </View>   
                        </Card> 
            </View>
        )
}

const styles=StyleSheet.create({
                    TextView:{
                            flexDirection:"row",
                            marginTop:10,
                            justifyContent:"space-around",
                    },
                    InsideTextView:{
                                marginTop:10
                    },
                    TextStyle: {
                            fontSize:18
                    },
                    TextCount:{
                            marginTop:5,
                            fontSize:25,
                    }

})


export default SingleCountry