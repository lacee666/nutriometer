# Nutriometer

## Bulatovic László NIISXR
## Veress Marcell B30SC5

#### Követelményanalízis

##### Fejlesztőkörnyezet felállítása

- Telepítsük a Git verziókezelőt!
- Klónozzuk a projektet a gépre.
    - git clone https://github.com/lacee666/nutriometer.git
- A futtatáshoz szükséges programok: Angular4, Maven és java 1.8
- A "backend" mappában nyissunk egy parancssort, majd írjuk be "mvn spring-boot:run"
- A "frontend" mappában is nyissunk egy parancssort, majd írjuk be "npm start"
- Be tudjuk tölteni a lapot a localhost:4200 címen


##### Funkcionális követelmények

Nutriometer egy étrend összeállító alkalmazás, ahol össze tudjuk állítani a napi étrendünket, 
követve kalóriákat, zsírokat, fehérjéket, szénhidrátokat, napi ajánlott mennyiségekkel. 
A főoldalon alap információk találhatóak az alkalmazásról, valamint regisztrálni is tudunk. 
Alapanyagokat tudunk keresni: el tudjuk tárolni a napi étrendünket, miből mennyit ettünk, 
valamint recepteket is tudunk készíteni, ahol több alapanyagot is összekeverhetünk, 
így egyben hozzáadva a napi étrendhez. Látógatóként nem tudjuk eltárolni a recepteket, 
viszont felhasználóként el tudjuk menteni, és visszanézni az előző napokat is.

##### Nem funkcionális követelmények

Az alkalmazás legyen felhasználóbarát, egyszerű, gyors és megbízható.


##### Használatieset-modell

![usecase](docs/felhasznaloEsetek.jpg)

###### Szerepkörök

- Vendég felhasználó: Jogosultsága van regisztrálni, bejelentkezni, receptek között keresgélni, az ételek között keresgélni
- Bejelentkezett felhasználó: Jogosultsága van recepteket elmenteni, figyelemmel kísérni a napi kalória mennyiséget.

#### Tervezés

###### Oldaltérkép

Vendég:

- Regisztráció
- Bejelentkezés
- Receptkeresés
- Ételkeresés

Bejelentkezett felhasználó:

- Kijelentkezés
- Receptkeresés
- Ételkeresés
- Receptek mentése
    + új recept hozzáadása
    + recept törlése
- Napi kalória mennyiség megtekintése
	+ napi összmennyiség megtekintése
	+ mennyiség csökkentése, testmozgás megadásával

###### Alkalmazott könyvtárstruktúra

![konyvtarterv1](docs/konyvtarterv1.jpg)
![konyvtarterv2](docs/konyvtarterv2.jpg)
    
###### Végpontok

- GET /: index
- GET /login: bejelentkezés
- POST /login: bejelentkezési adatok felküldése
- GET /registrate: regisztráció
- POST /registrate: regisztrációs adatok felküldése
- GET /foodsearch: keresés az ételek között
- POST /foodsearch: ételnév felküldése
- GET /recipesearch: keresés a receptek között
- POST /recipesearch: receptek felküldése

###### Használt technológiák, fejlesztői környezetek, programozási nyelvek:

- Verziókezelő rendszer: Git
- Fejlesztői környezet: IntelliJ IDEA Community Edition
- Keretrendszer: JAVA Springboot
- Programozási nyelv(kliensoldal): Angular 2/4
- Programozási nyelv(szerveroldal): JAVA8
- Szerveroldali erőforrás menedzser: Lombok


###### Adatbázisterv

![Adatbazisterv](docs/databaseplan.jpg)

- A relációk:

![Adatbazisterv](docs/relations.jpg)

#### Felhasználói dokumentáció

* Az alábbi alkalmazás egy étrendöszzeállító programot valósít meg, ahol a felhasználó könnyedén nyomon követheti
a napi bevitt kalóriákat, zsírokat, proteineket, valamit receptek segítségével biztosíthatja magának az egészséges életvitelt. Miután a szerver és a kliens egyaránt el lett indítva, program a http://localhost:4200/ címen érhető el.

* Első képésként, ajánlott regisztrálni, amit a Sign in/up gombra tehetünk meg, ezt követően meg kell adnunk az e-mail címet,
felhasználónevet és jelszót, mellyel regisztrálni kívánunk. 

* Következő lépés a bejelentkezés lenne, amit a korábban megadott adatok segítségével tudunk megtenni.

* Bejelentkezés után lehetőségünk van recepteket nézegetni, elmenteni, valamint a napi bevitt kalóriákat kezelni.

* Az alapanyagkeresés a Food Search gombbal érhető el.

* A receptkeresés pedig a Recipe Search gomb segítségével érhető el.

* A vásárlás befejeztével a kijelentkezés gomb megnyomásával hagyható el a felhasználói profil.

