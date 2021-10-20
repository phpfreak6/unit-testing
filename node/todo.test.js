const Todo = require('./todo');

test( 'check the inputs to be truthy', async () => {

    // arrange part
    let contlr = new Todo();
    
    // act part
    let in_data = {
        userId: 1,
        id: 1,
        title: 'Angular 13 roadmap',
        completed: true
    };
    let result = await contlr.insert( in_data );

    // assert part
    expect(result).toBe(true);
} );