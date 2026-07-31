import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  user: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('user');

    if (data) {
      this.user = JSON.parse(data);
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.user = null;

    this.router.navigate(['/login']);
  }
}