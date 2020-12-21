import uuidv4 from 'uuid/v4';


const PUBLIK = "Publik"
const ARTIST = "Artist"
const PROGRAMMLEDARE = "Programmledare"
const TEKNIKER = "Tekniker"
const GRUPP = "Mellogänget"

const allFilterCategories = [PUBLIK, ARTIST, PROGRAMMLEDARE,GRUPP]

export {allFilterCategories};


export function getFrequentlyOccurringEvents() {
    
    return [
        {id:uuidv4(), isChecked:false, placement:"pool", title:"Okänd artist går direkt till final", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Tekniker syns i bild", tags:[TEKNIKER]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Programmledare tappar bort sig", tags:[PROGRAMMLEDARE]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Pyroteknik", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Artist har hatt", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Fel låt gick vidare", tags:[GRUPP]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Någon i gruppen går på toa i snabbreprisen", tags:[GRUPP]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Någon sjunger falskt", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Programmledare sjunger", tags:[PROGRAMMLEDARE]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Referens till tidigare vinnare", tags:[PROGRAMMLEDARE,ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Artist skrattar nervöst i Green Room", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Programmledare skämtar", tags:[PROGRAMMLEDARE]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Artist säger att det varit tufft moststånd ikväll", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Artist gör slängkyss till kameran", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Publiken klappar takten", tags:[PUBLIK]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Publik har blinkande lampor", tags:[PUBLIK]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Publik vifftar med ballonger", tags:[PUBLIK]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Tidigare deltagare/vinnare sjunger i mellanakten", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Artist gråter", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Tonartshöjning", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Tekniskt fel", tags:[TEKNIKER]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"G:son eller Kempe har skrivit låten", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Regnbågsflagga i publiken", tags:[PUBLIK]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Någon går på toapaus mitt i låt", tags:[GRUPP]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Någon i sällskapet somnar", tags:[GRUPP]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Tekniker medverkar i mellanaktsnummer", tags:[TEKNIKER]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Fläkt/vind-effekt", tags:[ARTIST]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Programmledare interagerar med Christer Björkman", tags:[PROGRAMMLEDARE]},


        // {id:uuidv4(), isChecked:false,placement:"pool", title:"", tags:[]},
    ]
}