title: "Hlasování v Senátu: jak se přelévají koalice a kdo jsou renegáti svých stran?"
perex: "U běžných hlasování Senátu vládne koalice KDU-ČSL, STAN a hnutí Senátor 21. Když ale dojde na jádro pudla, dokáže si ANO hlasování ohlídat. Umožňují mu to i Starostové svou nejednotností."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/xxx_200116-014445_jab.png?itok=tlUPKHSW
coverimg_note: ""
styles: []
libraries: ['https://code.jquery.com/jquery-1.11.3.js', 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js']
options: [] #wide, noheader (, nopic)
---

Jiří Čunek (KDU-ČSL), Jiří Dienstbier (ČSSD), Ivo Valenta (ODS) nebo Jaroslav Zeman (STAN): to jsou senátoři, kteří často volí jinak než jejich klub.

<wide><div><img src="https://dev.datarozhlas.cz/senat-kdoskym/grafy/kdoskym2000.png" style="width:100%"></div></wide>

<wide><div><img src="https://dev.datarozhlas.cz/senat-kdoskym/grafy/legenda.png" style="width:80%"></div></wide>

Ukázala to data ze všech 589 hlasování v aktuálním senátním období, tedy od podzimu 2018 do dneška. [Fyzikální model](https://en.wikipedia.org/wiki/Force-directed_graph_drawing) umístí pravidelné spojence při hlasování na plátně blíž k sobě, a naopak: ty, kdo často hlasují odlišně, odsune také v grafu. Vazby mezi dvojicemi senátorů s osmdesátiprocentní a vyšší shodou jsou znázorněny viditelně, slabší shodu kvůli přehlednosti grafu neukazujeme. Silnější linka znamená shodu výrazně nad osmdesát procent.

Za shodu dvou senátorů považujeme takové hlasování, kdy oba odpověděli buď _ano_, nebo oba nesouhlasili, ať už přímo odpovědí _ne_, nebo zdržením se. Obojí fakticky znamená odmítnutí normy, kterou se Senát zabývá. Hlasování, na kterých senátor chyběl, nemají na jeho shodu s ostatními vliv. Detailní pohled na hlasovací shodu libovolných dvou senátorů nabízí [tabulka vztahů](https://dev.datarozhlas.cz/senat-kdoskym/data/senat-matice-vztahu.csv).

Během volebního období se odehrály změny v obsazení Senátu: hned v lednu 2019 nahradil senátorku Zuzanu Baudyšovou z ANO, která [rezignovala ze zdravotních důvodů](https://www.irozhlas.cz/zpravy-domov/senatorka-zuzana-baudysova-rezignace-praha-9-duvod_1901291148_ako), David Smoljak ze STAN. Druhou změnou je „přebarvení“ Jiřího Cieńciały. Ten byl zvolen ve Frýdku-Místku jako nezávislý kandidát, dnes je součástí senátorského klubu ANO. V grafu má nicméně původní barvu nezařazeného kandidáta.

Že nejde o renegáty pouze na papíře, ukazuje například aktuální spor uvnitř sociální demokracie ohledně kandidáta na ombudsmana. Šéf ČSSD Jan Hamáček odmítl podpořit nominaci kandidátů Senátu s tím, že [horní komora je příliš pravicová](https://www.irozhlas.cz/zpravy-domov/helena-valkova-volba-ombudsmana-kolovratnik-valachova-prezident-zeman_2001131742_jgr).

Proti tomu se ohradil senátor za stejnou stranu Jiří Dientsbier, který navrhl vlastního kandidáta na ombudsmana Víta Alexandera Schorma. Nesoulad v hlasování může odhalit jak minulé, tak napovědět o budoucích stranických sporech.

„Vzhledem k tomu, že voliči levice k senátním volbám příliš nechodí, bývá pravostředová orientace typická,“ pitvá Hamáčkovo vyjádření politolog Jan Kysela z Právnické fakulty Univerzity Karlovy. „Jinak je ale takové vyjádření zcela absurdní, Senát toho času není pravicový nějak vyhraněně a v nominacích osob se pravolevost příliš nepromítá.“

Kromě odpadlíků prozrazuje graf řadu dalších faktů o hlasování Senátu. Klíčové pro jeho rozhodování je silné propojení mezi křesťanskými demokraty, starosty a členy Klubu pro liberální demokracii. Dohromady ovládají kolem poloviny senátních křesel, obvykle s nimi hlasuje také nezařazený senátor Pavel Fischer. Liberálně-středové jádro se pak snaží „gravitačně roztrhat“ semknutý klub občanských demokratů s nezávislou Jitkou Chalánkovou i rozvolněná vládní koalice ANO se sociálními demokraty.

## Když jde do tuhého

Situace se ovšem zásadně změní, pokud vynecháme procedurální hlasování, kde je obvykle Senát poměrně jednotný, a další nekonfliktní body programu. U padesáti nejtěsnějších hlasování – kde často rozhodl jediný hlas – vypadá graf odlišně.

<wide><div><img src="https://dev.datarozhlas.cz/senat-kdoskym/grafy/kdoskymuzsi2000.png" style="width:100%"></div></wide>

ANO ve středu grafu naznačuje, že si strana premiéra Andreje Babiše s podporou sociálních demokratů dokáže klíčová hlasování pohlídat. Naopak koalice KDU-ČSL, STAN a liberálních senátorů v těsných hlasováních selhává. Nejednotní jsou zejména senátoři klubu Starostů a nezávislých, jak prozrazuje jejich pozice na okraji grafu.

Stejný obrázek ukazuje detail padesáti nejtěsnějších hlasování. Každý řádek představuje jedno senátní hlasování, každý čtvereček jednoho senátora, barvy odpovídají barvám senátních klubů.

Levá část grafu pak ukazuje vítěznou koalici při daném hlasování; pokud senátoři zákon podpořili, jsou zde hlasy _ano_. Pokud zamítli, jsou zde hlasy _ne_ a ti, kteří se zdrželi hlasování. V pravém sloupci jsou naopak ti, kteří byli přehlasováni.

<wide><div id="koberec1"></div></wide>

Senátory STAN nejčastěji najdeme na obou stranách hlasování: část z nich je většinou pro, část proti, málokdy zaujmou jednotnou pozici.

Oproti Poslanecké sněmovně je v Senátu nejednotnost častější. Podle politologa Romana Chytilka z Fakulty sociálních studií Masarykovy univerzity ale není tak klíčové.

„Disidentství v Senátu není tak podstatné, protože na něm nezávisí osud vlády,“ vysvětluje. „Spíš to naznačuje, že jsou tam senátoři, kteří se nebojí jít proti míněné své strany. Častěji vyjadřují svá osobní přesvědčení. Může to souviset s tím, že volební odvod, ve kterém byli zvoleni, je v některých charakteristikách hodně odlišný od ostatních.“

„Pro opozici může být Senát jediný kanál, kde může realisticky dosáhnout nějakých změn zákonů,“ pokračuje Chytilek. „Také v něm může vyvolat další diskuzi o tom, co považuje za problematické, a oslovit tak voliče.“

Scrollováním si pak můžete prohlédnout kompletně všechna hlasování Senátu v období mezi ustavující schůzí 14. listopadu 2018 a dosud posledním zasedáním v polovině minulého prosince.

<!--wide><div id="koberec2"></div></wide-->