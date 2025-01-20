import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Discord</LinkTitle>
          <LinkItem href="mailto:hey@vipuljha.com">
            engineer03250
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="#">
            scpaez3@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; {year} <Link href="https://www.vipuljha.com">  Sebastian Paez</Link>. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/sebastianpoez">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sebastian-paez-b1a616347">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
