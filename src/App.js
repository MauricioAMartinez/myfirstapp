import React from "react";
import "./App.css";

function Helloworld(props) {
  const { message } = props;
  return <div id="hello">Hello {message} </div>;
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
