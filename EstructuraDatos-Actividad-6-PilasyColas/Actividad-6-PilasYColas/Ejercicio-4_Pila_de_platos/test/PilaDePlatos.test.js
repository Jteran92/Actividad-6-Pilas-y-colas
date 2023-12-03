const Stack = require('../PilaDePlatos');

describe('Stack', () => {
  it('debería inicializar una pila vacía', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('debe empujar los elementos hacia la pila', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(3);
  });

  it('debería sacar elementos de la pila', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('debería manejar el peek and pop en una pila vacía', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });
});
