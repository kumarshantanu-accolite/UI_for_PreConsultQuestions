import React, {Component} from 'react';
import {Platform,FlatList, StyleSheet, Text, View} from 'react-native';

export default class APICall extends Component {
    state ={
        data: []
    }
  
    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        const response = await fetch('https://randomuser.me/api?results=10');
        const json = await response.json();
        this.setState({data: json.results});
    }
    render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
        keyExtractor={(x,i)=>i}
        renderItem={({item})=>
    <Text>{`${item.name.first} ${item.name.last}`}</Text>}
        
        />

      
        
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
