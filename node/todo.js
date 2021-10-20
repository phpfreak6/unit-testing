class Todo {

    constructor() {}

    async insert( in_data ) {

        try {

            let data = {
                userId: in_data.userId,
                id: in_data.id,
                title: in_data.title,
                completed: in_data.completed
            };

            return true;

        } catch( ex ) {

            return false;
        }
    }
}

module.exports = Todo;