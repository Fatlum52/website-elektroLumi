# Deployment über Cloudflare Pages

Statische Seite ohne Build – kostenlos, HTTPS automatisch, jeder `git push` auf
`main` deployt neu. Domain ist bereits vorhanden.

## 1. Cloudflare-Account

<https://dash.cloudflare.com/sign-up> – Gratis-Plan, keine Kreditkarte nötig.

## 2. Pages-Projekt mit dem GitHub-Repo verbinden

1. Dashboard → **Workers & Pages** → **Create** → Reiter **Pages** →
   **Connect to Git**.
2. GitHub autorisieren und das Repo `website-elektroLumi` auswählen.
3. Build-Einstellungen (nichts kompilieren):

   | Einstellung | Wert |
   | --- | --- |
   | Framework preset | `None` |
   | Build command | *(leer lassen)* |
   | Build output directory | `/` |

4. **Save and Deploy**. Nach ~1 Minute ist die Seite live unter
   `https://elektrolumi.pages.dev`.

## 3. Eigene Domain verbinden

1. Im Pages-Projekt → **Custom domains** → **Set up a domain** → `www.elektrolumi.ch`.
2. Einfachster Weg: die **Nameserver der Domain auf Cloudflare umstellen** (das
   Dashboard zeigt dir zwei NS-Einträge, die du beim Registrar einträgst). Danach
   werden DNS und das **Gratis-HTTPS-Zertifikat automatisch** eingerichtet.
   Alternativ den angezeigten `CNAME` beim bisherigen Registrar setzen.
3. Zusätzlich die nackte Domain `elektrolumi.ch` hinzufügen und auf `www`
   weiterleiten – die Seite nutzt `www` als kanonische Adresse.

## 4. Danach

- Jeder `git push` auf `main` deployt automatisch neu (Verlauf unter
  **Pages → Deployments**).
- `_headers`, `_redirects` und `404.html` greifen auf Pages **automatisch** –
  nichts weiter zu konfigurieren.
- **GitHub-Pages-Workflow entfernen:** `.github/workflows/static.yml` löschen,
  sonst liegt die Seite doppelt (auch unter `…github.io`) und die `_redirects`
  greifen dort nicht.

## Troubleshooting

- **Alte Version sichtbar:** Hard-Reload `Cmd+Shift+R`.
- **Header/Footer fehlen:** Browser-Konsole auf 404 bei `header.html`/`footer.html`
  prüfen (Server ist case-sensitiv – Gross-/Kleinschreibung beachten).
