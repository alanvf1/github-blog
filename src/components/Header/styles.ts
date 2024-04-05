import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  overflow: hidden;

  @media (max-width: 767px) {
    justify-content: center;
  }
  .effect {
    object-fit: contain;
    align-self: flex-end;
    padding: 1.875rem 0;

    @media (max-width: 767px) {
    }
    position: absolute;
  }
  .effect-left {
    left: 0;
    bottom: 0;
  }

  .effect-right {
    right: 0;
    bottom: 0;
  }
  .logo {
    padding: 4rem 0 8.375rem;
  }
`;
