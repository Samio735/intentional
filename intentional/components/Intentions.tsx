import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import type { Intention } from "~types"

import TodoList from "./TodoList"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Toaster } from "./ui/toaster"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./ui/tooltip"
import { useToast } from "./ui/use-toast"

export default function Intentions() {
  function submitIntention() {
    if (intentionName === "") {
      toast({
        title: "Please enter a name"
      })
      return
    }

    setIntention({
      name: intentionName,
      duration: intentionHours * 60 * 60 + intentionMinutes * 60
    })
  }
  const [intention, setIntention] = useStorage<Intention>("intention")
  const [intentionName, setIntentionName] = useState("")
  const [intentionHours, setIntentionHours] = useState(1)
  const [intentionMinutes, setIntentionMinutes] = useState(30)
  const { toast } = useToast()
  if (!intention) {
    return (
      <div className="flex w-[80vw] max-w-md my-10  flex-col gap-6 min-w-60 ">
        <div className="flex flex-col justify-start gap-2">
          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Label htmlFor="intention" className="text-left">
                    What do you intend to do? *
                  </Label>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    The name you choose now determine the tasks you can add
                    later
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex gap-1">
            <Input
              id="intention"
              value={intentionName}
              onChange={(e) => setIntentionName(e.target.value)}
              placeholder="Develop AI browser extension"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submitIntention()
                }
              }}
            />
          </div>{" "}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="hours">For How long ?</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              id="hours"
              placeholder="1"
              className="w-[60px]"
              value={intentionHours}
              onChange={(e) => setIntentionHours(parseInt(e.target.value))}
            />
            <Label htmlFor="hours">hours</Label>
            <Input
              type="number"
              id="minutes"
              placeholder="30"
              className="w-[60px]"
              value={intentionMinutes}
              onChange={(e) => setIntentionMinutes(parseInt(e.target.value))}
            />
            <Label htmlFor="minutes">minutes</Label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <Label htmlFor="">
                    What tasks do you want to accomplish ?
                  </Label>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    The tasks you choose now determine the tasks you can add
                    later
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <Button
          onClick={() => {
            submitIntention()
          }}>
          Start
        </Button>
        <Toaster />
      </div>
    )
  }
  return (
    <div className="flex w-[80vw] max-w-md my-10  flex-col gap-6 min-w-60 ">
      <h1 className="text-xl font-medium ">You are currently working on : </h1>
      <div className="flex gap-2">
        <Input
          id="intention"
          value={intention.name}
          disabled
          placeholder="Develop AI browser extension"
        />
        <Button
          disabled={intention.locked}
          onClick={() =>
            setIntention({ ...intention, locked: !intention.locked })
          }>
          {intention.locked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          )}
        </Button>
      </div>
      <p className="text-xl">
        Time Left :{" "}
        {intention.duration > 60 * 60
          ? Math.floor(intention.duration / 60 / 60) + "h"
          : ""}
        {Math.floor(
          intention.duration -
            Math.floor(intention.duration / 60 / 60) * 60 * 60
        ) / 60}
        min
      </p>
      <TodoList />
      {!intention.locked && (
        <Button onClick={() => setIntention(null)}>End</Button>
      )}{" "}
    </div>
  )
}
