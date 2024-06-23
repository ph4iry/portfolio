import { Transition } from '@headlessui/react'
import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'
import LoadingAnimation from './LoadingAnimation'

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
      leave="transition"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`absolute z-[9999] top-0 left-0 bg-[#110326]/70 backdrop-blur-md flex flex-col gap-4 justify-center items-center w-screen h-screen text-white ${started ? 'hidden' : ''}`}>
        <div className='text-2xl font-bold italic'>
          Loading the Phaedraverse...
        </div>
        <LoadingAnimation />
        <div className='flex flex-col'>
          <Transition
            show={progress === 100}
            enter="transition"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
          >
            <button
              className='disabled:bg-red-400/30 bg-emerald-400 px-4 py-2 rounded-full' disabled={progress < 100}
              onClick={() => setTimeout(() => onStarted(), 0) }
            >
              Start
            </button>
          </Transition>
        </div>
      </div>
    </Transition>
  )
}