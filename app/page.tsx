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
  const [searchResults, setSearchResults] = useState<DictionaryEntry[]>([]);

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
          <SearchBar onResults={setSearchResults} />
        </div>
        <SearchResults results={searchResults} />
      </main>
      <Footer />
    </div>
  );
}

