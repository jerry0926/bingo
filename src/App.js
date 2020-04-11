import React, { Component } from 'react';
import styled from 'styled-components'
import { Box, InputBox } from './components'
import { shuffle } from './mainAction'

class App extends Component {
  constructor(props) {
    super(props)
    const originArray = shuffle(new Array(16).keys());
    console.log(Array(16).keys())
    this.state = {
      originArray: originArray
    }
  }



  render() {
    console.log(this.state.originArray)
    return (
      <Bingo>
        <InputBox />
        <Box index={0}>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </Bingo>
    )
  }
}

const Bingo = styled.div`
  text-align: center;
  display: inline-flex;
  width: 400px;
  flex-wrap: wrap;
  margin: 200px 0 0 50%;
  transform: translateX(-50%);
`


export default App;
