import styles from './SearchResults.module.css';

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

interface SearchResultsProps {
    results: DictionaryEntry[];
}

export default function SearchResults({ results }: SearchResultsProps) {
    if (results.length === 0) {
        return null;
    }

    const renderDetail = (label: string, value?: string) => {
        if (!value) return null;
        return (
            <div className={styles.detailItem}>
                <span className={styles.detailLabel}>{label}:</span>
                <span className={styles.detailValue}>{value}</span>
            </div>
        );
    };

    return (
        <div className={styles.resultsContainer}>
            <h2 className={styles.resultsTitle}>Search Results ({results.length})</h2>
            <div>
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

                        <div className={styles.detailsGrid}>
                            {renderDetail('Definition', entry.definition)}
                            {renderDetail('Spellout', entry.spellout)}
                            {renderDetail('Pronunciation', entry.englishPronunciation)}
                            {renderDetail('Root', entry.root)}
                            {renderDetail('Synonyms', entry.synonym)}
                            {renderDetail('Antonyms', entry.antonym)}
                            {renderDetail('Look-alikes', entry.lookAlikes)}
                        </div>

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
