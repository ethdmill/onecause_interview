import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { CalculatorService } from './services/calculator-service/calculator.service';
import { MessageService } from './services/message-service/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// mat components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        FlexLayoutModule,
        MatInputModule,
        FormsModule,
        MatTooltipModule
    ],
    providers: [
        CalculatorService,
        MessageService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
