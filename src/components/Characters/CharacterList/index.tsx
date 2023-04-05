import type { Character } from "..";
import { CharacterCard } from "../CharacterCard";

export const CharacterList = ({ characters }: { characters: Character[] }) => {
  if (!characters) return null;

  return (
    <>
      <section className="characters-container">
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </section>

      <style jsx>{`
        .characters-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          align-items: center;
          justify-items: center;

          max-width: 1200px;
          width: 100%;

          overflow: hidden;
          margin: 0 auto;

          border: 2px solid #ccc;
          padding: 2rem;

          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};
