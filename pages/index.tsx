import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <div className="text-2xl text-center">Which Pokémon is rounder?</div>
      <div className="border rounded p-8 flex justify-between">
        <div></div>
      </div>
    </div>
  );
}
