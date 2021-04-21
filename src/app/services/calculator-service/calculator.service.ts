import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    constructor() { }

    generateNumber(): number {
        return Math.floor(Math.random() * 10) + 1;
    }

    checkAnswer(x: number, y: number, answer: number): boolean {
        if (x + y === answer) {
            return true;
        } else {
            return false;
        }
    }
}
