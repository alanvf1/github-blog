import { Post } from "../Post";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostsList } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostsList>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsList>
    </HomeContainer>
  );
}
