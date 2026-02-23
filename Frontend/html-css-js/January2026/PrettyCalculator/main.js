const input = document.getElementById('inp');

const btns = document.querySelectorAll('button');

let string = "";

console.log(input, btns);

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.innerHTML == "AC"){
            string = "";
            input.value = string;
        }else if(btn.innerHTML == "DEL"){
            //doesnt work because string is a number here, 
            // and .length doesnt apply to the number version of string variable
            //0, Number(string).length-1 is not a valid range becomes
            //0, NaN which ends us with "" blank empty str thats why!
            //fixed via doing (string+"").length
            string = (string + "").substring(0,(string+"").length-1);
            input.value = string;
        }else if(btn.innerHTML == "="){

            if(string == "invalid"){
               string = "0";
               input.value = "0";
            }

            if(string == ""){
                return;
            }else{

                if(string[0] == "%" ||
                   string[0] == "/" ||
                   string[0] == "*" ||
                   string[string.length-1] == "%" ||
                   string[string.length-1] == "/" ||
                   string[string.length-1] == "+" ||
                   string[string.length-1] == "-" ||
                   string[string.length-1] == "*" 
                ){
                    string = "invalid";
                    input.value = string;
                }

                //interesting eval method
                //evaluates the string expression up
                string = eval(input.value);
                input.value = string;
            }

            
        }else{
            string = string + btn.innerHTML;
            input.value = string;
        }
    });
});