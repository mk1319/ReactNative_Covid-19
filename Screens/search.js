import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {SearchBar} from 'react-native-elements'
import {Card} from 'react-native-paper'
const Seach=()=>{
            const [search,setSearch]=useState("")
            const [enter,setenter]=useState(false)
            const [data,setdata]=useState([])
        const fatchRecord=()=>{
                        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${search}`, {
	                "method": "GET",
	                "headers": {
		        "x-rapidapi-host": "covid-193.p.rapidapi.com",
		        "x-rapidapi-key": "128651c3famsh9612c7b0a543ca0p169025jsn00d5003af28e"
	                }
                        }).then(res=>res.json())
                        .then(response => {
                                setdata(response.response[0])
                                setenter(true)
                        }).catch(err => {
	                        console.log(err);
                        });
        }
        const SearchData=()=>{
                return(
                         <View
                        //onPress={()=>{props.navigation.navigate("SingleCountry",tempdata)}}
                                style={{marginTop:10,justifyContent: 'center'}}
                         >
                                 {
                                         data==undefined?
                                         <Card style={{margin:5,padding:20}}>
                                                 <Text style={{fontSize:20,textAlign: 'center'}}>Record Not Found!!!</Text>
                                                 <Text style={{fontSize:15,textAlign: 'center',margin:5,color:"red"}}>Check Spalling or Net Connection !!!</Text>
                                         </Card>:<View style={ stylesofalldata.mainview}>
                                <Card>
                                <View style={stylesofalldata.viewsofalldata}>
                                        <Text style={stylesofalldata.TextOfAlldata}>Confirmed</Text>
                                        <Text style={stylesofalldata.TextCount}>{data.cases.total}</Text>
                                </View>
                                </Card>
                               <Card style={{marginTop:10}}>
                               <View style={stylesofalldata.viewsofalldata}>
                                        <Text style={stylesofalldata.TextOfAlldata}>Recovered</Text>
                                        <Text style={stylesofalldata.TextCount}>{data.cases.recovered}</Text>
                                </View>
                               </Card>
                               <Card style={{marginTop:10}}>
                               <View style={stylesofalldata.viewsofalldata}>
                                    <Text style={stylesofalldata.TextOfAlldata}>Deaths</Text>
                                    <Text style={stylesofalldata.TextCount}>{data.deaths.total}</Text>
                                </View>
                               </Card>
                            </View>
                                 }
                        </View>
                )

                }

    
    const theme={
        colors:{
        },
        containerStyle:{
               
        }
    }

    return(
        <View style={{flex:1}}>
               <SearchBar
                 placeholder="Type Here...City Name"
                 value={search}
                 platform="android"
                 onChangeText={text=>{
                      setSearch(text)
                 }}
                 onSubmitEditing={()=>
                                        fatchRecord()
                                }
                 theme={theme}
                />
               { enter==true?<SearchData/>:null}
        </View>
    )
}

const stylesofalldata= StyleSheet.create({  
        mainview:{
                margin:10,
                flexDirection: 'column',
                justifyContent:"space-around",
                paddingBottom:1,
                marginBottom:0
        },
        viewsofalldata:{
                margin:5,
                borderBottomColor:"black",
                borderBottomWidth:1,
                marginTop:10
        },
        TextOfAlldata:{
                margin:2,
                fontSize:20,
                textAlign: 'center',
                
        },
        TextCount:{
            fontSize:25,
            marginTop:15,
            textAlign: 'center',
            height:40
        }
    })

export default Seach;

