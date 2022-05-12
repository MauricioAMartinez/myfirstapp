import React from "react";
import "./App.css";

/* function Helloworld(props) {
  const {message} = props
  return (<div id="hello">Hello {message} </div>)
} */

class Helloworld extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          Hello {this.props.message}
          <button onClick={this.toggleShow}>Togle Show</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow}>Togle Show</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld message="PrimetText" />
      <Helloworld message="SegundoText" />
      <Helloworld message="TercerText" />
    </div>
  );
}

export default App;
