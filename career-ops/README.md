# Career-Ops — ملفات عز عبدالمعز

الملفات هنا **مش برنامج تقديم لوحده**. دي بطاقتك اللي بتنسخها لجوه أداة [career-ops](https://github.com/career-ops-hq/career-ops) عشان تعرف مين إنت، وأنهي مسار تتقدم بيه، وتدور على وظائف مناسبة.

الأداة **بتفلتر وتجهّز CV**. أنت اللي بتضغط تقديم بعد المراجعة. مش بوت LinkedIn/Indeed.

## إيه في المجلد

| الملف | فائدته |
|---|---|
| `profile.yml` | اسمك، لوكيشن، لينكات، الأدوار المستهدفة، الـ archetypes |
| `archetypes.yml` | شرح الخمس مسارات: أنهي CV وأنهي لينك بورتفوليو |
| `portals.yml` | فلتر العناوين + قوالب بحث (WUZZUF / LinkedIn / Indeed / ATS) |
| `cv.md` | السيرة المصدر اللي الأداة بتخصص منها كل تقديم |
| `tracker.csv` | جدول تتبّع يدوي لو مشغّلتش الأداة لسه |

## تشغيل سريع (مرة واحدة)

على جهازك، مش جوه ريبو البورتفوليو:

```bash
git clone https://github.com/career-ops-hq/career-ops.git
cd career-ops
npm install
npx playwright install chromium
npm run doctor
```

انسخ ملفاتنا:

```bash
cp /path/to/ezz-abdelmoez/career-ops/profile.yml config/profile.yml
cp /path/to/ezz-abdelmoez/career-ops/portals.yml portals.yml
cp /path/to/ezz-abdelmoez/career-ops/cv.md cv.md
```

افتح CLI فيه AI (Claude Code / Codex / Copilot) من فولدر `career-ops` وقول:

```
Adapt career-ops to this profile. Use the five archetypes in config/profile.yml.
When a job is Backend, use the Backend Engineer track.
When it is Frontend, use Frontend Engineer.
Never auto-submit an application.
```

## الاستخدام اليومي

1. الصق لينك وظيفة أو نص الإعلان.
2. الأداة تقيّم من 1 إلى 5 وتختار archetype.
3. لو التقييم **4 أو أعلى**: ولّد PDF، راجع، وقدّم بنفسك.
4. حط في التقديم:
   - الـ CV المناسب
   - خطاب التقديم
   - لينك البورتفوليو من `archetypes.yml`
5. سجّل الصف في `tracker.csv`.

لو التقييم تحت 4: سيّبها. وقتك أغلى من تقديم عشوائي.

## ربط البورتفوليو

البورتفوليو الحي: https://v0-ezz-abdelmoez.vercel.app/

بعد ما ترفع الـ PDFs في `public/<track>/` أزرار Docs هتشتغل لوحدها.
