"use client"

import { useState } from "react"

import { Checkbox } from "~components/ui/checkbox"

export function TodoItem({ text, completed, setTodos }) {
  return (
    <div className="grid grid-cols-10 gap-1  justify-between items-start w-full group ">
      <div className="flex col-span-9 gap-2 ">
        <Checkbox
          checked={completed}
          onCheckedChange={() => {
            setTodos((todos) => {
              const newTodos = todos.map((todo) => {
                if (todo.text === text) {
                  return { text: todo.text, completed: !todo.completed }
                }
                return todo
              })
              return newTodos
            })
          }}
          id={text}
        />
        <label
          htmlFor={text}
          className={`  text-sm break-words font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            completed ? "line-through opacity-80" : ""
          }`}>
          {text}
        </label>
      </div>
      <div
        className="hidden group-hover:flex opacity-60 hover:opacity-100 w-4 h-4 "
        onClick={() =>
          setTodos((todos) => {
            const newTodos = todos.filter((todo) => todo.text !== text)
            return newTodos
          })
        }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  )
}
