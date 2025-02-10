import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { RiDatabase2Line } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div >
      <h1 className="my-20 text-center text-4xl font-semibold">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-neutral-200 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-200 p-4">
          <RiNextjsLine className="text-7xl" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-200 p-4">
          <RiDatabase2Line className="text-7xl text-red-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-200 p-4">
          <RiNodejsLine className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-200 p-4">
          <RiTailwindCssLine className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  )
}

export default Technologies;