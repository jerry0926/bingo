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
