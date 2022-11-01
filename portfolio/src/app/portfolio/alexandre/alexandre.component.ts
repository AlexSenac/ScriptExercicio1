import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alexandre',
  templateUrl: './alexandre.component.html',
  styleUrls: ['./alexandre.component.css']
})
export class AlexandreComponent implements OnInit {
  introduction: string = 'Meu Portfólio';
  name: string = 'Alexandre Alves.';
  faculdade: string = 'SENAC.';
  curso: string = 'Técnico de Informática.';
  objetivo: string = 'Pretendo terminar o curso de TI e ingressar em uma faculdade de Ciência da Computação para trabalhar na área de Infraestrutura.';
  skills1 = ['HTML', ' CSS'];
  skills2 = [' Java', ' PHP'];
  skills3 = [' JavaScrtipt', ' NetWork Essentials', ' SQL'];
  progress = ['Angular', ' WordPress'];
  experiences: string = ' Cursando a faculdade de em Ciências dos dados e atualmente trabalho como analista de suporte computacional na Fiocruz.';


  constructor() { }

  ngOnInit(): void {
  }

}
