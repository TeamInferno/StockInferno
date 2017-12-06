import React from 'react';
import Header from './Header';
import Main from './Main';
import {Container} from 'react-materialize';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      stocks: [
        { symbol: 'AAPL',
          open: 220,
          close: 222.5,
          time: ''
        },
        { symbol: 'MSFT',
          open: 120.25,
          close: 115.75,
          time: ''
        },
        { symbol: 'LUV',
          open: 59.5,
          close: 53.25,
          time: ''
        }
      ]
    }
  }
  componentDidMount() {
    this.setState({ user: window.localStorage.getItem('name') });
  }

  render() {
    return (
      <div>
        <Container>
          <Header user={this.state.user}/>
          <Main stocks={this.state.stocks} />
        </Container>
      </div>
    );
  }
}

export default App;