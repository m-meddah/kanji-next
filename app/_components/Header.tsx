import Link from "next/link";
import { UserNav } from "@/components/auth/user-nav";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link href="/" className="flex items-center justify-center">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-kanji font-bold text-lg">
          漢
        </div>
          <span className="ml-2 text-xl font-bold">KanjiMaster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/grades" className="text-sm font-medium hover:underline underline-offset-4">
            By Grade
          </Link>
          <Link href="/jlpt" className="text-sm font-medium hover:underline underline-offset-4">
            JLPT Levels
          </Link>
          <Link href="/joyo" className="text-sm font-medium hover:underline underline-offset-4">
            Joyo Kanji
          </Link>
          <Link href="/readings" className="text-sm font-medium hover:underline underline-offset-4">
            Search
          </Link>
          <UserNav />
        </nav>
      </header>
  );
}