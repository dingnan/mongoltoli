import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('q');

        if (!query || query.trim() === '') {
            return NextResponse.json([]);
        }

        // Search in both Cyrillic and Traditional Mongolian fields
        const results = await prisma.dictionaryEntry.findMany({
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
            take: 10, // Limit results to 10
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
