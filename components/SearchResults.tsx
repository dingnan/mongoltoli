import styles from './SearchResults.module.css';

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
                        key={entry.toli_id}
                        className={styles.resultCard}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.mongolianText}>{entry.toli_m}</div>
                            <div className={styles.mainInfo}>
                                <h3 className={styles.cyrillicText}>{entry.toli_k}</h3>
                                {entry.toli_aimag && (
                                    <span className={styles.partOfSpeech}>{entry.toli_aimag}</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailsGrid}>
                            {renderDetail('ᠦᠶᠡᠴᠢᠯᠡᠭᠰᠡᠨ ᠭᠠᠯᠢᠭ᠋', entry.toli_le)}
                            {renderDetail('ᠳᠡᠯᠡᠬᠡᠢ ᠭᠠᠯᠢᠭ᠋', entry.toli_we)}
                            {renderDetail('ᠢᠵᠠᠭᠤᠷ', entry.toli_ijauur)}
                            {renderDetail('ᠣᠢᠷᠠᠯᠴᠠᠭ᠎ᠠ ᠤᠳᠬ᠎ᠠ', entry.toli_uo)}
                            {renderDetail('ᠡᠰᠡᠷᠭᠦ ᠤᠳᠬ᠎ᠠ', entry.toli_eo)}
                            {renderDetail('ᠣᠢᠷᠠᠯᠴᠠᠭ᠎ᠠ ᠳᠦᠷᠰᠦ', entry.toli_to)}
                            {renderDetail('Zᠺᠣᠳ᠋', entry.z_code)}
                            {renderDetail('ᠲᠣᠳᠣ᠌', entry.toli_todo)}
                            {renderDetail('ᠴᠣᠮᠣᠭ', entry.toli_chmog)}
                        </div>

                        {entry.toli_chmog && (
                            <div className={styles.examples}>
                                <strong>ᠲᠠᠢᠯᠪᠤᠷᠢ</strong> {entry.toli_text}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
