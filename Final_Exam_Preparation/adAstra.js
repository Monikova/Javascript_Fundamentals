function adAstra(inputArr) {
    let textStr = inputArr[0];
    let regexp = /(\||#)(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/;
    // let foodArr = textStr.match(regexp);

    if (regexp.test(textStr)) {
        let foodArr = [];
        let totalCalories = 0; 
        let strToLogArr = [];
        // while ((foodArr = regexp.exec(textStr)) !== null) {
        // while (foodArr = regexp.exec(textStr)) {
        while (!textStr.includes(textStr.match(regexp))) {
            let food = textStr.match(regexp);
            if (food === null){
                break
            }
            totalCalories += Number(food.groups.calories);
            strToLogArr.push(`Item: ${food.groups.item}, Best before: ${food.groups.date}, Nutrition: ${food.groups.calories}`);
            // foodArr = regexp.exec(textStr);
            let idx = textStr.indexOf(food[0]);
            let foodStr = textStr.substr(idx, food[0].length);
            textStr = textStr.replace(foodStr, "");
            foodArr.push(foodStr);
        }

        let dayCount = totalCalories / 2000; 
        console.log(`You have food to last you for: ${Math.floor(dayCount)} days!`); 
        console.log(strToLogArr.join("\n"))
    } else {
        console.log("You have food to last you for: 0 days!");
    }

    // let [item, date, calories] = foodArr[0].split("/#|\//");

    // foodArr.forEach(el => totalCalories += Number(el.groups.calories));
    // console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`); 
}

// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
