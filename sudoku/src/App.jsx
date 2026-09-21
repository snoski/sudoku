import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Sudoku from './components/Sudoku.jsx'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>SUDOKU, BABY!</h1>
          <p>
            A <strong>better</strong> place to work your sudoku puzzles.
          </p>
        </div>
      </section>
      <Sudoku />
    </>
  )
}

export default App
