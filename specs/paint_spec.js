const assert = require('assert');
const Paint = require('../paint');

it('should have a number of litres of paint', function(){
  const paint = new Paint(10);
  const actual = paint.litres;
  assert.strictEqual(actual, 10);

  it('should be able to check if its empty', function(){
    const paint = new Paint(0);
    const actual = paint.litres;
    assert.strictEqual(actual, 0)
  });


})
