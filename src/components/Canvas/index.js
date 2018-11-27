import React from 'react'
import {css} from 'react-emotion'
import withStore from '../../store/withStore'

const hidden = css`
    display: none
`

class Canvas extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {store} = this.props
        return(
            <div className={hidden}>
                <canvas ref={c => store.setCanvasRef(c)} id="hiddenCanvas" className={hidden} />
            </div>
        )
    }
}

export default withStore(Canvas)