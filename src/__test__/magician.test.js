import Magician from '../magician';

test('проверка персонажа-мага', () => {
  const unit = new Magician('маг');
  const unit1 = {
    name: 'маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(unit).toEqual(unit1);
});
