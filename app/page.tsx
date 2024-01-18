import ThreeScene from '@/components/ThreeScene'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="absolute top-0 left-0 h-screen w-screen z-[-9999]">
        <ThreeScene />
      </div>
      <div className="md:mx-24 rounded bg-gray-100/50 w-full max-h-[83%] h-full">
        <div className="w-full h-6">close exit</div>
      </div>
    </main>
  )
}