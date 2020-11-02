import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

type HeaderProps = {
  modalLogin: () => void,
}

export default function Header({ modalLogin }: HeaderProps) {
  return (
    <div className="flex justify-between text-2xl border-solid border-b border-gray-400 py-4 px-10">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBars} className="mx-4" />
        <div className="font-bold text-3xl">VidWeb</div>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon onClick={modalLogin} icon={faCloudUploadAlt} className="mx-8 cursor-pointer" />
        <div onClick={modalLogin} className="bg-red-500 text-lg text-white py-2 px-10 rounded-sm hover:bg-red-600 cursor-pointer">Login</div>
      </div>
    </div>
  )
}