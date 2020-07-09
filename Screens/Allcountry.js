import React,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,Image,FlatList} from 'react-native';
import {Card} from 'react-native-paper'
import {Icon} from 'react-native-elements'
const Allcountry=(props)=>{
    props.navigation.setOptions({ title:'Covid 19'})
          
            const [Totaldata,setTotalData]=useState([])
            const Data=[
                {CountryCode:"Us",name:"USA"},
                 {CountryCode:"Br",name:"Brazil"},
                {CountryCode:"Ru",name:"Russia"},
                {CountryCode:"it",name:"Italy"},
                {CountryCode:"Ge",name:"Germany"},
                {CountryCode:"IN",name:"India"},
            ]  
            const Total=()=>{
                fetch("https://covid-19-data.p.rapidapi.com/totals", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                        "x-rapidapi-key": "128651c3famsh9612c7b0a543ca0p169025jsn00d5003af28e"
                    }
            }).then(res=>res.json())
            .then(response => {
                setTotalData(response[0])
               
            })
            .catch(err => {
                console.log(err);
            })
            }

            useEffect(()=>{
                Total()
            },[])

    const styles=StyleSheet.create({

        viewstyle:{
                margin:10,
                borderLeftColor:"black",

        },
        textstyle:{
                margin:10,
                fontSize: 15,
        },
        textcount:{
            marginLeft:5,
            fontSize: 20,
            marginBottom:5
        }
})

        const TotalRecord=()=>{
    
  
            return (
                <View style={{borderBottomColor: '#e3e3e3',
                                borderBottomWidth:3,}}>
                    <Card style={{marginBottom:2}}>
                         <Text style={{fontSize:25,textAlign: "center",
                                        margin:8,
                                        marginBottom:0,
                                        textDecorationLine:"underline"
                            }}>
                                        World Wide Total
                            </Text>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}
                        >
                            <View style={styles.viewstyle}>
                                <Text  style={styles.textstyle}>Confirmed</Text>
                                <Text style={styles.textcount}>{Totaldata.confirmed}</Text>
                            </View>
                            <View style={styles.viewstyle}>
                                <Text  style={styles.textstyle}>Recovered</Text>
                                <Text style={styles.textcount}>{Totaldata.recovered}</Text>
                            </View>
                            <View style={styles.viewstyle}>
                                <Text  style={styles.textstyle}>Deaths</Text>
                                <Text style={styles.textcount}>{Totaldata.deaths}</Text>
                            </View>
                        </View>
                    </Card>

                </View>
                    
            )
        }
        const Alldata=(code)=>{
               

                    const [Country,setCountry]=useState([])
               // console.log("code",code.code[0].name)

               const [death,setdeath]=useState(
            []
        )
            function fatchcountry(){
                fetch(`https://covid-193.p.rapidapi.com/statistics?country=${code.code.name}`, {
	                "method": "GET",
	                "headers": {
		        "x-rapidapi-host": "covid-193.p.rapidapi.com",
		        "x-rapidapi-key": "128651c3famsh9612c7b0a543ca0p169025jsn00d5003af28e"
	                }
                }).then(res=>res.json())
                .then(response => {
                    setCountry(response.response[0].cases)
                   //console.log(Object.assign({},response.response[0],response.response[0].deaths))    
                   //console.log(response.response)
                   const death=response.response[0].deaths
                   setdeath(death)
                })
                .catch(err => {
                    console.log(err);
                });  
            }
                  
               useEffect(()=>{fatchcountry()},[])
        const stylesofalldata= StyleSheet.create({  
                mainview:{
                        margin:5,
                    flexDirection:"row", 
                    justifyContent:"space-around"
                },
                viewsofalldata:{

                        margin:5,
                        justifyContent:"space-around"
                            
                },
                TextOfAlldata:{
                        fontSize:15
                },
                TextCount:{
                    fontSize:20,
                }
            })
            
            const tempdata=[]
                tempdata.push(Country)
                tempdata.push(code.code)
                tempdata.push(death)
    
            return(
                         <Card
                            onPress={()=>{props.navigation.navigate("SingleCountry",tempdata)}}
                            style={{margin:1}}
                         >
                            <View style={ stylesofalldata.mainview}>
                                <View style={stylesofalldata.viewsofalldata}>
                                    <Image source={{uri:`https://www.countryflags.io/${code.code.CountryCode}/flat/64.png`}}
                                            style={{width:60, height:60,borderRadius:30,backgroundColor:"gray"}}
                                    />
                                    <Text style={{margin:10,paddingLeft:4}}>{code.code.name}</Text>
                                </View>
                                <View style={stylesofalldata.viewsofalldata}>
                                    <Text style={stylesofalldata.TextOfAlldata}>Confirmed</Text>
                                    <Text style={stylesofalldata.TextCount}>{Country.total}</Text>
                                </View>
                                <View style={stylesofalldata.viewsofalldata}>
                                    <Text style={stylesofalldata.TextOfAlldata}>Recovered</Text>
                                    <Text style={stylesofalldata.TextCount}>{Country.recovered}</Text>
                                </View>
                                <View style={stylesofalldata.viewsofalldata}>
                                    <Text style={stylesofalldata.TextOfAlldata}>Deaths</Text>
                                    <Text style={stylesofalldata.TextCount}>{death.total}</Text>
                                </View>
                            </View>
                        </Card>
                    )

                   
        }

        return(
            <View style={{flex:1,marginTop:1}}>
                  <TotalRecord/>
                  <FlatList
                        data={Data}
                        renderItem={({item})=>
                                       <Alldata code={item}/>
                                    }
                                keyExtractor={item=>item.CountryCode}
                  />
                <Card onPress={()=>{
                    props.navigation.navigate("Search")
                }}>

                 
                    <View style={{borderBottomWidth:3,borderColor:"black",padding:10,
                    backgroundColor:"#edfffe"}}
                    >
                                    <Icon name='search' size={30}/>
                    </View>
                </Card>
            </View>
        )
        
}

export default Allcountry