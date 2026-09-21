import { createContext } from 'react';

export const EligiblesContext = createContext({
    eligibles: [1,2,3,4,5,6,7,8,9],
    handleCandidateClick: () => {}
});