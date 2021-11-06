import Zombie from '../zombie';

test('проверка персонажа-зомби', () => {
  const unit = new Zombie('зомби');
  const unit1 = {
    name: 'зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(unit).toEqual(unit1);
});
