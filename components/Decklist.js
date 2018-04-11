import React from 'react'
import { connect } from 'react-redux'
import {View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'
ItemView=({item,props}) => {
    const data = props.data[item]
    return(
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate(
              'DeckHome',
              {deck : item}
            )}>
        <Text style={[styles.buttonText,{fontSize:18}]}>{item} </Text>
        <Text style={[styles.buttonText,{fontSize:15}]}>{data['questions'].length} card(s)</Text>
    </TouchableOpacity>
    )
}
class DeckList extends React.Component {


    renderArray = ({item}) => {

        const { params } = this.props.navigation.state;
        const deck = this.props.data[item]
        return <ItemView item={item} props={this.props}/>
    }
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
      };
    render() {
        const { params } = this.props.navigation.state;
        const deckList = Object.keys(this.props.data)
       return (
          <View style={styles.container}>
            {(deckList.length) ? <FlatList
                
                data={deckList}
                renderItem={this.renderArray}
            /> :<View><Text style={{fontSize:17}}>You have to create a deck first!</Text></View>}
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
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        color: '#000',
      },

})

function mapStateToProps (state, { navigation }) {
    //const { entryId } = navigation.state.params
    return {
      data: state.cards,
    }
  }
export default connect(mapStateToProps
)(DeckList)