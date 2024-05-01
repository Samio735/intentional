import "../style.css"

import { Toaster } from "~components/ui/toaster"
import ActivityCalendar from "~src2"

import Intentions from "../components/Intentions"
import TodoList from "../components/TodoList"

const data = [
  {
    date: "2024-04-02",
    count: 0,
    level: 0
  },
  {
    date: "2024-04-03",
    count: 2,
    level: 1
  },
  {
    date: "2024-04-04",
    count: 16,
    level: 3
  },
  {
    date: "2024-04-05",
    count: 16,
    level: 3
  },
  {
    date: "2024-04-06",
    count: 16,
    level: 3
  },
  {
    date: "2024-04-07",
    count: 10,
    level: 3
  },
  {
    date: "2024-04-08",
    count: 5,
    level: 3
  },
  {
    date: "2024-04-09",
    count: 2,
    level: 3
  },
  {
    date: "2024-04-10",
    count: 7,
    level: 3
  },
  {
    date: "2024-04-12",
    count: 10,
    level: 3
  }
]

export default function Home() {
  return (
    <div className="dark">
      <div className="dark dark:bg-black dark:text-white w-screen h-screen fixed overflow-scroll">
        <div className=" flex  flex-col items-center ">
          <h1 className="text-xl  my-6 font-bold">intentional</h1>

          <div className=" w-[80vw] max-w-md min-w-60">
            <Intentions />
            <Toaster />

            <div className="my-16">
              {/* <ActivityCalendar
                data={data}
                colorScheme="dark"
                hideColorLegend
                hideTotalCount
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
