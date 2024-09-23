import { useState, useEffect } from 'react'
import './BackToTop.css'
import { TbSquareRoundedChevronUpFilled } from "react-icons/tb"

export default function BackToTop() {

  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 350) {
              setShowBtn(true)
          } else {
              setShowBtn(false)
          }
      })
  }, [])

  return (
      <TbSquareRoundedChevronUpFilled 
      className={showBtn ? 'toTop-icon active' : 'toTop-icon'}
      onClick={() => window.scroll({top: 0, behavior: 'smooth'})}
      />
  )
}