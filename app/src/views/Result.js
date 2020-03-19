import React, { Component } from 'react';
import { Button } from 'antd-mobile'

class Result extends Component {
  render() {
    return (
      <div>
        <h1>恭喜你获得：{this.props.location.state.score}分</h1>
        <Button onClick={this.goDatipage}>重新答题</Button>
      </div>
    )
  }
  goDatipage = () => {
    this.props.history.push('/dati')
  }
}

export default Result