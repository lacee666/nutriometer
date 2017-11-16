# Nutriometer

## Bulatovic László NIISXR
## Veress Marcell B30SC5

#### Követelményanalízis

##### Funkcionális követelmények

Nutriometer egy étrend összeállító alkalmazás, ahol össze tudjuk állítani a napi étrendünket, 
követve kalóriákat, zsírokat, fehérjéket, szénhidrátokat, napi ajánlott mennyiségekkel. 
A főoldalon alap információk találhatóak az alkalmazásról, valamint regisztrálni is tudunk. 
Alapanyagokat tudunk keresni: el tudjuk tárolni a napi étrendünket, miből mennyit ettünk, 
valamint recepteket is tudunk készíteni, ahol több alapanyagot is összekeverhetünk, 
így egyben hozzáadva a napi étrendhez. Látógatóként nem tudjuk eltárolni a recepteket, 
viszont felhasználóként el tudjuk menteni, és visszanézni az előző napokat is.

##### Nem funkcionális követelmények

Az alkalmazás legyen felhasználóbarát, egyszerű, gyors és megbízható


##### Használatieset-modell

Folyamatban :D

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

###### Oldalvázlatok

###### Adatmodell

###### Adatbázisterv

###### Állapotdiagram

#### Implementáció

#### Tesztelés

#### Felhasználói dokumentáció



