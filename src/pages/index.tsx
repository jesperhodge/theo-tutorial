export default function Home() {
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
