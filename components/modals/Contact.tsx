/* eslint-disable @next/next/no-img-element */
'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";
import ProjectCarousel from '../ProjectCarousel';
import LenisScroll from '../LenisScroll';
import MiniScroll from '../MiniScroll';
import { victor_mono } from '@/app/fonts';

type ContactProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function Contact({ open, setOpen }: ContactProps) {
  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     if (open) {
  //       e.preventDefault();
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // })
  return (
    <div className={open && "absolute top-0 z-50 min-h-screen min-w-[100vh]" || ''}>
      <>
        <Transition show={open}
          enter="transition duration-75"
          enterFrom="opacity-0 scale-125"
          enterTo="opacity-100 scale-100"
          leave="transition duration-125"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-125"
        >
          <div>
            <Transition.Child
              as={'div'}
              enter="fixed inset-0 z-50 ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="fixed inset-0 z-50 ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 w-screen h-screen backdrop-blur-md bg-gradient-to-br from-[#053321]/25 to-[#091a24]/25 z-[9998]"/>
            </Transition.Child>

            <Transition.Child
              as={'div'}
              enter="absolute ease-out transition-opacity duration-[500ms] delay-[500ms] z-[9999]"
              enterFrom="opacity-0 scale-110"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-110"
            >
              <div className="modal-content lg:min-h-[250vh] md:min-h-[300vh] min-h-[450vh] p-4 z-[9999] absolute top-0 left-0">
                <MiniScroll setOpen={setOpen} />
                <div className="w-screen h-[inherit] transform transition-all">
                  <div className="h-full text-slate-300 text-left py-10 px-10 relative">
                    <div className="flex justify-center gap-8 h-full">
                      <div className="md:w-4/5 lg:w-3/5 pr-6 py-20 overflow-visible">
                        <h1 className={`text-base italic text-slate-400 font-normal mb-4 border-b border-dashed border-slate-400 pb-2 ${victor_mono.className}`}>contact</h1>
                        <div>
                          <div className="">I&apos;m always looking for like-minded people, so let&apos;s connect! Here&apos;s where you can find me:</div>
                          <div className="mt-6">
                            <div className={`text-sm uppercase text-slate-400 ${victor_mono.className}`}>linkedin</div>
                            <a href="https://www.linkedin.com/in/phaedra-sanon/" className="text-base transition hover:text-white" target="_blank" rel="noreferrer noopener" >linkedin.com/in/phaedra-sanon</a>
                          </div>
                          <div className="mt-6">
                            <div className={`text-sm uppercase text-slate-400 ${victor_mono.className}`}>github</div>
                            <a href="https://github.com/ph4iry/" className="text-base transition hover:text-white" target="_blank" rel="noreferrer noopener" >github.com/ph4iry</a>
                          </div>
                          <div className="mt-6">
                            <div className={`text-sm uppercase text-slate-400 ${victor_mono.className}`}>email</div>
                            <a href="mailto:phaedrasanon@gmail.com" className="text-base transition hover:text-white" target="_blank" rel="noreferrer noopener" >phaedrasanon@gmail.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </>
    </div>
  )
}