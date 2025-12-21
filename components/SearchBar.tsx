'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';

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

interface SearchBarProps {
    onResults: (results: DictionaryEntry[]) => void;
}

export default function SearchBar({ onResults }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [results, setResults] = useState<DictionaryEntry[]>([]);
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Handle clicks outside to close dropdown
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            setShowDropdown(false);
            onResults([]);
            return;
        }

        // Debounce search
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        setIsLoading(true);

        debounceTimer.current = setTimeout(async () => {
            try {
                const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await response.json();

                // Check if the response is an array (successful) or an error object
                if (Array.isArray(data)) {
                    setResults(data);
                    setShowDropdown(true);
                    onResults(data);
                } else {
                    // Handle error response
                    console.error('Search error:', data.error || 'Unknown error');
                    setResults([]);
                    onResults([]);
                }
            } catch (error) {
                console.error('Search failed:', error);
                setResults([]);
                onResults([]);
            } finally {
                setIsLoading(false);
            }
        }, 300);

        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        };
    }, [query, onResults]);

    const handleResultClick = (result: DictionaryEntry) => {
        setQuery(result.cyrillic);
        setShowDropdown(false);
        onResults([result]);
    };

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.searchBox}>
                <svg
                    className={styles.searchIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search in Cyrillic or Mongolian..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => results.length > 0 && setShowDropdown(true)}
                />
                {isLoading && (
                    <div className={styles.loader}>
                        <div className={styles.spinner}></div>
                    </div>
                )}
            </div>

            {showDropdown && results.length > 0 && (
                <div className={styles.dropdown}>
                    {results.map((result, index) => (
                        <div
                            key={result.id}
                            className={styles.dropdownItem}
                            onClick={() => handleResultClick(result)}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className={styles.resultMain}>
                                <span className={styles.resultCyrillic}>{result.cyrillic}</span>
                                <span className={styles.resultMongolian}>{result.mongolian}</span>
                            </div>
                            <div className={styles.resultEnglish}>{result.english}</div>
                            {result.partOfSpeech && (
                                <span className={styles.partOfSpeech}>{result.partOfSpeech}</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
