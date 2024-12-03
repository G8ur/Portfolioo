import { meta, shopify, starbucks, tesla , security, ibm} from "../assets/images";
import {
    aws,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    spotify,
    video,
    food
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
   
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    
    
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    
];

export const experiences = [
    {
        title: "Python Developer intern",
        company_name: "Securitybulls Intelligence India Private Limited",
        icon: security,
        iconBg: "#accbe1",
        date: "May 2022 - August 2022",
        points: [
            "Developing and maintaining web applications using Python and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Integrating security audit tools like scoutsuite and crawler in web application",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer Reactjs",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#fbc3bc",
        date: "June 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Worked with team of 4 members and submitted the project on time and completed the internship",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other team members.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: 'https://tanish-dev.netlify.app/contact',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/G8ur',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/tanish-gaur',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Cryptocurrency',
        description: 'Developed a web application that tracks and displays the information about all crytptocurrency using rapid api calls',
        link: 'https://crypto-ggj2.onrender.com',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Online Store',
        description: 'Created a full-stack mern shopping web app with role based authentication and payment integration',
        link: 'https://adminn-1.onrender.com',
    },
    {
        iconUrl:spotify,
        theme: 'btn-back-blue',
        name: 'Spotify  ',
        description: 'Created a spotify clone that is responsvie and plays song using the api hardcoded in it',
        link: 'https://samespace-assignment.onrender.com',
    },
    {
        iconUrl: video,  
        theme: 'btn-back-pink',
        name: 'Video-call',
        description: 'Built a video chatting app using javascript where the user can have multiple rooms which makes one room isolated from others.',
        link: 'https://github.com/G8ur/Video-Chatt',
    },
    {
        iconUrl: food,
        theme: 'btn-back-black',
        name: 'Food Delivery App',
        description: 'Developed a web application using MEAN stack for food delivery where user can access the live location of their order through leaflet and also has payment integration method in it',
        link: 'https://github.com/G8ur/MEAN-ecommerce',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Python File Encrypter and Decrypter',
        description: 'Basic file encryption and decryption using fernet aes 128 bit Use it just for education purpose .',
        link: 'https://github.com/G8ur/File-encrypter-and-decrypter',
    }
]; // eslint-disable-line