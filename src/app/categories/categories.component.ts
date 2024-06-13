import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categoryArray: Array<any> = [
    {
      imgSrc: '../assets/categImg.jpeg',
      title:
        'The Assimilationist, Or: On the Unexpected Cost of Passing as a Trans Woman',
      author: 'RAYHAN CURRAN',
      description:
        'The trouble with finding my true self in the beauty aisles.',
    },
    {
      imgSrc: '../assets/categImg.jpeg',
      title:
        'The Assimilationist, Or: On the Unexpected Cost of Passing as a Trans Woman',
      author: 'RAYHAN CURRAN',
      description:
        'The trouble with finding my true self in the beauty aisles.',
    },
    {
      imgSrc: '../assets/categImg.jpeg',
      title:
        'The Assimilationist, Or: On the Unexpected Cost of Passing as a Trans Woman',
      author: 'RAYHAN CURRAN',
      description:
        'The trouble with finding my true self in the beauty aisles.',
    },
  ];
}
