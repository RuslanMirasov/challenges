import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const TheFellowshipOfTheRing = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { title, description, cover, books } = volumes.find(
    (volume) => volume.slug === slug
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
    </>
  );
};

export default TheFellowshipOfTheRing;
