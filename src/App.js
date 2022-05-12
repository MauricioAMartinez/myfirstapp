import React from 'react';
import './App.css';

function Helloworld (){
  return (
    <div id="hello" >Hello World</div>
  )
}

//const  App = () => <div>This ismy component: <Helloworld/></div>
/*
class App extends React.Component {
  render(){
    return <div>This is my Component: <Helloworld/></div>
  }
}
*/
function App() {
  return (
   <div>This is my component: <Helloworld/><Helloworld/></div>
  );
}

export default App;
