import GlobalStyle from "../styles";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} character={data} />
    </>
  );
}
