import './GamesList.css'
import useFetchData from '../hooks/useFetchData'
import getCroppedImageUrl from '../services/image-url'
import { DiWindows } from "react-icons/di"
import { IoLogoApple } from "react-icons/io5"
import { DiAndroid } from "react-icons/di"
import { RiPlaystationFill } from "react-icons/ri"
import { IoLogoXbox } from "react-icons/io"
import { VscTerminalLinux } from "react-icons/vsc"
import { SiNintendogamecube } from "react-icons/si"
import Skeleton from './Skeleton'
import GameHeading from './GameHeading'
import { useTheme } from '../hooks/useTheme'

export default function GamesList({selectedGenre, searchedText}) {

  const {error, loading, data} = useFetchData('/games',{params:{genres:selectedGenre?.id, search: searchedText}},[selectedGenre?.id, searchedText])
  const iconsMap = {
    pc: <DiWindows />,
    apple: <IoLogoApple />,
    android: <DiAndroid />,
    playstation: <RiPlaystationFill />,
    xbox: <IoLogoXbox />,
    linux: <VscTerminalLinux />,
    nintendo: <SiNintendogamecube />,
  }

  const skeletons = [1,2,3,4,5,6,7,8,9]

  const {mode} = useTheme()

  return (
    <section className='games-container'>
      <GameHeading selectedGenre={selectedGenre} />
      {error && <p style={{color: '#777777'}}>{error}</p>}
      <div className={`games-list ${mode}`}>
        {loading && skeletons.map(skeleton => <Skeleton key={skeleton} />)}
        {data && data.map(game => (
          <article key={game.id}>
            <img src={getCroppedImageUrl(game.background_image)} draggable='false' />
            <div className='platforms-and-metacritic'>
              <div className='platforms'>
              {game.parent_platforms.map(platform => (
                <i key={platform.platform.id}>{iconsMap[platform.platform.slug]}</i>
              ))}
              </div>
              <span 
              style={{color: game.metacritic > 80 ? 'green' : game.metacritic > 65 ? 'yellowgreen' : 'red',
                backgroundColor: !game.metacritic ? '' : '#a7e0f7'}}
              >{game.metacritic}</span>
            </div>
            <h3>{game.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}