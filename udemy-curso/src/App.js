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
    const textBol = this.props.isActive ? 'Mostrar' : 'No Mostrar'
    const mapNumber = this.props.arrayOfNumber.map(n=>n*2);
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textBol}</p>
        <p>{this.props.arrayOfNumber}</p>
        <p>{mapNumber.join(', ')}</p>
        <p>{this.props.objInfo.key2}</p>
      </div>
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
