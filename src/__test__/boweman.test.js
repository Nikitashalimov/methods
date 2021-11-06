import Boweman from '../boweman';

test('проверка персонажа-лучника', () => {
  const unit = new Boweman('лучник');
  const unit1 = {
    name: 'лучник',
    type: 'Boweman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(unit1);
});
