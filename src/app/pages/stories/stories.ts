import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css'
})
export class Stories {

  stories = [
  {
    title: 'Dragon Ball',
    author: 'Akira Toriyama',
    views: 152300,
    year: 1984,
    category: 'Hành động',
    image: 'https://wallpapercave.com/wp/wp5343672.jpg'
  },
  {
    title: 'Attack On Titan',
    author: 'Hajime Isayama',
    views: 95680,
    year: 2009,
    category: 'Phiêu lưu',
    image: 'https://tse1.mm.bing.net/th/id/OIP.n9YlUYreFcu6MC67uz4O8gHaDt?pid=Api&h=220&P=0'
  },
  {
    title: 'Bleach',
    author: 'Tite Kubo',
    views: 83860,
    year: 2001,
    category: 'Hành động',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png'
  }
];

}