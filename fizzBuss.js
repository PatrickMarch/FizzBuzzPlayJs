              let fizzBuzz = (num) => 
                { let statement ="";
                  if (num%3 ===0)
                    {statement += "fizz"}
                  if(num%5===0)
                   {statement += "buzz"}
                 else 
                 {statement = num;}
                 return statement;
                }
                console.log(fizzBuzz (5));
                console.log(fizzBuzz (15));
                console.log(fizzBuzz (25));
                try 
                {fizzBuzz(1)}
                catch (error)
                  {console.log("fizzBuzz with "+ arguments[0] +" caused this error" +error);}
                try {fizzBuzz (500)}
                catch (error)
                  {console.log("fizzBuzz with 1 caused this error");}
                