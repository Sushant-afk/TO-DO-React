// import React,{Component} from '../build/node_modules/@types/react';
// import ReactDOM from '../build/node_modules/@types/react-dom';
import React,{Component} from 'react';
import './App.css';
import Listitems from './Listitems'

class App extends Component
{

  constructor()
  {
    super();
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = 
    {
      lists:[],
      id:1
    }
  }

  addItem()
  {
    let task = document.getElementById('input').value;
    if(task !== "")
    {
    
      this.setState((prevState) => {
    
        return {
          lists:prevState.lists.concat(task)
        };
      }
      
    )}
   else
   {
     // do nothing
   }
    document.getElementById('input').value = "";
   
  }

  deleteItem(key)
  {
    this.state.lists.splice(key-1,1);
   // console.log(this.state.lists);

    this.setState({lists:this.state.lists})
  }
 
  render()
  {
    return(
      <div className = "App">
       <div className = "heading">To-Do List:</div> 
       <div className = "class1">
        <div className = "header">
          <input id = 'input' type = "text" placeholder = "Enter text"></input>
          <button className = "add" onClick = {this.addItem}>Add</button>
        </div> 
        <div className = "Task" >
          <Listitems delete = {this.deleteItem} entries = {this.state.lists}/>
        </div>
        </div>
      </div>
    )
  }

}
export default App;