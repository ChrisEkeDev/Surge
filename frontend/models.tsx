export interface Vehicle  {
    id: number;
    name: string;
    make: string;
    model: string;
    year: number;
    chargerId: number
}

export interface Location {
    id: number;
    name: string;
    address: string;
    distance: number;
}

export interface Charger {
    id: number;
    name: string;
}

const bmw:Vehicle = {
    id: 1,
    name: "My BMW",
    make: "BMW",
    model: "i4",
    year: 2023,
    chargerId: 4
}

const nissan:Vehicle = {
    id: 2,
    name: "My Nissan",
    make: "Nissan",
    model: "Leaf",
    year: 2023,
    chargerId: 1
}

const tesla:Vehicle = {
    id: 3,
    name: "My Tesla",
    make: "Tesla",
    model: "Model X",
    year: 2023,
    chargerId: 2
}

const texaco:Location = {
    id: 1,
    name: 'Texaco',
    address: '123 Street St, City, ST',
    distance: 5
}

const shell:Location = {
    id: 2,
    name: 'Shell',
    address: '456 Street St, City, ST',
    distance: 10,
}

const exxon:Location = {
    id: 3,
    name: 'Exxon',
    address: '789 Street St, City, ST',
    distance: 15
}

const sae:Charger = {
    id: 1,
    name: 'SAE J1772'
}

const mennekes:Charger = {
    id: 2,
    name: 'Type 2 Mennekes'
}
const css1:Charger = {
    id: 3,
    name: 'Type 1 CSS Combo 1'
}
const css2:Charger = {
    id: 4,
    name: 'Type 2 CSS Combo 2'
}
const chademo:Charger = {
    id: 5,
    name: 'CHAdeMO'
}
const teslas:Charger = {
    id: 6,
    name: 'Tesla'
}
const gbtac:Charger = {
    id: 7,
    name: 'GB/T AC'
}
const gbtdc:Charger = {
    id: 8,
    name: 'GB/T DC'
}

export const vehicles = [bmw, nissan, tesla];
export const locations = [texaco, shell, exxon];
export const chargers = [sae, mennekes, css1, css2, chademo, teslas, gbtac, gbtdc]
