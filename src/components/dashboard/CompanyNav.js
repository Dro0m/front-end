import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.05rem;
  color: #182d42;
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  margin: 0.5rem 0;
  border: 1px solid #caa767;
  border-radius: 10px;

  &:hover {
    background-color: #caa767;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

const CompanyNav = () => {
  return (
    <>
      <NavLinkContainer>
        <StyledNavLink to="post-job">Add Job Listing</StyledNavLink>
        <StyledNavLink to="company-swipe">See Applicants</StyledNavLink>
        <StyledNavLink to="company-matches">My Matches</StyledNavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <StyledNavLink to="company-profile/edit">Edit Profile</StyledNavLink>
        <StyledNavLink to="DELETE PROFILE LINK">Delete Profile</StyledNavLink>
      </NavLinkContainer>
    </>
  );
};

export default CompanyNav;
