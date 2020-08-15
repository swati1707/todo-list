import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]:value
    });
  }

  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list=[...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    const list= [...this.state.list];

    const updatedList=list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }
  render(){
    return(
      <div className="list container">
        <p>Add an Item...</p>
        <br />
        <input 
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
          onClick={() => this.addItem()}
        >Add Item</button>
        <br />
        <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>x</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
export default App;