export default function forceStopAction(forceStop = true) {
  return{
    type: 'FORCE_STOP',
    forceStop,
  }
}