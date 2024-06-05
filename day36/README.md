```markdown
# Closure Examples Documentation

This documentation explains three levels of closure examples in JavaScript.

## Level 1: Single Inner Function Closure

**Function Definition:**
```javascript
const levelOneClosure = function (name){
    const greeting = "Hello there!!"
    function innerFunction (){
        const fullGreeting = `${greeting} ${name}`
        return fullGreeting;
    }
    return innerFunction()
}
console.log(levelOneClosure('dammy'));
```
**Description:**
A closure that captures the variable `greeting` and returns a greeting message for the provided name.

## Level 2: Three Inner Functions Closure

**Function Definition:**
```javascript
const threeInnerFunctions = function (){
    let count = 0

    function sumOfOne(){
        count++
        return count
    }
    function MultipliedBYTwo(){
        count *= 2
        return count
    }

    function isOddOrEven(){
        return count % 2 === 0 ? `${count} is an even number.` : `${count} is an odd number.`
    }

    return{
        sumOfONe: sumOfOne(),
        MultipliedBYTwo: MultipliedBYTwo(),
        isOddOrEven: isOddOrEven()
    }
}
const innerFunctions = threeInnerFunctions()

console.log(innerFunctions.sumOfONe)
console.log(innerFunctions.MultipliedBYTwo)
console.log(innerFunctions.isOddOrEven)
```
**Description:**
A closure that encapsulates three functions to manipulate and check the value of `count`.

## Level 3: Comprehensive Person Account Closure

**Function Definition:**
```javascript
function personAccount(){
    const firstname = 'Damilola'
    const lastname = 'Abdul'
    const incomes = [2000, 500, 200]
    const expenses = [100, 200, 500]

    function totalIncome(){
        return incomes.reduce((acc, income) => acc + income, 0);
    }

    function totalExpense(){
        return expenses.reduce((acc, expense) => acc + expense, 0);
    }

    function addIncome(income){
        incomes.push(income)
        return incomes;
    }

    function addExpense(expense){
        expenses.push(expense)
        return expenses;
    }

    function accountBalance(){
        return totalIncome() - totalExpense();
    }

    function accountInfo(){
        return `Fullname: ${firstname} ${lastname}\nIncomes: ${incomes.join(', ')}\nExpenses: ${expenses.join(', ')}`
    }

    return {
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        accountInfo: accountInfo(),
        addIncome,
        addExpense,
        accountBalance: accountBalance()
    }
}
const allFunctions = personAccount()
console.log(allFunctions.addIncome(250))
console.log(allFunctions.addExpense(400))
console.log(allFunctions.totalExpense)
console.log(allFunctions.totalIncome)
console.log(allFunctions.accountBalance)
console.log(allFunctions.accountInfo)
```
**Description:**
A closure that manages a person's account details, including incomes, expenses, and several methods to manipulate and retrieve this information.
```