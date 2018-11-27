import React from 'react'
import withStore from '../../store/withStore'

const Shaker = ({shaker}) => (
    <div>
        {
            shaker.title
            ? <h1>{shaker.title}</h1>
            : null
        }
        <p>{shaker.image}</p>
    </div>
)

const Browse = ({store}) => (
    <div>
        <h1>Vote for your favorite shaker!</h1>
        {store.shakers.map((shaker, index) => <Shaker key={index} shaker={shaker} />)}        
    </div>
)

export default withStore(Browse)