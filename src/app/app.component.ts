import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import { CalculatorService } from './services/calculator-service/calculator.service';
import { MessageService } from './services/message-service/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'math-tutor-app';
    @ViewChild('appInputSelect') input: ElementRef;

    xValue: number;
    yValue: number;
    answer: number;

    constructor(private calculatorService: CalculatorService,
                private messageService: MessageService) {
        this.generateXandY();
        this.answer = null;
    }

    checkAnswer(): void {
        if (this.calculatorService.checkAnswer(this.xValue, this.yValue, this.answer)) {
            this.messageService.showSuccess('That\'s right! Try another one.', '');
            setTimeout(() => this.resetForm(), 500);
        } else {
            this.messageService.showError('Sorry, that is not correct. Please try again.', '');
            this.setFocus();
        }
    }

    resetForm(): void {
        this.generateXandY();
        this.answer = null;
        this.setFocus();
    }

    setFocus(): void {
        const inputBox: HTMLInputElement = this.input.nativeElement as HTMLInputElement;
        this.input.nativeElement.focus();
    }

    generateXandY(): void {
        this.xValue = this.calculatorService.generateNumber();
        this.yValue = this.calculatorService.generateNumber();
    }
}
