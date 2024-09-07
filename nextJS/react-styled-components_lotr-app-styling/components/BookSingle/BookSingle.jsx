import styled from "styled-components";
import Image from "next/image";

const Books = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 30px;
  width: calc(100% + 64px);
  left: -32px;
  position: relative;
  padding: 32px;
  margin-top: 32px;
  color: var(--color-clouds);
  background: ${({ $color }) => ($color ? $color : "inherit")};
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      146deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.29735644257703087) 100%
    );
    z-index: 1;
  }
  ul,
  img {
    display: block;
    position: relative;
    z-index: 2;
  }

  ul li {
    margin: 16px 0px;
    strong {
      display: block;
      width: 100%;
      margin-top: 4px;
    }
  }
`;

const BookSingle = ({ volume }) => {
  const { title, description, cover, color, books } = volume;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Books $color={color}>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}: <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </Books>
    </>
  );
};

export default BookSingle;
