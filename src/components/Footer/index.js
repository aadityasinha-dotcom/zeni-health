import React from 'react';
import {
FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink
} from './FooterElements';

const footer = () => {
  return (
    <FooterContainer id="footer">
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company Address</FooterLinkTitle>
                            <FooterLink to="/signin">healthcare@zenithinfotek.com</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Useful Links</FooterLinkTitle>
                            <FooterLink to="/signin">Contacts</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="/signin">----------</FooterLink>
                            <FooterLink to="/signin">----------</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
    );
};

export default footer;
