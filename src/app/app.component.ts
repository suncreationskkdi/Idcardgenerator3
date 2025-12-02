import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  fname: string = '';
  fathername: string = '';
  city: string = '';
  age: string = '';
  img: string = '';
  savedData: any = null;

  onSubmit() {
    // Save data
    this.savedData = {
      fname: this.fname,
      fathername: this.fathername,
      city: this.city,
      age: this.age,
      img: this.img
    };

    // Reset form fields
    this.fname = '';
    this.fathername = '';
    this.city = '';
    this.age = '';
    this.img = '';

    console.log('Data saved and form reset:', this.savedData);
  }
}
