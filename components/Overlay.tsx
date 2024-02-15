import { Transition } from "@headlessui/react";
import { Dispatch, SetStateAction, useReducer, useState } from "react";

const pages: [string, string][] = [
  ['About', '/about'],
  ['Projects', '/projects'],
]

export function Overlay({ navigator }: {navigator:[number, Dispatch<SetStateAction<number>>]}) {
  const [show, setShow] = useState(true);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [currentPage, setCurrentPage] = navigator;
  
  return (
    <>
    <div className="absolute top-0 h-20 w-screen text-white p-10">
      <div className="flex gap-8">
        <p>go back</p>
        <p>icon</p>
      </div>
    </div>
      <div className="absolute bottom-0 w-screen h-[30vh]">
        {
          pages.map((page, i) => (
            <Transition
              key={i}
              show={currentPage == i}
              className={"flex flex-col items-center text-center h-1 overflow-visible"}
              enter="transition-all duration-[1500ms] delay-[700ms]"
              enterFrom="opacity-0 translate-y-5"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-750"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <h1 className="font-bold text-3xl text-white">{page[0]}</h1>
              <Transition
                show={true}
                enter="transition-transform duration-400 delay-400"
                enterFrom="translate-y-6"
                enterTo="translate-y-0"
              >
                <p className="font-bold underline text-xl text-fuchsia-500">VISIT</p>
              </Transition>
            </Transition>
          ))
        }

      </div>
    </>

  );
}
