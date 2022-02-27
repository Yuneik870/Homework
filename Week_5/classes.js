function Flowers(kind, petals, colors, waterIntake) {
    this.kind = kind;
    this.petals = petals;
    this.colors = colors;
    this.waterIntake = waterIntake;
} this.introduction = function () {
    return `This is a ${this.kind} flower. They are known for their ${this.petals} ${this.colors} petals.`
};

const peony = new Flowers("Peony", "soft", "pink and white", "mild");

console.log(peony);

class FlowerTrees extends Flowers{
    constructor(kind, petals, colors, waterIntake, fruit, height) {
    super(kind, petals, colors, waterIntake)
this.fruit = fruit;
this.height = height;
}
introduction() {
    return `This is a ${this.kind} tree and it has ${this.petals} ${this.colors} petals. It grows to be ${this.height} and intakes ${this.waterIntake} of water.`}
}

const cherryBlossom = new FlowerTrees("Cherry Blossom", "soft", "bright pink", "a lot", "cherries", "20 ft");

console.log(cherryBlossom);

console.log(cherryBlossom.introduction());

class Cacti extends Flowers{
    constructor(kind, petals, colors, waterIntake, prickles, fruit){
        super(kind, petals, colors, waterIntake)
        this.prickles = prickles;
        this.fruit = fruit;
}
introduction() {
    return `This is a ${this.kind} cacti and it has ${this.petals} ${this.colors} petals. It is ${this.prickles} and intakes ${this.waterIntake} of water.`}
}

const pricklyPear = new Cacti("prickly pear", "soft", "pink and yellow", "small", "a lot", "prickly pear")

console.log(pricklyPear)

console.log(pricklyPear.introduction())