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

export async function getKanjiDetails(kanji: string): Promise<any> {

  const response = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch kanji details from Kanji API");
  }

  const data = await response.json();
  return data;
}

export async function getWordsByKanji(kanji: string): Promise<any[]> {

  const response = await fetch(`https://kanjiapi.dev/v1/words/${kanji}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch words by kanji from Kanji API");
  }

  const data = await response.json();
  return data;
}

export async function getKanjiByReading(reading: string): Promise<string[]> {
  const response = await fetch(`https://kanjiapi.dev/v1/reading/${decodeURIComponent(reading)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch kanji by reading from Kanji API");
  }

  const data = await response.json();
  return data;
}