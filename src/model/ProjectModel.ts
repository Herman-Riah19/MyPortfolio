import Rainbow from "../assets/image/raimbow.png"
import Jupiter from "../assets/image/Jupiter.png"
import Trink from "../assets/image/1676461341750.png"
export interface Model {
    id: number;
    title: string;
    type: string;
    img: string;
    link: string;
    description: string;
    date: string;
    technology: string;
}

export let ProjectModel: Array<Model> = [
    {
        id: 1,
        title: "Jupiter",
        type: "Crowfunding mobile money",
        img:`${Jupiter}`,
        link: "http://jupiter.fr",
        description: "An application used to buy and recharge a telephone plan and transfer money with mobile money.",
        date: "Juillet 2023 - Aout 2023",
        technology: "Nodejs/ReactJs/MaterialUI/Firebase"
    },
    {
        id: 2,
        title: "Trink",
        type: "Social media",
        img: `${Trink}`,
        link: "https://github.com/Herman-Riah19/TryInc",
        description: "A platform for exchanging know-how in the field of digital art made on a computer.",
        date: "Septembre 2022 - Mai 2023",
        technology: "AdonisJS/ReactJS/MaterialUI/Sqlite"
    },
    {
        id: 3,
        title: "Rainbow",
        type: "E-Commerce",
        img: `${Rainbow}`,
        link: "https://github.com/Herman-Riah19/TryInc",
        description: "An E-commerce application for fashion clothing made by a craftsman from Madagascar.",
        date: "Novembre 2020",
        technology: "NodeJS/Express/Angular/MySQL"
    },
    
]