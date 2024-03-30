export function sumOfCalibrationValues(document: string[]): number {
    let sum = 0;
    for (const line of document) {
        const firstDigit = extractFirstNumber(line);
        const lastDigit = extractLastNumber(line);
        sum += (firstDigit * 10) + lastDigit;

    }

    return sum;
  }

  function extractFirstNumber(text:string):number {
    const match = text.match(/\d/);
    if (match) {
        return parseInt(match[0]);
    } else {
        return 0;
    }
}

function extractLastNumber(text:string):number {
    const match = text.match(/\d(?!.*\d)/);
    if (match) {
        return parseInt(match[0]);
    } else {
        return 0;
    }
}