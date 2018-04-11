import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity ,Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import {setLocalNotification} from '../helper/notification'

const key = 'udacity:key'
class Home extends Component {

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
              'DeckList'
            )}>
            <Text style={styles.buttonText}>Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
              'CreateDeck',
              {add: this.addDeck}
            )}>
            <Text style={styles.buttonText}  >Create deck</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  export default connect(
  )(Home)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      color: '#fff',
    },
  });