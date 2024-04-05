import Markdown from "react-markdown";
import {
  PostContainer,
  PostContent,
  PostInfos,
  PostInfosFooter,
  PostInfosHeader,
  PostInfosTag,
  PostInfosTitle,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import remarkGfm from "remark-gfm";

export function Post() {
  const [githubUrl, setGithubUrl] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [commentsNumber, setCommentsNumber] = useState(0);
  const [createdAt, setCreatedAt] = useState("");
  const [user, setUser] = useState("");

  const { id } = useParams();
  async function listPostInfos() {
    const response = await api.get(`/repos/alanvf1/github-blog/issues/${id}`);
    const data = response.data;
    setGithubUrl(data.html_url);
    setTitle(data.title);
    setBody(data.body);
    setCommentsNumber(data.comments);
    setCreatedAt(data.created_at);
    setUser(data.user.login);
  }

  useEffect(() => {
    listPostInfos();
  }, []);
  return (
    <PostContainer>
      <PostInfos>
        <PostInfosHeader>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </Link>
          <Link to={githubUrl} target="_blank">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </PostInfosHeader>
        <PostInfosTitle>{title}</PostInfosTitle>
        <PostInfosFooter>
          <PostInfosTag>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user}</span>
          </PostInfosTag>
          <PostInfosTag>
            <FontAwesomeIcon icon={faCalendarDay} />
            {!!createdAt && (
              <span>
                {formatDistanceToNow(new Date(createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            )}
          </PostInfosTag>
          <PostInfosTag>
            <FontAwesomeIcon icon={faComment} />
            <span>{commentsNumber} comentários</span>
          </PostInfosTag>
        </PostInfosFooter>
      </PostInfos>
      <PostContent>
        <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
      </PostContent>
    </PostContainer>
  );
}
