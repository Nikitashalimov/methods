import Daemon from '../daemon';

test('проверка персонажа-демона', () => {
  const unit = new Daemon('демон');
  const unit1 = {
    name: 'демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(unit).toEqual(unit1);
});
