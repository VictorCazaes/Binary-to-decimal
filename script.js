function clearField() {
    document.querySelector("#binary").value = ""
    document.querySelector("#decimal").value = ""
}
function validateBinary(binaryInput) {
    let validBinary = String(binaryInput)
    if (validBinary === "") {
        throw new Error("Please, enter a binary number")
    }
    validBinary.split("").map((char) => {
        if (char !== "0" && char !== "1") {
            throw new Error("Please, enter a binary number")
        }
    });
}
function Convert() {
    const binaryInput = Number(document.querySelector("#binary").value)
    const result = binaryMath(binaryInput)
    const decimalOutput = document.querySelector("#decimal")
    //shorter way to convert = const decimal = parseInt(binary, 2);
    decimalOutput.value = result
    try {
        validateBinary(binaryInput)
    } catch (error) {
        alert(error.message)
        clearField()
    }
}
function binaryMath(binaryInput) {
    let binaryNumber = binaryInput
    let inputLength = String(binaryNumber).length
    let decimalResult = 0
    for (let i = 0; i < inputLength; i++) {
        let remain = (binaryNumber % 10)
        let binaryConvertion = remain * (2 ** i)
        decimalResult += binaryConvertion
        binaryNumber = Math.round((binaryNumber / 10))
    }
    return decimalResult;
}
