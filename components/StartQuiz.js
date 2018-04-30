import React from 'react'
import Card from './Card'
import {View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList, ListView, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import ItemView from './ItemView'
import {clearLocalNotification, setLocalNotification} from '../helper/notification'

class StartQuiz extends React.Component {

    static navigationOptions = {
        title: 'Deck Home',
        headerTintColor: "#f9df81",
        headerStyle: {
          backgroundColor: '#4f869b'
        },
        headerBackTitleStyle: {fontSize: 15,},
     /*    headerLeft:
        <HeaderBarItem  title='Decks' />, */
    }
    /*onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        // Divide the horizontal offset by the width of the view to see which page is visible
        let pageNum = Math.floor(contentOffset.x / viewSize.width) + 1;
        console.log('scrolled to page ', pageNum);
    }*/

    /*componentDidMount(){
        clearLocalNotification()
      .then(setLocalNotification)
    }*/
    goBakcToFirst=()=>{
        this.list.scrollToIndex({ index: 0 });
    }
   
    render() {
      const { params } = this.props.navigation.state;
      const deck = params ? params.deck : null;
      const dataDeck = this.props.data[deck]
      const questionArray = dataDeck['questions']

      return (
          <View style={{flex: 1, backgroundColor: '#60a3bc'}}>
              {(questionArray.length) ?
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                ref={(ref) => { this.list = ref; }}
                keyExtractor={item => item['question']}
                data={questionArray}
                renderItem={
                    ({item}) =>
                    {
                        const size = questionArray.length;
                        const index = questionArray.findIndex( i => i['question'] === item['question'] );
                        return <ItemView item={item} deck={deck} index={index} size={size} backToFirst={this.goBakcToFirst} />
                    }
                }

            /> : <Text style={{fontSize:18, marginHorizontal:10, marginTop:7, color:"white", textAlign:"center"}}>You should have at least one card in your deck!</Text>}
          </View>
      );
    }
}
const styles = StyleSheet.create({

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
      buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },

      correctionButton:{
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 7,
        height: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
})

function mapStateToProps (state, { navigation }) {
    //const { entryId } = navigation.state.params
    return {
      data: state.cards,
    }
  }
export default connect(mapStateToProps
)(StartQuiz)