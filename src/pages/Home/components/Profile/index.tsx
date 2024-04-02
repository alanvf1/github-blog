import {
  ProfileBody,
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
  ProfileImage,
  ProfileTag,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/alanvf1.png" alt="Alan Varela" />
      <ProfileContent>
        <ProfileHeader>
          <h1>Alan Varela Ferreira</h1>
          <a href="">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <ProfileBody>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileBody>
        <ProfileFooter>
          <ProfileTag>
            <FontAwesomeIcon icon={faGithub} />
            <span>alanvf1</span>
          </ProfileTag>
          <ProfileTag>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </ProfileTag>
          <ProfileTag>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </ProfileTag>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  );
}
