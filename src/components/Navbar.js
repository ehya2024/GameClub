import './Navbar.css'
import navLogo from '../assets/game-club-logo-3.jpg'
import SearchInput from './SearchInput'
import { useTheme } from '../hooks/useTheme'

export default function Navbar({onSearchedText}) {

  const {mode, changeMode} = useTheme()

  return (
    <nav className={`navbar ${mode}`}>
      <div className='container'>
        <img src={navLogo} alt='logo' draggable='false' />
        <SearchInput onSearchedText={onSearchedText} />
        <label> 
          <input type='checkbox' onClick={() => changeMode(mode === 'light' ? 'dark' : 'light')} />
          <span></span>
        </label>
      </div>
    </nav>
  )
}