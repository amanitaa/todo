import React from 'react'
import './SearchBar.css'

function SearchBar({ onInput, placeholder, text}) {
  return (
    <input onInput={onInput} type="text" placeholder={placeholder} defaultValue={text}></input>
  )
}

export default SearchBar