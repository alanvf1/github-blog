import styled from "styled-components";
import Link from "react-router-dom";

export const PostCardContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};
  height: 100%;
  cursor: pointer;

  &:hover {
    outline: 2px solid ${(props) => props.theme["base-label"]};
  }
`;
export const PostCardHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
    flex: 1;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
    white-space: nowrap;
  }
`;
export const PostCardExcerpt = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme["base-text"]};
`;
