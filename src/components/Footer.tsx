import React from "react"

export default function Footer() {
  return (
    <div className="bg-black py-4">
      <div>
        <h1 className="text-white text-center text-2xl">Download now</h1>
        <div className="flex justify-center border-b border-solid border-gray-100 py-4">
          <div className="border border-solid border-gray-100 rounded bg-black w-48 h-16 mx-1"></div>
          <div className="border border-solid border-gray-100 rounded bg-black w-48 h-16 mx-1"></div>
          <div className="border border-solid border-gray-100 rounded bg-black w-48 h-16 mx-1"></div>
          <div className="border border-solid border-gray-100 rounded bg-black w-48 h-16 mx-1"></div>
        </div>
      </div>
    </div>
  )
}