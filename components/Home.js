import React from 'react';
import { StyleSheet,TouchableOpacity ,Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'

const key = 'udacity:key'
class Home extends React.Component {
  constructor(props){
    super(props)
  }

  async getData () {
    let response = await AsyncStorage.getItem(key);
    let data = await JSON.parse(response) || {};
    console.log(data)
    this.setState(
      data
    );

  }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
              'Decklist'
            )}>
            <Text style={styles.buttonText}>Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
              'Createdeck',
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