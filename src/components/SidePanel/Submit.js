import React from 'react'
import {css} from 'react-emotion'
import ButtonStyle from '../../css/ButtonStyle'
import withStore from '../../store/withStore'
import {withRouter} from 'react-router-dom'

const outerDiv = css`
    position: relative;
    height: 100%;
`

const innerDiv = css`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
`


const Submit = ({store, history}) => {
    const submitShaker = () => {
        const shaker = {
            title: store.shakerName,
            image: store.image.url
        }
        store.addShaker(shaker)
        history.push('/browse')
    }

    return (
        <div className={outerDiv}>
            <div className={innerDiv}>
                <button onClick={()=>{submitShaker()}} className={ButtonStyle}>SUBMIT YOUR SHAKER</button>
            </div>
        </div>        
    )
}

export default withStore(withRouter(Submit))