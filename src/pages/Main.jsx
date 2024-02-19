import React from 'react'
import main from './main.module.scss'

const Main = ({ children }) => {
    return (
        <>
            <div className={main.container}>
                {children}
            </div>
        </>
    )
}

export default Main