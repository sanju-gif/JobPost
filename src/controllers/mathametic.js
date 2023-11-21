const add = async (req, res) => {
    const { num1, num2 } = req.body
    res.send({ result: num1 + num2, status: "success" }).status(200)
}


// Function to calculate factorial
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

const factorial = async (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number provided' });
    }

    const factorial = calculateFactorial(number);

    res.json({ number, factorial });
}


// Function to generate Fibonacci sequence
function generateFibonacci(count) {
    const sequence = [0, 1];

    for (let i = 2; i < count; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

const fibonacci = async (req, res) => {
    const count = parseInt(req.params.count);

    if (isNaN(count) || count <= 0) {
        return res.status(400).json({ error: 'Invalid count provided' });
    }

    const fibonacciSequence = generateFibonacci(count);

    res.json({ count, sequence: fibonacciSequence });
}

module.exports = {generateFibonacci,fibonacci,factorial,calculateFactorial,add}