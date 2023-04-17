import { useState, useEffect, KeyboardEvent } from 'react';
import Image from 'next/image'
import buttonStyle from '../../styles/searchComponent.module.scss'

export default function Example() {

    //Functions to enter input value on press enter
    const [inputValue, setInputValue] = useState("");
  
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setInputValue('');
      }
    };
  
    return (
        <>
        <div className={buttonStyle.search}>
          <form >
            <input 
            type="text" 
            placeholder='Find Other Article'
            id="search-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyPress={handleKeyPress}
            />
            <Image src='/main/search_icon.svg' alt='search icon' width='30' height='30' className={buttonStyle.search_icon}/>
          </form>
        </div>
        
        </>
    );
  }