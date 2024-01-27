interface ResumeModel {
    title: string;
    date: string;
    institute: string;
    city: string;
    description: string;
}
const diplome: Array<ResumeModel> = [
    {
        title: "Licence en Informatique, Electronique et Télécommunications",
        date: "2017-2020",
        institute: "GSI Madagascar",
        city:"Analakely, Antananarivo",
        description: "In fact has a specialty in IT and telecommunications networking, but also knowledge of programming such as desktop applications and also web applications.\n There is also the configuration and troubleshooting of computer networks running on GNU/Linux infrastructures"
    },
    {
        title: "Bacc Technique en Management",
        date: "2016-2017",
        institute: "Institut d'Enseignement Technique",
        city:"Amboanjombe, Antananarivo",
        description: "Specializing in Business Management, Finance and also Accounting, I continued this course at high school level with the aim of introducing myself into the field of Entrepreneurship and also Accounting. And also to happen in the Higher Institute."
    },
    {
        title: "Brevet d'Étude Professionnel en Management",
        date: "2015-2016",
        institute: "Institut d'Enseignement Technique",
        city:"Amboanjombe, Antananarivo",        
        description: "This diploma has an equivalence to that of a Higher Technical Diploma but at high school level focusing on management and basic level IT (that of Office IT, Word, Excel and Powerpoint). is also an inter-high school training to integrate students into the job market."    },
];

const formation: Array<ResumeModel> = [
    {
        title: "Basic programming training",
        date: "2018-2019",
        institute: "SoloLearn.com",
        city: "On Line",
        description: "Un cours à distance dans le platefor, Sololearn, où j'approfondi mes connaissances en Python, C/C++, Javascript et Dart, avec la participation de divers challenge et compétition qui se deroule régulièment au sein de la communité dans le plateforme."    },
    {
        title: "Embedded System Training, Arduino",
        date: "2018-2019",
        institute: "Stem for Good",
        city: "Ankorondrano, Antananarivo",
        description: "Cours d'empratissage de creation des robots et domotique en utilisant des Arduinos et des divers materiels électroniques."    }
];

const experience: Array<ResumeModel> = [
  {
    title: "Développeur Full Stack ",
    date: "August - October 2023",
    institute: "Projet Personnel",
    city: "Imeritsiatosika, Antananarivo",
    description:
      "Conception d'une application monolithique avec Adonis JS, ReactJS et Inertia JS. Cette application est un réseau social destiné aux dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent et leur spécialité tout en protégeant leurs droits d’auteur.<a href='https://github.com/Herman-Riah19/TryInc'>Code source</a>",
  },
  {
    title: "Lead Développeur Python",
    date: "August - October 2023",
    institute: "Quantium",
    city: "Faravohitra, Antananarivo",
    description:
      "En appliquant mon savoir faire en Python, j’effectue le rôle scripteur au sein de la société Quantium pour le compte de ces clients pour:" +
      "<ul><li>Réalisation du script Python de générateurs de leads pour améliorer le référencement sur Google avec BeautifulSoup et Tor</li>" +
      "<li>Écriture de scripts Python de web scraping pour la collecte de données de clients potentiels avec  BeautifulSoup</li>" +
      "<li>Analyse et verification des listes d’email client obtenue afin d’envoyer un spam Publicitaire en utilisant toujours un script Python si ces emails sont encore actif ou pas</li>" +
      "<li>Développement d'une application de SAAS pour la gestion des données dans un commerce avec Flask</li>" +
      "</ul>",
  },
  {
    title: "Développeur fullstack",
    date: "Juillet 2023",
    institute: "Fpay",
    city: "Andohalo, Antananarivo",
    description:
      "Durant mon poste en tant que développeur d'application web chez FPay, j'ai contribué à la réalisation de projets en utilisant les technologies Flask pour le développement Backend et les frameworks React JS pour le développement Frontend:" +
      "<ul><li>J’ai notamment participé à la Conception d'une application web de crowfounding utilisant Python Flask pour le back-end, ReactJS avec NodeJS pour le front-end et Firebase comme base de Donnée en intègrant les fonctionnalités de gestion de solde, d’injection des offres forfaitaire des Opérateurs mobiles des opérateurs locaux et étrangers, d’assurer aussi l’Intégration des codes USSD des opérateurs mobiles sous forme d’un API pour des transactions mobiles telle que l’achat de forfait internet, transfert d’argent grace à Mobile money, et la génération de code d’accès utilisateur lors de prémier authentification.</li>" +
      "<li>J’ai également participé dans le reconstruction d’un application web de gestion d’agence qui était développée en Flask réécrit en NextJS pour améliorer sa performance utilisateur et aussi d’ajouter un système de payement grâce à l’integration d’un API de crowdfunding </li>" +
      "</ul>",
  },
  {
    title: "Intégrateur React JS",
    date: "Mars 2023",
    institute: "Freelance",
    city: "Andravoahangy, Antananarivo",
    description:
      "Lors de mon visite dans un site de freelance, j’ai eu comme mission l’Intégration d'une application web de vente de NFT de jeux vidéo japonais en utilisant ReactJS et Material UI où j’assure la page de Dashboard de l’application en assurant respectivement le détail du Design offert par le client. <a href='https://dash-dark-game.netlify.app]'>Site</a>",
  },
  {
    title: "Bénévolat en Technicien informatique et multimédia",
    date: "2021 - Juin 2023",
    institute: "Bureau Eglise Evangelique Shine",
    city: "Andravoahangy, Antananarivo",
    description:
      "Durant mon post de Bénévolat au sein de bureau de l’Eglise Evangelique Shine où j’ai assuré plusieurs tâches en Technicien informatique et multimédia telle que :" +
      "<ul><li>La Maintenance des appareils informatiques dans le site et la vérification des installations réseaux pour assurer sa fonctionnalité durant le jour du travaille</li>" +
      "<li>Le Montage vidéo des prèche du pasteur et la conception des Jackets et Stykers pour bien représenter le support en DVD</li>" +
      "<li>La création de supports multimédias telle que les Flyers; les Cartes de voeux et aussi la couverture de la Bible pour des événements religieux</li>" +
      "<li>Le Développement d’un générateur de QRCode dans un invitation lors des événements religieux en utilisant AdonisJS comme framework Back end et mette en place la verification de cette QrCode s’il est valide car les informations seront enregistrées dans un base de donnée <a href='https://github.com/Herman-Riah19/QRCodeGenerate'>Source code</a></li>" +
      "</ul>",
  },
  {
    title: "Développeur Wordpress",
    date: "Septembre 2021",
    institute: "Freelance",
    city: "67Ha, Antananarivo",
    description:
      "J'ai développé un site web multilingue pour le compte d’un Musicien  en utilisant les technologies PHP et Wordpress. L’objectif est de mettre en valeur son talent en Music notamment en Guitars afin d’agrandir son réseau de communication vers l’international et permet d’avoir un signature numérique avancé pour son carrière musical",
  },
  {
    title: "Développeur Full Stack",
    date: "Septembre 2020 - Décembre 2020",
    institute: "Rainbow MDG By Pass",
    city: "By Pass, Antananarivo",
    description:
      "J’ai été contacté par un agence de distribution des vêtements pour femme pour Développer l’intégraliter d’une application web de e-commerce en utilisant TypeScript, MySQL, Angular, Express, et NodeJS afin d’améliorer leur visibilité dans l’internet et aussi de leur faire passé dans le domaine plus professionnel, en rendre compte les différentes étapes pour le Design, le Développement et le Déployement du site vers l’internet.",
  },
  {
    title: "Stagiaire en Technicien informatique",
    date: "2020 - 2021",
    institute:
      "Ministère de l'Enseignement Technique et de la Formation Professionnelle",
    city: "Ampefiloha Antananarivo",
    description:
      "Durant mon stage au sein de Ministère de l'Enseignement Technique et de la Formation Professionnelle, dans le département de l’information ou INFor, où j’ai participé au:" +
      "<ul><li>Développement d'une application web bibliothèque en ligne avec PHP, MySQL, Bootstrap où j’ai intégré les vidéos du Ministère en utilisant les liens qui point vers le plateforme YouTube, la mise à disposition des Publications des conténues de blog dans le site et enfin le déployement du site dépuis un serveur local avec la création de certificat SSL avec OpenSSL dans un serveur Apache</li>" +
      "<li>Installation du Système DMZ sur le site avec PFsense et Debian pour filtrer la connexion dans le site, l’intégration de sécurité d’authentification pour que seulement les employés du site pourraient connecté vers l’internet et aussi le blocage de site telle que Facebook durant l’heure de travaille le faire active lors de l’heure de répos.</li>" +
      "</ul>",
  },
  {
    title: "Stagiaire en Domotique",
    date: "2019",
    institute: "STEM for Good",
    city: "Akorondrano Antananarivo",
    description:
      "Durant mon stage chez STEM for Good, où j’ai été formé au Développement de plusieurs projets domotiques, notamment un robot qui cherche son propre équilibre avec Arduino et C++ avec le montage de ce dernier, ainsi qu'un générateur de son avec Arduino où la machine joue la music « Tia Zaza» en jouant avec les fréquences du son.",
  },
  {
    title: "Développeur Fullstack",
    date: "2017 - 2020",
    institute: "GSI",
    city: "Analaakely, Antananarivo",
    description:
      "Durant mes étude au sein de l’université GSI, j’ai grandement pratiqué et Développé plusieurs projets personnels afin d’améliorer les connaissances en Développement en général mais aussi me faire préparé en avance vers le monde professionnels. Alors voici les listes des différentes projets le plus rémarquant durant cette parcours Universitaire:" +
      "<ul><li>J’ai développé une application web en d'une galerie de photos à l'aide de Loopback 4 avec TypeScript pour le back-end et ReactJS pour le front-end (Début 2021), c’était mon premier projet en utilisant des Frameworks Back end et Front End mais aussi mon premier projet Multiservice <a href='https://github.com/Herman-Riah19/LoopbackReactProject'>Source code</a></li>" +
      "<li>J’ai aussi développé une application web dynamique avec PHP/MySQL pour la gestion des listes de voiture à vendre en rendre compte les différentes catégories de voiture existant dans le centre et aussi ses prix</li>" +
      "<li>J’ai aussi développé un site web statique pour résumer les différentes cours que nous avons appris au sein de l’Université GSI avec aussi à titre d’exercice sur l’intégration en général avec HTML, CSS et JavaScript </li>" +
      "<li>Pour mon prejet de fin d’étude; j’ai développé un logicielle, en C++ et le Framework Qt, de Dimensionnement des Réseaux 4G pour calculer et planifier de l’avance quel sera la capacité de fréquence utiliser et aussi le nombre de pylone à installer selon la nature du terrain où on veut installer un Réseau de Télécommunication 4G</li>" +
      "</ul>",
  },
];

export {type ResumeModel, diplome, formation, experience}