import { useState } from 'react'
import GamesList from './GamesList'
import GenresList from './GenresList'
import './Main.css'

export default function Main({searchedText}) {

  const [selectedGenre, setSelectedGenre] = useState(null)

  return (
    <main className='main container'>
      <GenresList onSelectedGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      <GamesList selectedGenre={selectedGenre} searchedText={searchedText} />
    </main>
  )
}