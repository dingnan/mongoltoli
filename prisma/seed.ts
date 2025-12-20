import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Seeding database...');

    // Sample dictionary entries
    const entries = [
        {
            mongolian: 'ᠮᠣᠩᠭᠣᠯ',
            cyrillic: 'монгол',
            english: 'Mongolian',
            definition: 'Mongolian',
            partOfSpeech: 'noun',
            examples: 'Би монгол хүн. (I am Mongolian.)',
        },
        {
            mongolian: 'ᠰᠠᠢᠨ',
            cyrillic: 'сайн',
            english: 'good, well',
            definition: 'good, well',
            partOfSpeech: 'adjective',
            examples: 'Сайн байна уу? (How are you?)',
        },
        {
            mongolian: 'ᠪᠠᠢᠨᠠ',
            cyrillic: 'байна',
            english: 'to be, to exist',
            definition: 'to be, to exist',
            partOfSpeech: 'verb',
            examples: 'Энд байна. (It is here.)',
        },
        {
            mongolian: 'ᠨᠣᠮ',
            cyrillic: 'ном',
            english: 'book',
            definition: 'book',
            partOfSpeech: 'noun',
            examples: 'Энэ миний ном. (This is my book.)',
        },
        {
            mongolian: 'ᠬᠦᠮᠦᠨ',
            cyrillic: 'хүн',
            english: 'person, human',
            definition: 'person, human',
            partOfSpeech: 'noun',
            examples: 'Олон хүн ирсэн. (Many people came.)',
        },
        {
            mongolian: 'ᠭᠡᠷ',
            cyrillic: 'гэр',
            english: 'house, home, yurt',
            definition: 'house, home, yurt',
            partOfSpeech: 'noun',
            examples: 'Гэртээ байна. (I am at home.)',
        },
        {
            mongolian: 'ᠤᠰᠤ',
            cyrillic: 'ус',
            english: 'water',
            definition: 'water',
            partOfSpeech: 'noun',
            examples: 'Ус уух. (To drink water.)',
        },
        {
            mongolian: 'ᠮᠣᠷᠢ',
            cyrillic: 'морь',
            english: 'horse',
            definition: 'horse',
            partOfSpeech: 'noun',
            examples: 'Морь унах. (To ride a horse.)',
        },
        {
            mongolian: 'ᠲᠡᠩᠭᠡᠷᠢ',
            cyrillic: 'тэнгэр',
            english: 'sky, heaven',
            definition: 'sky, heaven',
            partOfSpeech: 'noun',
            examples: 'Тэнгэр цэлхий. (The sky is clear.)',
        },
        {
            mongolian: 'ᠭᠠᠵᠠᠷ',
            cyrillic: 'газар',
            english: 'earth, land, ground',
            definition: 'earth, land, ground',
            partOfSpeech: 'noun',
            examples: 'Газар дээр. (On the ground.)',
        },
        {
            mongolian: 'ᠠᠶᠤᠯ',
            cyrillic: 'аял',
            english: 'melody, tune',
            definition: 'melody, tune',
            partOfSpeech: 'noun',
            examples: 'Сайхан аялтай дуу. (A song with a beautiful melody.)',
        },
        {
            mongolian: 'ᠳᠤᠭᠤᠢ',
            cyrillic: 'дуу',
            english: 'song, sound, voice',
            definition: 'song, sound, voice',
            partOfSpeech: 'noun',
            examples: 'Дуу дуулах. (To sing a song.)',
        },
        {
            mongolian: 'ᠬᠠᠷᠠ',
            cyrillic: 'хар',
            english: 'black',
            definition: 'black',
            partOfSpeech: 'adjective',
            examples: 'Хар өнгө. (Black color.)',
        },
        {
            mongolian: 'ᠴᠠᠭᠠᠨ',
            cyrillic: 'цагаан',
            english: 'white',
            definition: 'white',
            partOfSpeech: 'adjective',
            examples: 'Цагаан өнгө. (White color.)',
        },
        {
            mongolian: 'ᠤᠯᠠᠭᠠᠨ',
            cyrillic: 'улаан',
            english: 'red',
            definition: 'red',
            partOfSpeech: 'adjective',
            examples: 'Улаан өнгө. (Red color.)',
        },
    ];

    for (const entry of entries) {
        await prisma.dictionaryEntry.create({
            data: entry,
        });
    }

    console.log(`Seeded ${entries.length} dictionary entries.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
