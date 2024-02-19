import styled from 'styled-components';
import React from 'react'

const Wrapper = styled.section`
display:flex;
align-items: center;
gap:5vw;
padding-top:20px;
`;

const InfoImage = styled.img`
display:block;
width:40vw;
height:60%;
object-fit:fill;
object-position:center;
box-shadow: 0px 4px 8px rgba(13, 13, 13, 0.282);
`;

const InfoTitle = styled.h1``;

const ListGroup = styled.div``;

const ListItem = styled.li``;
const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
gap:10px;
`;



export const Info = (props) => {
    const {
        name = {},
        flags,
        capital,
        population,
        region,
        subregion,
        currencies,
        languages,
        borders,
    } = props
    const { png, alt } = flags
    return (
        <Wrapper>
            <InfoImage src={png} alt='image' />
            <div className="title">
                <InfoTitle>
                    <b> {name.common}</b>
                </InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b>
                            {
                                name.nativeName
                                &&
                                (
                                    name.nativeName.ara
                                    &&
                                    name.nativeName.ara.official
                                    ||
                                    name.nativeName.ell
                                    &&
                                    name.nativeName.ell.official
                                )}

                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Currency:</b> {currencies.name}
                        </ListItem>
                        <ListItem>
                            <b>Languages:</b> {languages.ell}
                        </ListItem>
                    </List>
                </ListGroup>
            </div>
        </Wrapper>
    )
}

export default Info