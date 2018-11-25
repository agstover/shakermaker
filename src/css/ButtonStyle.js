//import styled from 'react-emotion'
import {css} from 'emotion'
// color: ${props =>
//     props.primary ? 'hotpink' : 'turquoise'};

const ButtonStyle = css`
    display:inline-block;
    background: none;
    padding:0.35em .5em;
    border:0.1em solid #cd0505;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-size: 20px;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#cd0505;
    text-align:center;
    transition: all 0.2s;
    &:focus {
        outline:0;
    }
    &:hover {
         color:#FFF;
         background-color:#cd0505;
    }
    @media all and (max-width:30em){
     a.button1{
      display:block;
      margin:0.4em auto;
     }
    }  
`

// const Button = () => (<button className={ButtonStyle}></button>)
// `

export default ButtonStyle