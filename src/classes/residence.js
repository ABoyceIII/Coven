export default class Residence {
  #joinCode;
  #name;
  #residents;
  #reference;

  constructor(name, resident) {
    this.name = name;
    this.residents = [resident];
  }
}
