import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import control from './controls.module.scss'
import Select from 'react-select'
import './../App.scss'

import styled, { ThemeProvider } from 'styled-components';

export const Controls = ({ onSearch }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionValue = region?.value || ''
    onSearch(search, regionValue);
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <div className={control.container}>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          placeholder='region'
          defaultValue={options}
          value={region}
          onChange={setRegion}
          isSearchable={false}
          isClearable
        />
      </div>
    </ThemeProvider>
  );
};

export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <div className={control.boxSearch}>
        <IoSearchOutline />
        <input type="search" value={search} onChange={handleChange} placeholder='Search for a country...' />
      </div>

    </>
  )
}
export const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]



const theme = {
  light: {
    background: '#fff',
    color: '#000',
    optionColor: '#000'
  },
  dark: {
    background: 'rgb(48, 46, 46)',
    color: '#fff',
    optionColor: '#fff'
  }
};

const CustomSelect = styled(Select)`
  width: 200px;

  .css-1dimb5e-singleValue {
    color: ${({ theme }) => theme.color};
  }

  .css-1nmdiq5-menu {
    background: var( --bg);
  }

  .css-yk16xz-control {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: none;
    box-shadow: 0px 4px 8px rgba(13, 13, 13, 0.282);
    border-radius: 10px;
    padding: 2px;
    height: 50px;
  }

  .css-26l3qy-menu {
    background: var( --bg);
    color: ${({ theme }) => theme.color};
  }

  .css-tlfecz-indicatorSeparator {
    background: ${({ theme }) => theme.color};
  }

  .css-16fj2bp-option {
    color: ${({ theme }) => theme.optionColor};
    cursor: pointer;
  }

  .css-12jo7m5-option--is-selected {
    background-color: ${({ theme }) => theme.selectedBackground};
  }

  .css-12jo7m5-option--is-selected {
    color: ${({ theme }) => theme.selectedOptionColor};
  }

  .css-13cymwt-control {
    background-color: transparent;
    box-shadow: 0px 4px 8px rgba(13, 13, 13, 0.282);
    border-style: none;
  }
  
  .css-t3ipsp-control {
    background-color: transparent;
    border-color: ${({ theme }) => theme.color};
    box-shadow: none;
  }
   .css-1dimb5e-singleValue{
    color:var(--color)
  }
`;
