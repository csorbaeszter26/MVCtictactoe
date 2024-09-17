# MVC szerinti tervezés:

**main.js:**
- ez a program belépési pontja, amelyben a kontrollert példányosítottuk


## **KONTROLLER:**
**TTTController.js**
- a kontrollernek a két feladata: 
1. modell és view itt kerülnek példányosításra a constructor-ban; 
2. `esemenyKezelo()`: eseménykezelőre való feliratkozás, ahol a modell és view metódusai kerülnek meghívásra *(itt csak újrapéldányosítottunk, lsd. "new Palya.js...")*


## **MODELL:**
**TTTModell.js**
- csak adatokkal foglalkozik
- leírja az aktuális állapotot és előállítja a következő állapotot
- itt három metódus található a konstruktoron kívül
1. A privát `setAktElem()`, ami biztosítja, hogy az "X" és az "O" egymást váltakozva tudjanak megjelenni; 
2. a `getList()`, ami visszaadja nekünk a listát; 
3. és melyet a `lepteto()` metódusban fogunk használunk fel, amely ennek a listának az indexedik elemére beírja az aktuális elemet, növeli egyel a lépést, és megni, hogy mi lesz a következő lépés


## **VIEW:**
- az aktuális állapot megjelenítésével a következő két osztály foglalkozik *(miután a kontroller lekérte az aktuális állapotot, és példányosította a Pályát)*
- mindehhez az információkat a kontrolleren keresztül kapják, valamilyen szülőelembe *(lsd. `szuloElem`)*
**Mezo.js**
- egyetlen div adataival foglalkozik
- a konstruktoron kívül két metódust tartalmaz
1. `kiir()`: egyetlen divet jelenít meg a korábban említett szülőelembe, benne a lista indexedik elemével, itt tudni fogja hogy ez hanyadik, hova kell létrehoznia; 
2. `esemenyKezelo()`: metódusban pedig egy saját esemény generálása történik, ami azt mondja meg kattintás esemény után, hogy éppen melyik elemre kattintottunk 
> (lsd. `{detail: this.#index}`, ennek segítségével ad át az objektum magáról információkat; majd `window.dispatchEvent(e)` segítségével tudom ezt a korábbi eseményt az ablakhoz hozzárendelni és ezt az egész ablakon elérhetővé tenni)
**Palya.js**
- `mezoKiir()`: a konstruktoron kívüli másik metódusban a Mezo.js példányosításával annyi mezőt fog példányosítani, amennyire szüksége van *(lsd. forEach-el végigmegy a lista elemein, ennyire van most szükség)*
- a konstruktorban a szülőelem tartalma mindíg ürítésre kerül, mielőtt újra belekerülne az adat *(lsd. `this.#szuloElem.empty()`)*
