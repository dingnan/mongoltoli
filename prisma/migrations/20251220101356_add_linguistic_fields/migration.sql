-- CreateTable
CREATE TABLE "DictionaryEntry" (
    "id" SERIAL NOT NULL,
    "mongolian" TEXT NOT NULL,
    "cyrillic" TEXT NOT NULL,
    "english" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "spellout" TEXT,
    "englishPronunciation" TEXT,
    "partOfSpeech" TEXT,
    "root" TEXT,
    "synonym" TEXT,
    "antonym" TEXT,
    "lookAlikes" TEXT,
    "examples" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DictionaryEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DictionaryEntry_cyrillic_idx" ON "DictionaryEntry"("cyrillic");

-- CreateIndex
CREATE INDEX "DictionaryEntry_mongolian_idx" ON "DictionaryEntry"("mongolian");
