function contardias(año: number, mes: number, dia: number) {
  let calcularaño: any[] = new Array(1);
  let calcularmes: any[] = new Array();
  let calculardia: any[] = new Array();

  for (let index = 0; index < calcularaño.length; index++) {
    calcularaño[index] = Number(prompt("Ingrese año"));

    if (
      calcularaño[index] % 4 === 0 &&
      calcularaño[index] % 100 === 0 &&
      calcularaño[index] % 400 === 0
    ) {
      calcularaño[index] = 366;
    } else {
      calcularaño[index] = 365;
    }
  }

  for (let index = 0; index < calcularmes.length; index++) {
    calcularmes[index] = "Ingrese mes";
  }
}
