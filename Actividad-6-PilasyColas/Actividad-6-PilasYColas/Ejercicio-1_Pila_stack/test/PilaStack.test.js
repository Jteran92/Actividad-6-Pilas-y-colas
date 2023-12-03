const { Stack } = require('../PilaStack');
const assert = require('assert'); 
describe('Stack', () => {
  it('debería inicializar una pila vacía', () => {
    const stack = new Stack();
    assert.strictEqual(stack.size(), 0);
    assert.strictEqual(stack.isEmpty(), true);
  });

  it('debe empujar los elementos hacia la pila', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.strictEqual(stack.size(), 3);
    assert.strictEqual(stack.isEmpty(), false);
    assert.strictEqual(stack.peek(), 3);
  });

  it('debería sacar elementos de la pila', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.strictEqual(stack.pop(), 3);
    assert.strictEqual(stack.pop(), 2);
    assert.strictEqual(stack.pop(), 1);
    assert.strictEqual(stack.size(), 0);
    assert.strictEqual(stack.isEmpty(), true);
  });

  it('debería manejar el peek and pop en una pila vacía', () => {
    const stack = new Stack();
    assert.strictEqual(stack.peek(), 'La pila está vacía');
    assert.strictEqual(stack.pop(), 'La pila está vacía');
  });
});
