import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../images/LOGO.svg';
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainers,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIconLink,
    SocialLogo,
    SocialIcon,
    SocialIcons
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    The Harperway Quantitative Investor website is by invitation only. Join our exclusive email list to begin a conversation. 
                </FooterSubHeading>
                <FooterSubText>A Dan Harper Production</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainers>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Sign Up</FooterLink>
                        <FooterLink to='/'>Home</FooterLink>
                        <FooterLink to='/'>Product</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Tech</FooterLink>
                        <FooterLink to='/'>Founder</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>GitHub</FooterLink>
                        <FooterLink to='/'>LinkedIn</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>BUILDING</FooterLinkTitle>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>BUILDING</FooterLinkTitle>
                        <FooterLink to='/'>BUILDING</FooterLink>
                        <FooterLink to='/'>BUILDING</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainers>
            <SocialMedia>
                <SocialMediaWrap>
                 <SocialLogo to="/">
                  <SocialIcon/>
                  Harperway
                  </SocialLogo>
                    <WebsiteRights>
                        <p>© 2021 Harperway. All rights reserved.</p>
                        <br></br>All investments involve risks, including the possible loss of capital.
                        </WebsiteRights>
                    <SocialIcons>
                    <SocialIconLink href='//Dan-Harper/dan-harper.github.io' target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href='//www.linkedin.com/in/danielhlink' target="_blank" aria-label="Linkedin">
                        <FaLinkedinIn />
                    </SocialIconLink>
                 </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;