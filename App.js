import * as React from 'react';
import { Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import db from "./localDB"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "TextValue":"",
      "displayText":"",
      "chunks":[]
    }

  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header backgroundColor="#9c8210" centerComponent={{
            "text":"Macaco fofo",
            "style":{
              color:"white",
              fontSize:20
            }
          }}/>
          <Image source={{
            uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
          }} style={styles.mokeyImg}/>
          <TextInput onChangeText={text => {
            this.setState({
              "TextValue": text
            });
          }} value={this.state.TextValue} style={styles.Input}/>
          <TouchableOpacity onPress={()=>{
            this.setState({
              chunks:db[this.state.TextValue].chunks
            });
          }} style={styles.button}>
            <Text style={styles.text}>IR</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item,i)=>{
              return (
                <TouchableOpacity key={i} style={styles.button2}>
                  <Text styles={styles.text2}>{item}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  "Input":{
    marginTop:200,
    width:"80%",
    alignSelf:"center",
    height:40,
    textAlign:"center",
    borderWidth:4,
    outline:"none"
  },
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  button:{
    width:"50%",
    height:55,
    alignSelf:"center",
    padding:10,
    margin:10
  },
  text:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',

  },
  mokeyImg:{
    width:150,
    height:150,
    marginLeft:95
  },
  button2:{
    width:"60%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:10,
    margin:5,
    backgroundColor:"red"
  },
  text2:{
    textAlign:'center',
    fontSize:30,
    color:"white"
  }
});
