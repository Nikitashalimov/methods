import Undead from '../undead';

test('проверка персонажа-нежить', () => {
  const unit = new Undead('нежить');
  const unit1 = {
    name: 'нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(unit1);
});
