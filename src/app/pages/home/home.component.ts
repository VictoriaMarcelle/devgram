import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import * as faker from 'faker'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  users: User[] = []

  constructor() {
    this.users = this.generateFakeData()
  }

  generateFakeData() {
    let quantityOfData = faker.datatype.number(150)
    let users: User[] = []

    let i = 0
    while (i < quantityOfData) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: faker.image.avatar() })
      i++
    }

    users.push({
      username: 'renato3x',
      userImageSource: '../assets/img/me.jpg'
    })

    return users
  }

  ngOnInit(): void {
  }
}
