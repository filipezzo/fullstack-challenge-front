import { Search, ShoppingBag } from "lucide-react";
import { useCallback, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "../components/container";

export function HeaderLayout() {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleSetSearch = useCallback(
    (search: string) => {
      setSearchParams({ search, page: "1" });
    },
    [setSearchParams],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (!value) {
      setSearchParams((state) => {
        state.delete("search");
        return state;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSetSearch(query);
  };
  return (
    <header className="bg-white md:h-20">
      <Container className="flex w-full flex-col items-center justify-between max-md:gap-4 md:flex-row">
        <Link to="/">
          <h1 className="font-heading text-4xl text-[#5D5D6D] max-sm:text-lg">
            capputeeno
          </h1>
        </Link>

        <nav className="flex items-center gap-6">
          <form
            onSubmit={handleSubmit}
            className="flex h-[42px] w-96 items-center justify-between rounded-lg bg-[#F3F5F6] px-4 py-2.5"
          >
            <input
              placeholder="Procurando por algo específico?"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#5D5D6D] md:text-base"
              value={query}
              onChange={handleChange}
            />
            <button className="hover:opacity-80">
              <Search size={24} className="size-4 md:size-6" />
            </button>
          </form>
          <button>
            <ShoppingBag />
          </button>
        </nav>
      </Container>
    </header>
  );
}
