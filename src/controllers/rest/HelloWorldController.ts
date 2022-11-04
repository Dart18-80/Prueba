import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  multiplicar(x: number, y: number){
    return x * y;
  }
  dividir(x: number, y: number){
    return x / y;
  }
  myName(){
    return "Diego Alejandro Ruiz Trabanino"
  }

  Volumen_Circulo(radio: number){
    return ((4/3)*3.1416*radio*radio*radio)
  }
}
