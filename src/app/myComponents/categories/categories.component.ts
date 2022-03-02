import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  content=[
    {
      title: "Face Mask",
      link:"https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2021/05/category-2.jpg.webp",
    },
    {
      title: "Antiseptic",
      link:"https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2021/05/category-2.jpg.webp",
    },
    {
      title: "Proctective gear",
      link:"https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2021/05/category-2.jpg.webp",
    },
    {
      title: "Medical Box",
      link:"https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2021/05/category-2.jpg.webp",
    },
    {
      title: "Pharmacy",
      link:"https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2021/05/category-2.jpg.webp",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
