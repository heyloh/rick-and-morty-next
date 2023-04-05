import { CharacterList } from "./CharacterList";
import { PaginationButtons } from "./PaginationButtons";
import { Loading } from "../Loading";
import { delay } from "@/core/utils/delay";
import { useEffect, useState } from "react";
import { HttpClient } from "@/core/services/http-client";

type Origin = {
  name: string;
};

type Location = {
  name: string;
};

export type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  url: string;
  created: string;
};

export type CharactersResource = {
  characters: Character[];
  next: string;
  prev: string;
};

const DEFAULT_PAGE = "https://rickandmortyapi.com/api/character";

export const Characters = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [pagination, setPagination] = useState({
    next: DEFAULT_PAGE,
    prev: DEFAULT_PAGE,
  });
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

    const fetchCharacters = async () => {
      const response = await HttpClient.get(page, {
        signal: controller.signal,
      });

      await delay(2000);

      setCharacters(response.data.results);
      setPagination({
        next: response.data.info.next,
        prev: response.data.info.prev,
      });

      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  const nextPage = () => {
    setPage(pagination.next);
  };

  const prevPage = () => {
    setPage(pagination.prev);
  };

  return (
    <>
      <section className="container">
        {loading ? <Loading /> : <CharacterList characters={characters} />}
        <PaginationButtons onNext={nextPage} onPrev={prevPage} />
      </section>

      <style jsx>{`
        .container {
          width: 100%;
        }
      `}</style>
    </>
  );
};
