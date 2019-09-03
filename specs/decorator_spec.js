const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../room');

describe('Decorator', function(){
  it('should start with no paint', function(){
    const decorator = new Decorator([])
    const actual = decorator.stock
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to add a can paint to stock', function(){

    const decorator = new Decorator([]);
    decorator.addPaintCan(1)
    decorator.addPaintCan(1)

    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [1,1])
  })

  it('should be able to calculate total litres in stock', function(){
    const decorator = new Decorator([])
    const paint = new Paint(3)

    decorator.addPaintCan(paint)
    const actual = decorator.stock.litres
    assert.deepStrictEqual(actual, 3)
  })

});
