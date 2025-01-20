import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          I am a Full stack developer specializing in Node.js with over 7 years of experience.

          I have strong knowledge of web development using NodeJS.

          Demonstrated expertise in enhancing system performance and scalability, with a proven track record of optimizing high-volume platforms and driving the transition to a microservices-oriented architecture. Skilled in every stage of the software development life cycle, from planning and estimation to development, optimization, and maintenance.

          In addition, I also have abundant experience with modern JavaScript frameworks such as React, Next.js.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
