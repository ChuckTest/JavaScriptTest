// Define the Animal class
class Animal {
    constructor(name, species, habitat) {
      this.name = name;
      this.species = species;
      this.habitat = habitat;
    }
  }
  
  // Define the Mammal class, which is derived from the Animal class
  class Mammal extends Animal {
    constructor(name, species, habitat, furColor, hasTail) {
      super(name, species, habitat);
      this.furColor = furColor;
      this.hasTail = hasTail;
    }
  }
  
  // Define the Cat class, which is derived from the Mammal class
  class Cat extends Mammal {
    constructor(name, species, habitat, furColor, hasTail, meows) {
      super(name, species, habitat, furColor, hasTail);
      this.meows = meows;
    }
  }
  
  // Create a new Cat object
  const cat = new Cat('Fluffy', 'Felis catus', 'Domestic', 'White', true, true);
  
  // The cat object can access properties and methods from the Mammal and Animal objects
  console.log(cat.name); // Output: Fluffy
  console.log(cat.species); // Output: Felis catus
  console.log(cat.habitat); // Output: Domestic
  console.log(cat.furColor); // Output: White
  console.log(cat.hasTail); // Output: true
  