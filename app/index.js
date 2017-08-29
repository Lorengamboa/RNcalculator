import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './components/common/PrimaryButton';
import ResultField from './components/common/ResultField';
import isNumber from './utils/isNumber';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { display: 0, bank: 0, lastKeyPressed: null };
  }

  render() {
    return (
      <View style={{ flex:1 }}>

      <ResultField display={this.state.display} style={{flex:1}}/>

        <View style={{ flex:4, flexDirection: 'row' }}>
            <View style={{flex:3}}>
              {this._renderButtonNumbers()}
            </View>
            <View style={{flex:1}}>
              <PrimaryButton label="X" onPress={this._btnOnPress.bind(this, "X")}/>
              <PrimaryButton label="-" onPress={this._btnOnPress.bind(this, "-")}/>
              <PrimaryButton label="+" onPress={this._btnOnPress.bind(this, "+")}/>
              <PrimaryButton label="/" onPress={this._btnOnPress.bind(this, "/")}/>
            </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <PrimaryButton label="=" onPress={this._btnOnPress.bind(this, "=")}/>
          <PrimaryButton label="C" onPress={this._btnOnPress.bind(this, "C")}/>
        </View>

      </View>
    );
  }

/**
 * [_cleanDisplay description]
 * @return {[type]} [description]
 */
_cleanDisplay() {
  this.setState({
    display: 0,
    bank: 0,
    lastKeyPressed: null
  })
}

/**
 * [_btnOnPress description]
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
  _btnOnPress(input){
    var operator = ['X','+','/','-'];

    var display = this.state.display;

    if(isNumber(input)){
      if(!display) display = "";
      var newDisplay = "" + display + input;
      return this.setState({display: newDisplay});
    }
    if(operator.includes(input))
      return this.setState({bank: this.state.display, display: 0, lastKeyPressed: input});

      switch (input) {
        case "C":
          this._cleanDisplay();
          break;
        case "=":
          this._calculateResult();
          break;
      }

  }

  /**
   * [_calculateResult description]
   * @return {[type]} [description]
   */
  _calculateResult(){
    var operation = this.state.lastKeyPressed;
    var newDisplay = 0;
    var oldDisplay = parseInt(this.state.bank);
    var actualDisplay = parseInt(this.state.display);
    switch (operation) {
      case '+':
      newDisplay = oldDisplay + actualDisplay;
      this.setState({display: newDisplay, bank: 0, lastKeyPressed: null})
        break;
      case '-':
      newDisplay = oldDisplay - actualDisplay;
      this.setState({display: newDisplay, bank: 0, lastKeyPressed: null})
        break;
      case 'X':
      newDisplay = oldDisplay * actualDisplay;
      this.setState({display: newDisplay, bank: 0, lastKeyPressed: null})
      break;
      case '/':
      newDisplay = oldDisplay / actualDisplay;
      this.setState({display: newDisplay, bank: 0, lastKeyPressed: null})
        break;
    }
  }

  /**
   * [_renderButtons description]
   * @return {[type]} [description]
   */
  _renderButtonNumbers(){
    var buttons = [];
    for(var x=0; x<10; x +=3){
      buttons.push(
        <View style={{flex:1, flexDirection: 'row'}}>
          <PrimaryButton onPress={this._btnOnPress.bind(this, x)} label={x} />
          <PrimaryButton onPress={this._btnOnPress.bind(this, x+1)} label={x+1} />
          <PrimaryButton onPress={this._btnOnPress.bind(this, x+2)} label={x+2} />
        </View>
      );
    }
    return buttons;
  }
}

export default App;
