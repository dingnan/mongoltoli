import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Seeding database...');

    // Sample dictionary entries
    const entries = [
        {
            toli_m: 'ᠠ',
            toli_k: 'а',
            toli_ue: 'a',
            toli_we: 'a',
            toli_le: 'a',
            toli_aimag: 'ᠠᠶᠠᠯᠭ᠎ᠠ',
            toli_chmog: 'ᠠ',
            toli_ijauur: 'ᠠ',
            z_code: 'ᡥᡧ',
            toli_todo: 'ᠠ',
            toli_text: `1᠃ ᠮᠣᠩᠭᠣᠯ ᠰᠢᠨ᠎ᠡ ᠦᠰᠦᠭ ᠦ᠋ᠨ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠣᠭᠠᠢ ᠶ᠋ᠢᠨ ᠡᠬᠢᠨ ᠦ᠌ ᠦᠰᠦᠭ;
2᠃ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠭᠡᠰᠡᠨ ᠤᠳᠬ᠎ᠠ ᠶ᠋ᠢ ᠦᠰᠦᠭ ᠢ᠋ᠶ᠋ᠡᠷ ᠲᠡᠮᠳᠡᠭᠯᠡᠬᠦ ᠨᠢ᠄
            ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠵᠦᠢᠯ ᠦ᠋ᠨ ᠠ
ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠵᠦᠢᠯ ᠦ᠋ᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠬᠡᠰᠡᠭ
ᠲᠠᠪᠤ ᠶ᠋ᠢᠨ ᠠ ᠠᠩᠭᠢ
ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠠᠩᠭᠢ ᠶ᠋ᠢᠨ ᠡᠬᠢᠨ ᠦ᠌ ᠪᠦᠯᠦᠭ
ᠠ ᠦᠰᠦᠭ ᠡᠷᠳᠡᠮ ᠦ᠋ᠨ ᠳᠡᠭᠡᠵᠢ᠂ ᠠᠶᠠᠭ᠎ᠠ ᠴᠠᠢ ᠢᠳᠡᠭᠡᠨ ᠦ᠌ ᠳᠡᠭᠡᠵᠢ
ᠠ᠃ ᠦᠰᠦᠭ ᠪᠢᠴᠢᠭ ᠪᠣᠯ ᠡᠷᠳᠡᠮ ᠮᠡᠳᠡᠯᠭᠡ ᠡᠵᠡᠮᠰᠢᠬᠦ ᠡᠬᠢ ᠦᠨᠳᠦᠰᠦ; ᠪ᠃ ᠠᠯᠢᠪᠠ ᠠᠵᠢᠯ ᠦᠢᠯᠡᠰ ᠦ᠋ᠨ ᠡᠬᠢᠯᠡᠯ ᠭᠡᠰᠡᠨ ᠰᠠᠨᠠᠭ᠎ᠠ
ᠠ ᠭᠡᠵᠦ ᠡᠷᠳᠡᠮ ᠰᠤᠷᠳᠠᠭ᠂ ᠠᠪᠤ ᠭᠡᠵᠦ ᠬᠡᠯᠡ ᠳ᠋ᠦ᠍ ᠣᠷᠣᠳᠠᠭ
ᠡᠷᠳᠡᠮ ᠤᠬᠠᠭᠠᠨ ᠳ᠋ᠤ᠌ ᠰᠤᠷᠤᠯᠴᠠᠬᠤ᠂ ᠨᠡᠪᠲᠡᠷᠡᠬᠦ ᠲᠦᠯᠬᠢᠭᠦᠷ ᠨᠢ ᠪᠢᠴᠢᠭ ᠦᠰᠦᠭ ᠰᠤᠷᠬᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠭᠡᠰᠡᠨ ᠰᠠᠨᠠᠭ᠎ᠠ
ᠠ ᠦᠰᠦᠭ ᠦ᠋ᠨ ᠠᠴᠤᠭ ᠮᠡᠳᠡᠬᠦ ᠦᠭᠡᠢ᠂ ᠠᠷᠪᠠ ᠬᠦᠷᠲᠡᠯ᠎ᠡ ᠲᠣᠭ᠎ᠠ ᠮᠡᠳᠡᠬᠦ ᠦᠭᠡᠢ
ᠦᠰᠦᠭ ᠪᠢᠴᠢᠭ ᠮᠡᠳᠡᠬᠦ ᠦᠭᠡᠢ᠂ ᠪᠢᠴᠢᠭ ᠦᠰᠦᠭ ᠦ᠋ᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠡᠵᠡᠮᠰᠢᠭᠡ ᠦᠭᠡᠢ ᠭᠡᠰᠡᠨ ᠰᠠᠨᠠᠭ᠎ᠠ
ᠠ᠂ ᠮᠠ ᠦᠭᠡᠢ 
ᠠ᠃ ᠪᠢᠴᠢᠭ ᠦᠰᠦᠭ ᠦᠯᠦ ᠮᠡᠳᠡᠬᠦ; ᠪ᠃ ᠶᠠᠷᠢᠶ᠎ᠠ ᠬᠥᠭᠡᠷᠦᠭᠡ ᠦᠭᠡᠢ᠂ ᠶᠠᠷᠢᠶ᠎ᠠ ᠮᠠᠭᠤ ᠲᠠᠢ ᠭᠡᠰᠡᠨ ᠰᠠᠨᠠᠭ᠎ᠠ
ᠠ᠂ ᠠ᠋ ᠦᠭᠡᠢ 
ᠠ᠃ ᠪᠢᠴᠢᠭ ᠦᠰᠦᠭ ᠣᠭᠲᠣ ᠮᠡᠳᠡᠬᠦ ᠦᠭᠡᠢ; ᠪ᠃ ᠶᠠᠷᠢᠶ᠎ᠠ ᠬᠥᠭᠡᠷᠦᠭᠡ ᠦᠭᠡᠢ᠂ ᠳᠤᠤᠭᠠᠢ; ᠸ᠃ ᠠᠳᠠᠷᠠᠮ᠎ᠠ ᠦᠭᠡᠢ᠂ ᠭᠦᠨᠳᠦᠦ ᠦᠭᠡᠢ; ᠲᠣᠮᠣᠭ᠎ᠠ ᠲᠠᠢ; ᠭ᠃ ᠦᠭᠡ ᠦᠰᠦᠭᠴᠢᠯᠡᠨ ᠪᠠᠭᠤᠯᠭᠠᠨ ᠪᠢᠴᠢᠬᠦ ᠭᠡᠰᠡᠨ ᠰᠠᠨᠠᠭ᠎ᠠ
ᠠᠮᠠᠨ ᠳ᠋ᠤ᠌ ᠪᠠᠨ ᠠ ᠦᠭᠡᠢ᠂ ᠠᠯᠠᠭᠠᠨ ᠳ᠋ᠤ᠌ ᠪᠠᠨ ᠫᠠᠳ ᠦᠭᠡᠢ
ᠡᠷᠳᠡᠮ ᠨᠣᠮ ᠦᠭᠡᠢ ᠭᠡᠰᠡᠨ ᠰᠠᠨᠠᠭ᠎ᠠ
ᠠ ᠪᠠ ᠬᠠ
ᠮᠣᠩᠭᠣᠯ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠣᠭᠠᠢ ᠶ᠋ᠢᠨ ᠥᠭᠡᠷ᠎ᠡ ᠨᠡᠷ᠎ᠡ᠃ ᠵᠠᠷᠢᠮ ᠭᠠᠵᠠᠷ ᠲᠤ᠌ ᠮᠣᠩᠭᠣᠯ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠣᠭᠠᠢ ᠶ᠋ᠢ 《ᠠ᠂ᠪᠠ᠂ᠬᠠ》 ᠭᠡᠬᠢ ᠳᠠᠷᠠᠭᠠᠯᠠᠯ ᠢ᠋ᠶ᠋ᠠᠷ ᠵᠢᠭᠰᠠᠭᠠᠵᠤ ᠪᠠᠢᠭᠰᠠᠨ ᠠ᠋ᠴᠠ ᠡᠢᠨ ᠨᠠᠷᠠᠯᠠᠪᠠ`,
        },
        {
            toli_m: 'ᠣᠷᠳᠣ',
            toli_k: 'Орд',
            toli_ue: 'Ordo',
            toli_we: 'ɔrd',
            toli_le: 'Ord',
            toli_aimag: 'ᠨᠡᠷ᠎ᠡ',
            toli_chmog: 'ᠠ',
            toli_ijauur: 'ᠣᠷᠳᠣ',
            toli_uo: 'ᠣᠷᠳᠣᠨ',
            toli_to: 'ᠤᠷᠢᠳᠤ',
            z_code: 'ᡥᡭᢞᢙᡳ',
            toli_todo: 'ᡆᠷᡑᡆ',
            toli_text: `①ᠬᠠᠭᠠᠳ ᠨᠣᠶᠠᠳ ᠤ᠋ᠨ ᠣᠷᠣᠨ ᠰᠠᠭᠤᠴᠠ᠃ ②ᠣᠷᠣᠨ ᠰᠠᠭᠤᠴᠠ ᠶ᠋ᠢᠨ ᠬᠦᠨᠳᠦᠳᠬᠡᠯ ᠃ ③ ᠣᠯᠠᠨ ᠨᠡᠢᠲᠡ  ᠶ᠋ᠢᠨ ᠰᠣᠶᠣᠯ ᠂ ᠤᠷᠠᠯᠢᠭ ᠤ᠋ᠨ ᠴᠤᠭᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠣᠮᠣ ᠪᠠᠢᠰᠢᠩ ᠄ ᠰᠣᠶᠣᠯ ᠤ᠋ᠨ ᠣᠷᠳᠣᠨ ᠺᠢᠨᠣ᠋ ᠣᠷᠳᠣᠨ ᠃ ᠺᠢᠨᠣ᠋ ᠶ᠋ᠢᠨ ᠣᠷᠳᠣᠨ᠃ ④ ᠤᠯᠤᠰ ᠂ ᠣᠷᠣᠨ ᠤ᠋ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠤᠶᠤ ᠲᠡᠭᠦᠨ ᠦ᠌ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠪᠠᠢᠷᠢ ᠄ ᠵᠠᠰᠠᠭ  ᠤ᠋ᠨ ᠣᠷᠳᠣᠨ ᠤ᠋ ᠵᠠᠷᠯᠢᠭ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠣᠷᠳᠣᠨ ᠤ᠋ ᠬᠣᠷᠢᠶ᠎ᠠ ᠃⑤ ᠤᠷᠲᠤᠴᠢ ᠪᠣᠷᠣ ᠵᠡᠷᠭᠡ ᠬᠤᠯᠤᠭᠠᠨ᠎ᠠ ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᠢᠳᠡᠰᠢ ᠭᠦᠶᠦᠭᠡ ᠬᠤᠷᠢᠶᠠᠬᠤ ᠨᠦᠬᠡ ᠃ ⑥ᠡᠷᠦᠳᠡᠰᠦ ᠶ᠋ᠢᠨ ᠣᠷᠣᠰᠢᠬᠤ ᠬᠡᠪᠲᠡᠰᠢ ᠂ ᠠᠭᠤᠷᠬᠠᠢ᠄ ᠠᠯᠲᠠᠨ  ᠤ᠋ ～︔ ᠨᠡᠭᠦᠷᠡᠰᠦᠨ ᠦ᠌ ～᠃`,
        },
        {
            toli_m: 'ᠤᠷᠲᠤ',
            toli_k: 'Урт',
            toli_ue: 'Urtu',
            toli_we: 'ʊrt',
            toli_le: 'Urt',
            toli_aimag: 'ᠲᠡᠮᠳᠡᠭ',
            toli_chmog: 'ᠠ',
            toli_ijauur: 'ᠤᠷᠲᠤ',
            toli_uo: 'ᠤᠳᠠᠭᠠᠨ',
            toli_eo: 'ᠣᠬᠣᠷ',
            toli_to: 'ᠤᠷᠢᠳᠤ',
            z_code: 'ᡥᡭᢞᢙᡳ',
            toli_todo: 'ᡇᠷᡐᡇ',
            toli_text: `①ᠬᠡᠪᠲᠡᠭᠡ ᠶᠠᠭᠤᠮᠠᠨ ᠤ᠋ ᠬᠣᠶᠠᠷ ᠦᠵᠦᠭᠦᠷ ᠦ᠋ᠨ ᠬᠣᠭᠣᠷᠣᠨᠳᠣᠬᠢ ᠵᠠᠢ ᠶᠡᠬᠡ᠄ ～ᠮᠣᠳᠣ ︔～ᠳᠡᠭᠡᠰᠦ ︔～ᠵᠠᠮ᠃ ②ᠤᠷᠲᠤ ᠶ᠋ᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ᠄ ～ ᠪᠡᠷ ᠢ᠋ᠶ᠋ᠡᠨ ᠲᠠᠪᠤᠨ ᠲᠣᠬᠣᠢ ᠃③ᠴᠠᠭ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ ᠨᠢ ᠤᠳᠠᠭᠠᠨ᠄ ～ᠨᠠᠰᠤᠯᠠᠬᠤ︔～ᠥᠭᠦᠯᠡᠯ᠃`,
        },
    ];

    for (const entry of entries) {
        const created = await prisma.dictionaryEntry.create({
            data: entry,
        });

        // Update toli_sound to match toli_id
        await prisma.dictionaryEntry.update({
            where: { toli_id: created.toli_id },
            data: { toli_sound: created.toli_id },
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
