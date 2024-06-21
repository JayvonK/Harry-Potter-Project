import { ISpell, IWizard } from "@/Interfaces/Interfaces";

const url = 'https://potterhead-api.vercel.app/api/';

export const GetAllCharacters = async () => {
    const promise = await fetch(url + 'characters');
    const data: IWizard[] = await promise.json();
    return data;
}

export const GetAllSpells = async () => {
    const promise = await fetch(url + 'spells');
    const data: ISpell[] = await promise.json();
    return data
}

