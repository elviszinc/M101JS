/**
 * Write a program in Node.js that will remove the lowest homework score for each student. 
 * Since there is a single document for each student containing an array of scores, you will 
 * need to update the scores array and remove the homework.
 * 
 * Hint: One way to solve this is to find the lowest homework in code and then update the 
 * scores array with the low homework removed. If you are struggling with the Node.js side of this, 
 * look at the Array.splice method, which can remove elements from a Javascript Array. 
 * Note that you should not use the delete operator, because it will delete the element without 
 * resizing the array, leaving an empty space.
 */

// Connect to MongoDB
var mongoClient = require("MongoDB").MongoClient;

mongoClient.connect("mongodb://localhost:27017/school", function(err, db){
	if (err) throw err;
	var students = db.collection("students");
	// Retrieve all students
	var cursor = students.find();
	cursor.each(function(err, doc){
		if(err) throw err;
		if(doc === null){
			return db.close();
		}
		// Display each student's name
		console.dir(doc.name);
	});
});

