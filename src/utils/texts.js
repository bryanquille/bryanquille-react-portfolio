export const plainTexts = {
  es: {
    header: {
      logo: {
        altText: 'Logotipo de Bryan Quille'
      },
      navbar: {
        navItems: [
          "Sobre mi",
          "Proyectos",
          "Habilidades",
          "Contacto"
        ],
      },
    },
    main: {
      about: {
        id: "sobremi",
        introducing: {
          topText: "¡Hola! Soy",
          letterB: "B",
          continueName: "ryan",
          letterQ: "Q",
          continueLastName: "uille",    
        },
        profession: "Desarrollador FrontEnd",
        contactInfo: [
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/bryan-patricio-quille-torres-996aa217b/",
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d3d3d3" className="social--icon"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
          },
          {
            name: "GitHub",
            link: "https://github.com/bryanquille",
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d3d3d3" className="social--icon"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
          },
          {
            name: "Outlook",
            link: "mailto:bryanquille@outlook.com",
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d3d3d3" className="social--icon"><title>Email</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM4.911 7.089h11.456a2.197 2.197 0 0 1 2.165 2.19v5.863a2.213 2.213 0 0 1-2.177 2.178H8.04c-1.174 0-2.04-.99-2.04-2.178v-4.639L4.503 7.905c-.31-.42-.05-.816.408-.816zm3.415 2.19c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.545-.68-.545zm0 2.177c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.544-.68-.544zm-.013 2.19c-.346 0-.68.21-.68.544 0 .334.334.544.68.544h5.728c.347 0 .68-.21.68-.544 0-.334-.333-.545-.68-.545z"/></svg>',
          },
        ],
      },
      projects: {
        id: "proyectos",
        title: "Proyectos",
        cardInfo: [
          {
            name: "Miss Katty Martinez",
            desc: "Página de aterrizaje para una experta en comunicación y relaciones públicas.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://kattymartinez.github.io/",
            githubLink: "https://github.com/bryanquille/kattymartinez.github.io",
            referenceImg: "/src/assets/images/projects/katty-martinez.webp",
          },
          {
            name: "Profesor Búho",
            desc: "Página de aterrizaje que impulsa un nuevo proyecto de aprendizaje.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://profesorbuho.github.io/",
            githubLink: "https://github.com/profesorbuho/profesorbuho.github.io",
            referenceImg: "/src/assets/images/projects/profesor-buho.webp",
          },
          {
            name: "Abrir chat de WhatsApp",
            desc: "Aplicación para abrir un chat de whatsapp sin añadir un número de contacto.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://bryanquille.github.io/whatsapp-chat-opener/",
            githubLink: "https://github.com/bryanquille/whatsapp-chat-opener",
            referenceImg: "/src/assets/images/projects/whatsapp.webp",
          },
          {
            name: "Calculadora",
            desc: "Proyecto creado para poner a prueba mis habilidades iniciales.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://bryanquille.github.io/calculator/",
            githubLink: "https://github.com/bryanquille/calculator",
            referenceImg: "/src/assets/images/projects/calculator.webp",
          },
          {
            name: "Proyectos en freeCodeCamp",
            desc: "Proyectos desarrollados para obtener la certificación.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://www.freecodecamp.org/fcc7f704fa5-2af0-4e97-bd02-87ce284177f4",
            githubLink: "",
            referenceImg: "/src/assets/images/projects/freecodecamp.webp",
          },
        ],
        hundredProjects: {
          name: "100 proyectos",
          desc: "Reto: 100 días programando en HTML, CSS, and JS.",
          techsList: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Tailwindcss",
          ],
          links: {
            link: "https://bryanquille.github.io/100-days-html-css-js/day-number/",
            githubLink: "https://github.com/bryanquille/100-days-html-css-js/tree/main/day-number"
          },
          referenceImg: "/src/assets/images/projects/100-projects.webp",
        }
      },
      skills: {
        id: "habilidades",
        title: "Habilidades",
        skillsList: [
          "HTML5", 
          "CSS3", 
          "JavaScript", 
          "Python", 
          "React",
          "Tailwindcss",
          "npm",
          "Git",
          "GitHub",
        ],
      },
      contact: {
        id: "contacto",
        title: "Contacto",
        desc: "¡Trabajemos juntos! Enviame un mensaje...",
        form: {
          name: {
            label: "Nombre",
            placeholder: "John Doe",
          },
          email: {
            label: "Correo electrónico",
            placeholder: "john_doe@example.com",
          },
          message: {
            label: "Mensaje",
            placeholder: "Necesito que me ayudes a crear una aplicación para mi negocio...",
          },
          button: "Enviar"
        }
      },
    },
    footer: {
      location: "Quito - Ecuador",
      year: "2024 - 2025"
    },
  },
  en: {
    header: {
      logo: {
        altText: 'Bryan Quille logo'
      },
      navbar: {
        navItems: [
          "About me",
          "Projects",
          "Skills",
          "Contact"
        ],
      },
    },
    main: {
      about: {
        id: "aboutme",
        introducing: {
            topText: "Hey! It's",
            letterB: "B",
            continueName: "ryan",
            letterQ: "Q",
            continueLastName: "uille",    
        },
        profession: "FrontEnd Developer",
        contactInfo: [
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/bryan-patricio-quille-torres-996aa217b/",
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d3d3d3" className="social--icon"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
          },
          {
            name: "GitHub",
            link: "https://github.com/bryanquille",
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d3d3d3" className="social--icon"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
          },
          {
            name: "Outlook",
            link: "mailto:bryanquille@outlook.com",
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d3d3d3" className="social--icon"><title>Email</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM4.911 7.089h11.456a2.197 2.197 0 0 1 2.165 2.19v5.863a2.213 2.213 0 0 1-2.177 2.178H8.04c-1.174 0-2.04-.99-2.04-2.178v-4.639L4.503 7.905c-.31-.42-.05-.816.408-.816zm3.415 2.19c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.545-.68-.545zm0 2.177c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.544-.68-.544zm-.013 2.19c-.346 0-.68.21-.68.544 0 .334.334.544.68.544h5.728c.347 0 .68-.21.68-.544 0-.334-.333-.545-.68-.545z"/></svg>',
          },
        ],
      },
      projects: {
        id: "projects",
        title: "Projects",
        cardInfo: [
          {
            name: "Miss Katty Martinez",
            desc: "A landing page for a communication and public relations expert.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://kattymartinez.github.io/",
            githubLink: "https://github.com/bryanquille/kattymartinez.github.io",
            referenceImg: "/src/assets/images/projects/katty-martinez.webp",
          },
          {
            name: "Profesor Búho",
            desc: "Landing page which boosts a new teaching engineering project.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://profesorbuho.github.io/",
            githubLink: "https://github.com/profesorbuho/profesorbuho.github.io",
            referenceImg: "/src/assets/images/projects/profesor-buho.webp",
          },
          {
            name: "Whatsapp Chat Opener",
            desc: "An app to open a whatsapp chat without adding a contact number.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://bryanquille.github.io/whatsapp-chat-opener/",
            githubLink: "https://github.com/bryanquille/whatsapp-chat-opener",
            referenceImg: "/src/assets/images/projects/whatsapp.webp",
          },
          {
            name: "Calculator",
            desc: "A simple calculator for performing my skills.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://bryanquille.github.io/calculator/",
            githubLink: "https://github.com/bryanquille/calculator",
            referenceImg: "/src/assets/images/projects/calculator.webp",
          },
          {
            name: "freeCodeCamp projects",
            desc: "As part of courses I have been developing some projects to get my certification.",
            techsList: [
              "HTML5",
              "CSS3",
              "JavaScript",
            ],
            link: "https://www.freecodecamp.org/fcc7f704fa5-2af0-4e97-bd02-87ce284177f4",
            githubLink: "",
            referenceImg: "/src/assets/images/projects/freecodecamp.webp",
          },
        ],
        hundredProjects: {
          name: "100 projects",
          desc: "I made the challenge 100 days of coding with HTML, CSS, and JS.",
          techsList: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Tailwindcss",
          ],
          buttonText: "Show",
          links: {
            link: "https://bryanquille.github.io/100-days-html-css-js/day-number/",
            githubLink: "https://github.com/bryanquille/100-days-html-css-js/tree/main/day-number"
          },
          referenceImg: "/src/assets/images/projects/100-projects.webp",
        }
      },
      skills: {
        id: "skills",
        title: "Skills",
        skillsList: [
          "HTML5", 
          "CSS3", 
          "JavaScript", 
          "Python", 
          "React",
          "Tailwindcss",
          "npm",
          "Git",
          "GitHub",
        ],
      },
      contact: {
        id: "contact",
        title: "Contact",
        desc: "Let's work together! Send me a message...",
        form: {
          name: {
            label: "Name",
            placeholder: "John Doe",
          },
          email: {
            label: "Email",
            placeholder: "john_doe@example.com",
          },
          message: {
            label: "Message",
            placeholder: "I need you to develop my new business app...",
          },
          button: "Send"
        }
      },
    },
    footer: {
      location: "Quito - Ecuador",
      year: "2024 - 2025"
    },
  },
}

export const social = [
  {
    name: "LinkedIn",
    src: "/src/assets/icons/social/linkedin.svg",
  },
  {
    name: "GitHub",
    src: "/src/assets/icons/social/github.svg",
  },
  {
    name: "Google Messages",
    src: "/src/assets/icons/social/googlemessages.svg",
  },
]

export const techs = [
  {
    name: "HTML5",
    altText: {
      en: "HTML5 logo",
      es: "Logotipo de HTML5"
    },
    src: "/src/assets/icons/techs/html5.svg",
  },
  {
    name: "CSS3",
    altText: {
      en: "CSS3 logo",
      es: "Logotipo de CSS3"
    },
    src: "/src/assets/icons/techs/css3.svg",
  },
  {
    name: "JavaScript",
    altText: {
      en: "JavaScript logo",
      es: "Logotipo de JavaScript"
    },
    src: "/src/assets/icons/techs/javascript.svg",
  },
  {
    name: "Python",
    altText: {
      en: "Python logo",
      es: "Logotipo de Python"
    },
    src: "/src/assets/icons/techs/python.svg"
  },
  {
    name: "React",
    altText: {
      en: "React logo",
      es: "Logotipo de React"
    },
    src: "/src/assets/icons/techs/react.svg"
  },
  {
    name: "Tailwindcss",
    altText: {
      en: "Tailwindcss logo",
      es: "Logotipo de Tailwindcss"
    },
    src: "/src/assets/icons/techs/tailwindcss.svg"
  },
  {
    name: "npm",
    altText: {
      en: "npm logo",
      es: "Logotipo de npm"
    },
    src: "/src/assets/icons/techs/npm.svg",
  },
  {
    name: "Git",
    altText: {
      en: "Git logo",
      es: "Logotipo de Git"
    },
    src: "/src/assets/icons/techs/git.svg",
  },
  {
    name: "GitHub",
    altText: {
      en: "GitHub logo",
      es: "Logotipo de GitHub"
    },
    src: "/src/assets/icons/social/github.svg",
  },
]