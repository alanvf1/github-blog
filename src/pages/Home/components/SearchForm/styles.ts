import styled from "styled-components";

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;

  form {
    width: 100%;
    input {
      padding: 0.75rem 1rem;
      background-color: ${(props) => props.theme["base-input"]};
      border: 1px solid ${(props) => props.theme["base-border"]};
      border-radius: 6px;
      width: 100%;
      color: ${(props) => props.theme["base-text"]};

      &::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }
    }
  }
`;

export const SearchFormPostsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  strong {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
  }
`;
