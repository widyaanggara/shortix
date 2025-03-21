import Navbar from "@/components/Navbar";
import UrlShortenerContainer from "@/components/UrlShortenerContainer";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-28 space-y-8 px-6">
      <Navbar />
      <div className="space-y-2 text-center ">
        <h1 className="text-3xl md:text-4xl font-bold">URL Shortener</h1>
        <p className="md:text-lg">Shorten your URL and share easily</p>
      </div>
      <UrlShortenerContainer />
    </main>
  );
}
