const { Queue } = require('../queue');  // Ajusta la ruta del archivo según tu estructura de carpetas

describe('Queue', () => {
  it('debería inicializar una cola vacía', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('debria agregar elementos a la cola', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
  });

  it('debería quitar elementos de la cola', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('debe manejar el ver o quitar elementos de la cola en una cola vacía', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe('La cola está vacía');
    expect(queue.dequeue()).toBe('La cola está vacía');
  });
});
