function worldTour(inputArr) {
    let arr = inputArr.slice(); 
    let str = arr.shift(); 

    while (arr[0] !== "Travel") {
        let commandArr = arr.shift().split(":");
        let command = commandArr.shift();

        if (command === "Add Stop") {
            let [idx, newStr] = commandArr;
            idx = Number(idx); 
            if (idx >= 0 && idx < str.length) {
                str = str.slice(0, idx) + newStr + str.slice(idx);
            }
        } else if (command === "Remove Stop") {
            let [startIdx, endIdx] = commandArr.map(Number);
            if (startIdx >= 0 && startIdx < str.length && endIdx >= 0 && endIdx <str.length) {
                str = str.replace(str.substring(startIdx, endIdx + 1), "");
                // str = str.slice(0, startIdx) + str.slice(endIdx);
            }
        } else if (command === "Switch") {
            let [oldStr, newStr] = commandArr;
            if (str.includes(oldStr)) {
                // while (str.includes(oldStr)) {
                    str = str.replace(oldStr, newStr); 
                // }
            }
        }

        console.log(str);
    }
    
    console.log(`Ready for world tour! Planned stops: ${str}`);
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);
