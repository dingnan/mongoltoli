'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface DictionaryEntry {
  toli_id: number;
  toli_m: string;         // Mongolian
  toli_k: string;         // Cyrillic
  toli_ue: string;        // Romanization
  toli_we: string;        // International Phonetic Alphabet
  toli_le?: string;       // Romanization pronunciation
  toli_aimag?: string;    // Part of speech
  toli_chmog?: string;    // Group
  toli_ijauur?: string;   // Original character
  toli_uo?: string;       // Synonyms
  toli_eo?: string;       // Antonym
  toli_to?: string;       // Pictographs
  toli_sound?: number;    // Pronunciation code, same as toli_id
  z_code?: string;        // Z code
  toli_todo?: string;     // Todo Mongolian
  toli_text?: string;     // Explanation (Long Article)
  toli_image?: string;    // Image name
  toli_order?: number;    // Order
  toli_del?: boolean;     // Delete flag
  toli_created: Date;
  toli_modified: Date;
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryEntry[]>([]);
  const demoEntries = [
    { mongolian: 'ᠠ', cyrillic: 'а', romanization: 'a' },
    { mongolian: 'ᠣᠷᠳᠣ', cyrillic: 'Орд', romanization: 'Ordo' },
    { mongolian: 'ᠤᠷᠲᠤ', cyrillic: 'Урт', romanization: 'Urtu' },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Discover Traditional Mongolian
          </h1>
          <p className={styles.heroSubtitle}>
            Search our comprehensive dictionary with support for both Cyrillic and Traditional Mongolian scripts
          </p>
        </div>
        <div className={styles.searchSection}>
          <SearchBar query={query} onQueryChange={setQuery} onResults={setSearchResults} />
        </div>
        <section className={styles.demoSection} aria-labelledby="demo-title">
          <h2 id="demo-title" className={styles.demoTitle}>Try one of the 3 demo entries</h2>
          <p className={styles.demoDescription}>
            Click a word to search by Cyrillic or Traditional Mongolian. Romanization is shown for reference.
          </p>
          <div className={styles.demoGrid}>
            {demoEntries.map((entry) => (
              <article className={styles.demoCard} key={entry.cyrillic}>
                <div className={styles.demoSearches}>
                  <button
                    className={styles.demoWord}
                    type="button"
                    onClick={() => setQuery(entry.cyrillic)}
                    aria-label={`Search for ${entry.cyrillic} in Cyrillic`}
                  >
                    {entry.cyrillic}
                  </button>
                  <button
                    className={`${styles.demoWord} ${styles.mongolianWord}`}
                    type="button"
                    onClick={() => setQuery(entry.mongolian)}
                    aria-label={`Search for ${entry.mongolian} in Traditional Mongolian`}
                  >
                    {entry.mongolian}
                  </button>
                </div>
                <span className={styles.demoRomanization}>{entry.romanization}</span>
              </article>
            ))}
          </div>
        </section>
        <SearchResults results={searchResults} />
      </main>
      <Footer />
    </div>
  );
}
