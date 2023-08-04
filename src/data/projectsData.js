
import crm from '../assets/svg/projects/crm.gif'
import mba from '../assets/svg/projects/mba.png'
import shop from '../assets/svg/projects/shop.png'
import library from '../assets/svg/projects/library.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'CRM Application',
        projectDesc: 'Customer Relationship Management , It helps customer to raise tickets and engineer would solve the issues. Admin Credentials are userId:admin , password:qwerty123',
        tags: ['React.js', 'Express.js', 'MongoDB','Node.js'],
        code: 'https://github.com/Deepavishali/crm-front',
        demo: 'https://deepavishalig-crm-app.netlify.app/',
        image: crm
    },
    {
        id: 2,
        projectName: 'Movie Booking Application',
        projectDesc: 'In this project ,the user can book the dummy movie tickets',
        tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
        code: 'https://github.com/Deepavishali/movie-frontend-app',
        demo: 'https://web-2-movie-booking.netlify.app/',
        image: mba
    }
    ,
     {
        id: 3,
        projectName: 'ClassyClutches Application',
         projectDesc: 'Developed and launched Classyclutches e-commerce platform offering a diverse range of womens handbags, featuring seamless payment integration and utilizing Redux for efficient state management',
        tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
         code: 'https://github.com/Deepavishali/classyClutch-Front',
         demo: 'https://classyclutch.netlify.app/',
        image: shop
    },
    {
        id: 4,
        projectName: 'Library Management',
        projectDesc: 'This project serves as a concise demo of a library management system',
        tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
        code: 'https://github.com/Deepavishali/day32.git',
        demo: 'https://funny-caramel-8bbbd8.netlify.app/',
        image: library
    }
    ]


