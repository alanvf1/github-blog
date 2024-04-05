import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchFormContainer, SearchFormPostsCount } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostCardProps } from "../PostCard";
import { api } from "../../../../lib/axios";

export const searchFormSchema = z.object({
  search: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
  posts: PostCardProps[];
  handlePosts: (data: PostCardProps[]) => void;
}

export function SearchForm({ posts, handlePosts }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInputs) {
    const { search } = data;

    const response = await api.get(
      `/search/issues?q=${search}%20repo:alanvf1/github-blog`
    );
    const newData = response.data.items.map((post: any) => {
      return {
        id: post.number,
        title: post.title,
        body: post.body,
        createdAt: post.created_at,
      };
    });
    handlePosts(newData);
  }

  return (
    <SearchFormContainer>
      <SearchFormPostsCount>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </SearchFormPostsCount>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("search")}
        />
      </form>
    </SearchFormContainer>
  );
}
