import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

type LoginProps = {
  modalExit: () => void
}

export default function Login({ modalExit }: LoginProps) {
  return (
    <div className="fixed z-10 py-32 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-75">
      <div className="bg-white m-auto p-4 pb-24 max-w-3xl rounded-lg">
        <div className="p-4 text-right">
          <FontAwesomeIcon onClick={modalExit} icon={faTimesCircle} color="gray" size="2x" className="cursor-pointer" />
        </div>
        <h1 className="text-center text-3xl font-bold">Log in to VidWeb</h1>
        <p className="text-center text-gray-500 text-sm">Manage account and more</p>
        <form className="mt-4 w-full">
          <div className="flex flex-col m-auto max-w-md">
            <div className="flex justify-between mb-2">
              <div className="font-bold">Username</div>
              <a href="" className="text-sm">Log in with phone</a>
            </div>
            <input className="border-solid border border-gray-400 focus:border-teal-400 appearance-none mb-2 p-2" placeholder="Username"></input>
            <input className="border-solid border border-gray-400 focus:border-teal-400 appearance-none mb-2 p-2" type="password" placeholder="Password"></input>
            <a className="text-xs" href="">Forgot password?</a>
            <a className="mt-4 text-center bg-gray-200 py-2 text-sm text-gray-500 font-bold" href="">Log in</a>
          </div>
        </form>
      </div>
    </div>
  )
}