import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ALL_COUNTRIES } from '../components/Config';
import { Controls } from '../common/Controls';
import List from '../components/countries/List';
import Cart from '../components/countries/Cart';

const HomePage = ({ countries, setCountries }) => {
    const [filterCountries, setFilterCountries] = useState([]);

    const handleSearch = (search, region) => {
        let data = [...countries];
        if (region) {
            data = data.filter(c => c.region.includes(region));
        }
        if (search) {
            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));
        }

        setFilterCountries(data);
    };

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => {
                setCountries(data);
                setFilterCountries(data);
            });
        } else {
            setFilterCountries(countries);
        }
    }, [countries, setCountries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filterCountries.map((c, index) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name.common,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };
                    return (
                        <Link key={c.id || index} to={`/country/${c.name.common}`}>
                            <Cart {...countryInfo} />
                        </Link>
                    );
                })}
            </List>
        </>
    );
};

export default HomePage;
