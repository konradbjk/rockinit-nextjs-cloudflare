'use client';
import useSWR from 'swr';

const url = 'https://api.breakingbadquotes.xyz/v1/quotes/1';

interface IQuote {
  quote: string;
  author: string;
}
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const FetchQuote = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      {data.map((data: IQuote) => (
        <div
          className="font-bold text-2xl"
          key={data.author}>{`${data.author} once said "${data.quote}" `}</div>
      ))}
    </>
  );
};
