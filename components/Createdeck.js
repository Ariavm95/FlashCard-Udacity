import React from 'react'
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {addDeck} from '../actions/action'
import { connect } from 'react-redux'
import {setScore, getScore} from '../actions/action'

class Createdeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
      const { params } = this.props.navigation.state;
      const addDeck = params ? params.add : null;
      return (
          <View style={styles.container}>
            <Text style={styles.label}>
                What's this deck about?
            </Text>
            <TextInput
                style={styles.input}
                placeholder=" Type here!"
                onChangeText={(text) => this.setState({text})}
                editable = {true}
                maxLength = {40}
                multiline = {false}
            />
            <TouchableOpacity style={styles.button} onPress={()=>{if(this.state.text === ''){alert("You can not leave it empty!")} else{this.props.AddDeck(this.state.text); this.props.setZeroScore(this.state.text); this.props.navigation.goBack()}}}>
                <Text style={styles.buttonText}>Create
                </Text>
            </TouchableOpacity>
          </View>
      );
    }
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23,
       paddingLeft: 20,
       paddingRight: 20,
    },
    label:{
        alignSelf: 'flex-start',
        fontSize: 18,
    },
    input: {
       marginTop: 10,
       height: 40,
       borderColor: '#777',
       borderWidth: 2,
       borderRadius: 8,
       paddingLeft: 10,
    },
    button:{
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 7,
        height: 35,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        color: '#fff',
      },

})

function mapDispatchToProps (dispatch, { navigation }) {
    //const { entryId } = navigation.state.params
    const score = 0
    return {
      AddDeck: (deck) => dispatch(addDeck(deck)),
      setZeroScore: (deck) => dispatch(setScore(deck, score )),
      //goBack: () => navigation.goBack(),
    }
  }

export default connect(null, mapDispatchToProps
)(Createdeck)