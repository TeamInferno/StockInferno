import React from 'react';
import Header from './Header';
import Main from './Main';
import {Container} from 'react-materialize';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      search: '',
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
    this.addStock = this.addStock.bind(this);
  }
  componentDidMount() {
    this.setState({ user: window.localStorage.getItem('name') });
  }

  addStock(e) {
    e.preventDefault();
    const symbols = this.state.stocks.map(el => el.symbol);

    if (symbols.indexOf(e.target.symbol) === -1) {
      let newStocks = this.state.stocks.slice().concat({symbol: e.target.symbol.value.toUpperCase()});
      this.setState({ stocks: newStocks });
      axios.post('/api/addstock', { symbol: e.target.symbol.value.toUpperCase(), username: this.state.username })
      .then((res) => {
        let response = JSON.parse(res);
        let newStocks = this.state.stocks.slice().push({ symbol: e.target.symbol.value.toUpperCase(),
        open: response.open, close: response.close });
        this.setState({ stocks: newStocks });
      });
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Header addStock={this.addStock} user={this.state.user}/>
          <Main stocks={this.state.stocks} />
        </Container>
      </div>
    );
  }
}

export default App;