import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
      {/* <a
        href={"https://hashnode.com/@umesh14"}
        className={`icon-button`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconWrapper backgroundColor={"#285ff7"} {...props}>
          <i className="fa-brands fa-hashnode"></i>
        </IconWrapper>
        <span></span> 
      </a> */}
    </div>
  );
}
