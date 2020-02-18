/* functions review
// pass data into the ( but dont include var)
// variables goes into the curly braces {}
// you call your function after the braces.
function addsomething (fruit, food) {
 
var add = fruit + food;
alert (add);

}
addsomething (5,2);

//OPERATORS

// = is used to asign everthing on right to every value on left
// = = is used to examine a vlue to a variable or shronizing
// Arithmetic and Assignment Operators.
// compund operator make you combine = sign and other operator eg +=, -=.
//increamental operator increase it by one ++, decrementis --,.
// precedence operators is like BODMAS

//Coditions

var a = 4;
var b = 5;

var result = (a+b);

if (result <= 7){
    document.write(result);
}
else if (result >=12){

    document.write (result);
}
else if (result >= 20){
    document.write (result);
    
}

else{
    document.write("please try again");
}

//LOOP
while

var z = 2;

while (z < 10){
    document.write ("hello "); //(this keeps running, then to stop you need an  increamental).
    z++;
} 


for loop

for ( var z = 2; z < 10; z++ ){
        document.write ("hey "); 
}/

// Functions & IF

function kicking (name, force) {
   
    if (force <= 20){
        document.write(name + " scored the goal");
}
else if (force = 30){

    document.write(name + " much force was used")
}

    else {
        document.write("none");
    }


}
kicking ("love" , 30);*/

function pound( A ){



while (A < 10){
    document.write("good ");
    A ++;
}


}
pound ( 2 );
    