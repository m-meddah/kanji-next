import Link from "next/link";


export default async function Home() {

  return (
    <main className="flex flex-col gap-4 mx-4">
      <h1 className="text-2xl text-center font-bold mb-4">Welcome to the Kanji App</h1>
      <p className="text-center">This app provides information about Joyo Kanji and individual Kanji characters.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="/grades/1" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Grade 1 Kanji List</Link>
        <Link href="/kanji/日" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Specific Kanji (日)</Link>
      </div>
      <p className="text-center mt-4">Explore the Joyo Kanji list or view details of a specific Kanji character.</p>
      <p className="text-center">This app is built with Next.js and uses the Kanji API to fetch data.</p>
      <p className="text-center">Feel free to explore and learn more about Kanji characters!</p>

    </main>
  );
}
