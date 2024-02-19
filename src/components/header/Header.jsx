import React, { useState, useEffect } from 'react';
import { IoIosMoon } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Theme from '../../common/Theme';
import './header.scss'


const HeaderEl = styled.header`
background: 'transparent';
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


const Title = styled(Link).attrs({
    to: '/'
})`
font-size:20px;
font-weight:600;
`;



const Header = () => {
    //-----------------------------------------
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    //-----------------------------------------


    return (
        <>
            <HeaderEl>
                <div className="container">
                    <Title>Where is the world?</Title>

                    <Theme />
                </div>


            </HeaderEl>
        </>
    )
}

export default Header;