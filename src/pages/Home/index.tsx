import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PostCard, PostCardProps } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostsList } from "./styles";

export function Home() {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  async function loadPosts() {
    const response = await api.get("/repos/alanvf1/github-blog/issues");
    const data = response.data.map((post: any) => {
      return {
        id: post.number,
        title: post.title,
        body: post.body,
        createdAt: post.created_at,
      };
    });
    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  function handleSetPosts(data: PostCardProps[]) {
    setPosts(data);
  }

  return (
    <HomeContainer>
      <Profile />
      <SearchForm posts={posts} handlePosts={handleSetPosts} />
      <PostsList>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              createdAt={post.createdAt}
              id={post.id}
            />
          );
        })}
      </PostsList>
    </HomeContainer>
  );
}
