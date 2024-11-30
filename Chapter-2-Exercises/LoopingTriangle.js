/* Problem Description :

Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
let line = "#"

//loops over the lines
for(let i = 1; i <= 7; i++)
{
    // goes thourgh the hashes
    
    if(line.length != i)
    {
        do{

            line+="#"

        }while(line.length < i)
        
    }
    console.log(line)
}