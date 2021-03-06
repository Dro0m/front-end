import React from "react";
import JobMatch from "./JobMatch";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 50%;
  margin: 1% auto;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: space-between;
`;

const StyledSpan = styled.span`
  color: #caa767;
  font-size: 20px;
`;

const SeekerMatches = () => {
  return (
    <div>
      <h3>
        <StyledSpan>Matches</StyledSpan>
      </h3>
      <CardContainer>
        {/* for each match, return JobMatch card below */}
        <JobMatch />
        <JobMatch />
        <JobMatch />
        <JobMatch />
        <JobMatch />
        {/* will replace hardcoded cards above with a map method when we have data flowing in */}
      </CardContainer>
    </div>
  );
};

export default SeekerMatches;
