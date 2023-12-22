interface ResumeModel {
    title: string;
    date: string;
    institute: string;
    city: string;
    description: string;
}
const diplome: Array<ResumeModel> = [
    {
        title: "Professional Degree in Computer Science, Electronics and Telecommunications",
        date: "2017-2020",
        institute: "GSI Madagascar",
        city:"Analakely, Antananarivo",
        description: "In fact has a specialty in IT and telecommunications networking, but also knowledge of programming such as desktop applications and also web applications.\n There is also the configuration and troubleshooting of computer networks running on GNU/Linux infrastructures"
    },
    {
        title: "Professional Baccalaureate in Management",
        date: "2016-2017",
        institute: "Institut d'Enseignement Technique",
        city:"Amboanjombe, Antananarivo",
        description: "Specializing in Business Management, Finance and also Accounting, I continued this course at high school level with the aim of introducing myself into the field of Entrepreneurship and also Accounting. And also to happen in the Higher Institute."
    },
    {
        title: "Certificate of Professional Study in Management",
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
        description: "Distance training in an American site sololearn.com with a certificate specializing in the basics of programming languages such as Python, C/C++, Javascript and Dart. The goal is to master the basics of programming and also the correct handling of these previous languages before entering the Frameworks"    },
    {
        title: "Embedded System Training, Arduino",
        date: "2018-2019",
        institute: "Stem for Good",
        city: "Ankorondrano, Antananarivo",
        description: "Training with practice on the assembly and programming of programmable cards such as the Arduino with the C++ language. At the end of the training, the trainers ask us to design a project and we chose from our team to design a Balance wheel, that is to say a table which had two wheels and these ensure the balance of the seat so that it does not fall."    }
];

const experience: Array<ResumeModel> = [
    {
        title: "Lead Developper Python",
        date: "August - October 2023",
        institute: "Quantium",
        city:"Faravohitra, Antananarivo",
        description: "I have coded ,with my experience in Python,a script for web scrapingd, create a simple data model for an Artificial Inteligences of one society for here visibility, analyse the liste of the more than email and detect them if he is validate, and participate in creation of the landing page of the entreprise using ReactJS when role is to inject the email message in the site."   
    },
    {
        title: "Developper fullstack",
        date: "Juillet 2023",
        institute: "Fpay",
        city:"Andohalo, Antananarivo",
        description: "Using my experience in Developper FullStack in TypeScript(ExpressJS, ReactJS, Firebase) and Python(Flask), I participate to Develop an application called Jupiter for money transfer using mobile money, purchase of internet packages and call credit from an operator in Madagascar and also from abroad in the Indian Ocean, he can also purchase a subscription to Canal+/Blueline bouquets and pay water and electricity bills via mobile money."   
    },
    {
        title: "Freelance developper",
        date: "2021-2023",
        institute: "Freelance",
        city: "Andravoahangy, Antananarivo",
        description: "Using My skill in Developper FullStack Nodejs (Reactjs, AdonisJS, Nextjs) integrator of several particular projects: <ul> <li>Dashord for NFT video game</li><li>Portfolio of a public personality</li> <li>Personnal portfolio in Reactjs and bootstrap</li> <li>Design of a showcase site with Wordpress of a musician for his international visibility</li><li>Development of an E-Commerce for a fashion agency with MySQL, Angular, Express and NodeJS</li> </ul>"
    },
    {
        title: "Computer network administration and web development",
        date: "2020",
        institute: "Ministry of Technical Education and Vocational Training",
        city: "Ampefiloha Antananarivo",
        description: "Before the end of my Studies at GSI University, I participated in an internship at INFor, a subsidiary organization of the Ministry of Technical Education and Vocational Training, on the installation of a DMZ System with a fire guard. fire PfSense to filter the IT network in this Organization and also manage traffic. There is also, in the second half of the internship, a Development of a Digital Library so that visitors can read digital books freely online. The internship lasts for 10 months and at the end of the internship, I received a certificate of end of internship in October 2020." 
    }
];

export {type ResumeModel, diplome, formation, experience}