import React from 'react'
import "../components/styles/gamestyles.css"

export default function GameComponent() {
  return (
    <div className='game-container'>
      <div className='game-image'>
       <img src='../cover.jpg' alt='muie cu ciment'></img>
      </div>

      <div className='game-details'>
        <h2>Titlu</h2>
        <p>Release date</p>
        <p>Game details</p>
      </div>
    </div>
  )
}
