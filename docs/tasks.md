# Tasks / Roadmap

Active work items for the Elektro Lumi website. See `progress.md` for the session log.

## In progress

- [ ] **Header layout jump** — reserve the navbar's height on the `#main-header`
  placeholder so the injected header no longer pushes content down on reload.
- [ ] **Always-visible navbar** — give the (already sticky) navbar a solid
  background + subtle shadow so page content can't bleed through on scroll.
- [ ] **Active nav link** — mark the current page's link with a `--primary` underline.
- [ ] **Kontakt CTA** — make the Kontakt nav link a filled, outstanding button.
- [ ] **Back-to-top arrow** — clickable arrow under the footer logo that
  smooth-scrolls to the top of the page.
- [ ] **Referenzen page** (`objects.html`) — card-free masonry gallery of project
  photos with a click-to-enlarge lightbox. Curated `boni/` project section
  (Mehrfamilienhaus Hunzenschwil) + a "Weitere Arbeiten" gallery of the loose photos.
- [ ] **Image compression** — downscale/compress the 4–6 MB photos (≈10× smaller,
  visually lossless) after approving a one-image before/after sample.

## Done

- [x] **Impressum** (`impressum.html`) — Firmenangaben, UID `CHE-113.204.558`,
  Geschäftsführer Hashim Cikaqi, Haftungsausschluss & Urheberrecht.
- [x] **Datenschutzerklärung** (`dataintegrity.html`) — revDSG/DSGVO, Hinweis auf
  Versand via Web3Forms, hCaptcha, inkl. Icon-Credits.
- [x] **Kontaktformular** (`kontakt.html`) — text-only, Versand via Web3Forms (AJAX)
  mit Honeypot + hCaptcha; Erfolg leitet auf `thank-you.html`. Felder: Firma, Name,
  E-Mail, Telefon, Objekt, Objektort, Nachricht. Test-Key für `dondraper52@hotmail.com`.

## Future

- Per-project Referenzen sections beyond `boni/` — each with title, short
  description, and many photos (e.g. "Mehrfamilienhaus Hunzenschwil").
- Optional: rename `objects.html` → `referenzen.html` (touches the nav href).
- Optional: shrink `.git` history (past heavy images) if the repo needs to be lean
  for cloud/teleport — destructive, do separately.

## Image filename legend

Filenames encode content; use this for `alt`/captions:

- **hv** = Hauptverteilung
- **uv** = Unterverteilung
- **ap** = Aufputz
- **nup** = Nass-Unterputz
- **wp** = Wärmepumpe
