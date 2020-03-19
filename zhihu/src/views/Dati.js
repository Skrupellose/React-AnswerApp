import React, { Component } from 'react';
import { connect } from 'react-redux'
import asyncFnObj from '../store/asyncFn'
import '../asset/style.css'
class DatiCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTimu: 0,
      timuArr: [],
      optionStyle: ["option", "option", "option", "option"],
      flag: false,
      score: 0
    }
  }
  componentDidMount() {
    this.props.getTimu()
  }
  render() {
    let timuArr = this.props.timuList
    let currentNum = this.state.currentTimu
    let oStyle = this.state.optionStyle
    if (timuArr.length > 0) {
      let options = JSON.parse(timuArr[currentNum].options)
      return (
        <div className='datipage'>
          <h1>{currentNum + 1}:{timuArr[currentNum].quiz}</h1>
          <h2>{timuArr[currentNum].school}-{timuArr[currentNum].type}</h2>
          <div className='options'>
            {
              options.map((item, index) => {
                return (
                  <div key={index} className={oStyle[index]} onClick={() => { this.answerEvent(index) }}>
                    {index + 1}:{item}
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <p>题目加载</p>
        </div>
      )
    }

  }
  goDatipage = () => {
    console.log(this.props)
    this.props.history.push('/dati')
  }
  answerEvent = (index) => {
    if (this.state.flag) {
      return
    }
    let currentAnser = this.props.timuList[this.state.currentTimu].answer
    if (Number(currentAnser) === (index + 1)) {
      let res = this.state.optionStyle
      let currentScore = this.state.score
      res[index] = 'option right'
      currentScore += 10
      this.setState({
        optionStyle: this.state.optionStyle,
        flag: true,
        score: currentScore
      })
    } else {
      let res = this.state.optionStyle
      let rightIndex = Number(currentAnser) - 1
      let currentScore = this.state.score
      res[index] = 'option error'
      res[rightIndex] = 'option right'
      currentScore -= 5
      this.setState({
        optionStyle: this.state.optionStyle,
        flag: true,
        score: currentScore
      })
    }
    setTimeout(() => {
      if (this.state.currentTimu === 9) {
        this.props.history.push('/result', { score: this.state.score })
      } else {
        let num = this.state.currentTimu
        num++
        this.setState({
          currentTimu: num,
          optionStyle: ["option", "option", "option", "option"],
          flag: false
        })
      }
    }, 1000)
  }
}
function mapStateToProps(state) {
  return {
    ...state

  }
}
function mapDispatchToProps(dispatch) {
  return {
    getTimu: async () => {
      let list = await asyncFnObj.getList()
      dispatch(
        {
          type: 'setTimu',
          content: list
        }
      )
      console.log(list)
    }
  }
}


const dati = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatiCom)

export default dati