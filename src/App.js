import React, {Component} from 'react';
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.abreBiscoito = this.abreBiscoito.bind(this);

    this.frases = [
      '"A vida trará coisas boas se tiveres paciência."',
      '"Defeitos e virtudes são apenas dois lados da mesma moeda."',
      '"A maior de todas as torres começa no solo."',
      '"Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você."',
      '"Não compense na ira o que lhe falta na razão."']
      
  }

  abreBiscoito(){
    let state = this.state;

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
    console.log(this.frases);
    console.log(this.textoFrase);
    console.log(this.numeroAleatorio);


  }

  render() {  
    return (
      <div className="container">
          <img src={require('./assets/biscoito.png')} className="img"/>
          <Botao nome="Abrir biscoito" acaoBtn={this.abreBiscoito} />
          <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button className="cookieButton" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
