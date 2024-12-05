function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = ",";
    let numbersArray = numbers;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbersArray = numbers.substring(delimiterEndIndex + 1);
    }

    numbersArray = numbersArray.replace(new RegExp(`[\n${delimiter}]`, 'g'), ',');

    const numArray = numbersArray.split(",").map(Number);

    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error("Negative numbers not allowed: " + negativeNumbers.join(", "));
    }

    return numArray.reduce((acc, curr) => acc + curr, 0);
}
console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3

try {
    console.log(add("//;\n1;-2;3"));
} catch (e) {
    console.log(e.message);
}
