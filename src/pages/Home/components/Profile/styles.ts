import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;

  display: flex;
  gap: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 8px;
  width: 9.25rem;
  height: 9.25rem;
  max-width: 100%;
  aspect-ratio: 1;
`;
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      line-height: 0;
    }
  }
`;
export const ProfileBody = styled.div`
  line-height: 1.6;
`;
export const ProfileFooter = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ProfileTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    font-size: 1rem;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
  }
`;
