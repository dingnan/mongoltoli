--
-- PostgreSQL database dump
--

\restrict wClkGRfXa0cYhgwzqFTcSlpG1IfYAC1I1epw310odmSF2u63qsSFfY1fAVcM3Kw

-- Dumped from database version 14.20 (Homebrew)
-- Dumped by pg_dump version 14.20 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: DictionaryEntry; Type: TABLE DATA; Schema: public; Owner: dingnan
--

INSERT INTO public."DictionaryEntry" VALUES (1, 'ᠮᠣᠩᠭᠣᠯ', 'монгол', 'Mongolian', 'Mongolian', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Би монгол хүн. (I am Mongolian.)', '2025-12-20 10:22:55.815', '2025-12-20 10:22:55.815');
INSERT INTO public."DictionaryEntry" VALUES (2, 'ᠰᠠᠢᠨ', 'сайн', 'good, well', 'good, well', NULL, NULL, 'adjective', NULL, NULL, NULL, NULL, 'Сайн байна уу? (How are you?)', '2025-12-20 10:22:55.833', '2025-12-20 10:22:55.833');
INSERT INTO public."DictionaryEntry" VALUES (3, 'ᠪᠠᠢᠨᠠ', 'байна', 'to be, to exist', 'to be, to exist', NULL, NULL, 'verb', NULL, NULL, NULL, NULL, 'Энд байна. (It is here.)', '2025-12-20 10:22:55.834', '2025-12-20 10:22:55.834');
INSERT INTO public."DictionaryEntry" VALUES (4, 'ᠨᠣᠮ', 'ном', 'book', 'book', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Энэ миний ном. (This is my book.)', '2025-12-20 10:22:55.835', '2025-12-20 10:22:55.835');
INSERT INTO public."DictionaryEntry" VALUES (5, 'ᠬᠦᠮᠦᠨ', 'хүн', 'person, human', 'person, human', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Олон хүн ирсэн. (Many people came.)', '2025-12-20 10:22:55.836', '2025-12-20 10:22:55.836');
INSERT INTO public."DictionaryEntry" VALUES (6, 'ᠭᠡᠷ', 'гэр', 'house, home, yurt', 'house, home, yurt', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Гэртээ байна. (I am at home.)', '2025-12-20 10:22:55.837', '2025-12-20 10:22:55.837');
INSERT INTO public."DictionaryEntry" VALUES (7, 'ᠤᠰᠤ', 'ус', 'water', 'water', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Ус уух. (To drink water.)', '2025-12-20 10:22:55.838', '2025-12-20 10:22:55.838');
INSERT INTO public."DictionaryEntry" VALUES (8, 'ᠮᠣᠷᠢ', 'морь', 'horse', 'horse', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Морь унах. (To ride a horse.)', '2025-12-20 10:22:55.839', '2025-12-20 10:22:55.839');
INSERT INTO public."DictionaryEntry" VALUES (9, 'ᠲᠡᠩᠭᠡᠷᠢ', 'тэнгэр', 'sky, heaven', 'sky, heaven', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Тэнгэр цэлхий. (The sky is clear.)', '2025-12-20 10:22:55.84', '2025-12-20 10:22:55.84');
INSERT INTO public."DictionaryEntry" VALUES (10, 'ᠭᠠᠵᠠᠷ', 'газар', 'earth, land, ground', 'earth, land, ground', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Газар дээр. (On the ground.)', '2025-12-20 10:22:55.841', '2025-12-20 10:22:55.841');
INSERT INTO public."DictionaryEntry" VALUES (11, 'ᠠᠶᠤᠯ', 'аял', 'melody, tune', 'melody, tune', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Сайхан аялтай дуу. (A song with a beautiful melody.)', '2025-12-20 10:22:55.841', '2025-12-20 10:22:55.841');
INSERT INTO public."DictionaryEntry" VALUES (12, 'ᠳᠤᠭᠤᠢ', 'дуу', 'song, sound, voice', 'song, sound, voice', NULL, NULL, 'noun', NULL, NULL, NULL, NULL, 'Дуу дуулах. (To sing a song.)', '2025-12-20 10:22:55.842', '2025-12-20 10:22:55.842');
INSERT INTO public."DictionaryEntry" VALUES (13, 'ᠬᠠᠷᠠ', 'хар', 'black', 'black', NULL, NULL, 'adjective', NULL, NULL, NULL, NULL, 'Хар өнгө. (Black color.)', '2025-12-20 10:22:55.843', '2025-12-20 10:22:55.843');
INSERT INTO public."DictionaryEntry" VALUES (14, 'ᠴᠠᠭᠠᠨ', 'цагаан', 'white', 'white', NULL, NULL, 'adjective', NULL, NULL, NULL, NULL, 'Цагаан өнгө. (White color.)', '2025-12-20 10:22:55.844', '2025-12-20 10:22:55.844');
INSERT INTO public."DictionaryEntry" VALUES (15, 'ᠤᠯᠠᠭᠠᠨ', 'улаан', 'red', 'red', NULL, NULL, 'adjective', NULL, NULL, NULL, NULL, 'Улаан өнгө. (Red color.)', '2025-12-20 10:22:55.845', '2025-12-20 10:22:55.845');


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: dingnan
--

INSERT INTO public._prisma_migrations VALUES ('fe0474c6-bade-4598-adb3-5a6ecf059f90', 'ead307b9f00958ffb7b79ab3b6a95511e333095425f28660c229b97dd29c66f5', '2025-12-20 05:13:56.844443-05', '20251220101356_add_linguistic_fields', NULL, NULL, '2025-12-20 05:13:56.841469-05', 1);


--
-- Name: DictionaryEntry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dingnan
--

SELECT pg_catalog.setval('public."DictionaryEntry_id_seq"', 15, true);


--
-- PostgreSQL database dump complete
--

\unrestrict wClkGRfXa0cYhgwzqFTcSlpG1IfYAC1I1epw310odmSF2u63qsSFfY1fAVcM3Kw

