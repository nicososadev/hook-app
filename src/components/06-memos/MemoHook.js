import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000)

    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <h2>Counter: { counter } </h2>
            <button onClick={ increment } className="btn btn-success" >+1</button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show )
                }}
            
            >

                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}