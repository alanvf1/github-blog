import { PostCardContainer, PostCardExcerpt, PostCardHeader } from "./styles";

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </PostCardHeader>
      <PostCardExcerpt>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </PostCardExcerpt>
    </PostCardContainer>
  );
}
