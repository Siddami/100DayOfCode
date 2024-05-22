# DAY22 100DaysOfCode


# Exercise Report

1. Displayed the countries array as a table using `console.table()`:
   ```javascript
   console.table(['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']);
   ```
2. Displayed the countries object as a table using `console.table()`:
   ```javascript
   console.table(countriesCapPopAndLang);
   ```
3. Used `console.group()` to group logs:
   ```javascript
   console.group('Countries Data');
   console.table(countriesCapPopAndLang);
   console.groupEnd();
   ```
4. Utilized `console.assert()`, `console.warn()`, and `console.error()` for debugging:
   ```javascript
   console.assert(10 > 2 * 10, "10 is not greater than 20");
   console.warn('This is a warning message');
   console.error('This is an error message');
   ```
5. Checked the speed difference among different loops (`while`, `for`, `for of`, `forEach`) using `console.time()` and `console.timeEnd()`:
   ```javascript
   console.time('while loop'); /*...*/ console.timeEnd('while loop');
   console.time('Regular for loop'); /*...*/ console.timeEnd('Regular for loop');
   console.time('for of loop'); /*...*/ console.timeEnd('for of loop');
   console.time('forEach loop'); /*...*/ console.timeEnd('forEach loop');
   ```