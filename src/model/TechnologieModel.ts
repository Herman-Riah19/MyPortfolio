import Nextjs from "../assets/icon/nextjs.svg"
import React from "../assets/icon/react.svg"
import Angular from "../assets/icon/angular.svg"
import Svelte from "../assets/icon/svelte.svg"
import Node from "../assets/icon/node.png"
import Adonisjs from "../assets/icon/adonisjs.svg"
import Flask from "../assets/icon/flask.svg"
import PrismaIcon from "../assets/icon/prisma.svg"
import MongodbIcon from "../assets/icon/mongodb.svg"
import SqliteIcon from "../assets/icon/sqlite.svg"
import MysqlIcon from "../assets/icon/mysql.svg"
import Archlinux from "../assets/icon/archlinux.svg"

export interface Model{
    id: number;
    name: string;
    language: string;
    type: string;
    icon: string;
    experience: string;
}

export const TechnologieModel: Array<Model> = [
    {
        id: 1,
        name: "React",
        language: "TypeScript",
        type: "Framework Front-End",
        icon:`${React}`,
        experience: "2 ans"
    },
    {
        id: 2,
        name: "Nextjs",
        language: "TypeScript",
        type: "Framework Rendering",
        icon:`${Nextjs}`,
        experience: "1 ans"
    },
    {
        id: 3,
        name: "Svelte",
        language: "TypeScript",
        type: "Framework Front-End",
        icon:`${Svelte}`,
        experience: "1 ans"
    },
    {
        id: 4,
        name: "Angular",
        language: "TypeScript",
        type: "Framework Front-End",
        icon:`${Angular}`,
        experience: "1 ans"
    },    
    {
        id: 5,
        name: "Nodejs",
        language: "TypeScript",
        type: "Framework Back-End",
        icon:`${Node}`,
        experience: "3 ans"
    },
    {
        id: 6,
        name: "Adonisjs",
        language: "TypeScript",
        type: "Framework Back-End",
        icon:`${Adonisjs}`,
        experience: "1 ans"
    },
    {
        id: 7,
        name: "Flask",
        language: "Python",
        type: "Framework Back-End",
        icon:`${Flask}`,
        experience: "1 ans"
    },
    {
        id: 8,
        name: "Prisma",
        language: "Prisma et Typescript",
        type: "Modelisation",
        icon:`${PrismaIcon}`,
        experience: "2 ans"
    },
    {
        id: 9,
        name: "MongoDB",
        language: "Json",
        type: "Systeme de Gestion de Base de donne",
        icon:`${MongodbIcon}`,
        experience: "2 ans"
    },
    {
        id: 10,
        name: "MySQL",
        language: "SQL",
        type: "Systeme de Gestion de Base de donne",
        icon:`${MysqlIcon}`,
        experience: "3 ans"
    },
    {
        id: 11,
        name: "SQLite",
        language: "SQL",
        type: "Systeme de Gestion de Base de donne",
        icon:`${SqliteIcon}`,
        experience: "2 ans"
    },
    {
        id: 12,
        name: "Archlinux",
        language: "GNU/Linux",
        type: "Systemde d'Exploitation",
        icon:`${Archlinux}`,
        experience: "2 ans"
    },
]