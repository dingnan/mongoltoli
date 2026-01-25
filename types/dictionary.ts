/**
 * DictionaryEntry type definition matching the Prisma schema
 * This should be kept in sync with prisma/schema.prisma
 */
export interface DictionaryEntry {
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
