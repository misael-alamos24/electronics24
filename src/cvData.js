const cvData = {
    personalInfo: {
      name: "Santiago Misael Álamos Servián",
      title: "Técnico Electrónico. Desarrollador Full Stack.",
      contact: {
        phone: <span><b>+541158774985</b> <a href="https://wa.me/+541158774985" target="_blank">WhatsApp</a></span>,
        email: <a href="mailto:santiagoalamos2000@gmail.com">santiagoalamos2000@gmail.com</a>,
        // location: "[Ubicación opcional]"
      }
    },
    profile: "Técnico Electrónico con experiencia en reparación de electrodomésticos, maquinarias eléctricas y sistemas eléctricos industriales. Formación como Desarrollador Full Stack con habilidades en mantenimiento y desarrollo de aplicaciones web. Nivel B2 en inglés.",
    education: [
      {
        institution: "EESTN°2 Manuel Mateo",
        degree: "Técnico Electrónico",
        year: "2015 - 2018"
      },
      {
        institution: "Bootcamp Soy Henry",
        degree: "Desarrollador Web Full Stack",
        year: "2022"
      },
      {
        institution: "Green Valley",
        degree: "Curso de Inglés (B2 en progreso)",
        year: "2024"
      }
    ],
    // education: [
    //   {
    //     year: "2015 - 2018",
    //     title: "Técnico Electrónico",
    //     institution: "EESTN°2 Manuel Mateo",
    //   },
    //   {
    //     year: "2022",
    //     title: "Bootcamp Full Stack Developer",
    //     institution: "Soy Henry",
    //   },
    //   {
    //     year: "2024",
    //     title: "Nivel B2 de inglés (en curso)",
    //     institution: "Autodidacta",
    //   },
    // ],
    // experience: [
    //   {
    //     company: "Prodeman",
    //     role: "Desarrollador Full Stack",
    //     year: "2023",
    //     responsibilities: [
    //       "Mantenimiento y desarrollo de funcionalidades en sitios web internos orientados a optimizar procesos industriales.",
    //       "Implementación de soluciones en Node.js, React, y bases de datos relacionales y no relacionales."
    //     ]
    //   },
    //   {
    //     company: "Electricista – Hangares del Aeropuerto de Ezeiza",
    //     role: "Tendido eléctrico monofásico y trifásico",
    //     year: "2020 - 2021",
    //     responsibilities: [
    //       "Instalación de líneas eléctricas mediante caños galvanizados en paredes y sistemas subterráneos.",
    //       "Trabajo en oficinas y talleres con estándares de seguridad industrial."
    //     ]
    //   }
    //   // Más experiencia aquí...
    // ],
    experience: [
      {
        role: "Desarrollador Full Stack",
        company: "Prodeman",
        year: "2023",
        responsibilities: [
          "Mantenimiento y desarrollo de funcionalidades en sitios web internos orientados a optimizar procesos industriales.",
          "Implementación de soluciones en Node.js, React, y bases de datos relacionales y no relacionales.",
        ],
      },
      {
        role: "Electricista",
        company: "Hangares del Aeropuerto de Ezeiza",
        year: "2020 - 2021",
        responsibilities: [
          "Instalación de líneas eléctricas mediante caños galvanizados en paredes y sistemas subterráneos.",
          "Trabajo en oficinas y talleres con estándares de seguridad industrial.",
        ],
      },
      {
        role: "Operario",
        company: "Aeropuerto de Ezeiza",
        year: "2020",
        responsibilities: [
          "Gestión y carga de piezas aeronáuticas destinadas a exportación en contenedores.",
        ],
      },
      {
        role: "Técnico independiente",
        company: "Reparación de Electrodomésticos y Maquinarias",
        year: "2018 - Presente",
        responsibilities: [
          "Reparación de electrodomésticos (microondas, heladeras, ventiladores) y maquinarias eléctricas (amoladoras, sensitivas, podadoras).",
          "Diagnóstico y reemplazo de piezas en motores eléctricos y a explosión (desmalezadoras).",
        ],
      },
      {
        role: "Pasantía Técnica",
        company: "Norauto",
        year: "2018",
        responsibilities: [
          "Alineación y balanceo de neumáticos, recambio de filtros de aire y aceite, y mantenimiento de partes mecánicas básicas.",
        ],
      },
    ],
    projects: [
      {
        title: "Automatización Domótica – Proyecto Escolar",
        year: "2018",
        description: "Desarrollo de un sistema para el encendido de luces y electrodomésticos mediante conexión Bluetooth con Arduino. El proyecto integró programación, electrónica y diseño de circuitos, utilizando transistores, una fuente de 12V CC y relays para controlar cargas domésticas de 220V.",
      }
    ],
    skills: {
      technical: [
        "Reparación de electrodomésticos y sistemas eléctricos",
        "Desarrollo web (JavaScript, React, Node.js, Sequelize, SQL, MongoDB)",
        "Montaje e instalación eléctrica industrial"
      ],
      soft: ["Resolución de problemas", "Trabajo en equipo", "Adaptabilidad y aprendizaje continuo"]
    },
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "Intermedio (B2 en curso)" }
    ]
  };

  export default cvData;
