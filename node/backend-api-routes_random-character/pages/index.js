export default function HomePage({ character }) {
  const { firstName, lastName, twitterName, geoHash } = character;
  return (
    <article>
      <h1>
        {firstName} {lastName}
      </h1>
      <ul>
        <li>twitterName: {twitterName}</li>
        <li>geoHash: {geoHash}</li>
      </ul>
    </article>
  );
}
