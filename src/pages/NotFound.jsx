import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'


const NotFound = () => {

    return (
        <>
            <Link to='/'>
                <Button className='goBack'><IoMdArrowBack /> home</Button>
            </Link>


            <div style={{
                paddingTop: "20px",
            }}>Not Found</div>
        </>

    )
}

export default NotFound