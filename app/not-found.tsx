import NotFound3D from "@/components/NotFound3D";

export default function NotFound() {
  return (
    <div className="bg-[#040108] text-white h-screen w-screen flex flex-col items-center justify-center text-center">
      <NotFound3D />
      <p className="italic font-bold text-lg">Woops... we might&apos;ve accidentally steered the ship off course.</p>
      <a href="/" className="italic underline">Head back home</a>
    </div>
  )
}