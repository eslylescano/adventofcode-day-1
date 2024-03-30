export function sumOfCalibrationValues(document: string[]): number {
    let sum = 0;
    for (const line of document) {
        const numbers = line.match(/\d+/g);
        if (numbers !== null) {
        const firstDigit = parseInt(numbers[0].charAt(0));
        const lastDigit = parseInt(numbers[numbers.length - 1].charAt(0));
        sum += (firstDigit * 10) + lastDigit;
        }
    }

    return sum;
  }