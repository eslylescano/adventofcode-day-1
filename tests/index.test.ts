import { sumOfCalibrationValues } from "../src";
import * as fs from 'fs';
import * as path from 'path';
const currentDir = path.dirname(__filename);
const filePath = path.join(currentDir, 'input.txt');


describe('sumOfCalibrationValues', () => {
    it('returns the sum of calibration values for a single line case 1', () => {
      const document = ['1abc2'];
      expect(sumOfCalibrationValues(document)).toBe(12);
    });

    it('returns the sum of calibration values for a single line case 2', () => {
        const document = ['pqr3stu8vwx'];
        expect(sumOfCalibrationValues(document)).toBe(38);
      });

      it('returns the sum of calibration values for a single line case 3', () => {
        const document = ['a1b2c3d4e5f'];
        expect(sumOfCalibrationValues(document)).toBe(15);
      });

      it('returns the sum of calibration values for a single line case 4', () => {
        const document = ['treb7uchet'];
        expect(sumOfCalibrationValues(document)).toBe(77);
      });

    it('returns the sum of calibration values for multiple lines', () => {
        const document = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
        expect(sumOfCalibrationValues(document)).toBe(142);
      });
    
      it('handles empty input', () => {
        const document: string[] = [];
        expect(sumOfCalibrationValues(document)).toBe(0);
      });
    
  });

  describe('Calculate number value', () => {
    it('handles the input file', () => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
                return;
            }

            const lines = data.split('\n');
            const sum = sumOfCalibrationValues(lines);
            expect(sum).toBeDefined();
            console.log(sum);
        });
      });
  })