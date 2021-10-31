import Character from '../character';

test('проверка по длине имени', () => {
  const unit1 = () => new Character('1', 'Boweman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('проверка по выбору класса', () => {
  const unit1 = () => new Character('unit', 'luchnik');
  expect(unit1).toThrow('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка основного персонажа', () => {
  const unit = new Character('лучник', 'Boweman');
  const unit2 = {
    name: 'лучник',
    type: 'Boweman',
    health: 100,
    level: 1,
  };
  expect(unit).toEqual(unit2);
});

test('проверка повышение уровня персонажем', () => {
  const unit3 = {
    name: 'робингуд',
    type: 'Boweman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const unit = new Character('робингуд', 'Boweman');
  unit.levelUp()
  expect(unit).toEqual(unit3);
});

test('проверка получения урона персонажем', () => {
  const unit4 = {
    name: 'стрелок',
    type: 'Boweman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const unit = new Character('стрелок', 'Boweman');
  unit.damage(10)
  expect(unit).toEqual(unit4);
});
