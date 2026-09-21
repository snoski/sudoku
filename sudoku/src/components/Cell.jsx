import { useState } from 'react';
import { EligiblesContext } from '../context/EligiblesContext.jsx';
import CandidateRow from './CandidateRow.jsx';

function Cell(props) {

  const [eligibles, setEligibles] = useState([1,2,3,4,5,6,7,8,9]);

  const handleCandidateClick = (candidateValue) => {
    setEligibles((prevEligibles) => {
      if (prevEligibles.includes(candidateValue)) {
        return prevEligibles.filter((value) => value !== candidateValue);
      } else {
        return [...prevEligibles, candidateValue];
      }
    });
  };



  return (
    <>
      <td className="cell-block-td">
        <EligiblesContext.Provider value={{ eligibles, handleCandidateClick }}>
          <table className="cell" 
                data-cellKey={props.data.cellKey}
                data-cbKey={props.data.cbKey}
                data-rowKey={props.data.rowKey}
                data-colKey={props.data.colKey}>
            <tbody>
              <CandidateRow 
                data={{
                  startCandidateRow:1, 
                }}
                data-cellKey={props.data.cellKey}
                data-cbKey={props.data.cbKey}
                data-rowKey={props.data.rowKey}
                data-colKey={props.data.colKey}
              />
              <CandidateRow 
                data={{
                  startCandidateRow:4, 
                }}
                data-cellKey={props.data.cellKey}
                data-cbKey={props.data.cbKey}
                data-rowKey={props.data.rowKey}
                data-colKey={props.data.colKey}
              />
              <CandidateRow 
                data={{
                  startCandidateRow:7, 
                }}
                data-cellKey={props.data.cellKey}
                data-cbKey={props.data.cbKey}
                data-rowKey={props.data.rowKey}
                data-colKey={props.data.colKey}
              />
            </tbody>
          </table>
        </EligiblesContext.Provider>
      </td>
    </>
  )
}

export default Cell;
