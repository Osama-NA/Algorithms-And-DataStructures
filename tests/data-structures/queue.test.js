const Queue = require('../../data-structures/queue')

test("Queue:", function () {
    const list = new Queue();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.dequeue()).toEqual(5);
    expect(list.length).toEqual(2);

    list.enqueue(11);

    expect(list.dequeue()).toEqual(7);
    expect(list.dequeue()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.dequeue()).toEqual(11);
    expect(list.dequeue()).toEqual(undefined);
    expect(list.length).toEqual(0);

    list.enqueue(69);
    
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});
