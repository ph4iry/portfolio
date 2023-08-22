import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { StaticImageData } from 'next/image';

export function ProjectCard({ name, description, photo, link }: {
  name: string,
  description: string,
  photo: string | StaticImageData,
  link: string,
}) {
  return (
    <div className="transition-all rounded-md bg-zinc-600/30 w-full space-y-2 hover:scale-[1.0425]">
      <div className="w-full relative">
        <Image
          src={photo}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full h-auto rounded-t-md"
        />
      </div>
      <div className="text-left px-4 pb-4">
        <div className="text-white font-bold text-2xl">{name}
          <a href={link} className="ml-3 transition-all hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            <span className="sr-only">view on external website</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <div className="text-white text-sm">{description}</div>
      </div>
    </div>
  );
}
