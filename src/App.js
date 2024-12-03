// import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";
import cvData from "./cvData.js";

// Styled-components para estilos
const CVContainer = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.4; /* Reducida la altura entre líneas */
  font-size: 17px; /* Tamaño base de la fuente */
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: left; /* Alineación del texto */
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  border-bottom: 2px solid #0073e6;
  padding-bottom: 5px;
  font-size: 20px; /* Tamaño mayor para títulos */
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 15px; /* Fuente más pequeña para detalles */
`;

const ListItem = styled.li`
  margin-bottom: 8px; /* Espaciado más compacto */
`;

const Description = styled.p`
  font-size: 18px; /* Fuente más pequeña para descripciones */
  line-height: 1.4;
  margin: 5px 0;
  text-align: left; /* Alineación a la izquierda */
`;


const CV = () => {
  const { personalInfo, profile, education, experience, projects, skills, languages } = cvData;

  return (
    <CVContainer>
      <Section>
        <h1>{personalInfo.name}</h1>
        <p><strong>{personalInfo.title}</strong></p>
        <p>{personalInfo.contact.phone} | {personalInfo.contact.email} | {personalInfo.contact.location}</p>
      </Section>

      <Section>
        <SectionTitle>Perfil Profesional</SectionTitle>
        <p>{profile}</p>
      </Section>

      <Section>
        <SectionTitle>Educación</SectionTitle>
        <List>
          {education.map((edu, index) => (
            <ListItem key={index}>
              <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
            </ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <SectionTitle>Experiencia Laboral</SectionTitle>
        {experience.map((job, index) => (
          <div key={index}>
            <p><strong>{job.company}</strong> - {job.role} ({job.year})</p>
            <List>
              {job.responsibilities.map((resp, idx) => (
                <ListItem key={idx}>{resp}</ListItem>
              ))}
            </List>
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle>Proyectos</SectionTitle>
        {projects.map((project, index) => (
          <div key={index}>
            <p><strong>{project.title}</strong> ({project.year})</p>
            <p>{project.description}</p>
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle>Habilidades</SectionTitle>
        <p><strong>Técnicas:</strong></p>
        <List>
          {skills.technical.map((skill, index) => (
            <ListItem key={index}>{skill}</ListItem>
          ))}
        </List>
        <p><strong>Blandas:</strong></p>
        <List>
          {skills.soft.map((skill, index) => (
            <ListItem key={index}>{skill}</ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <SectionTitle>Idiomas</SectionTitle>
        <List>
          {languages.map((lang, index) => (
            <ListItem key={index}>{lang.language}: {lang.level}</ListItem>
          ))}
        </List>
      </Section>
    </CVContainer>
  );
};

function App() {
  return (
    <div className="App">
      <CV/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
