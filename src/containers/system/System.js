import React from 'react'
import { Outlet } from 'react-router-dom'

const System = () => {
    return (
        <div>
            System
            <Outlet />
        </div>
    )
}

export default System