import { Component, OnInit } from "@angular/core";
import { Tecnico } from "src/app/models/tecnico";

@Component({
  selector: "app-tecnico-list",
  templateUrl: "./tecnico-list.component.html",
  styleUrls: ["./tecnico-list.component.css"],
})
export class TecnicoListComponent implements OnInit {
  list: Tecnico[] = [
    {
      id: 1,
      nome: "teste",
      cpf: "113.728.176.69",
      email: "teste2@gmail.com",
      senha: "123",
      perfis: ["0", "1"],
      dataCriacao: "12/10/2022",
    },
    {
      id: 2,
      nome: "teste2",
      cpf: "113.728.176.69",
      email: "teste2@gmail.com",
      senha: "123",
      perfis: ["0"],
      dataCriacao: "12/10/2022",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
