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
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Link } from "react-router-dom";

export function Profile() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [bio, setBio] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [followers, setFollowers] = useState("");
  const [company, setCompany] = useState("");

  async function loadProfileInfos() {
    const response = await api.get("users/alanvf1");
    const data = response.data;
    setName(data.name);
    setUser(data.login);
    setBio(data.bio);
    setGithubUrl(data.html_url);
    setAvatarUrl(data.avatar_url);
    setFollowers(data.followers);
    setCompany(data.company);
  }

  useEffect(() => {
    loadProfileInfos();
  }, []);

  const hasCompany = !!company;

  return (
    <ProfileContainer>
      <ProfileImage src={avatarUrl} alt={name} />
      <ProfileContent>
        <ProfileHeader>
          <h1>{name}</h1>
          <Link to={githubUrl} target="_blank">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileHeader>
        <ProfileBody>{bio}</ProfileBody>
        <ProfileFooter>
          <ProfileTag>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user}</span>
          </ProfileTag>
          {hasCompany && (
            <ProfileTag>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{company}</span>
            </ProfileTag>
          )}
          <ProfileTag>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} seguidores</span>
          </ProfileTag>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  );
}
