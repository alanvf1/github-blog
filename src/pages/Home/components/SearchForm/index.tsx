import { SearchFormContainer, SearchFormPostsCount } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormPostsCount>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchFormPostsCount>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  );
}
