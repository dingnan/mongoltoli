import styles from './SearchResults.module.css';

interface DictionaryEntry {
    id: number;
    mongolian: string;
    cyrillic: string;
    english: string;
    partOfSpeech?: string;
    examples?: string;
}

interface SearchResultsProps {
    results: DictionaryEntry[];
}

export default function SearchResults({ results }: SearchResultsProps) {
    if (results.length === 0) {
        return null;
    }

    return (
        <div className={styles.resultsContainer}>
            <h2 className={styles.resultsTitle}>Search Results ({results.length})</h2>
            <div className={styles.resultsGrid}>
                {results.map((entry, index) => (
                    <div
                        key={entry.id}
                        className={styles.resultCard}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.mongolianText}>{entry.mongolian}</div>
                            <div className={styles.mainInfo}>
                                <h3 className={styles.cyrillicText}>{entry.cyrillic}</h3>
                                {entry.partOfSpeech && (
                                    <span className={styles.partOfSpeech}>{entry.partOfSpeech}</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.englishText}>{entry.english}</div>
                        {entry.examples && (
                            <div className={styles.examples}>
                                <strong>Example:</strong> {entry.examples}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
