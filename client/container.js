import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Data from './components/containers/data.container';

export default class App extends Component {
  render(){
    return(
      <Provider store={this.props.store}>
        <Data />
      </Provider>
    )
  }
}
