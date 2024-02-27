import * as Popover from '@radix-ui/react-popover'
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <Popover.Root className="">
      <Popover.Trigger className="">
        <div className="bg-white rounded-xl p-0.5">
          <img
            src="https://github.com/frantecbh.png"
            className="h-14 w-14 rounded-xl"
            alt=""
          />
        </div>
      </Popover.Trigger>
      {/* <Popover.Anchor /> */}

      <Popover.Portal>
        <Popover.Content
          className="rounded w-80 bg-zinc-200 transition-all duration-300 mr-4 px-3 "
          sideOffset={5}
        >
          <div className="grid gap-4">
            <div className="space-y-2">
              <div className="flex flex-col text-sm justify-center border-b border-white py-3">
                <p className="text-slate-800">
                  Bem vindo(a),{' '}
                  <span className="font-semibold">Francisco Menezes</span>
                </p>
                <span>Admin</span>
              </div>
            </div>
            <div className="grid gap-2"></div>
            <div className="flex border-t items-center justify-center  border-white ">
              <button className="flex items-center justify-center mt-2 text-red-800 gap-2 w-full">
                <LogOut />
                Sair da conta
              </button>
            </div>
          </div>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
