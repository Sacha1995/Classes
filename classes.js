class Clothes {
  constructor(color, size, inStock) {
    this.color = color;
    this.size = size;
    this.inStock = inStock;
  }

  available() {
    if (this.inStock) {
      console.log(`The item is available`);
    } else {
      console.log(`The item is sold out`);
    }
  }
}

const _clothesItem = new Clothes("red", "M", true);
console.log(_clothesItem);
console.log(_clothesItem.available()); // why is this also giving undefined?

class Trousers extends Clothes {
  constructor(color, size, inStock, length, type) {
    super(color, size, inStock);
    this.length = length;
    this.type = type;
  }
}

const _trousers1 = new Trousers("blue", "14", true, "long", "khakis");
console.log(_trousers1);

class Tops extends Clothes {
  constructor(color, size, inStock, fabric) {
    super(color, size, inStock);
    this.fabric = fabric;
  }
}

const _tops1 = new Tops("purple", "s", false, "linnen");
console.log(_tops1);

class Tshirts extends Tops {
  constructor(color, size, inStock, fabric, design) {
    super(color, size, inStock, fabric);
    this.design = design;
  }
}

class Shirts extends Tops {
  constructor(color, size, inStock, fabric, pattern) {
    super(color, size, inStock, fabric);
    this.pattern = pattern;
  }
  get _pattern() {
    return `The pattern is ${this.pattern}.`;
  }

  set _pattern(val) {
    this.pattern = this.pattern + " " + val;
  }
}

const _tShirts1 = new Tshirts("purple", "L", true, "polyester", "band");
const _shirt1 = new Shirts("blue", "XL", true, "cotton", "striped");
console.log(_tShirts1, _shirt1);

console.log(_shirt1._pattern);
_shirt1._pattern = "repeat";
console.log(_shirt1._pattern);
