import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  img {
    max-width: 100%;
  }
  .effect {
    max-width: 40rem;
    object-fit: contain;
    align-self: flex-end;
    padding: 1.875rem 0;
  }
  .logo {
    margin-top: 4rem;
  }
`;
