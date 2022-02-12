const { insertMany } = require('./BookModule');
var Book = require('./BookModule');

async function insert() {
    await Book.create({ title: "C++", author: "EmranCo", rating: 4 }, function(err) {
        if (err) return handleError(err);
        console.log(new Date().toLocaleString(), "Inserted Success");
    });

    await Book.create({ title: "C#", author: "Haifa", rating: 5 }, function(err) {
        if (err) return handleError(err);
        console.log(new Date().toLocaleString(), "Inserted Success");
    });

    await Book.create({ title: "Bootstrab5", author: "Moghtar", rating: 5 }, function(err) {
        if (err) return handleError(err);
        console.log(new Date().toLocaleString(), "Inserted Success");
    });
}

async function update() {
    Book.updateMany({ title: "C++" }, { author: "Emran Ali", rating: 5 }, { returnDocument: 'after' }, function(err) {
        if (err) return handleError(err);
        console.log(new Date().toLocaleString(), "Updated Success");
    });
}


async function remove() {
    Book.remove({ author: "Moghtar" }, { returnDocument: 'after' }, function(err) {
        if (err) return handleError(err);
        console.log(new Date().toLocaleString(), "Deleting Success");
    });
}


async function view() {
    Book.find((err, data) => {
        if (err) console.log(err);
        else console.log(new Date().toLocaleString(), data.forEach((e) => {
            console.log(e, "\n---------------\n");
        }));
    });
}


async function removeAll() {
    Book.remove({}, function(err) {
        if (err) console.log(err);
        else console.log("All Data Deleted");
    })
}
// insert();
// update();
// remove();
// removeAll();
view();