import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import './Checklist.css';


class CheckList extends React.Component {
  constructor (props){
    super ();
    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });
  }

  render(){
    return(
      <div>
        <ItemList />
      </div>
    )
  }
}

export default CheckList;

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false,
      message: props.message
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });
  }

  updateInputValue(evt){
    const val = evt.target.value;
    this.setState({
      message: val
    })
    console.log(<strike>this.state.message</strike>)
  }

  render (){
    let textStyle = this.state.checked ? 'textStrike' : 'textnostrike';
    return (
        <div className="horizantal-Container,checkbox-Container">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;
            <input value={this.state.message} className="textClass" id={textStyle} onChange={evt => this.updateInputValue(evt)} />
        </div>
    );
  }
}

let item2 = <Item message="another message" />
let item1 = <Item message="task # 1" />;
let items_all = [item1, item2]


class ItemList extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      allItems: [item1,item2]
    };
    this.addItems = this.addItems.bind(this);
  }

  addItems = () =>{
    let tempItems = <Item message = 'Change me' />
    this.setState(state => {
      const list = state.allItems.push(tempItems);

      return{
        list}
      })
    console.log("clicked")

  }

  render (){
    return (
      <div>
        <div className="horizantal-Container">
          <h1>Goals</h1>&nbsp
          <div className="horizantal-Container">
            <h3 onClick={this.addItems}>Add Items</h3>
          </div>
        </div>
        <ul className="checkBox-div">
          {this.state.allItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
