MVC szerinti tervezés:

main.js:
- ez a program belépési pontja, amelyben a kontrollert példányosítottuk

KONTROLLER:
TTTController.js
- a kontrollernek a két feladata: modell és view itt kerülnek példányosításra a constructor-ban; és eseménykezelőre való feliratkozás, ahol a modell és view metódusai kerülnek meghívásra (itt csak újrapéldányosítottunk, lsd. "new Palya.js...")

MODELL:
TTTModell.js
- csak adatokkal foglalkozik
- leírja az aktuális állapotot és előállítja a következő állapotot
- itt a lista 

