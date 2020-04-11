import React, { Component } from 'react';
import styled from 'styled-components'
import { Box, InputBox } from './components'
import { connect } from 'react-redux'
import { mapStateToProps } from './action'
// import { shuffle } from './mainAction'

// const originArray = shuffle(Array.from(Array(16).keys(), x=>x+1));

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   originArray: originArray,
    //   input: ''
    // }
  }

  render() {
    return (
      <Bingo>
        <InputBox />
        {
          this.props.originArray.map(
            (val, index) => <Box key={`arrayBox_${index}`} index={index}>{val}</Box>
          )
        }
      </Bingo>
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
`


export default connect(mapStateToProps)(App);
