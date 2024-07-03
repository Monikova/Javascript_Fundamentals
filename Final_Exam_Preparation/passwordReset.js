function passwordReset(inputArr) {
    let arr = inputArr.slice()
    let password = arr.shift(); 

    while (arr[0] !== "Done") { 
        let commandArr = arr[0].split(" "); 
        let command = commandArr.shift();

        if (command === "TakeOdd") {
            let passArr = password.split(""); 
            // password = passArr.filter(l => passArr.indexOf(l) % 2 !== 0);
            let newPass = "";
            for (let i = 0; i < passArr.length; i++) {
                if (i % 2 !== 0) {
                    newPass += passArr[i];
                }
            }
           
            password = newPass;
            console.log(password);
        } else if (command === "Cut") {
            let [index, length] = commandArr;
            let substr = password.substr(Number(index), Number(length)); 
            password = password.replace(substr, "");
            console.log(password);
        } else if (command === "Substitute") {
            let [substr, substitute] = commandArr;
            // console.log(substr, substitute);
            if (password.includes(substr)) {
                // let newPass = password.replaceAll(substr, substitute);
                // let newPass = password.replaceAll(substr, substitute);
                while (password.includes(substr)) {
                    password = password.replace(substr, substitute);
                }
                // password = newPass; 
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }

        arr.shift();
    }
    
    console.log(`Your password is: ${password}`);
}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
// "TakeOdd",
// "Cut 15 3",
// "Substitute :: -",
// "Substitute | ^",
// "Done"]);

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);
