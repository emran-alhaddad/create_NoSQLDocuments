var Book = require('./BookModule');

console.log(new Date(), 'Inserting doc');
Book.create({ title: "C++", author: "EmranCo", rating: 4 }, function(err) {
    if (err) return handleError(err);
    console.log("Inserted Success");
});

console.log(new Date(), 'Inserting doc');
Book.create({ title: "C#", author: "Haifa", rating: 5 }, function(err) {
    if (err) return handleError(err);
    console.log("Inserted Success");
});

console.log(new Date(), 'Inserting doc');
Book.create({ title: "Bootstrab5", author: "Moghtar", rating: 5 }, function(err) {
    if (err) return handleError(err);
    console.log("Inserted Success");
});

console.log(new Date(), 'Updating doc');
Book.updateOne({ title: "C++" }, { $set: { author: "Emran Ali", rating: 5 } }, function(err) {
    if (err) return handleError(err);
    console.log("Updated Success");
});


console.log(new Date(), 'Deleting doc');
Book.deleteOne({ author: "Moghtar" }, function(err) {
    if (err) return handleError(err);
    console.log("Deleting Success");
});