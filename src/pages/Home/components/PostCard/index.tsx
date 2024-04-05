import { formatDistanceToNow } from "date-fns";
import { PostCardContainer, PostCardExcerpt, PostCardHeader } from "./styles";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

import removeMd from "remove-markdown";

export interface PostCardProps {
  title: string;
  createdAt: string;
  body: string;
  id: number;
}

export function PostCard({ title, createdAt, body, id }: PostCardProps) {
  const excerpt = removeMd(body).slice(0, 100);
  return (
    <Link to={`/post/${id}`}>
      <PostCardContainer>
        <PostCardHeader>
          <h3>{title}</h3>
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </PostCardHeader>
        <PostCardExcerpt>
          <p>{excerpt}...</p>
        </PostCardExcerpt>
      </PostCardContainer>
    </Link>
  );
}
