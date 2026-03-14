import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
  {
    title: 'One Piece',
    author: 'Eiichiro Oda',
    views: 100000,
    since: 1999,
    category: 'Adventure',
    image: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg'
  },
  {
    title: 'Naruto',
    author: 'Masashi Kishimoto',
    views: 90000,
    since: 1999,
    category: 'Action',
    image: 'https://cdn.myanimelist.net/images/manga/3/249658.jpg'
  },
  {
    title: 'Doraemon',
    author: 'Fujiko F Fujio',
    views: 70000,
    since: 1969,
    category: 'Comedy',
    image: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg'
  },
  {
    title: 'Dragon Ball',
    author: 'Akira Toriyama',
    views: 100000,
    since: 1984,
    category: 'Action',
    image: 'https://static.flixzone.co/7a/i/f/48/67664bc20b8ae.jpg'
  },
  {
    title: 'Attack On Titan',
    author: 'Hajime Isayama',
    views: 90000,
    since: 2009,
    category: 'Dark Fantasy',
    image: 'https://cdn.myanimelist.net/images/manga/2/37846.jpg'
  },
  {
    title: 'Bleach',
    author: 'Tite Kubo',
    views: 70000,
    since: 2001,
    category: 'Supernatural',
    image: 'https://animotaku.fr/wp-content/uploads/2022/12/anime-Bleach-Thousand-Year-Blood-War-Partie-2-The-Separation-visuel-2.jpeg'
  }
];
handleClick(story: any) {
  alert(`bạn chọn ${story.title} của ${story.author}`);
}
}