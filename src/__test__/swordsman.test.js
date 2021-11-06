import Swordsman from '../swordsman';

test('проверка персонажа-мечника', () => {
  const unit = new Swordsman('мечник');
  const unit1 = {
    name: 'мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(unit).toEqual(unit1);
});
