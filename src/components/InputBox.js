import React from 'react';
import styled from 'styled-components'
import { chooseBox, onChange } from '../mainAction'

const InputBox = () => <Input>
    <input value={'123'} onChange={()=>onChange()}/>
    <button
        onClick={(e)=>{chooseBox('value')}}>
        送出
    </button>
</Input>

const Input = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`

export default InputBox