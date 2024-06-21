import { ISpell } from '@/Interfaces/Interfaces'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"


const SpellComponent = (props: { spells: ISpell[], letter: string }) => {
    return (
        <div>
            <h1 className="text-white text-4xl HPFont mt-6">{props.letter}</h1>
            <hr className='my-4' />
            {
                props.spells.filter(s => s.name.toLowerCase().startsWith(`${props.letter.toLowerCase()}`)).length > 1 ? props.spells.filter(s => s.name.toLowerCase().startsWith(`${props.letter.toLowerCase()}`)).map((spell, idx) => (
                    <div key='idx'>
                        <Popover>
                            <PopoverTrigger><button className='text-xl underline text-white mb-4'>{spell.name}</button></PopoverTrigger>
                            <PopoverContent>{spell.description}</PopoverContent>
                        </Popover>
                    </div>

                )) : <p className='text-white text-xl pb-4'>No Spells</p>
            }
        </div>
    )
}

export default SpellComponent
