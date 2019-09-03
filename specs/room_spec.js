const assert = require('assert');
const Room = require('../room');

it('should have an area in square metres', function(){
  const room = new Room(50);
  const actual = room.area;
  assert.strictEqual(actual, 50);
});

// it('should start not painted', function(){
//   cont room = new Room()
// })
