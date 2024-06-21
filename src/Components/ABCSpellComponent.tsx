import { ISpell } from '@/Interfaces/Interfaces'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import SpellComponent from './SpellComponent'


const ABCSpellComponent = (props: { spells: ISpell[] }) => {
    return (
        <>
            {
                <div className="mx-12 relative z-40">
                    <SpellComponent spells={props.spells} letter='A'/>
                    <SpellComponent spells={props.spells} letter='B'/>
                    <SpellComponent spells={props.spells} letter='C'/>
                    <SpellComponent spells={props.spells} letter='D'/>
                    <SpellComponent spells={props.spells} letter='E'/>
                    <SpellComponent spells={props.spells} letter='F'/>
                    <SpellComponent spells={props.spells} letter='G'/>
                    <SpellComponent spells={props.spells} letter='H'/>
                    <SpellComponent spells={props.spells} letter='I'/>
                    <SpellComponent spells={props.spells} letter='J'/>
                    <SpellComponent spells={props.spells} letter='K'/>
                    <SpellComponent spells={props.spells} letter='L'/>
                    <SpellComponent spells={props.spells} letter='M'/>
                    <SpellComponent spells={props.spells} letter='N'/>
                    <SpellComponent spells={props.spells} letter='O'/>
                    <SpellComponent spells={props.spells} letter='P'/>
                    <SpellComponent spells={props.spells} letter='Q'/>
                    <SpellComponent spells={props.spells} letter='R'/>
                    <SpellComponent spells={props.spells} letter='S'/>
                    <SpellComponent spells={props.spells} letter='T'/>
                    <SpellComponent spells={props.spells} letter='U'/>
                    <SpellComponent spells={props.spells} letter='V'/>
                    <SpellComponent spells={props.spells} letter='W'/>
                    <SpellComponent spells={props.spells} letter='X'/>
                    <SpellComponent spells={props.spells} letter='Y'/>
                    <SpellComponent spells={props.spells} letter='Z'/>
                </div>
            }
        </>
    )
}

export default ABCSpellComponent
