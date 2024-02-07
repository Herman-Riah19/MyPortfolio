export interface Model {
    id: number;
    name: string;
    description: string;
}

export const ServiceModel: Array<Model> = [
  {
    id: 1,
    name: "Développement Web",
    description:
      "Créez une présence en ligne exceptionnelle avec nos services de développement web sur mesure. Des sites web élégants et fonctionnels aux applications web interactives.",
  },
  {
    id: 2,
    name: "Dévéloppement Application",
    description:
      "Transformez votre concept d'application en réalité grâce à notre expertise en développement d'applications. Des applications mobiles aux solutions logicielles robustes.",
  },
  {
    id: 3,
    name: "Data Analyst",
    description:"Analyser les données utilisant des scriptes d'intélligence Artificielle efficace qui permet de faire un système de prévision performant.",
  },
  {
    id: 4,
    name: "Network Security",
    description:
      "Garantir la protection de vos données et la sécurité de votre entreprise avec nos solutions de pointe, conçues pour sécuriser votre présence numérique.",
  },
];