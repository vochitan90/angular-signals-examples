import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-resource-api',
    standalone: true,
    imports: [CommonModule, RouterModule, MatCheckboxModule],
    template: '<router-outlet />',
    styleUrls: ['./resource-api.component.scss']
})
export default class ResourceApiComponent {}
