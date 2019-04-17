/*introduction to react */

import React from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
const JSX=(<div>
<h1>Valid JSX</h1>
<p>Unordered list</p>
<hr></hr>
<br/> 
<ul>
<li>hi</li>
<li>hi</li>
<li>hi</li>
</ul>
</div>);
ReactDOM.render(JSX, document.getElementById('root'))
//first parameters is component and second is a section of html
//if we need to add a class , we need to put classNames

//my first component

const printComponent=function(){
return(
    <div>hi</div>
);

}

ReactDOM.render(printComponent(), document.getElementById('root'));

//another way to create a component 

class Animal extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(<h1>Hello components</h1>);
    }

}

let an=new Animal();

ReactDOM.render(an.render(), document.getElementById('root'));


//Component with composition
const ChildComponent = () => {
    return (
        <div>
          <p>I am the child</p>
        </div>
      );
    };
    
    class ParentComponent extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h1>I am the parent</h1>
            {  }
               <ChildComponent></ChildComponent>
    
            {  }
          </div>
        );
      }
    };


    //let pa=new ParentComponent(); or <ParentComponent/>

ReactDOM.render(<ParentComponent/>, document.getElementById('root'));

//this is another example .. nested functions and print in the main class

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };


  const Fruits = () => {
    return (
      <div>
        { }
       <TypesOfFruit></TypesOfFruit>
        {  }
      </div>
    );
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
        <Fruits></Fruits>
          { /* change code above this line */ }
        </div>
      );
    }
  };


  //classic and basic component
  class MyComponent extends React.Component{

    constructor(props){
    super(props);
    
    }
    
    render(){
      return(
    
        <div><h1>My First React Component</h1></div>
    
      );
    }
    
    }
    
    ReactDOM.render(<MyComponent/>,document.getElementById("root"));

    //good example using props

const CurrentDate = (props) => {
    return (
      <div>
        { /* change code below this line */ }
        <p>The current date is:{props.date} </p>
        { /* change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  //passing array by props
  const List= (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join('| ')}</p>
    { /* change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* change code below this line */ }
          <List tasks={["walk","dog","workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk","dog","workout"]}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  ReactDOM.render(<ToDo/>,document.getElementById('root'));

  //if you want to asign a default props ShoppingCart.defaultProps = {items: 0}

  //override a default props
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  Items.defaultProps = {
    quantity: 0
  };
  
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      return <Items quantity={10} />
      { /* change code above this line */ }
    }
  };
  ReactDOM.render(<ShoppingCart/>,document.getElementById('root'));