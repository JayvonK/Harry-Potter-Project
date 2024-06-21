'use client'

import { IWizard } from "@/Interfaces/Interfaces";
import { GetAllCharacters } from "@/utils/DataServices/Services";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import { Button } from "@/Components/ui/button"


export default function Home() {

  const [wizards, setWizards] = useState<IWizard[]>([])

  const [mainPage, setMainPage] = useState<boolean>(true);
  const [wizardsPage, setWizardsPage] = useState<boolean>(false);
  const []

  const GetAllWizards = async () => {
    const data: IWizard[] = await GetAllCharacters();
    setWizards(data);
    console.log(data);
  }

  useEffect(() => {
    GetAllWizards();
  }, [])

  return (
    <main className="min-h-screen hpBG relative scrollbar">

      <div className="h-full bg-black opacity-75 z-20 absolute w-full bg-fixed"></div>

      <nav className="grid grid-cols-[40%_20%_40%] justify-center z-40 relative bg-black bg-opacity-20 py-4 mb-10 HPFont">
        <div className="flex justify-between items-center ml-12">
          <h2 className="text-white text-xl hover:cursor-pointer">BOOKS</h2>
          <h2 className="text-white text-xl hover:cursor-pointer">MOVIES</h2>
          <h2 className="text-white text-xl hover:cursor-pointer">SPELLS</h2>
          <h2 className="text-white text-xl hover:cursor-pointer">CHARACTERS</h2>

        </div>

        <div className="flex justify-center">
          <img className="w-52" src="/images/Harry-Potter-Logo.png" alt="Harry Potter Logo" />
        </div>

        <div className="flex items-center mr-12">
          <h2 className="text-white mr-5 text-xl">SEARCH:</h2>
          <input className="w-full text-xl py-2 rounded-md pl-2 bg-gray-300" type="text" />
        </div>

      </nav>

      <div className="z-40 relative mx-12">
        <img className="w-full h-[650px] object-cover object-top border border-white rounded-md brightness-75" src="/images/PotterBG.jpg" alt="" />
        {/* <div className="HPFont text-3xl absolute text-white">Welcome to the PotterPedia</div> */}
      </div>

      <div className="grid grid-cols-7 gap-4 relative z-40 mx-12 mt-20">
        {
          wizards.map((w, idx) => {
            return (
              <div key={idx} className="flex justify-center flex-col items-center rounded-md ">
                <AlertDialog >
                  <AlertDialogTrigger asChild>
                    <div className="w-48 border shadow-lg shadow-gray-500 hover:shadow-yellow-500 rounded-md hover:cursor-pointer">
                      <img className="object-cover w-full h-56" src={w.image.trim() !== "" ? w.image : "/images/Harry.jpg"} alt="" />
                      <div className="bg-black p-6 w-full">
                        <h1 className="text-white HPFont">{w.name}</h1>
                      </div>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <div className="flex">
                        <img className="object-cover aspect-square w-16 rounded-full" src={w.image.trim() !== "" ? w.image : "/images/Harry.jpg"} alt="" />
                        <h2 className="ml-5 text-2xl flex items-center HPFont">{w.name}</h2>
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
            )
          })
        }
      </div>

      <div className="z-50 w-full h-full bg-black opacity-80">

      </div>

    </main>
  );
}
