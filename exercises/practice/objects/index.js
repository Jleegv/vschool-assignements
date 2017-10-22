let person = {
  _name: 'Jlee',
  _age: 28,


  get age() {
    console.log(this._name + this._age);
      return this._age;
  }
};
