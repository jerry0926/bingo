import React, { Component } from 'react';
import styled from 'styled-components'
import { Box, InputBox } from './components'
import { connect } from 'react-redux'
import { mapStateToProps } from './action'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Bingo>
          <InputBox />
          {
            this.props.originArray.map(
              (val, index) => <Box key={`arrayBox_${index}`} index={index} className={this.props.chooseArray.includes(index) ? 'select' : ''}>{val}</Box>
            )
          }
          <ReStart>
            <button
              onClick={(e) => this.props.dispatch({ type: 'RESTART' })}>
              重新開始
            </button>
          </ReStart>
        </Bingo>
        {this.props.gameState && <HintModal>
          <div className='win'>
            <p>您獲勝了</p>
            <button
              onClick={(e) => this.props.dispatch({ type: 'RESTART' })}>
              再來一局
            </button>
          </div>
        </HintModal>}
      </React.Fragment>
    )
  }
}

const Bingo = styled.div`
  text-align: center;
  display: inline-flex;
  width: 400px;
  flex-wrap: wrap;
  margin: 80px 0 0 50%;
  transform: translateX(-50%);
  .select{
    background-color: #4CAF50;
  }
`

const ReStart = styled.div`
    text-align: center;
    width: 100%;
    padding-top: 20px;
`

const HintModal = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  .win{
    width: 300px;
    height: 100px;
    background-color: #dec094;
    margin: 50vh 0 0 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    font-size: 30px;
    color: #582816;
    letter-spacing: 5px;
    flex-wrap: wrap;
    p{
      width: 100%;
      text-align: center;
      margin: 0;
    }
  }
`

export default connect(mapStateToProps)(App);
