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
//ReactDOM.render(JSX, document.getElementById('root'))
//first parameters is component and second is a section of html
//if we need to add a class , we need to put classNames

//my first component

const printComponent=function(){
return(
    <div>hi</div>
);

}

//ReactDOM.render(printComponent(), document.getElementById('root'));

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

//ReactDOM.render(an.render(), document.getElementById('root'));


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

//ReactDOM.render(<ParentComponent/>, document.getElementById('root'));

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
    
    //ReactDOM.render(<MyComponent/>,document.getElementById("root"));

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

  //ReactDOM.render(<ToDo/>,document.getElementById('root'));

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
  //ReactDOM.render(<ShoppingCart/>,document.getElementById('root'));


  //sending and receiving a data with props and showing with this.

  class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* change code below this line */ }
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
              { /* change code above this line */ }
          </div>
      );
    }
  };
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* change code below this line */ }
              <ReturnTempPassword tempPassword={12345678}/>
            { /* change code above this line */ }
          </div>
      );
    }
  };

  //concept:A stateless functional component is any function you write which accepts props and returns JSX

  //updating a state

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
       
    this.state = {
      name : "Name"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


//Render State in the User Interface

class MyComponent5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
          <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

//

class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
 const name=this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
      <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

//if you need to update a state, you need to use setState

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
this.setState({
  name: 'React Rocks!'
});
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
//Use State to Toggle an Element
class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
 this.toggleVisibility=this.toggleVisibility.bind(this);

    // change code above this line
  }
  // change code below this line
toggleVisibility(){
if(this.state.visibility==true){
this.setState({
      visibility: false
    });} 
else {
this.setState({
      visibility: true
    });
}
}
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

//working in a counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
  increment(){
    this.setState({
      count:this.state.count+1
      });
  }
  
  decrement(){
    this.setState({
    count:this.state.count-1
    });
  }
  
  reset(){
    this.setState({
      count:0
      });
  }
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

//ReactDOM.render(<Counter/>,document.getElementById("root"));

//handle a input form
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    // change code below this line
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(event){
    this.setState({
      input:event.target.value
    });
  }

  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState({
      input: '',
      submit: this.state.input
    });
  }
  // change code above this line
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.submit}</h1>
        { /* change code below this line */}
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
        <button type='submit'>Submit!</button>
        </form>
      </div>
    );
  }
};

//ReactDOM.render(<ControlledInput/>,document.getElementById("root"));
///Pass State as Props to Child Components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/* your code here */ />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}/* your code here */ </h1>
    </div>
    );
  }
};

///Pass a Callback as Props
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};