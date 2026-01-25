--
-- PostgreSQL database dump
--

\restrict UIJH4m8VW6nn45KDBGMX4x9gEMIj98Ixc8YBhYLNHReguiOn11JX3Hfm7nfeux2

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

INSERT INTO public."DictionaryEntry" (toli_id, toli_m, toli_k, toli_ue, toli_we, toli_le, toli_aimag, toli_chmog, toli_ijauur, toli_uo, toli_eo, toli_to, z_code, toli_todo, toli_text, toli_image, toli_order, toli_del, toli_created, toli_modified, toli_sound) VALUES (1, 'ᠠ', 'а', 'a', 'a', 'a', 'ᠠᠶᠠᠯᠭ᠎ᠠ', 'ᠠ', 'ᠠ', NULL, NULL, NULL, 'ᡥᡧ', 'ᠠ', '1᠃ ᠮᠣᠩᠭᠣᠯ ᠰᠢᠨ᠎ᠡ ᠦᠰᠦᠭ ᠦ᠋ᠨ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠣᠭᠠᠢ ᠶ᠋ᠢᠨ ᠡᠬᠢᠨ ᠦ᠌ ᠦᠰᠦᠭ;
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
ᠮᠣᠩᠭᠣᠯ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠣᠭᠠᠢ ᠶ᠋ᠢᠨ ᠥᠭᠡᠷ᠎ᠡ ᠨᠡᠷ᠎ᠡ᠃ ᠵᠠᠷᠢᠮ ᠭᠠᠵᠠᠷ ᠲᠤ᠌ ᠮᠣᠩᠭᠣᠯ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠣᠭᠠᠢ ᠶ᠋ᠢ 《ᠠ᠂ᠪᠠ᠂ᠬᠠ》 ᠭᠡᠬᠢ ᠳᠠᠷᠠᠭᠠᠯᠠᠯ ᠢ᠋ᠶ᠋ᠠᠷ ᠵᠢᠭᠰᠠᠭᠠᠵᠤ ᠪᠠᠢᠭᠰᠠᠨ ᠠ᠋ᠴᠠ ᠡᠢᠨ ᠨᠠᠷᠠᠯᠠᠪᠠ', NULL, NULL, NULL, '2026-01-25 01:02:22.774', '2026-01-25 01:02:22.795', 1);
INSERT INTO public."DictionaryEntry" (toli_id, toli_m, toli_k, toli_ue, toli_we, toli_le, toli_aimag, toli_chmog, toli_ijauur, toli_uo, toli_eo, toli_to, z_code, toli_todo, toli_text, toli_image, toli_order, toli_del, toli_created, toli_modified, toli_sound) VALUES (2, 'ᠣᠷᠳᠣ', 'Орд', 'Ordo', 'ɔrd', 'Ord', 'ᠨᠡᠷ᠎ᠡ', 'ᠠ', 'ᠣᠷᠳᠣ', 'ᠣᠷᠳᠣᠨ', NULL, 'ᠤᠷᠢᠳᠤ', 'ᡥᡭᢞᢙᡳ', 'ᡆᠷᡑᡆ', '①ᠬᠠᠭᠠᠳ ᠨᠣᠶᠠᠳ ᠤ᠋ᠨ ᠣᠷᠣᠨ ᠰᠠᠭᠤᠴᠠ᠃ ②ᠣᠷᠣᠨ ᠰᠠᠭᠤᠴᠠ ᠶ᠋ᠢᠨ ᠬᠦᠨᠳᠦᠳᠬᠡᠯ ᠃ ③ ᠣᠯᠠᠨ ᠨᠡᠢᠲᠡ  ᠶ᠋ᠢᠨ ᠰᠣᠶᠣᠯ ᠂ ᠤᠷᠠᠯᠢᠭ ᠤ᠋ᠨ ᠴᠤᠭᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠣᠮᠣ ᠪᠠᠢᠰᠢᠩ ᠄ ᠰᠣᠶᠣᠯ ᠤ᠋ᠨ ᠣᠷᠳᠣᠨ ᠺᠢᠨᠣ᠋ ᠣᠷᠳᠣᠨ ᠃ ᠺᠢᠨᠣ᠋ ᠶ᠋ᠢᠨ ᠣᠷᠳᠣᠨ᠃ ④ ᠤᠯᠤᠰ ᠂ ᠣᠷᠣᠨ ᠤ᠋ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠤᠶᠤ ᠲᠡᠭᠦᠨ ᠦ᠌ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠪᠠᠢᠷᠢ ᠄ ᠵᠠᠰᠠᠭ  ᠤ᠋ᠨ ᠣᠷᠳᠣᠨ ᠤ᠋ ᠵᠠᠷᠯᠢᠭ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠣᠷᠳᠣᠨ ᠤ᠋ ᠬᠣᠷᠢᠶ᠎ᠠ ᠃⑤ ᠤᠷᠲᠤᠴᠢ ᠪᠣᠷᠣ ᠵᠡᠷᠭᠡ ᠬᠤᠯᠤᠭᠠᠨ᠎ᠠ ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᠢᠳᠡᠰᠢ ᠭᠦᠶᠦᠭᠡ ᠬᠤᠷᠢᠶᠠᠬᠤ ᠨᠦᠬᠡ ᠃ ⑥ᠡᠷᠦᠳᠡᠰᠦ ᠶ᠋ᠢᠨ ᠣᠷᠣᠰᠢᠬᠤ ᠬᠡᠪᠲᠡᠰᠢ ᠂ ᠠᠭᠤᠷᠬᠠᠢ᠄ ᠠᠯᠲᠠᠨ  ᠤ᠋ ～︔ ᠨᠡᠭᠦᠷᠡᠰᠦᠨ ᠦ᠌ ～᠃', NULL, NULL, NULL, '2026-01-25 01:02:22.798', '2026-01-25 01:02:22.8', 2);
INSERT INTO public."DictionaryEntry" (toli_id, toli_m, toli_k, toli_ue, toli_we, toli_le, toli_aimag, toli_chmog, toli_ijauur, toli_uo, toli_eo, toli_to, z_code, toli_todo, toli_text, toli_image, toli_order, toli_del, toli_created, toli_modified, toli_sound) VALUES (3, 'ᠤᠷᠲᠤ', 'Урт', 'Urtu', 'ʊrt', 'Urt', 'ᠲᠡᠮᠳᠡᠭ', 'ᠠ', 'ᠤᠷᠲᠤ', 'ᠤᠳᠠᠭᠠᠨ', 'ᠣᠬᠣᠷ', 'ᠤᠷᠢᠳᠤ', 'ᡥᡭᢞᢙᡳ', 'ᡇᠷᡐᡇ', '①ᠬᠡᠪᠲᠡᠭᠡ ᠶᠠᠭᠤᠮᠠᠨ ᠤ᠋ ᠬᠣᠶᠠᠷ ᠦᠵᠦᠭᠦᠷ ᠦ᠋ᠨ ᠬᠣᠭᠣᠷᠣᠨᠳᠣᠬᠢ ᠵᠠᠢ ᠶᠡᠬᠡ᠄ ～ᠮᠣᠳᠣ ︔～ᠳᠡᠭᠡᠰᠦ ︔～ᠵᠠᠮ᠃ ②ᠤᠷᠲᠤ ᠶ᠋ᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ᠄ ～ ᠪᠡᠷ ᠢ᠋ᠶ᠋ᠡᠨ ᠲᠠᠪᠤᠨ ᠲᠣᠬᠣᠢ ᠃③ᠴᠠᠭ ᠬᠤᠭᠤᠴᠠᠭ᠎ᠠ ᠨᠢ ᠤᠳᠠᠭᠠᠨ᠄ ～ᠨᠠᠰᠤᠯᠠᠬᠤ︔～ᠥᠭᠦᠯᠡᠯ᠃', NULL, NULL, NULL, '2026-01-25 01:02:22.802', '2026-01-25 01:02:22.803', 3);


--
-- Name: DictionaryEntry_toli_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dingnan
--

SELECT pg_catalog.setval('public."DictionaryEntry_toli_id_seq"', 3, true);


--
-- PostgreSQL database dump complete
--

\unrestrict UIJH4m8VW6nn45KDBGMX4x9gEMIj98Ixc8YBhYLNHReguiOn11JX3Hfm7nfeux2

