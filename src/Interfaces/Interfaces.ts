export interface IWizard {
    name: string,
    alternate_names: string[],
    species: string,
    gender: string,
    house: string,
    dateOfBirth: string,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: IWand,
    patronus: string,
    actor: string,
    alive: boolean,
    image: string;
}

export interface IWand {
    wood: string,
    cor: string,
    length: number;
}