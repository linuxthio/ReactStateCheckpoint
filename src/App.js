import './App.css';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Person: {
        fullName: 'El ADJI DIOP',
        bio: 'Directeur des ressources humaines pendant des annees  ...',
        imgSrc: './photo.png',
        profession: 'Developpeur FullStack Python'
      },
      show: true,
      date:Date.now(),
      elipsed_time:0
    }
    // console.log(props)
  }

  componentDidMount(){
    // this.id=setInterval(() => {
    //   this.timer()
    // }, 1000);
  }

  // timer(){
  //   this.setState({date:new Date()})
  // }

  setShow = () => {
    console.log(this.state.date)
    this.setState({ show: !this.state.show ,elipsed_time:Date.now()-this.state.date,date:Date.now()})
    clearInterval(this.id)
  }

  render=()=> {
    return this.state.show ? (
      <div className="App">
       
        {/* { si l'etat est vrai */}
        <Card>
          <Card.Img src={this.state.Person.imgSrc} />
          <Card.Title>{this.state.Person.fullName}</Card.Title>
          <Card.Title>{this.state.Person.profession}</Card.Title>
          <Card.Title>{this.state.Person.bio}</Card.Title>

        </Card>

        <button onClick={this.setShow}>click in app</button>
      <p>0 secondes</p>

      </div>)
      ://else
      <div className="App">
      <Card>
      <button className='btn1'  onClick={this.setShow}>click in app</button>
      <p>{Math.floor(this.state.elipsed_time/1000)} secondes</p>
      </Card>
      </div>
  }
}
export default App;
