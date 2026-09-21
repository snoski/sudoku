import { useState } from 'react'
import Candidate from './Candidate.jsx'

function CandidateRow(props) {

  return (
    <tr>
        <Candidate value={props.data.startCandidateRow + 0} />
        <Candidate value={props.data.startCandidateRow + 1} />
        <Candidate value={props.data.startCandidateRow + 2} />
    </tr>
  )
}

export default CandidateRow
