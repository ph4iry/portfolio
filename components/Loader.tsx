import { Transition } from '@headlessui/react'
import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'
import LoadingAnimation from './LoadingAnimation'

export default function Loader({ started, onStarted }:{started: boolean, onStarted: () => void}) {
  const { progress } = useProgress()

  useEffect(() => {
    let interval = setInterval(() => {
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
      leave="transition"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`absolute z-[9999] top-0 left-0 bg-[#110326]/70 backdrop-blur-md flex flex-col gap-4 justify-center items-center w-screen h-screen text-white ${started ? 'hidden' : ''}`}>
        <div className='text-2xl font-bold italic'>
          Loading the Phaedraverse...
        </div>
        {/* <LoadingAnimation /> */}
        <div className='flex flex-col'>
          <button
            className='disabled:bg-red-400/30 border-2 border-white after:p-4 after:border-white/50 after:rounded-md hover:af px-8 py-4 rounded-md' disabled={progress < 100}
            onClick={() => setTimeout(() => onStarted(), 1) }
          >
            Start
          </button>
        </div>
      </div>
    </Transition>
  )
}