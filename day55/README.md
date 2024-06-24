# Day55 of 100DaysOfCode
Today on day55 of my 100days of code challenge, I and my friends tackled another hackerrank challenge named The Staircase Challenge.




### Thought Process for the Staircase Challenge

The goal of this challenge is to create a visual representation of a right-aligned staircase using hash (#) symbols and spaces. The staircase has a height and width equal to a given integer n. Here’s how we approached solving this problem:

1. *Understand the Pattern:*
   - The staircase has n levels.
   - Each level i (where i ranges from 1 to n) contains:
     - n - i spaces followed by
     - i hash symbols.

2. *Plan the Loop Structure:*
   - We need to iterate over each level of the staircase. A loop from 1 to n will help us achieve this.
   - For each level, we need to construct a string that contains the correct number of spaces followed by hash symbols.

3. *Construct Each Level:*
   - For a given level i, the number of spaces is n - i.
   - The number of hash symbols is i.
   - We can use nested loops or string concatenation to build this string.

4. *Output the Result:*
   - Once the string for a particular level is constructed, it should be printed out immediately.

### Steps Taken to Implement the Solution

1. *Define the Function:*
   - We start by defining a function named staircase that takes an integer n as its parameter. This function will print the staircase.

2. *Loop Through Each Level:*
   - We use a for loop that runs from 1 to n. This loop represents the current level of the staircase we are working on.

3. *Initialize the Line:*
   - For each iteration of the loop, we initialize an empty string called line. This string will hold the characters for the current level.

4. *Add Spaces:*
   - We use another for loop to add the appropriate number of spaces to the line string. The number of spaces is determined by n - i.

5. *Add Hash Symbols:*
   - After adding spaces, we use yet another for loop to append hash symbols to the line string. The number of hash symbols is equal to i.

6. *Print the Line:*
   - Once the line string has the correct number of spaces and hash symbols, we print it. This completes the current level of the staircase.

7. *Example Execution:*
   - By calling the function with a specific value of n (e.g., 6), we can see the staircase printed in the correct format.

### Example Breakdown

For n = 6, the staircase looks like this:


     #
    ##
   ###
  ####
 #####
######


- For i = 1: n - i spaces (5 spaces) followed by i hashes (1 hash).
- For i = 2: n - i spaces (4 spaces) followed by i hashes (2 hashes).
- For i = 3: n - i spaces (3 spaces) followed by i hashes (3 hashes).
- And so on, until i = 6.

By systematically constructing each line with the appropriate number of spaces and hashes, we achieve the desired staircase pattern. This approach ensures that the staircase is right-aligned and correctly sized according to the input n.