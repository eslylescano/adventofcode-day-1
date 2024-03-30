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
    const convertedText = replaceWordsWithNumbers(text);
    const match = convertedText.match(/\d/);
    if (match) {
        return parseInt(match[0]);
    } else {
        return 0;
    }
}

function extractLastNumber(text:string):number {
    const convertedText = replaceWordsWithNumbers(text);
    const match = convertedText.match(/\d(?!.*\d)/);
    if (match) {
        return parseInt(match[0]);
    } else {
        return 0;
    }
}
function replaceWordsWithNumbers(str: string): string {
    const replacements: { [key: string]: string } = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    const pattern = new RegExp(Object.keys(replacements).join('|'), 'gi');


    return str.replace(pattern, matched => replacements[matched.toLowerCase()] || matched);
}

