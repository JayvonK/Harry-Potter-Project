import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog"
import { IWizard } from "@/Interfaces/Interfaces"
import React from 'react'

const CharacterCardComponent = (props: { w: IWizard }) => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center rounded-md ">
        <AlertDialog >
          <AlertDialogTrigger asChild>
            <div className="w-48 border shadow-lg shadow-gray-500 hover:shadow-yellow-500 rounded-md hover:cursor-pointer">
              <img className="object-cover w-full h-56" src={props.w.image.trim() !== "" ? props.w.image : props.w.name === "Albus Dumbledore" ? "/images/dumbledore.png" : "/images/blankpfp.png"} alt="" />
              <div className="bg-black p-6 w-full">
                <h1 className="text-white HPFont">{props.w.name}</h1>
              </div>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="flex">
                <img className="object-cover aspect-square w-16 rounded-full" src={props.w.image.trim() !== "" ? props.w.image : props.w.name === "Albus Dumbledore" ? "/images/dumbledore.png" : "/images/blankpfp.png"} alt="" />
                <h2 className="ml-5 text-2xl flex items-center HPFont">{props.w.name}</h2>
              </div>
              <div className="grid grid-cols-3">
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

export default CharacterCardComponent
