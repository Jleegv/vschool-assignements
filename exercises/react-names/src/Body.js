import React, {Component} from "react";



class Body extends Component {
  constructor(){
    super();
      this.state ={
        word: "",
        newItem:[]
      };
      this.updateInput = this.updateInput.bind(this);
      this.submitName = this.submitName.bind(this);
    }

    updateInput(event){
      this.setState({word: event.target.value});
    }

    submitName(event){
      event.preventDefault();
      this.setState((prevState)=> {
        const newItem = [...prevState.newItem];
        newItem.unshift(prevState.word)
        return{newItem}
      });
      this.setState({word: ''});
    }

    deleteName(index) {
      this.setState(prevState => {
        const newItem = [...prevState.newItem]
        newItem.splice(index, 1);
        return {newItem}
      })
    }

  render(){
    const nameList = this.state.newItem.map((name, i)=>{
      return(
      <div key={name + i}>
        <li>{name}</li>
        <button onClick={()=> this.deleteName(i)}>DELETE</button>
      </div>
      )
    })

    return(
      <div>
      <form onSubmit={this.submitName}>
        <input onChange={this.updateInput} value={this.state.word}/>
        <button>Submit</button>
        <ul></ul>
      </form>
      <h1>{this.state.word}</h1>
      <ul>
        {nameList}
      </ul>
    </div>
    )
  }
}
export default Body;
