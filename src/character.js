export default class Character {
  static typeContainer = [
    'Boweman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    // имя должно быть строкой от 2 до 10 символов
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("the character's name must contain letters from 2 to 10 characters");
    }
    // тип должен быть один из 6-ти предложенных
    if (Character.typeContainer.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
    } else {
      throw new Error('it is impossible to level up a dead character');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health <= 0) {
        throw new Error('the character is dead');
      }
    } else {
      throw new Error('the character is dead');
    }
  }
}
