import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

export default function Loader({ started, onStarted }:{started: boolean, onStarted: () => void}) {
  const { progress } = useProgress()

  useEffect(() => {
    let interval

    interval = setInterval(() => {
      console.log(`Progress: ${progress}%`)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [progress])
  return (
    <div className={`loadingScreen ${started ? 'loadingScreen--started' : ''}`}>
      <div className='loadingScreen__progress'>
        <div
          className='loadingScreen__progress__value'
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className='loadingScreen__board'>
        <h1 className='loadingScreen__title'>Title</h1>
        <button
          className='loadingScreen__button' disabled={progress < 100}
          onClick={onStarted}
        >
          Start
        </button>
      </div>
    </div>
  )
}