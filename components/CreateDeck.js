import React from 'react'
import {View, TextInput, StyleSheet, Text, TouchableOpacity, Left} from 'react-native'
import {addDeck} from '../actions/action'
import { connect } from 'react-redux'
import {setScore, getScore} from '../actions/action'
import { Ionicons } from '@expo/vector-icons';



class CreateDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    static navigationOptions = {
        title: 'Create Deck',
        headerTintColor: "#f9df81",
        headerStyle: {
          backgroundColor: '#4f869b',
        },
        headerBackTitleStyle: {fontSize: 15,},
     }

    /*() => {
        console.log("KOOOO");
        this.props.navigation.navigate('DeckHome',{deck:this.state.text})
        }); */
    render() {
      const { params } = this.props.navigation.state;
      const addDeck = params ? params.add : null;
      return (
          <View style={{flex:1, backgroundColor: '#60a3bc'}}>
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
                    placeholderTextColor= '#fcf6e0'
                    
                />
                <TouchableOpacity style={styles.button} onPress={()=>{if(this.state.text === ''){alert("You can not leave it empty!")} 
                    else{ this.props.setZeroScore(deck=this.state.text) ;
                    this.props.AddDeck(deck=this.state.text).then(()=>this.props.navigation.navigate('DeckHome',{deck:this.state.text}));
                    }
                    }}>
                    <Text style={styles.buttonText}>Create
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23,
       paddingLeft: 20,
       paddingRight: 20,
       backgroundColor: '#60a3bc',
    },
    label:{
        alignSelf: 'flex-start',
        fontSize: 18,
        color: "#fff"
    },
    input: {
       marginTop: 10,
       height: 40,
       borderColor: '#f9df81',
       borderWidth: 2,
       borderRadius: 8,
       paddingLeft: 10,
       color: 'white',
       fontSize:16,
       },
    button:{
        backgroundColor: '#4f869b',
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
)(CreateDeck)