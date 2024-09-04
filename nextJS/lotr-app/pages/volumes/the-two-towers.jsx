import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

const TheTwoTowers = () => {
  const { title, description, cover, books } = volumes.find(
    (volume) => volume.slug === "the-two-towers"
  );

  return (
    <>
      <Link href="../volumes">← All Volumes</Link>
      <Image src={cover} width={140} height={230} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => {
          return (
            <li key={ordinal}>
              <span>{ordinal}</span>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">← Previus page</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">Next page →</Link>
        </li>
      </ul>
    </>
  );
};

export default TheTwoTowers;
