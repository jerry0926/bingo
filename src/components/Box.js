import React from 'react';
import styled from 'styled-components'
import { chooseBox } from '../mainAction'

const Box = ({...props}) => 
    <BoxStyled 
        onClick={()=>chooseBox('index', props.index)}>
        {props.children}
    </BoxStyled>

const BoxStyled = styled.div`
    height: 100px;
    flex: 1 1 100px;
    line-height: 100px;
    box-shadow: 0 0 1px #000;
    cursor: pointer;
`

export default Box