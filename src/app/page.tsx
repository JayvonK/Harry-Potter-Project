'use client'

import { ISpell, IWizard } from "@/Interfaces/Interfaces";
import { GetAllCharacters, GetAllSpells } from "@/utils/DataServices/Services";
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
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import ABCSpellComponent from "@/Components/ABCSpellComponent";
import CharacterCardComponent from "@/Components/CharacterCardComponent";


export default function Home() {

  const [wizards, setWizards] = useState<IWizard[]>([]);
  const [spells, setSpells] = useState<ISpell[]>([]);

  const [mainPage, setMainPage] = useState<boolean>(true);
  const [wizardsPage, setWizardsPage] = useState<boolean>(false);
  const [booksPage, setBooksPage] = useState<boolean>(false);
  const [spellsPage, setSpellsPage] = useState<boolean>(false);
  const [moviesPage, setMoviesPage] = useState<boolean>(false);

  const [currentSearch, setCurrentSearch] = useState<string>("");

  const { toast } = useToast();

  const GetAllWizards = async () => {
    const data: IWizard[] = await GetAllCharacters();
    setWizards(data);
    console.log(data);
  }

  const GetAllSpellsArray = async () => {
    const spell: ISpell[] = await GetAllSpells();
    setSpells(spell);
  }

  const handleBooksClick = () => {
    setPagesFalse();
    setBooksPage(true);
  }

  const handleWizardsClick = () => {
    setPagesFalse();
    setWizardsPage(true);
  }

  const handleSpellsClick = () => {
    setPagesFalse();
    setSpellsPage(true);
  }

  const handleMoviesClick = () => {
    setPagesFalse();
    setMoviesPage(true);
  }

  const handleMainPageClick = () => {
    setPagesFalse();
    setMainPage(true);
  }

  const setPagesFalse = () => {
    setBooksPage(false);
    setWizardsPage(false);
    setSpellsPage(false);
    setMoviesPage(false);
    setMainPage(false);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value)
    console.log(e.target.value)
  }

  const errorToast = () => {
    alert("Please Select One of the Categories in the Navigation Bar")
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "Please Select One of the Categories in the Navigation Bar",
    })
  }


  useEffect(() => {
    GetAllWizards();
    GetAllSpellsArray();
  }, [])

  return (
    <main className="min-h-screen hpBG relative scrollbar">

      <div className="h-full bg-black opacity-75 z-20 absolute w-full bg-fixed"></div>

      <nav className="grid grid-cols-[40%_20%_40%] justify-center z-40 relative bg-black bg-opacity-20 py-4 mb-10 HPFont">
        <div className="flex justify-between items-center ml-12">
          <h2 className="text-white text-xl hover:cursor-pointer" onClick={handleBooksClick}>BOOKS</h2>
          <h2 className="text-white text-xl hover:cursor-pointer" onClick={handleMoviesClick} >MOVIES</h2>
          <h2 className="text-white text-xl hover:cursor-pointer" onClick={handleSpellsClick}>SPELLS</h2>
          <h2 className="text-white text-xl hover:cursor-pointer" onClick={handleWizardsClick}>CHARACTERS</h2>

        </div>

        <div className="flex justify-center">
          <img className="w-52 hover:cursor-pointer" src="/images/Harry-Potter-Logo.png" alt="Harry Potter Logo" onClick={handleMainPageClick} />
        </div>

        <div className="flex items-center mr-12">
          <h2 className="text-white mr-5 text-xl">SEARCH:</h2>
          {mainPage ? <button className="w-full text-xl py-2 rounded-md pl-2 bg-gray-300 text-left text-gray-500" onClick={errorToast}>Type Here</button> : <input className="w-full text-xl py-2 rounded-md pl-2 bg-white" type="text" placeholder="Type Here" onChange={handleSearchChange}/>}
        </div>

      </nav>

      {mainPage && <div className="z-40 relative mx-12">
        <img className="w-full h-[550px] object-cover object-top border border-white rounded-md brightness-75" src="/images/PotterBG.jpg" alt="" />
        {/* <div className="HPFont text-3xl absolute text-white">Welcome to the PotterPedia</div> */}

        <div className="flex justify-between HPFont mt-8 mb-4">
          <h1 className="text-4xl text-white">Top Characters</h1>
          <h1 className="text-4xl text-white underline hover:cursor-pointer" onClick={handleWizardsClick}>View All</h1>
        </div>

        <div className="grid grid-cols-7 pt-4 pb-8">
          {
            wizards.filter(wizard => wizard.name === "Harry Potter" || wizard.name === "Severus Snape" || wizard.name === "Lord Voldemort" || wizard.name === "Albus Dumbledore" || wizard.name === "Rubeus Hagrid" || wizard.name === "Ron Weasley" || wizard.name === "Hermione Granger").map((w, idx) => {
              return (
                <div key={idx} className="flex justify-center flex-col items-center rounded-md ">
                  <CharacterCardComponent w={w}  />
                </div>
              )
            })
          }
        </div>


      </div>}

      {
        wizardsPage && <div className="grid grid-cols-7 gap-4 relative z-40 mx-12 mt-20">
          {
            currentSearch.trim() === "" ? wizards.map((w, idx) => {
              return (
                <CharacterCardComponent w={w} key={idx} />
              )
            }) : wizards.filter(w => w.name.toLowerCase().includes(currentSearch.toLowerCase())).map((w, idx) => {
              return (
                <CharacterCardComponent w={w} key={idx} />
              )
            })
          }
        </div>
      }

      {
        spellsPage && <ABCSpellComponent spells={spells} />
      }

    </main>
  );
}
