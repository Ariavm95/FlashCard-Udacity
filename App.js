import React from 'react';
import Home from './components/Home'
import Createdeck from './components/Createdeck'
import Decklist from './components/Decklist'
import Deckhome from './components/Deckhome'
import Addcard from './components/Addcard'
import Play from './components/Play'
import {StackNavigator} from 'react-navigation';
import { StyleSheet,TouchableOpacity ,Text, View } from 'react-native';
import { Provider } from 'react-redux';
import reducer from './reducer/index'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const MyApp = StackNavigator({
  Home: { screen: Home },
  Createdeck: {screen: Createdeck},
  Decklist: {screen: Decklist},
  Deckhome: {screen: Deckhome},
  Addcard: {screen: Addcard},
  Play: {screen: Play},
});
export default class App extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
     <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <MyApp/>
          
        </View>
      </Provider>
    )
  }
}


