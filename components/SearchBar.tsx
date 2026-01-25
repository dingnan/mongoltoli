'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';

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
    const isSelectingItem = useRef(false);

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
                    // Only show dropdown if we're not in the process of selecting an item
                    if (!isSelectingItem.current) {
                        setShowDropdown(true);
                    }
                } else {
                    // Handle error response
                    console.error('Search error:', data.error || 'Unknown error');
                    setResults([]);
                }
            } catch (error) {
                console.error('Search failed:', error);
                setResults([]);
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
        isSelectingItem.current = true;
        setQuery(result.toli_k);
        setShowDropdown(false);
        onResults([result]);

        // Reset the flag after a short delay to allow normal dropdown behavior for new searches
        setTimeout(() => {
            isSelectingItem.current = false;
        }, 500);
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
                    onFocus={(e) => {
                        e.target.select(); // Auto-select all text
                        results.length > 0 && setShowDropdown(true);
                    }}
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
                            key={result.toli_id}
                            className={styles.dropdownItem}
                            onClick={() => handleResultClick(result)}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className={styles.resultMain}>
                                <span className={styles.resultCyrillic}>{result.toli_k}</span>
                                <span className={styles.resultMongolian}>{result.toli_m}</span>
                            </div>
                            {result.toli_aimag && (
                                <span className={styles.partOfSpeech}>{result.toli_aimag}</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
