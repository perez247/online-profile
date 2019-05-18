import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
} from '@angular/material';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatListModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
    ],
    exports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatListModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
    ]
})

export class NgMaterials {}
