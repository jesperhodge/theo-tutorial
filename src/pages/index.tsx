import { trpc } from '../utils/trpc';

export default function Home() {
  const { data, isLoading } = trpc.hello.useQuery({ text: 'Jesper' });

  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>{data.greeting}</div>;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokémon is rounder?</div>
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="bg-red-200 w-16 h-16"></div>
        <div className="p-8">Vs</div>
        <div className="bg-red-200 w-16 h-16"></div>
      </div>
    </div>
  );
}
