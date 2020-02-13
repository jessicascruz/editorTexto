import { Component } from '@angular/core';
import { Icones } from 'src/_model/icones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste';

  public icones: Icones[] = [
    { id: 1, icon: 'title', message: 'This is a success alert' },
    { id: 2, icon: 'format_italic', message: 'This is a warning alert' },
    { id: 3, icon: 'format_quote', message: 'This is a warning alert' },
    { id: 4, icon: 'format_bold', message: 'This is a danger alert' },
    { id: 5, icon: 'format_underlined', message: 'This is a danger alert' },
    { id: 6, icon: 'format_list_bulleted', message: 'This is a danger alert' },
    { id: 7, icon: 'code', message: 'This is a danger alert' },
    { id: 8, icon: 'insert_link', message: 'This is a danger alert' }];

  constructor() {}

  public evento(event) {
    const evento = event.srcElement.innerText;

    switch (evento) {
      case 'title':
        console.log('titulo');
        break;
      case 'format_italic':
        console.log('italico');
        break;
      case 'format_quote':
        console.log('frase');
        break;
      case 'format_bold':
        console.log('negrito');
        break;
      case 'format_underlined':
        console.log('sublinhado');
        break;
      case 'format_list_bulleted':
        console.log('lista');
        break;
      case 'code':
        console.log('código');
        break;
      case 'insert_link':
        console.log('link');
        break;
      default:
        console.log('sem opção');
        break;
    }
  }

  public text(evento) {
    console.log(evento);
  }

}
