import useFetchData from '../hooks/useFetchData'
import { useTheme } from '../hooks/useTheme'
import getCroppedImageUrl from '../services/image-url'
import './GenresList.css'
import Loading from './Loading'

export default function GenresList({onSelectedGenre, selectedGenre}) {

  const {error, loading, data} = useFetchData('/genres')
  const {mode} = useTheme()

  return (
    <aside className={`genres-container ${mode}`}>
      <header className='genres-heading'><h3>Genres</h3></header>
      {error && <p style={{color: '#777777'}}>{error}</p>}
      {loading && <Loading />}
      <ul className='genres-list'>
        {data && data.map(genre => (
          <li key={genre.id}>
            <img src={getCroppedImageUrl(genre.image_background)} draggable='false' />
            <button onClick={() => onSelectedGenre(genre)} style={{fontWeight: selectedGenre === genre ? 'bold' : ''}}>{genre.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}