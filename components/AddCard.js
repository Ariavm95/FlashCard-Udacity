import React from 'react'
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {addCard} from '../actions/action'
import { connect } from 'react-redux'

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textQ: '', textA: ''};
    }
    render() {
        const { params } = this.props.navigation.state;
        const deck = params ? params.deck : null;
        return (
          <View style={styles.container}>
            <Text style={styles.label}>
                Question:
            </Text>
            <TextInput
                style={styles.input}
                placeholder=" Type the question!"
                onChangeText={(textQ) => this.setState({textQ})}
                editable = {true}
                maxLength = {40}
                multiline = {false}
            />

            <Text style={styles.label}>
                Answer:
            </Text>
            <TextInput
                style={styles.input}
                placeholder=" Type the answer!"
                onChangeText={(textA) => this.setState({textA})}
                editable = {true}
                maxLength = {40}
                multiline = {false}
            />
            <TouchableOpacity style={styles.button} onPress={()=>{if(this.state.textQ === '' || this.state.textA ===''){alert('You can not leave either of them empty!')} else{const aCard = {question: this.state.textQ,
                answer: this.state.textA}; this.props.AddCard(deck,aCard); this.props.navigation.goBack()}}}>
                <Text style={styles.buttonText}>Submit
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
        marginTop: 5,
    },
    input: {
       marginTop: 10,
       height: 40,
       borderColor: '#777',
       borderWidth: 2,
       borderRadius: 8,
       paddingLeft: 10,
       marginBottom: 8,
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
    return {
      AddCard: (deck, card) => dispatch(addCard(deck, card)),
      //goBack: () => navigation.goBack(),
    }
  }

export default connect(null, mapDispatchToProps
)(AddCard)
