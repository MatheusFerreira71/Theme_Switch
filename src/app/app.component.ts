import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  body = document.body

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    const isSolar = localStorage.getItem('isSolar');

    if (theme) {
      this.body.classList.add(theme);
      isSolar && this.body.classList.add('solar');
    }
  }

  darkTheme(): void {
    this.body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  ligthTheme(): void {
    this.body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }

  solarTheme(): void {
    if (this.body.classList.contains('solar')) {
      this.body.classList.remove('solar');
      localStorage.setItem('isSolar', JSON.stringify(false));
    } else {
      this.body.classList.add('solar');
      localStorage.setItem('isSolar', JSON.stringify(true));
    }
  }
}
