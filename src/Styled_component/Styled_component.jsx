/*
https://styled-components.com/ 
https://styled-components.com/docs/basics    

styled-components is the result of wondering how we could enhance CSS for styling 
React component systems. 
By focusing on a single use case we managed to optimize the experience 
for developers as well as the output for end users.

Apart from the improved experience for developers, styled-components provides:

Automatic critical CSS
No class name bugs:
Easier deletion of CSS:
Simple dynamic styling:
Painless maintenance:

npm install --save styled-components


*/

import React from 'react'
import styled from 'styled-components';


export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const MyButton = styled.button`
border:2px solid palevioletred;
font-weight:bolder;
border-radius:10px;
padding:10px 35px;
background:none;
color:skyblue;
display:block;
margin:0 auto;&:hover{
background : palevioletred;
color:white;}`;

const Button1 = styled.button`
font-weight:bolder;
border-radius:10px;
padding:10px 35px;
background:red;
color:skyblue;
display:block;
margin:0 auto;
`
const Button2 = styled(Button1)`
background:green;
`
const Button3 = styled(Button1)`
background:blue;
`
/* Adapt the colors based on primary prop */
const Button4 = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;


function Styled_component() {




    return (
        <div>
            <h1>Styled_component</h1>
            <hr />

            <Title>
                <h1> Hi i amy styled Component</h1>
            </Title>

            <hr />

            <MyButton>styled Button</MyButton>
            <hr />
            <Button1>button 1</Button1>
            <Button2>button 2</Button2>
            <Button3>button 3</Button3>

            <hr />

            <Button4> Dynamic Button 4</Button4>
            <Button4 primary> Dynamic Button 4</Button4>


        </div>
    )
}

export default Styled_component