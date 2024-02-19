import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios'
import { searchByCountry } from '../components/Config';
import { Button } from '../components/Button';
import Info from './Info';


const Details = () => {
    //----------------------------

    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const [country, setCountry] = useState(null)
    const { name } = useParams()
    console.log(country);
    //----------------------------

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({ data }) => setCountry(data[0])
        )
    }, [name])
    return (
        <>
            <Button className='goBack' onClick={goBack}><IoMdArrowBack /> Back</Button>
            {country && (
                <Info {...country} />
            )}

        </>

    )
}


export default Details