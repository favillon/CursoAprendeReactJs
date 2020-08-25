import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return <h2>{props.title}</h2>
}
const HelloTwo = (props) => <h2>{props.title}</h2>

class HelloThree extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render() {

    const {
      arrayOfNumber,
      isActive,
      number,
      objInfo,
      text,
      titleDefault,
    } = this.props
    const textBol = isActive ? 'Mostrar' : 'No Mostrar'
    const mapNumber = arrayOfNumber.map(n=>n*2);
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textBol}</p>
        <p>{arrayOfNumber}</p>
        <p>{mapNumber.join(', ')}</p>
        <p>{objInfo.key2}</p>
        <p>{titleDefault}</p>
      </div>
    ) 
  }
}
Text.defaultProps = {
  titleDefault : 'titulo por defecto'
}

class Contador extends Component{
  constructor(props){
    super(props)
    this.state = {contador:this.props.contadorIncial}
    setInterval(() => {
      this.setState({contador: this.state.contador+1})
    }, 1000);
  }
  render() {    
    return(
      <span>El contador de visitas es : {this.state.contador}</span>
    );
  }
}
Contador.defaultProps = {
  contadorIncial : 900
}

class Field extends Component{
  state = {placeHolder: 'escriba aca'}
  render(){
    return(
      <input type="text" placeholder={this.state.placeHolder} />
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Hello title='Titulo Funcion'/>
        <HelloTwo title='Titulo Arrow Funcion'/>
        <HelloThree title='Titulo Class'/>
        <Text 
          text='String para extension' 
          number={3} 
          isActive={false} 
          arrayOfNumber={[2,3,10]} 
          objInfo={{ key:'Valor llave', key2:'valor llave 2'}}/>
        <Contador contadorIncial={700} />
        <Field />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>cambios</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
