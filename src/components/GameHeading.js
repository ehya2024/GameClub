import { useTheme } from '../hooks/useTheme'
import './GameHeading.css'

export default function GameHeading({selectedGenre}) {
  
  const heading = `${selectedGenre ? selectedGenre.name + ' Games' : 'Games'}`
  const {mode} = useTheme()

  return (
    <h3 className={`game-heading ${mode}`}>{heading}</h3>
  )
}