import { useRef } from 'react';
import './SearchInput.css'
import { FcSearch } from "react-icons/fc";
import { useTheme } from '../hooks/useTheme'

export default function SearchInput({onSearchedText}) {

  const searchRef = useRef(null);
  const {mode} = useTheme()

  return (
    <form className={`search-box ${mode}`} onSubmit={(e) => {
        e.preventDefault()
        if (searchRef.current) return onSearchedText(searchRef.current.value)
    }}>
      <FcSearch />
      <input type='search' placeholder='Search Game...' ref={searchRef} />
    </form>
  )
}