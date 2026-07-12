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

### DD-MM-YYY

- Created:
- Updated:
- Fixed:
- Refactored:
- Notes:
