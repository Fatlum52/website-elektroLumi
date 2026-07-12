# Project Progress

## Progress Log

### 14-06-2026

- Created: `impressum.html`, `dataintegrity.html` (Datenschutzerklärung),
  `css/legal.css` (shared legal-page styles), `thank-you.html` (Danke-Seite),
  `js/kontakt-form.js` (AJAX-Versand).
- Updated: `kontakt.html` als Kontaktformular aufgebaut; `css/kontakt.css` mit
  Karten-/Form-Styling; `docs/tasks.md`.
- Notes: Kontaktformular ist **text-only** (kein Datei-Upload) und wird über
  **Web3Forms** versendet (AJAX `POST` an `api.web3forms.com`, bei Erfolg Redirect
  auf `thank-you.html`). Spam-Schutz: Honeypot (`botcheck`) + **hCaptcha**
  (Web3Forms-Proxy, kein eigener Sitekey). Felder: Firma, Name, E-Mail, Telefon,
  Objekt, Objektort, Nachricht. **Offen:** Web3Forms-Access-Key generieren
  (web3forms.com mit `dondraper52@hotmail.com`) und in `kontakt.html` einsetzen —
  ohne gültigen Key schlägt der Versand fehl. Für die Produktion einen Key für
  `info@elektrolumi.ch` erzeugen. Datenschutzerklärung nennt Web3Forms + hCaptcha
  und führt die Icon-Credits. (Vorher kurz auf FormSubmit.co geplant, dann auf
  Web3Forms gewechselt.)

### 12-07-2026

- Updated: `referenzen.html` – neues Eigenprojekt „Zahnarztpraxis" ergänzt
  (zwischen „Mehrfamilienhaus Hunzenschwil" und „Weitere Arbeiten").
- Notes: Bestehende `.ref-project`/`.ref-gallery`-Struktur von Hunzenschwil
  1:1 wiederverwendet (kein neues CSS). 11 Bilder aus
  `assets/images/zahnarztpraxis/` mit Titel, Beschrieb und Bildunterschriften
  eingebunden. Projekt: kompletter Umbau, Elektroinstallation mit
  BTicino-Material vom Einlegen bis zur fertigen Installation, plus
  Internet-Leitungen in die darüberliegende Wohnung mit Rack-Aufbau.
- Updated: `js/lightbox.js`, `css/referenzen.css` – Lightbox mit
  Vor-/Zurück-Navigation erweitert. Innerhalb der angeklickten Galerie kann
  jetzt per Pfeil-Buttons, Tastatur (←/→) oder Swipe geblättert werden
  (mit Umlauf); Bilder werden beim Öffnen aus der jeweiligen Galerie gesammelt.

- Created: `robots.txt`, `sitemap.xml` (Basis-URL `https://www.elektrolumi.ch`).
- Updated (SEO): Auf allen Seiten `meta description`, `canonical`, `theme-color`
  und Open-Graph-/Twitter-Tags ergänzt. Titel von `index.html` und
  `leistungen.html` mit Keywords (Elektroinstallationen, Brugg, Aargau) statt
  generischem „Elektro Lumi GmbH". `index.html`: fehlendes `<h1>` ergänzt
  (Hero-Callout ist jetzt `h1`) und `Electrician`-JSON-LD (LocalBusiness) mit
  Adresse, UID und Einzugsgebiet eingebaut.
- Fixed (Konsistenz): Favicon von `referenzen.html` auf `logo-footer3.svg`
  vereinheitlicht (war `logo.svg`).
- Notes: Offen/Empfehlungen – (1) Sicherheits-Header (CSP, X-Content-Type-Options,
  Referrer-Policy, HSTS) auf Hosting-Ebene setzen (statische Seite, nicht in HTML
  lösbar). (2) Stale Kommentar in `kontakt.html` prüfen: nennt Web3Forms-Key als
  „TEST / dondraper52@hotmail.com", obwohl laut Git bereits auf Prod-Key
  gewechselt. (3) Kein Tablet-Breakpoint (481–1024px nutzt vw-Schriftgrössen).

- Created: `_headers` – Security-Header für Cloudflare Pages
  (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS,
  Permissions-Policy; optionale CSP als Kommentar, weil hCaptcha/Web3Forms
  vor Aktivierung getestet werden müssen).
- Updated: Tablet-Breakpoint `@media (min-width:481px) and (max-width:1024px)`
  in `style.css`, `leistungen.css`, `referenzen.css`, `kontakt.css`,
  `legal.css` – ersetzt die vw-Schriftgrössen durch feste rem-Werte und stellt
  Grids auf 2–3 Spalten, damit Tablets nicht zu kleine Schrift zeigen.
- Fixed: Stale Web3Forms-Kommentar in `kontakt.html` entfernt (Key ist Prod).
- Updated: Tablet-Feinschliff in `style.css` – Navbar-/Footer-Logo grösser
  (3.8rem bzw. 5rem), Footer als 2×2-Raster statt gequetschtem Einzeiler.
  Services- und Leistungen-Grid im Tablet-Bereich zweispaltig.
- Created: `404.html` (Fehlerseite im Seitenstil, noindex) und `_redirects` –
  Zugriffe auf interne Dateien (`/docs/*`, `*.md`, `ideen.txt`) geben auf
  Cloudflare Pages jetzt 404 zurück, statt den Inhalt preiszugeben.

### DD-MM-YYY

- Created:
- Updated:
- Fixed:
- Refactored:
- Notes:
