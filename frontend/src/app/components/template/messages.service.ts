import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private snackbar: MatSnackBar) { }

  showMessageSnackBar(message: string): void {
    this.snackbar.open(message, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-success"]
    })
  }
}
