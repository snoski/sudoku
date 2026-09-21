import { useState } from 'react'
import Cell from './Cell.jsx'

function CellBlock(props) {

  return (
    <>
      <td className="sudoku-td">
        <table className="cell-block">
          <tbody>
            <tr>
              <Cell 
                data={{
                  cellKey:1,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow, 
                  colKey: props.data.startCol
                }}
              />
              <Cell 
                data={{
                  cellKey:2,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow, 
                  colKey: props.data.startCol + 1
                }}
              />
              <Cell 
                data ={{
                  cellKey:3,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow, 
                  colKey: props.data.startCol + 2
                }}
              />
            </tr>
            <tr>
              <Cell 
                data={{
                  cellKey:4,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow + 1, 
                  colKey: props.data.startCol
                }}
              />
              <Cell 
                data={{
                  cellKey:5,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow + 1, 
                  colKey: props.data.startCol + 1
                }}
              />
              <Cell 
                data={{
                  cellKey:6,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow + 1, 
                  colKey: props.data.startCol + 2
                }}
              />
            </tr>
            <tr>
              <Cell 
                data={{
                  cellKey:7,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow + 2, 
                  colKey: props.data.startCol
                }}
              />
              <Cell 
                data={{
                  cellKey:8,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow + 2, 
                  colKey: props.data.startCol + 1
                }}
              />
              <Cell 
                data={{
                  cellKey:9,
                  cbKey: props.data.cbKey,
                  rowKey: props.data.startRow + 2, 
                  colKey: props.data.startCol + 2
                }}
              />
            </tr>
          </tbody>
        </table>
      </td>
    </>
  )
}

export default CellBlock
