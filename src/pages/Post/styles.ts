import styled from "styled-components";

export const PostContainer = styled.div``;

export const PostInfos = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
`;

export const PostInfosHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
export const PostInfosTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.6;
  color: ${(props) => props.theme["base-title"]};
  margin-top: 1.25rem;
  margin-bottom: 0;
`;
export const PostInfosFooter = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;
export const PostInfosTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    font-size: 1rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 1rem;
  }
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  @media (max-width: 575px) {
    padding: 2.5rem 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid ${(props) => props.theme["base-border"]};
    line-height: 1.6;
  }
  * {
    margin-bottom: 1rem;
  }
  ul {
    padding-left: 1rem;
  }
`;
