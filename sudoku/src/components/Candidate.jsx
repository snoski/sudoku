import { useState, useContext } from 'react';
import { EligiblesContext } from '../context/EligiblesContext.jsx';

function Candidate(props) {
  const [value, setValue] = useState(props.value);
  const { eligibles, handleCandidateClick } = useContext(EligiblesContext);
  const isSelected = eligibles.length === 1 && eligibles[0] === props.value;

  return (
    <>
      <td
        className={isSelected ? 
          "candidates selected" : "candidates"}
        onClick={() => handleCandidateClick(props.value)}
      >
        {eligibles.includes(props.value) ? props.value : " "}
      </td>
    </>
  )
};

export default Candidate;
