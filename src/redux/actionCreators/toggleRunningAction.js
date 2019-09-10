export default function algoToRunAction(isRunning) {
  return{
    type: 'TOGGLE_RUNNING_STATE',
    isRunning,
  }
}