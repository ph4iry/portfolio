import { Transition } from '@headlessui/react'
import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

export default function Loader({ started, onStarted }:{started: boolean, onStarted: () => void}) {
  const { progress } = useProgress()

  useEffect(() => {
    let interval

    interval = setInterval(() => {
      console.log(`Progress: ${progress}%`)
    }, 1000);

    if (progress === 100) {
      clearInterval(interval);
      return;
    }

    return () => {
      clearInterval(interval);
    }
  }, [progress])
  return (
    <Transition
      show={!started}
      as='div'
      leave="transition-all"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`absolute z-[9999] top-0 left-0 bg-white flex flex-col gap-4 justify-center items-center w-screen h-screen ${started ? 'hidden' : ''}`}>
        <div className='text-2xl font-bold'>
          Loading the Phaedraverse...
        </div>
        <div className='flex flex-col'>
          <h1 className='loadingScreen__title'>Title</h1>
          <button
            className='disabled:bg-red-400/30 bg-emerald-400 px-4 py-2 rounded-full' disabled={progress < 100}
            onClick={onStarted}
          >
            Start
          </button>
        </div>
      </div>
    </Transition>
  )
}