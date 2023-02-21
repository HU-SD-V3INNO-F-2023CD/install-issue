# Learningstory **Cache** assignment

Als developer wil ik leren hoe ik het statische gedeelte van een website in de cache kan opslaan en laden, zodat ik deze content offline beschikbaar kan maken.

Voorbereiding nadat je de repo gecloned hebt:

- installeer de vereiste packages met `npm install`.
- start de dev server met `npm run dev`. Als het goed is zie je nu een heel simpele pagina.
- pas de `<github-organisatie>/<repo>` in regel 29 in het script `deploy.sh` aan en run het om je site op github te hosten.

Stappen om deze learning story te voltooien:

- Maak dat homepagina van de site met het install event door de service worker in de cache wordt opgeslagen.
- Maak dat de homepagina van de site door de service worker wordt geladen (offline beschikbaar).
- Test dat About pagina van de site offline niet beschikbaar zijn.
- Voeg aan de `/src/service/static-storage-service.js` code voor de methoden `addAboutPageToCache` en `removeAboutPageFromCache` toe en test of het werkt.
- Stop de webserver en maak met ‘npm create vite@latest’ een nieuwe project aan. Ga na de directory van het nieuwe project en installeer de vereisten ‘npm install’. Start de webserver ‘npm run dev’. Wat valt je op?
