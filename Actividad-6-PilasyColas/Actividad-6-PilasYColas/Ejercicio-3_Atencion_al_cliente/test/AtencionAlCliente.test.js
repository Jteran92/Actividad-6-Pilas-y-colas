const { PriorityQueue } = require('../AtencionAlCliente');  // Ajusta la ruta del archivo según tu estructura de carpetas

describe('PriorityQueue', () => {
  it('debería inicializar una cola de prioridad vacía', () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.isEmpty()).toBe(true);
  });

  it('debe poner en cola los elementos en la cola de prioridad', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({ node: 'Paciente 1', priority: 3 });
    priorityQueue.enqueue({ node: 'Paciente 2', priority: 1 });
    priorityQueue.enqueue({ node: 'Paciente 3', priority: 2 });
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  it('debe retirar elementos de la cola de prioridad según la prioridad', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({ node: 'Paciente 1', priority: 3 });
    priorityQueue.enqueue({ node: 'Paciente 2', priority: 1 });
    priorityQueue.enqueue({ node: 'Paciente 3', priority: 2 });
    expect(priorityQueue.dequeue()).toEqual({ node: 'Paciente 2', priority: 1 });
    expect(priorityQueue.dequeue()).toEqual({ node: 'Paciente 3', priority: 2 });
    expect(priorityQueue.dequeue()).toEqual({ node: 'Paciente 1', priority: 3 });
    expect(priorityQueue.isEmpty()).toBe(true);
  });

  it('debe manejar la eliminación de la cola en una cola de prioridad vacía', () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.dequeue()).toBe("La cola está vacía");
  });
  

  it('debería manejar isEmpty en una cola de prioridad no vacía', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({ node: 'Paciente 1', priority: 3 });
    expect(priorityQueue.isEmpty()).toBe(false);
  });
});

