export default function algoToRunAction(algoToRun) {
  return{
    type: 'SELECT_ALGORITHM',
    algoToRun,
  }
}