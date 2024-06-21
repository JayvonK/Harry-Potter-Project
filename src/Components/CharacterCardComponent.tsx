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
              <div className="flex mb-4">
                <img className="object-cover aspect-square w-16 rounded-full" src={props.w.image.trim() !== "" ? props.w.image : props.w.name === "Albus Dumbledore" ? "/images/dumbledore.png" : "/images/blankpfp.png"} alt="" />
                <h2 className="ml-5 text-2xl flex items-center HPFont">{props.w.name}</h2>
              </div>

              <div className="grid grid-cols-3 gap-4 gap">

                  <div>
                    <h2>House:</h2>
                    <h3>{props.w.house === "" ? "None" : props.w.house}</h3>
                  </div>

                  <div>
                    <h2>Birthday:</h2>
                    <h3>{props.w.dateOfBirth === null ? "None" : props.w.dateOfBirth}</h3>
                  </div>

                  <div>
                    <h2>Gender:</h2>
                    <h3>{props.w.gender  === "" ? "None" : props.w.gender}</h3>
                  </div>

                  <div>
                    <h2>Actor:</h2>
                    <h3>{props.w.actor  === "" ? "None" : props.w.actor}</h3>
                  </div>

                  <div>
                    <h2>Ancestry:</h2>
                    <h3>{props.w.ancestry  === "" ? "None" : props.w.ancestry}</h3>
                  </div>

                  <div>
                    <h2>Alternate Names:</h2>
                    {
                      props.w.alternate_names.length !== 0 ? props.w.alternate_names.map(name => (
                        <h3>{name}</h3>
                      )) : <h3>None</h3>
                    }
                  </div>

              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

export default CharacterCardComponent
