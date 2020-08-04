import React from 'react';
import './App.css';
import UserCard from './UserCard'
import Followers from './Followers'
import axios from 'axios'
import { Container } from 'reactstrap';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        userInfo: {},
        followerInfo: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/gregory-j-wilson')
      .then(res => {
        this.setState({userInfo: res.data})
      })
      .catch(err => {
        console.log(err)
      })

      axios
      .get('https://api.github.com/users/gregory-j-wilson/followers')
      .then(res => {
        this.setState({followerInfo: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
  return (
    <Container fluid="md">
    <h1>Github User Card</h1>
    <UserCard key={this.state.userInfo.id} userInfo={this.state.userInfo} />
    <Followers followerInfo={this.state.followerInfo} />
    </Container>
  )
  }
}

export default App;
