/*Problem Description: 

Write a program that creates a string that represents an 8×8 grid, using
new-line characters to separate lines. At each position of the grid there
is either a space or a # character. The characters should form a
chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a
binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.*/

size = 8;
line = "";

for(let i = 1; i <= size; i++)
{
    for(let j = 1; j <= size; j++)
    {
        // if row number is odd
        if(i % 2 != 0)
        {
            if(j% 2 == 0)
                line+="#";
            else
                line+=" ";
        }
        else
        {
            if(j % 2 == 0)
                line+=" ";
            else
                line+="#";
        }
    
    
    }
    console.log(line)
    line =""
}