import ServiceLevels from "@/components/freelancer/service-levels";
import DocumentUpload from "@/components/freelancer/document-upload";
import ContractSigning from "@/components/freelancer/contract-signing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookUser, FileUp, Gavel } from "lucide-react";

export default function FreelancerPortalPage({ params }: { params: { id: string } }) {

  const mockContractContent = `
Datum

2024-07-30

MODELOVEREENKOMST VAN OPDRACHT (ZZP)
Overeenkomst tussen
Opdrachtnemer

King Kong Movers | Gebroeders Stegeman Verhuizingen

Opdrachtgever

[NAAM ZZP'ER]

1PREAMBULE
Opdrachtgever levert premium verhuis- en logistieke diensten met als belofte: “Alles voor het gevoel van thuis.” Partijen wensen uitsluitend samen te werken als twee onafhankelijke ondernemingen, waarbij Opdrachtnemer werkzaamheden verricht als zelfstandig ondernemer en Opdrachtgever uitsluitend resultaat-, kwaliteits- en veiligheidskaders stelt, passend binnen (i) wet- en regelgeving, (ii) klantafspraken en (iii) normen die volgen uit de verhuisbranche en het keurmerk/kwaliteitskader. Partijen verklaren uitdrukkelijk géén arbeidsovereenkomst te beogen conform de Wet DBA. Opdrachtnemer werkt volledig voor eigen rekening en risico, met eigen middelen, eigen administratie, eigen verzekeringen en eigen werkwijze. De Opdrachtnemer is vrij in de wijze waarop hij de overeengekomen opdracht uitvoert, binnen de kaders van het overeengekomen resultaat en de relevante wettelijke voorschriften. Partijen verklaren dat de Algemene Voorwaarden voor Verhuizingen (AVVV 2025), de Algemene Voorwaarden voor Bewaarneming (AVBV 2025), de Algemene Voorwaarden voor Handymandiensten (AVHD 2025), de Algemene Voorwaarden voor Bedrijfsverhuizing (AVB 2020) en de Verzekeringsvoorwaarden PV05 2025, voor zover van toepassing op de specifieke opdracht, onderdeel uitmaken van deze overeenkomst en dat Opdrachtnemer bekend is met de eisen die Opdrachtgever stelt aan de dienstverlening die namens Opdrachtgever worden uitgevoerd.

2Partijen
Opdrachtgever: King Kong Movers | Gebroeders Stegeman Verhuizingen, gevestigd te Aalsmeer. Opdrachtnemer: de zelfstandige onderneming zoals vermeld bij ondertekening.

3Karakter van de overeenkomst (DBA-proof uitgangspunt)
Partijen beogen uitsluitend een overeenkomst van opdracht (art. 7:400 BW e.v.). Er is geen arbeidsovereenkomst beoogd: geen loonbetalingsplicht bij ontbreken van uitvoering, geen gezagsverhouding, geen verplichting tot persoonlijke arbeid als werknemer, geen organisatorische inbedding als werknemer. Opdrachtgever kan aanwijzingen geven die uitsluitend zien op: * het overeengekomen resultaat en de afbakening van de opdracht; * veiligheid, wettelijke verplichtingen, Arbocatalogus/Arbo-eisen en locatie-instructies; * kwaliteit en klantkaders (o.a. schadepreventie, omgangsvormen, opleverkwaliteit). Deze aanwijzingen zijn nadrukkelijk geen werkgeversgezag maar opdrachtvoorwaarden.

4Zelfstandig Ondernemerschap en Vervanging
a. Opdrachtnemer bevestigt volledig zelfstandig ondernemer te zijn en werkt zonder werkgeversgezag van Opdrachtgever. Opdrachtnemer voert het werk uit voor eigen rekening en risico. b. Opdrachtgever draagt geen verantwoordelijkheid voor: ziekte, arbeidsongeschiktheid, verzekeringen, pensioen, gereedschap, PBM, opleidingen, of schade veroorzaakt door Opdrachtnemer. c. Opdrachtnemer heeft het recht om zich te laten vervangen door een gekwalificeerde derde of om onderaannemers in te schakelen voor de uitvoering van de opdracht, mits deze vervanger of onderaannemer voldoet aan de objectieve kwaliteits- en veiligheidseisen die voor de betreffende opdracht gelden en vooraf tijdig is gemeld aan Opdrachtgever. De Opdrachtnemer blijft te allen tijde verantwoordelijk voor de correcte uitvoering van de opdracht, facturatie en aansprakelijkheid. d. Betaling geschiedt uitsluitend aan Opdrachtnemer.

5Opdrachtbevestiging en scope
Iedere inzet vindt plaats op basis van een (digitale) Opdrachtbevestiging met ten minste: datum, locatie(s), starttijd, verwachte eindtijd/duur, dienstniveau/rol, tariefkader, bijzonderheden en eventueel materieel. Opdrachtnemer verricht uitsluitend werkzaamheden die passen binnen het overeengekomen dienstniveau en de daarbij behorende competenties.

6Resultaatverplichting: starttijd = inzetbaar zijn (nuance DBA-scherp)
Opdrachtnemer heeft de resultaatsverplichting om op de overeengekomen starttijd op de afgesproken locatie volledig inzetbaar te zijn: arbeidsgereed, met PBM, en met de voor de opdracht benodigde middelen die tot zijn ondernemerschap behoren. Voorbereidingstijd (o.a. omkleden, PBM-check, gereedschap organiseren, koffie/water, korte afstemming) is onderdeel van de eigen bedrijfsvoering van Opdrachtnemer en is niet factureerbaar. Opdrachtgever kan – afhankelijk van de opdracht – een operationeel afstemmoment faciliteren (bijv. briefing of materiaaluitgifte). Dit afstemmoment is geen verplicht “aanwezig zijn op de zaak” als werknemer, maar een praktische voorziening om de opdracht efficiënt te laten starten.

7Te laat / niet verschijnen: ondernemersrisico en aantoonbare schade
Het plannen van route, verkeer-anticipatie en navigatiecheck behoort tot het ondernemersrisico van Opdrachtnemer. Bij (dreigende) vertraging is Opdrachtnemer verplicht direct telefonisch contact op te nemen met de coördinator van Opdrachtgever; een app/bericht is onvoldoende. Indien Opdrachtnemer te laat verschijnt of niet verschijnt, is sprake van een tekortkoming in de nakoming. Opdrachtnemer erkent dat dit voor Opdrachtgever en de klant direct tot extra kosten kan leiden (bijv. vervangende inzet, wachttijd, herplanning). Opdrachtgever is gerechtigd de aantoonbare, redelijke en rechtstreeks uit de tekortkoming voortvloeiende kosten op Opdrachtnemer te verhalen (waaronder: aantoonbare extra inhuurkosten, aantoonbare extra reistijd/voorrijkosten, aantoonbare stilstandkosten van ingepland materieel/crew, aantoonbare contractuele boetes van opdrachtgevers indien rechtstreeks herleidbaar). Opdrachtnemer accepteert dat bij te laat komen of niet verschijnen: * geen recht bestaat op vergoeding van niet-gewerkte uren; en * Opdrachtgever de inzet per direct mag beëindigen of vervangen om het opdrachtresultaat te borgen. Belangrijk DBA-punt: dit is geformuleerd als contractuele gevolgtrekking van het niet halen van het opdrachtresultaat (op tijd inzetbaar), niet als arbeidsrechtelijke disciplinaire maatregel.

8Verbod op eigenmachtig vertrek / opdracht verlaten
Het zonder toestemming verlaten van de werklocatie of het voortijdig beëindigen van de opdracht (bijv. “adres niet gevonden” en terugrijden zonder afstemming) geldt als wezenlijke tekortkoming. Opdrachtgever mag dan: (i) de opdracht beëindigen, (ii) betaling weigeren voor niet-gewerkte tijd, en (iii) aantoonbare directe kosten verhalen conform 2.3.

9Toegangseis PBM (harde randvoorwaarde)
a. Opdrachtnemer is te allen tijde verantwoordelijk voor de naleving van alle relevante wettelijke veiligheidsvoorschriften op de werkplek, inclusief het dragen van de wettelijk verplichte persoonlijke beschermingsmiddelen (PBM) die noodzakelijk zijn voor de veilige uitvoering van de opdracht. b. Minimale basisset (tenzij opdracht zwaarder vereist): * veiligheidsschoenen (minimaal S2/S3 waar passend); * robuuste werkbroek (geen vrijetijdskleding zoals spijkerbroeken), die bescherming biedt tegen vallen, schaafwonden en scherpe voorwerpen; * werkhandschoenen; * hi-vis/veiligheidshesje; * aanvullende PBM (helm/bril/gehoor/adem) indien opdracht of locatie dit vereist. c. Indien Opdrachtnemer niet aan PBM-toegangseisen voldoet, kan de opdracht niet starten; dit leidt niet tot een betalingsverplichting van Opdrachtgever. d. Opdrachtnemer heeft de mogelijkheid om representatieve werkkleding, passend bij de huisstijl van Opdrachtgever, aan te schaffen bij Opdrachtgever tegen kostprijs. Het dragen hiervan is optioneel, tenzij specifieke PBM-eisen dit noodzakelijk maken.

10Hulpmiddelen, fysieke belasting en veilig werken
Opdrachtnemer werkt volgens Arbo-/veiligheidsnormen en gebruikt beschikbare hulpmiddelen (o.a. hondjes, traplopers, tilbanden, steekwagens) wanneer dat redelijkerwijs vereist is om onveilig werken te voorkomen. Het gebruik van hulpmiddelen ter voorkoming van fysieke belasting is verplicht waar de situatie dit vereist en wettelijk voorgeschreven is. Opdrachtgever mag werkzaamheden laten stilleggen bij onveilige situaties. Dit is een veiligheidsmaatregel en geen gezagsuitoefening als werkgever.

11Certificaten en bevoegdheden
Bediening van specialistisch materieel (o.a. verhuislift, heftruck) is alleen toegestaan met aantoonbare bekwaamheid/certificering waar dit vereist is. Onbevoegde bediening geldt als handelen buiten opdracht en is volledig voor risico en aansprakelijkheid van Opdrachtnemer.

12Kwaliteit en gedragscode (klantbelofte)
Opdrachtnemer handelt professioneel, klantgericht en schadebewust. Opdrachtnemer draagt zorg voor een professionele uitvoering van de opdracht, waarbij hij de reputatie van Opdrachtgever in acht neemt. Dit omvat: * Zorgvuldig werken met eigendommen van klanten. * Actief meedenken en proactief melden van potentiële problemen. * Oplossingsgericht handelen. * Geen haastwerk dat de kwaliteit of veiligheid in gevaar brengt. * Correcte communicatie en omgangsvormen met klanten en omwonenden. * Respect voor privacy en eigendommen. * Niet roken in het zicht van klanten of op locaties waar dit niet is toegestaan. * Geen rommel achterlaten. * Persoonlijke hygiëne en verzorging. Onprofessioneel, laks of ongeïnteresseerd gedrag dat de uitvoering van de opdracht of de klantbeleving negatief beïnvloedt, is onverenigbaar met de kwaliteitsstandaarden van Opdrachtgever en kan leiden tot onmiddellijke beëindiging van de opdracht.

13Verboden Goederen
Opdrachtnemer zal te allen tijde de instructies van Opdrachtgever opvolgen betreffende verboden goederen. Indien Opdrachtnemer goederen verpakt of vervoert die als verboden zijn aangemerkt, is Opdrachtnemer volledig aansprakelijk voor alle daaruit voortvloeiende schade, vertragingen, boetes en kosten.

14ISO-, Arbo- en EV-eisen
Opdrachtnemer zal bij de uitvoering van de opdracht voldoen aan de relevante kwaliteits-, milieu- en veiligheidsstandaarden, waaronder de principes van ISO 9001 (kwaliteit), ISO 14001 (milieu), ISO 45001 (veiligheid), de Arbocatalogus Verhuisvervoer en de RI&E fysieke belasting, voor zover deze van toepassing zijn op de aard van de de opdracht en de wettelijke vereisten.

15Gereedschap en Hulpmiddelen
a. Opdrachtnemer dient te beschikken over de benodigde deugdelijke en professionele gereedschappen en hulpmiddelen, die geschikt zijn voor de aard en intensiteit van de werkzaamheden, om de overeengekomen opdracht naar behoren en zelfstandig uit te voeren. Dit omvat, afhankelijk van de aard van de opdracht: accutol, bitsets, handgereedschap, meetgereedschap en montagematerialen. Amateuristisch of ondeugdelijk gereedschap is niet toegestaan. b. Gereedschap dient gekeurd te zijn conform NEN 3140 waar van toepassing en Opdrachtnemer is verantwoordelijk voor de veiligheid en functionaliteit van zijn eigen gereedschap. c. Gebruik van eigen materiaal door Opdrachtnemer, indien dit de uitvoering van de opdracht ten goede komt en Opdrachtgever hiermee instemt, kan worden vergoed volgens objectieve branchestandaarden (bijv. RoldoRent dagprijzen), na voorafgaande schriftelijke afspraak.

16Dienstniveaus als commerciële indeling (geen loon-/functieschaal)
Partijen spreken af dat Opdrachtgever werkt met dienstniveaus (A t/m H) met bijbehorende scope en tariefranges (Bijlage 1). Dit is een commerciële indeling per opdracht (geen arbeidsrechtelijke functie- of salarisschaal).

17Toewijzing tarief binnen de range
Per opdracht wordt een dienstniveau en tariefkader vastgesteld. Binnen de tariefrange geldt: instap = onderkant, hoger binnen de range uitsluitend bij aantoonbare meerwaarde (zelfstandigheid, kwaliteit, tempo, foutloos, klantcommunicatie, veiligheid). Indien Opdrachtnemer bij aanvang of tijdens uitvoering niet blijkt te voldoen aan de objectieve en aantoonbare vaardigheden, diploma’s of middelen die voor de overeengekomen scope/kwalificaties vereist zijn, kan Opdrachtgever de inzet aanpassen naar een passend dienstniveau voor die opdracht (met bijbehorende tariefband), of de opdracht beëindigen om kwaliteits-/veiligheidsredenen. Dit geschiedt altijd in overleg en voorafgaand aan de uitvoering van de opdracht, indien mogelijk.

18Tariefkaders (GS/Euromovers) en materieel
Indien Opdrachtgever met twee commerciële kaders werkt (bijv. eigen opdrachten vs Euromovers), worden die per opdracht expliciet vastgelegd. Tariefstructuur en materieelvergoedingen kunnen hierop aansluiten. Eventuele voertuigen/materieelvergoedingen kunnen per opdracht worden overeengekomen (bijv. servicebus per uur met km-staffel).

19Urenregistratie (leidend systeem) en controle
De urenregistratie in het door Opdrachtgever aangewezen systeem (bijv. Softmoving) is leidend voor factuurcontrole. Opdrachtnemer registreert tijdig en correct. Bij verschil mag Opdrachtgever een gemotiveerde correctie voorstellen; Opdrachtnemer reageert binnen 48 uur. Opdrachtnemer is zelf verantwoordelijk voor de correcte opgave van zijn gewerkte uren en eventuele pauzes, conform zijn eigen ondernemerspraktijk.

20Rusttijden: niet factureerbaar en minimale aftrek (veiligheid + consistentie)
Rusttijd/pauze/onderbrekingen (eten, roken, privé, tanken boven korte handeling) zijn niet factureerbaar. Reistijd naar de startlocatie van de opdracht, pauzes en tanken vallen onder de eigen bedrijfsvoering en het ondernemersrisico van de Opdrachtnemer en worden niet als betaalbare werktijd beschouwd, tenzij expliciet anders overeengekomen voor specifieke opdrachten. Partijen spreken een minimale pauze-aftrek af als objectieve factuurcontrole (staffel) omdat veilig werken een randvoorwaarde is en omdat “doorwerken zonder pauze” niet als standaard uitgangspunt wordt geaccepteerd. De staffel (minimale niet-factureerbare rusttijd) wordt per dienst automatisch in mindering gebracht conform de afspraken in de Opdrachtbevestiging of deze overeenkomst.

21Documentatieplicht
Opdrachtnemer is verplicht alle relevante opdrachtdocumenten (zoals paklijsten, vrachtbrieven, inventarislijsten) correct en volledig in te vullen en te laten ondertekenen door de klant op zowel laad- als losadres. Alle uitzonderingen en bestaande schades dienen duidelijk te worden vermeld en gedocumenteerd (bijv. foto's). Deze documenten dienen binnen [termijn, bijv. 1 werkdag] na uitvoering van de opdracht compleet en correct te worden geretourneerd aan Opdrachtgever. Onvolledige of vertraagd ingeleverde documenten kunnen leiden tot opschorting van de factuurbehandeling.

22Facturatie-eisen
Opdrachtnemer factureert per kalenderweek één factuur, binnen 7 dagen na weekeinde. Factuur komt uit een erkend facturatie-/boekhoudsysteem (geen Word/Excel) en bevat per regel: datum, locatie, start/eindtijd, dienstniveau, tarief, en totaal factureerbare uren. Aanvullende kosten of kosten van derden dienen apart te worden gefactureerd, gespecificeerd en vereisen voorafgaande schriftelijke toestemming van Opdrachtgever. Foute facturen dienen eerst te worden gecrediteerd middels een creditnota, waarna een nieuwe, correcte factuur kan worden ingediend.

23Betaling en correcties
Betaaltermijn: 30 dagen na ontvangst van een correcte factuur (tenzij anders overeengekomen). Onjuiste facturen mogen worden afgewezen; na correctie/credit start de termijn opnieuw. Directe betaling is mogelijk en kan gepaard gaan met een betalingskorting, mits duidelijk verwerkt op de factuur. De volgende kortingspercentages zijn van toepassing op het factuurbedrag (excl. BTW), afhankelijk van de betaaltermijn na ontvangst van een correcte factuur: * Directe betaling (binnen 1 werkdag): 5% korting * Betaling binnen 7 dagen: 3% korting * Betaling binnen 14 dagen: 2% korting * Betaling binnen 21 dagen: 1% korting * Betaling binnen 30 dagen: 0% korting Voor de berekening van de betalingstermijn en de toepasselijke korting geldt de datum van ontvangst van een correcte factuur op een werkdag. Facturen die buiten werktijden (maandag t/m vrijdag 09:00-17:00) of in het weekend/op feestdagen worden ingediend, worden geacht te zijn ontvangen op de eerstvolgende werkdag.

24Verrekening
Opdrachtgever mag aantoonbare vorderingen (schade, boetes, naheffingen, teveel betaald) verrekenen met openstaande facturen voor zover wettelijk toegestaan.

25Aansprakelijkheid en AVB
Opdrachtnemer is aansprakelijk voor schade veroorzaakt door zijn toedoen of nalatigheid bij de uitvoering van de opdracht en dient een adequate Aansprakelijkheidsverzekering Bedrijven (AVB) te hebben met een minimale dekkingssom van € 2.500.000 per gebeurtenis voor zaakschade en letselschade, inclusief dekking voor schade aan goederen van derden onder zijn berusting of tijdens transport.

26Vrijwaring
Opdrachtnemer vrijwaart Opdrachtgever voor alle aanspraken van derden (waaronder klanten van Opdrachtgever) ter zake van schade, boetes, kosten en verliezen die het directe of indirecte gevolg zijn van een tekortkoming, onrechtmatige daad of nalatigheid van Opdrachtnemer bij de uitvoering van de opdracht, of van het niet nakomen van de verplichtingen uit deze overeenkomst. Deze vrijwaring omvat ook de kosten van juridische bijstand die Opdrachtgever maakt in verband met dergelijke aanspraken.

27Voertuigen en Materieel (incl. Huurvoertuigen)
a. Opdrachtnemer is te allen tijde verantwoordelijk voor alle schade aan voertuigen en materieel die hij gebruikt bij de uitvoering van de opdracht, ongeacht of deze eigendom zijn van Opdrachtnemer, Opdrachtgever of derden (zoals huurvoertuigen), voor zover de schade is ontstaan door toedoen of nalatigheid van Opdrachtnemer. b. Dit omvat, maar is niet beperkt tot, schade als gevolg van aanrijdingen, diefstal, vandalisme of onjuist gebruik. c. Opdrachtnemer is verantwoordelijk voor het voldoen van eventuele eigen risico's (franchises) die van toepassing zijn op de verzekering van dergelijke voertuigen en materieel, indien de schade door zijn toedoen of nalatigheid is veroorzaakt. d. Opdrachtnemer dient zorg te dragen voor een adequate verzekering voor de voertuigen en materieel die hij inzet, indien deze zijn eigendom zijn. Indien Opdrachtnemer gebruikmaakt van door Opdrachtgever ter beschikking gestelde of gehuurde voertuigen, dient Opdrachtnemer zich te houden aan de instructies en voorwaarden van Opdrachtgever met betrekking tot het gebruik en de verzekering daarvan, onverminderd zijn verantwoordelijkheid voor het eigen risico bij schade veroorzaakt door hem.

28Schade aan Materiaal van Opdrachtgever
Indien Opdrachtnemer gebruikmaakt van materiaal van Opdrachtgever, geschiedt dit op basis van een separate huurovereenkomst. Opdrachtnemer is verantwoordelijk voor verlies, diefstal of schade aan gehuurd materiaal van Opdrachtgever en vergoedt dit tegen 100% nieuwwaarde, zoals gespecificeerd in Bijlage 2.

29Schademelding en Afhandeling
Bij constatering van enige schade aan inboedel, persoonlijke bezittingen, gebouwen, voertuigen of ander materiaal tijdens de uitvoering van de opdracht, is Opdrachtnemer verplicht dit onmiddellijk telefonisch te melden aan Opdrachtgever. Bestaande schades dienen bij aanvang van de opdracht te worden genoteerd op de relevante documenten en onder de aandacht van de klant te worden gebracht. Opdrachtnemer dient, indien mogelijk, de schade te documenteren (foto's, beschrijving). De afhandeling van schades met de klant zal door Opdrachtgever worden behandeld. Indien schade is ontstaan door roekeloosheid, nalatigheid of het niet melden van schade door Opdrachtnemer, zullen de kosten op Opdrachtnemer worden verhaald conform de bepalingen van deze overeenkomst.

30Boetes
Boetes (verkeer/parkeren/milieuzone) die voortvloeien uit handelen van Opdrachtnemer zijn voor rekening van Opdrachtnemer.

31Schade door tekortkoming (te laat/niet verschijnen/verlaten)
Toepassing conform Hoofdstuk 2.3/2.4: uitsluitend aantoonbare, redelijke en direct herleidbare kosten.

32Looptijd
Deze overeenkomst is aangegaan voor onbepaalde tijd, tenzij per opdracht anders is overeengekomen.

33Opzegging
Ieder der partijen kan deze overeenkomst schriftelijk opzeggen met inachtneming van een opzegtermijn van 14 dagen, tenzij sprake is van een wezenlijke tekortkoming in de nakoming van de verplichtingen uit deze overeenkomst.

34Tussentijdse beëindiging
Onverminderd artikel 8.2, kan de overeenkomst met onmiddellijke ingang worden beëindigd door één der partijen indien: (1) Er sprake is van een wezenlijke tekortkoming en de tekortkomende partij in haar nakoming tekort blijft schieten, zelfs nadat zij een redelijke termijn heeft gehad om de gebreken te herstellen; (2) De wederpartij surseance van betaling aanvraagt, in staat van faillissement wordt verklaard, of de bedrijfsvoering staakt; (3) Er sprake is van overmacht waardoor een partij haar verplichtingen niet kan nakomen en deze situatie langer dan [aantal] dagen voortduurt. De opzeggende partij is in dit geval niet gehouden tot het betalen van enige schadevergoeding.

35Non-overdraagbaarheid
Tenzij partijen voorafgaande schriftelijke toestemming hebben van de wederpartij, is het partijen verboden om hun rechten en plichten uit deze overeenkomst (deels) over te dragen aan derden.

36Geheimhouding
Opdrachtnemer is verplicht tot strikte geheimhouding van alle vertrouwelijke informatie die hij verkrijgt in het kader van de opdracht, waaronder klantgegevens, adressen, verhuisdocumenten, douanedocumenten en bedrijfsinformatie van Opdrachtgever.

37Non-werving en doorverwijzing
Opdrachtnemer zal geen contactgegevens van Opdrachtgever of klanten delen met derden zonder voorafgaande schriftelijke toestemming van Opdrachtgever. Indien een klant of account Opdrachtnemer rechtstreeks benadert, zal Opdrachtnemer dit onmiddellijk melden aan Opdrachtgever en de klant/account doorverwijzen naar Opdrachtgever.

38Toepasselijk recht
Op deze overeenkomst is Nederlands recht van toepassing.

39Forumkeuze
Alle geschillen die voortvloeien uit of verband houden met deze overeenkomst zullen uitsluitend worden voorgelegd aan de bevoegde rechter te Amsterdam.

40Diensten- & tariefrangeskaart (ZZP)
(Range-kaart voor ZZP’ers; commerciële indeling per opdracht; geen arbeidsschaal.) Algemeen: Tenzij anders overeengekomen per opdrachtbevestiging, geldt een minimale inzet van 6 uur per opdracht. Dienstniveau A – Verhuismedewerker Tariefrange: € 25,00 – € 27,50 p/u De dienst omvat: * basis sjouw- en logistieke werkzaamheden; * zorgvuldig omgaan met meubels en dozen; * uitvoering binnen afgesproken veiligheidskaders. Vereist: * eigen PBM en professionele werkkleding; * VCA Basis (gewenst). Toepassing range: * onderkant: eenvoudige, repeterende inzet; * bovenkant: tempo, zorgvuldigheid, zelfstandig uitvoerbaar binnen scope. Dienstniveau B – Assistent Verhuizer Tariefrange: € 26,00 – € 30,00 p/u De dienst omvat: * eenvoudige de- en montage van standaardmeubelen (bijv. IKEA-achtige meubels); * correct inpakken van verhuisdozen (niet-breekbare goederen) en labelen; * ondersteuning bij laad- en loswerk; * zorgvuldig omgaan met verpakkingsmateriaal en goederen; * veilig tillen met hulpmiddelen. Vereist: * SAVAM Assistent Verhuizer (gewenst); * VCA Basis; * rijbewijs B (gewenst); * eigen PBM en basisgereedschap. Toepassing range: * onderkant: ondersteunend karakter; * bovenkant: hoge zelfstandigheid binnen afgebakende taken. Dienstniveau C – Verhuizer (volwaardig) Tariefrange: € 29,00 – € 32,00 p/u De dienst omvat: * zelfstandige uitvoering van verhuiswerkzaamheden; * volledige demontage en montage van meubilair; * inpakken van verhuisdozen (breekbare en niet-breekbare goederen) conform EV-/ISO-normen; * zelfstandig laden, stuwen, borgen en schadepreventie van verhuisgoederen in verhuiswagen/bus/container/liftvan; * opmaken van gedetailleerde inventarislijsten; * professioneel klantcontact en afstemming op locatie; * herkennen van risico’s en hanteren van moeilijke items (banken, kasten, apparatuur, designmeubels); * oplossen van kleine technische uitdagingen. Vereist: * SAVAM / Inboedelverhuizer diploma of aantoonbare gelijkwaardige praktijkervaring; * VCA Basis; * verhuisliftcertificaat indien liften worden bediend; * eigen volledige PBM en gereedschap. Toepassing range: * onderkant: standaard verhuisopdrachten; * bovenkant: complexere opdrachten of hogere zelfstandigheid. Dienstniveau D – Export Packer Tariefrange: € 30,00 – € 32,50 p/u De dienst omvat: * specialistisch exportverpakken (kunst, antiek, zee-/luchtvracht) conform ISPM15 en exportnormen; * inspecteren van containers op schoonheid, lekkage en reukloosheid; * afsluiten van containers met douanezegel in aanwezigheid van de klant; * opmaken van gedetailleerde inventarislijsten voor export; * houten kratten voorbereiden. Vereist: * exportverpakker training of aantoonbare ervaring in exportverpakking; * VCA Basis; * eigen specialistisch gereedschap. Dienstniveau E – Chauffeur–Verhuizer Tariefrange: € 32,00 – € 35,00 p/u De dienst omvat: * rijden en manoeuvreren van verhuisvoertuigen (verhuiswagen/bus); * laden en stuwen volgens norm; * combineren van transport en verhuiswerk; * naleving van wet- en regelgeving inzake rij- en rusttijden wegvervoer; * inspecteren van verhuiswagen op schoonheid, lekkage en reukloosheid. Vereist: * SAVAM Inboedelverhuizer; * VCA Basis; * rijbewijs B of C; * Code 95 (indien van toepassing); * eigen NIWO indien transport onder eigen naam plaatsvindt. Dienstniveau F – Verhuisliftoperator Tariefrange: € 35,00 – € 37,50 p/u De dienst omvat: * zelfstandig op- en afbouwen van verhuisliften; * veilig werken op hoogte; * bedienen van liftinstallaties. Vereist: * verhuisliftoperatorcertificaat; * VCA Basis; * veilig werken op hoogte; * eigen PBM. Dienstniveau G – Voorman / Teamcoördinator Tariefrange: € 35,00 – € 38,50 p/u De dienst omvat: * coördinatie van werkzaamheden op locatie en leidinggeven aan een team (tot 5 man); * afstemming tussen ingehuurde professionals; * kwaliteitsbewaking en klantcommunicatie; * toezicht op ladingzekering en schadepreventie; * afhandeling van douaneformaliteiten (indien van toepassing, bijv. Zwitserland/Noorwegen); * planning maken op locatie en teamdiscipline handhaven. Vereist: * Voorman Inboedel- of Projectverhuizer diploma of aantoonbare leiderschapsvaardigheden; * VCA VOL; * rijbewijs C + Code 95 (indien van toepassing); * eigen NIWO bij transport onder eigen verantwoordelijkheid. Dienstniveau H – Handyman Tariefrange: € 37,50 – € 40,00 p/u De dienst omvat: * uitvoeren van kleine kluswerkzaamheden gerelateerd aan verhuizingen (bijv. ophangen lampen, schilderijen); * monteren van complexer meubilair; * oplossen van kleine technische problemen. Inclusief: * eigen bus / bedrijfsvoertuig; * eigen gereedschap. Exclusief: * klein materiaal (pluggen, schroeven, kit e.d.) → op nacalculatie (gespecificeerd). Vereist: * Handyman-opleiding (Verhuiscollege of gelijkwaardig); * VCA Basis; * eigen PBM, bus en gereedschap.

41Materieel/voertuigen & km-staffels en vervangingswaarden
1. Vervangingswaarden Materiaal Opdrachtgever (nieuwwaarde, excl. BTW) Bij verlies, diefstal of onherstelbare schade aan gehuurd materiaal van Opdrachtgever, veroorzaakt door toedoen of nalatigheid van Opdrachtnemer, vergoedt Opdrachtnemer de volgende nieuwwaarden: * SmartCart: € 975 * Rolcontainer: € 350 * Veiligheidscontainer: € 650 * Dieplader: € 400 * Meubelhondje: € 75 * Drempelplaat: € 210 * Traploper elektrisch: € 7.500 * [Voeg hier eventueel andere materialen en vervangingswaarden toe] 2. Voertuigen en Kilometerstaffels [Hier kunt u eventuele afspraken over voertuigvergoedingen en kilometerstaffels opnemen, bijv. servicebus per uur met km-staffel.]

42Documentchecklijst/WKA/KvK/AVB/Verklaringen
Opdrachtnemer dient vóór de eerste inzet en op verzoek van Opdrachtgever de volgende documenten aan te leveren ter verificatie van zijn ondernemerschap en professionaliteit: * KvK-uittreksel (max. 3 maanden oud) * VIES-btw-nummer verificatie (indien van toepassing) * Kopie ID * AVB polis (met minimale dekking conform artikel 7.1) * Bewijs arbeidsongeschiktheidsverzekering (AOV) * Bewijs pensioenregeling (indien van toepassing) * Bewijs VCA of VCA VOL (indien vereist voor de aard van de opdracht) * Bewijs relevante diploma’s passend bij het functieniveau waarvoor Opdrachtnemer zich aanbiedt. * Bankrekening op naam van de onderneming * Professioneel facturatiesysteem (géén Word/Excel) * [Eventueel: Verklaring Omtrent Gedrag (VOG), indien relevant voor specifieke opdrachten] Ontbreekt één van de vereiste documenten, dan kan Opdrachtgever de Opdrachtnemer niet inzetten voor de betreffende opdracht.
`;

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-primary">Freelancer Portal</h1>
        <p className="text-muted-foreground">Welcome, freelancer. Here's your onboarding portal.</p>
        <p className="text-sm text-muted-foreground mt-1">Contract ID: {params.id}</p>
      </div>

      <Tabs defaultValue="contract" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contract"><Gavel className="mr-2 h-4 w-4"/>Contract</TabsTrigger>
          <TabsTrigger value="documents"><FileUp className="mr-2 h-4 w-4"/>Documents</TabsTrigger>
          <TabsTrigger value="services"><BookUser className="mr-2 h-4 w-4"/>Service Levels</TabsTrigger>
        </TabsList>
        <TabsContent value="contract">
            <ContractSigning contractContent={mockContractContent} />
        </TabsContent>
        <TabsContent value="documents">
            <DocumentUpload />
        </TabsContent>
        <TabsContent value="services">
           <ServiceLevels />
        </TabsContent>
      </Tabs>
    </div>
  );
}
