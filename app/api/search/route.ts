import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('q');

        if (!query || query.trim() === '') {
            return NextResponse.json([]);
        }

        // 1. First find the direct matches (limit to 10 to keep initial scope manageable)
        const directMatches = await prisma.dictionaryEntry.findMany({
            where: {
                OR: [
                    {
                        toli_k: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    {
                        toli_m: {
                            contains: query,
                        },
                    },
                    {
                        toli_text: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
            take: 10,
            select: {
                toli_id: true,
                z_code: true,
            },
            orderBy: {
                toli_k: 'asc',
            },
        });

        // 2. Extract IDs and Z-codes
        const matchIds = directMatches.map((m) => m.toli_id);
        const zCodes = directMatches
            .map((m) => m.z_code)
            .filter((code): code is string => code !== null);

        if (matchIds.length === 0) {
            return NextResponse.json([]);
        }

        // 3. Fetch full records: the original matches + any siblings sharing z_code
        // This ensures if one record in a z_code group matches, all are returned.
        const results = await prisma.dictionaryEntry.findMany({
            where: {
                OR: [
                    { toli_id: { in: matchIds } }, // The direct text matches
                    {
                        z_code: {
                            in: zCodes.length > 0 ? zCodes : undefined,
                        },
                    }, // Their siblings
                ],
            },
            orderBy: {
                toli_k: 'asc',
            },
        });

        return NextResponse.json(results);
    } catch (error) {
        console.error('Search error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            raw: error
        });
        return NextResponse.json(
            {
                error: 'Failed to search dictionary',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}
