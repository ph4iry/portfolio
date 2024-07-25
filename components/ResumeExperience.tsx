export default function ResumeExperience({ company, role, dates, description }:{ company: string, role: string, dates: string, description: string }) {
  return (
    <div className="w-full border-2 border-zinc-200/30 p-3 px-5 backdrop-blur-md md:backdrop-blur-none rounded-md">
      <div className="flex items-center mb-2">
        <div className="grow">
          <div className="text-xl">{company}</div>
          <div className="text-base font-semibold">{role}</div>          
        </div>
        <div className="shrink">{dates}</div>
      </div>

      <div className="text-sm italic">
        {description} 
      </div>
    </div>
  )
}