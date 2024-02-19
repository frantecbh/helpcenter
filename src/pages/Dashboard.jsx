import {
  BookOpen,
  ChevronRight,
  Search,
  MessageCircleQuestion,
} from 'lucide-react'

import React from 'react'

import logo from '../assets/logo.png'
import { Profile } from '../components/profile'

export const Dashboard = () => {
  return (
    <div className="grid grid-rows-[auto,auto] h-screen w-full">
      <div className="bg-gradient-to-r to-[#6292FD] from-[#5062F2] w-full py-4  text-white px-4">
        <div className="mx-auto max-w-6xl w-full flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex justify-center space-x-2">
              <img src={logo} alt="" className="h-6" />
              <div className=" border-l border-white" />
              <span>HelpCenter</span>
            </div>

            <Profile />
          </div>
          <div className="flex items-center justify-center">
            <p>Como podemos te ajudar?</p>
          </div>
          <form className="w-full flex items-center border px-4 gap-2">
            {' '}
            <Search className="font-semibold" />
            <input
              className="w-full bg-transparent text-xl font-semibold tracking-tight placeholder:text-slate-300 outline-none py-1"
              type="text"
              placeholder="Busque por seu chamado"
              onChange={() => {}}
            />
          </form>
        </div>
      </div>
      <div className="overflow-y-auto ">
        <div className="w-full bg-[#DEE4EE] py-10 px-4 ">
          <div className="mx-auto max-w-6xl w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  ">
              <div className=" w-full bg-zinc-50 flex items-center justify-between px-4 text-slate-500 shadow-md py-6">
                <div className="flex gap-2">
                  <BookOpen />
                  <p>Reportar uma falha</p>
                </div>

                <ChevronRight />
              </div>
              <div className=" w-full bg-zinc-50 flex items-center justify-between px-4 text-slate-500 shadow-md py-6">
                <div className="flex gap-2">
                  <BookOpen />
                  <p>Meus chamados abertos</p>
                </div>

                <ChevronRight />
              </div>
              <div className=" w-full bg-zinc-50 flex items-center justify-between px-4 text-slate-500 shadow-md py-6">
                <div className="flex gap-2">
                  <BookOpen />
                  <p>Políticas de segurança</p>
                </div>

                <ChevronRight />
              </div>
              <div className=" w-full bg-zinc-50 flex items-center justify-between px-4 text-slate-500 shadow-md py-6">
                <div className="flex gap-2">
                  <BookOpen />
                  <p>....</p>
                </div>

                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="px-4">
          <div className="max-w-6xl w-full mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button className=" border w-full border-slate-400 p-5 flex flex-col items-center justify-center gap-4">
                <div className="bg-zinc-200 h-20 w-20 rounded-full flex items-center justify-center text-slate-500">
                  <MessageCircleQuestion size={40} />
                </div>

                <p className="font-bold text-base text-slate-800">
                  Base de Conhecimento
                </p>
                <p className="text-center text-slate-500">
                  {' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum, quis culpa blanditiis numquam dolore suscipit enim.
                  Consectetur voluptatibus eaque odio, incidunt esse
                  exercitationem illo deleniti eum repellendus nesciunt
                  explicabo quis.{' '}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
