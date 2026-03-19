# BT_web

## 📌 Inhoudsopgave

- [Dag 1 – Start project](#dag-1--start-project-erfbelasting-formulier)
  - [Ontwerpkeuzes](#ontwerpkeuzes)
  - [Styling (NS-huisstijl)](#styling-ns-huisstijl)
  - [Doel van vandaag](#doel-van-vandaag)

- [Dag 2 – HTML-structuur](#dag-2--start-met-html-structuur)

- [Dag 3 – Formulier verder uitgewerkt](#dag-3--formulier-verder-uitgewerkt)

- [Dag 4 – Styling en eerste interactie](#dag-4--styling-en-eerste-interactie)

- [Dag 5 – Meer interactie met JavaScript](#dag-5--meer-interactie-met-javascript)

- [Dag 6 – Voorwaardelijke vragen](#dag-6--voorwaardelijke-vragen-tonen-en-verbergen)

- [Dag 7 – Validatie en foutmeldingen](#dag-7--validatie-en-foutmeldingen)

- [Dag 8 – Dynamische verkrijgers](#dag-8--verkrijgers-dynamisch-toevoegen)

- [Mini-verslag per week](#-mini-verslag-per-week)
  - [Week 1](#-week-1--van-concept-naar-basisstructuur)
  - [Week 2](#-week-2--van-statisch-formulier-naar-interactief-prototype)

- [Reflectie](#-reflectie)
  - [Reflectie op het proces](#-reflectie-op-het-proces)
  - [Waar ik tegenaan liep](#waar-ik-tegenaan-liep)
  - [Wat ik heb geleerd](#wat-ik-heb-geleerd)
  - [Wat ik anders zou doen](#-wat-ik-een-volgende-keer-anders-zou-doen)

- [Onderbouwing van ontwerpkeuzes](#onderbouwing-van-ontwerpkeuzes)
  - [Stappenformulier](#1-stappenformulier)
  - [Minimalistische vormgeving](#2-minimalistische-vormgeving)
  - [NS-huisstijl](#3-ns-huisstijl)
  - [Conditionele vragen](#4-conditionele-vragen)
  - [Foutmeldingen](#5-foutmeldingen-dichtbij-het-veld)
  - [Progress bar](#6-progress-bar)
  - [Dynamische verkrijgers](#7-dynamische-verkrijgers)

- [Gebruik van AI (ChatGPT)](#gebruik-van-ai-chatgpt)


# Dag 1 – Start project Erfbelasting formulier

Vandaag ben ik gestart met het project voor het ontwerpen van een formulier voor aangifte erfbelasting.

Ik heb er bewust voor gekozen om **niet direct te beginnen met coderen**, maar eerst te starten in Figma. Omdat belastingaangifte een complex en gevoelig onderwerp is, vind ik het belangrijk om eerst de structuur, hiërarchie en gebruiksvriendelijkheid goed uit te werken voordat ik begin met HTML en CSS.

## Ontwerpkeuzes

In Figma heb ik:

- De globale layout opgezet  
- Gekozen voor een minimalistische en rustige vormgeving  
- Een stappenstructuur van 5 stappen bedacht om de voortgang inzichtelijk te maken  
- Al rekening gehouden met UX-principes zoals feedforward  

## Styling (NS-huisstijl)

Omdat de opdracht vraagt om de styling te baseren op de NS-huisstijl, heb ik alvast kleuren gekozen die aansluiten bij de herkenbare blauw/geel combinatie van NS. Deze styling werk ik later verder uit in CSS.

[📥 Download het ontwerp (PDF)](erfbelasting-ontwerp.pdf)


## Doel van vandaag

- Visueel overzicht creëren  
- Structuur bepalen  
- Een duidelijke basis neerzetten voordat ik technisch ga bouwen

  ## Dag 2 – Start met HTML-structuur

Vandaag ben ik begonnen met het opzetten van de HTML van het project. Ik heb eerst de basispagina gemaakt, inclusief een `header`, `main` en `footer`, zodat er een duidelijke structuur in de pagina zit. Daarbij heb ik ook een introductiepagina gemaakt waarop de gebruiker eerst uitleg krijgt voordat die naar het formulier gaat.

### Wat ik vandaag heb gedaan
- De basis van `index.html` opgezet  
- Een startscherm gemaakt met titel, uitleg en knop naar het formulier  
- Een waarschuwing toegevoegd dat het om een schoolproject gaat  
- De basis van `form.html` opgezet  
- Het formulier verdeeld in verschillende `fieldset` onderdelen  

### Bronnen
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form  
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset  
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label  


---

## Dag 3 – Formulier verder uitgewerkt

Vandaag heb ik het formulier verder uitgebreid met meerdere invoervelden en keuzemogelijkheden. Ik heb verschillende vragen toegevoegd die passen bij een aangifte erfbelasting.

### Wat ik vandaag heb gedaan
- Invoervelden toegevoegd voor naam en BSN  
- Selecties gemaakt voor overlijdensdatum  
- Radio buttons toegevoegd voor ja/nee-vragen  
- Extra secties uitgewerkt over partnerstatus, kinderen en testament  

### Bronnen
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input  
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date  
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio  


---

## Dag 4 – Styling en eerste interactie

Vandaag heb ik gewerkt aan de styling van het formulier in CSS. Het doel was om het formulier duidelijk, rustig en overzichtelijk te maken.

### Wat ik vandaag heb gedaan
- Basis CSS toegevoegd voor layout en formulier  
- Inputvelden en knoppen gestyled  
- Klassen gemaakt zoals `.hidden`, `.stap` en `.is-active`  
- Media query toegevoegd voor kleinere schermen  

### Bronnen
- https://developer.mozilla.org/en-US/docs/Web/CSS/display  
- https://developer.mozilla.org/en-US/docs/Web/CSS/:hover  
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

## Dag 5 – Meer interactie met JavaScript

Vandaag heb ik gewerkt aan de interactieve onderdelen van het formulier met JavaScript. Ik wilde ervoor zorgen dat het formulier niet uit één lange pagina bestaat, maar dat de gebruiker stap voor stap door de aangifte heen geleid wordt.

### Wat ik vandaag heb gedaan
- JavaScript toegevoegd voor een stappenformulier  
- Functie gemaakt om tussen stappen te navigeren  
- Vorige- en volgende-knoppen werkend gemaakt  
- Progress bar gekoppeld aan de huidige stap  
- Alleen de actieve stap zichtbaar gemaakt  

### Wat ik hiervan leerde
Ik heb geleerd hoe je met JavaScript elementen dynamisch kunt aanpassen in de DOM. Ook heb ik beter inzicht gekregen in hoe je meerdere elementen tegelijk kunt beheren met arrays en loops.

### Bronnen
- https://developer.mozilla.org/en-US/docs/Web/JavaScript  
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector  
- https://developer.mozilla.org/en-US/docs/Web/API/Element/classList  
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener  

---

## Dag 6 – Voorwaardelijke vragen tonen en verbergen

Vandaag heb ik gewerkt aan vragen die alleen zichtbaar worden als een eerder antwoord daarom vraagt. Dit zorgt ervoor dat het formulier overzichtelijk blijft.

### Wat ik vandaag heb gedaan
- Ja/nee-vragen gekoppeld aan vervolgvragen  
- Hidden blokken gemaakt in CSS  
- JavaScript gebruikt om blokken te tonen/verbergen  
- Logica toegevoegd voor partner, kinderen en notaris  

### 💡 Wat ik hiervan leerde
Ik heb geleerd hoe belangrijk conditionele logica is voor UX. Niet alle informatie tegelijk tonen maakt het formulier rustiger en duidelijker.

### 📚 Bronnen
- https://developer.mozilla.org/en-US/docs/Web/CSS/display  
- https://developer.mozilla.org/en-US/docs/Web/API/Element/classList  
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener  

---

## Dag 7 – Validatie en foutmeldingen

Vandaag heb ik gewerkt aan validatie en foutmeldingen. De gebruiker moet niet verder kunnen zonder verplichte velden in te vullen.

### Wat ik vandaag heb gedaan
- Validatie toegevoegd met `checkValidity()`  
- Error-styling toegepast op inputs  
- Foutmeldingen zichtbaar gemaakt  
- Validatie gekoppeld aan “Volgende” knop  
- Begin gemaakt met validatie van radio buttons  

### 💡 Wat ik hiervan leerde
Ik heb geleerd dat validatie niet alleen technisch is, maar ook visueel duidelijk moet zijn. Gebruikers moeten direct begrijpen wat er fout gaat.

### Bronnen
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity  
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation  
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input  

---

## Dag 8 – Verkrijgers dynamisch toevoegen

Vandaag heb ik gewerkt aan het dynamisch toevoegen van meerdere personen (verkrijgers).

### Wat ik vandaag heb gedaan
- Knop gemaakt om personen toe te voegen  
- Nieuwe fieldsets gegenereerd met JavaScript  
- Overzichtslijst van personen gemaakt  
- Verwijder-knop toegevoegd  
- Namen automatisch laten updaten  

###  Wat ik hiervan leerde
Ik heb geleerd hoe je dynamisch HTML-elementen maakt en toevoegt aan de pagina. Dit gaf me beter inzicht in hoe echte applicaties werken.

###  Bronnen
- https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement  
- https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild  
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML  

---

## 📆 Mini-verslag per week

### 📅 Week 1 – Van concept naar basisstructuur
In de eerste week heb ik vooral gewerkt aan de basis van het project. Ik ben begonnen in Figma om eerst goed na te denken over de structuur, de stappen en de gebruikservaring. Daarna heb ik de basis in HTML opgezet, waaronder de homepagina, de formulierpagina en de eerste inhoud van het formulier.

Ook heb ik al nagedacht over de styling die aansluit op de NS-huisstijl. Aan het einde van deze week stond er een duidelijke fundering waarop ik verder kon bouwen.

---

### 📅 Week 2 – Van statisch formulier naar interactief prototype
In de tweede week heb ik het formulier interactiever gemaakt met JavaScript en CSS. Ik heb gewerkt aan de voortgangsbalk, het tonen en verbergen van vragen, validatie van velden en het dynamisch toevoegen van verkrijgers.

Hierdoor begon het project meer te lijken op een echt digitaal formulier in plaats van alleen een visueel ontwerp. Ook ben ik in deze fase meer gaan nadenken over gebruiksvriendelijkheid, foutafhandeling en structuur in mijn code.

---

## 🔍 Reflectie

### 💡 Reflectie op het proces
Tijdens dit project heb ik geleerd dat een formulier ontwerpen veel meer is dan alleen invoervelden onder elkaar zetten. Zeker bij een onderwerp zoals erfbelasting is het belangrijk dat de gebruiker stap voor stap wordt begeleid en niet te veel informatie tegelijk ziet.

Daarom vond ik het waardevol dat ik eerst ben gestart met Figma. Daardoor had ik al een duidelijke structuur voordat ik begon met bouwen.

Tijdens het coderen heb ik veel geleerd over de samenwerking tussen HTML, CSS en JavaScript. HTML gaf de basisstructuur, CSS zorgde voor rust en duidelijkheid in de interface, en JavaScript maakte het formulier interactief.

Vooral het werken met meerdere stappen, conditionele vragen en validatie heeft me veel inzicht gegeven in hoe formulieren technisch én gebruiksvriendelijk opgebouwd worden.

---

### Waar ik tegenaan liep
Ik liep tegen meerdere dingen aan tijdens het bouwen:

- Validatie van radiobuttons, omdat deze anders werken dan gewone inputvelden  
- Dynamisch tonen en verbergen van vervolgvragen  
- Overzicht houden in mijn JavaScript-code  
- Goed omgaan met IDs, classes en structuur 

Daarnaast merkte ik dat interactieve formulieren snel complex worden. Wanneer een gebruiker keuzes verandert, moeten onderliggende velden soms opnieuw verborgen of gereset worden. Dit vraagt om extra logica en precisie.

---

### Wat ik heb geleerd
- Hoe je een formulier opdeelt in logische stappen  
- Hoe je met JavaScript elementen kunt tonen, verbergen en valideren  
- Hoe belangrijk duidelijke feedback is voor de gebruiker  
- Dat UX-keuzes en technische keuzes sterk met elkaar verbonden zijn  
- Dat een formulier rust en vertrouwen moet uitstralen  

---

### 🔄 Wat ik een volgende keer anders zou doen
- Eerder nadenken over de structuur van mijn JavaScript  
- Validatie vanaf het begin meenemen  
- Meer testen met verschillende gebruikersscenario’s  
- Code beter organiseren om verwarring te voorkomen  

---

## Onderbouwing van ontwerpkeuzes

### 1. Stappenformulier
Ik heb gekozen voor een formulier in meerdere stappen, omdat erfbelasting een complex onderwerp is. Door het op te delen hoeft de gebruiker niet alles in één keer te verwerken.

---

### 2. Minimalistische vormgeving
Ik heb bewust gekozen voor een rustige interface met veel witruimte en weinig afleiding. Dit helpt de gebruiker om gefocust te blijven.

---

### 3. NS-huisstijl
Ik heb kleuren gebruikt die aansluiten bij de NS-huisstijl (blauw/geel). Dit zorgt voor herkenbaarheid en duidelijke hiërarchie.

---

### 4. Conditionele vragen
Vervolgvragen worden alleen getoond wanneer ze relevant zijn. Dit maakt het formulier overzichtelijker en gebruiksvriendelijker.

---

### 5. Foutmeldingen dichtbij het veld
Foutmeldingen staan direct bij het invoerveld, zodat de gebruiker meteen ziet wat er fout gaat.

---

### 6. Progress bar
De progress bar laat zien waar de gebruiker zich bevindt in het proces. Dit geeft meer controle en overzicht.

---

### 7. Dynamische verkrijgers
Gebruikers kunnen zelf bepalen hoeveel personen ze toevoegen. Dit maakt het formulier flexibel en realistischer.

##  Gebruik van AI (ChatGPT)

Tijdens het project heb ik ChatGPT gebruikt als ondersteunend hulpmiddel. Ik heb dit vooral ingezet op momenten dat ik vastliep in mijn code of een fout niet kon vinden.

### 💡 Waarvoor ik ChatGPT heb gebruikt
- Het begrijpen van JavaScript-logica  
- Het oplossen van bugs  
- Het verbeteren van validatie en interactie  
- Het uitleggen van concepten die ik nog niet volledig begreep  

Ik heb ChatGPT gebruikt als hulpmiddel om gerichter oplossingen te vinden en mijn eigen code te verbeteren. Alle uiteindelijke keuzes en implementaties heb ik zelf uitgewerkt en aangepast aan mijn project.
