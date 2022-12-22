import ransom from '../../img/Projects/ransom.png'
import area from '../../img/Projects/area-service.png'
import erp from '../../img/Projects/erp.png'
import km from '../../img/Projects/km.png'
import food from '../../img/Projects/food.png'
import ciel from '../../img/Projects/atelierenciel.png'

//*************** Filter Navigation */
export const subfilterNavigation = [
    { id: 1, title: "All Projects", target: "all" },
    { id: 2, title: "internship", target: "field" },
    { id: 3, title: "bootcamp", target: "field" },
    { id: 4, title: "heroku", target: "hosted" },
    { id: 5, title: "vercel", target: "hosted" },
    { id: 6, title: "wordpress", target: "hosted" },
    { id: 7, title: "demo", target: "hosted" },
]


//*************** Projects Array */

export const projectCards = [
    {
        id: 1, title: 'Ransom', category: "bootcamp", hosted: 'heroku', date: 1, link: "https://ransom-website.herokuapp.com/", description: "Website that makes it easier for people to anonymously send any type of feedback", Img: ransom,
        tags: [{ id: 1, tag1: "#MERN" }, { id: 2, tag2: "#Codi" }],
    },
    {
        id: 2, title: 'Area-Service', category: "bootcamp", hosted: 'vercel', date: 6, link: "https://area-service.vercel.app/", description: "A website that helps professionals who do not work from an office, or cannot afford one, and people who are searching for a provider near them.", Img: area,
        tags: [{ id: 1, tag1: "#NextJS" }, { id: 2, tag2: "#NodeJS" }, { id: 3, tag3: "#Codi" }],
    },
    {
        id: 3, title: 'ERP', category: "bootcamp", hosted: 'demo', date: 2, link: 'https://www.youtube.com/watch?v=DSBKuvX2XEc', description: "An application that automates the HR process of the company, and provides insights and internal controls, drawing on a central database that shows reports of all employees, teams and projects", Img: erp,
        tags: [{ id: 1, tag1: "#React" }, { id: 2, tag2: "#Laravel" }, { id: 3, tag3: "#Codi" }],
    },
    {
        id: 4, title: 'KM-almajdal', category: "internship", hosted: 'vercel', date: 5, link: "https://kmalmajdal-tailwindcss.vercel.app/", description: "FrontEnd Part of project using NextJS & TailwindCSS styling", Img: km,
        tags: [{ id: 1, tag1: "#NextJS" }, { id: 2, tag2: "#TailwindCSS" }, { id: 3, tag3: "#DAS360" }],
    },
    {
        id: 5, title: 'Foodoption', category: "internship", hosted: 'vercel', date: 4, link: "https://foodoption-with-tailwindcss.vercel.app/", description: "FrontEnd Part of project using NextJS & TailwindCSS styling", Img: food,
        tags: [{ id: 1, tag1: "#NextJS" }, { id: 2, tag2: "#TailwindCSS" }, { id: 3, tag3: "#DAS360" }],
    },
    {
        id: 6, title: 'Atelierenciel', category: "bootcamp", hosted: 'wordpress', date: 3, link: "https://atelierenciel.com/", description: "Online store sells hand painting (wearable andaccessories) products", Img: ciel,
        tags: [{ id: 1, tag1: "#WordPress" }, { id: 2, tag2: "#E-commerce" }, { id: 3, tag3: "#Codi" }],
    },
]

