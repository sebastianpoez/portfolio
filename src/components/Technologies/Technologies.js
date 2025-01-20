import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";
import { Skills } from './Skills'

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have strong knowledge of web development using NodeJS.
      Demonstrated expertise in enhancing system performance and scalability, with a proven
      track record of optimizing high-volume platforms and driving the transition to a
      microservices-oriented architecture. Skilled in every stage of the software development
      life cycle, from planning and estimation to development, optimization, and maintenance.
      In addition, I also have abundant experience with modern JavaScript frameworks such as
      React, Next.js.

    </SectionText>
    <List>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
