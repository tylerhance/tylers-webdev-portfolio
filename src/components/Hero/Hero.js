import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Tyler Hance <br />
        Full-Stack Web Developer
      </SectionTitle>
      <SectionText>
        Hello, Dear Reader. I'm Tyler Hance, a full-stack web developer with a passion for problem solving and design specializing in the MERN stack (Mongo, Express, React, Node). 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/tylerhance' }>Learn More</Button>
    </LeftSection>
  </Section>
  
);

export default Hero;