import React from 'react';
import styled from 'styled-components'
import { chooseBox } from '../mainAction'
import { connect } from 'react-redux'
import { mapStateToProps } from '../action'

const InputBox = (props) =>
    <Input>
        <input value={props.inputValue} onChange={(e) => props.dispatch({ type: 'INPUT_CHANGE', inputValue: e.target.value })} />
        <button
            onClick={(e) => { chooseBox('value') }}>
            送出
        </button>
    </Input>

const Input = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`

export default connect(mapStateToProps)(InputBox)