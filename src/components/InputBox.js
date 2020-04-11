import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

const InputBox = (props) => {
    return (
        <Input>
            <input value={props.inputValue} onChange={(e) => props.dispatch({ type: 'INPUT_CHANGE', inputValue: e.target.value })} />
            <button
                onClick={(e) => props.dispatch({ type: 'CHOOSE_BOX', insertType: 'value'})}>
                送出
            </button>
        </Input>
    )
}

const Input = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`



export default connect()(InputBox)