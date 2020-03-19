import React, { Component } from 'react';
import {Button} from 'antd-mobile'

class App extends Component{
  render(){
    return(
      <div>
       <Button onClick={this.goDatipage}>随机答题</Button>
      </div>
    )
  }
  goDatipage = ()=>{
    this.props.history.push('/dati')
  }
}

export default App