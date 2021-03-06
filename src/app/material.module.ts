// Modulo creado para importar todos los modulos requeridos de material

import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule ,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule
    ],
    exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule
    ]
})

export class MaterialModule { }
