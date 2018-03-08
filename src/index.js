class SmartCalculator {
  constructor(initialValue) {
    this.x = String(initialValue);    
  }

  add(number) {
    this.x = this.x + '+' + number;    
    return this;
  }
  
  subtract(number) {
    this.x = this.x + '-' + number;    
    return this;
  }

  multiply(number) {
    this.x = this.x + '*' + number;    
    return this;
  }

  devide(number) {
    this.x = this.x + '/' + number;    
    return this;
  }

  pow(number) {    
    this.x = this.x + '**' + number;
    return this;
  }
  
  valueOf() {    
    return eval(this.x);
  }
}

module.exports = SmartCalculator;
