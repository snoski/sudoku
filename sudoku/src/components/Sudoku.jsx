import { useState } from 'react'
import CellBlock from './CellBlock.jsx'

function Sudoku(props) {

  return (
    <>
        <table id="sudoku">
          <tbody>
            <tr>
              <CellBlock 
                data={{
                  cbKey: 1, 
                  startRow:1, 
                  startCol:1
                }}
              />
              <CellBlock 
                data={{
                  cbKey: 2, 
                  startRow:1, 
                  startCol:4
                }}
              />
              <CellBlock 
                data={{
                  cbKey: 3, 
                  startRow:1, 
                  startCol:7
                }}
              />
            </tr>
            <tr>
              <CellBlock 
                data={{
                  cbKey: 4, 
                  startRow:4, 
                  startCol:1
                }}
              />
              <CellBlock 
                data={{
                  cbKey: 5, 
                  startRow:4, 
                  startCol:4
                }}
              />
              <CellBlock 
                data={{
                  cbKey: 6, 
                  startRow:4, 
                  startCol:7
                }}
              />
            </tr>
            <tr>
              <CellBlock 
                data={{
                  cbKey: 7, 
                  startRow:7, 
                  startCol:1
                }}
              />
              <CellBlock 
                data={{
                  cbKey: 8, 
                  startRow:7, 
                  startCol:4
                }}
              />
              <CellBlock 
                data={{
                  cbKey: 9, 
                  startRow:7, 
                  startCol:7
                }}
              />
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default Sudoku
