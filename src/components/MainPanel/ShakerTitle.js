import React from 'react'
import withStore from '../../store/withStore'
import {observer} from 'mobx-react'
import styled, {css} from 'react-emotion'

const SmallTitle = styled('h1')`
    font-size: .9em;
    color: #717171;
`

const BigTitle = styled('h1')`
    margin: 1px 0;
`

const Title = ({title}) => (
    <div>
        <SmallTitle>The</SmallTitle>
        <BigTitle>"{title}"</BigTitle>
        <SmallTitle>Shaker</SmallTitle>       
    </div>
)

const ShakerTitle = ({store}) => (
    <div className={css`text-align:center; height: 3em; margin-top: 3%;`}>
        {
            store.shakerName
            ? <Title title={store.shakerName} />
            : null
        }
    </div>
)

export default withStore(observer(ShakerTitle))