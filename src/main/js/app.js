import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Fellowship from './components/Fellowship';
import About from "./components/About";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: "fellowship",
      employees: []
    };
  }

  panggilMenu = (menu) => {
    this.setState({ menu: menu })
  }

  tampilMenu() {
    switch (this.state.menu) {
      case "fellowship":
        return <Fellowship/>;
      case "about":
        return <About/>;
    }
  }

  render() {
    return (
      <div className="container my-md-4">
        <Header panggilMenu={this.panggilMenu}/>
        <div className="row">
          <div className="col">{this.tampilMenu()}</div>
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react')
)
