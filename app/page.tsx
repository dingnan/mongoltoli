'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface DictionaryEntry {
  id: number;
  mongolian: string;
  cyrillic: string;
  english: string;
  definition: string;
  partOfSpeech?: string;
  examples?: string;
  spellout?: string;
  englishPronunciation?: string;
  root?: string;
  synonym?: string;
  antonym?: string;
  lookAlikes?: string;
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

