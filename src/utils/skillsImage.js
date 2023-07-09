import bootstrap from '../assets/svg/skills/bootstrap.svg'
import css from '../assets/svg/skills/css.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import react from '../assets/svg/skills/react.svg'
import redux from '../assets/svg/skills/redux.svg'
import express from '../assets/svg/skills/express.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'redux':
            return redux;
        case 'express':
            return express;
        case 'nodejs':
            return nodejs;
        default:
            break;
    }
}
