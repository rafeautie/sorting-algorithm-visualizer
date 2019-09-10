
export default function selectAlgorithmAction(algoToRun) {
  return{
    type: 'SELECT_ALGORITHM',
    algoToRun,
  }
}