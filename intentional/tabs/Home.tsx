import "../style.css"

import ActivityCalendar from "~src"

import Intentions from "../components/Intentions"
import TodoList from "../components/TodoList"

const data = [
  {
    date: "2023-09-24",
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
            <div className="my-16">
              <ActivityCalendar
                data={data}
                colorScheme="dark"
                hideColorLegend
                hideTotalCount
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
