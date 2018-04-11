import React from 'react'
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class DeckHome extends React.Component {
    render() {
      const { params } = this.props.navigation.state;
      const deck = params ? params.deck : null;
      const dataDeck= this.props.data[deck];
      const questionArray= dataDeck['questions']
        return (
          <View style={styles.container}>
            <Text style={{marginTop:50, marginBottom:10, fontSize:48}}>{deck}</Text>
            <Text style={{marginBottom:20, fontSize:16}}>{questionArray.length} cards</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
              'StartQuiz',
              {deck: deck}

            )}>
            <Text style={styles.buttonText}>Start quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
              'AddCard',
              {deck: deck}
            )}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
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

  function mapStateToProps (state, { navigation }) {
    //const { entryId } = navigation.state.params
    return {
      data: state.cards,
    }
  }
export default connect(mapStateToProps
)(DeckHome)