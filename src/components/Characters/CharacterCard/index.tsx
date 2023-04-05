import Image from "next/image";
import type { Character } from "..";

const CharacterImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <Image loading="lazy" src={image} alt={name} width={200} height={200} />
  );
};

export const CharacterCard = ({ image, name, species }: Character) => {
  return (
    <>
      <div className="character">
        <CharacterImage image={image} name={name} />
        <h2>{name}</h2>
        <p>Species: {species}</p>
      </div>
      <style jsx>{`
        .character {
          width: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          border: 2px solid #ccc;
          padding: 1rem;
          max-height: 400px;
          height: 100%;

          margin: 2rem 0;
        }

        .character img {
          border-radius: 4px;
          border: 2px solid green;
        }
      `}</style>
    </>
  );
};
