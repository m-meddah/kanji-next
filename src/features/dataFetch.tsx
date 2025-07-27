export async function getKanjiByGrade(grade: number): Promise<string[]> {
  if (isNaN(grade) || grade < 1 || grade > 8 || grade === 7) {
    throw new Error("Invalid grade. Please provide a grade between 1-6 or 8 (grade 7 does not exist).");
  }

  const response = await fetch(`https://kanjiapi.dev/v1/kanji/grade-${grade}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch data from Kanji API");
  }

  const data = await response.json();
  return data;
}

export async function getKanjiByJlpt(jlpt: number): Promise<string[]> {
  if (isNaN(jlpt) || jlpt < 1 || jlpt > 5) {
    throw new Error("Invalid JLPT level. Please provide a level between 1 and 5.");
  }

  const response = await fetch(`https://kanjiapi.dev/v1/kanji/jlpt-${jlpt}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch data from Kanji API");
  }

  const data = await response.json();
  return data;
}

export async function getJoyoKanji(): Promise<string[]> {
  const response = await fetch('https://kanjiapi.dev/v1/kanji/joyo');
  
  if (!response.ok) {
    throw new Error("Failed to fetch Joyo Kanji data from Kanji API");
  }

  const data = await response.json();
  return data;
}

interface KanjiDetails {
  kanji: string;
  grade?: number;
  jlpt?: number;
  stroke_count: number;
  meanings: string[];
  kun_readings?: string[];
  on_readings?: string[];
  name_readings?: string[];
  nanori?: string[];
  unicode: string;
  heisig_en?: string;
}

interface WordVariant {
  written: string;
  pronounced: string;
}

interface WordMeaning {
  glosses: string[];
}

interface Word {
  variants: WordVariant[];
  meanings: WordMeaning[];
}

export async function getKanjiDetails(kanji: string): Promise<KanjiDetails> {

  const response = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch kanji details from Kanji API");
  }

  const data = await response.json();
  return data;
}

export async function getWordsByKanji(kanji: string): Promise<Word[]> {

  const response = await fetch(`https://kanjiapi.dev/v1/words/${kanji}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch words by kanji from Kanji API");
  }

  const data = await response.json();
  return data;
}

export async function getKanjiByReading(reading: string): Promise<string[]> {
  const response = await fetch(`https://kanjiapi.dev/v1/reading/${reading}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch kanji for reading ${reading}`)
  }
  const data = await response.json()

  // Combine main_kanji and name_kanji arrays
  const allKanji = [...(data.main_kanji || []), ...(data.name_kanji || [])]

  return allKanji
}