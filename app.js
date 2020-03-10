

const mongoose = require("mongoose");

// Connection URL
 mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true , useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema({
	//validation
  name:{
  	type:String,
  	required:[true,"why no name of fruit"]
  }, 
  //validation
  rating:{

  	 type:Number,
  	 min:5,
  	 max:10},
  review:String
});
const Fruit = mongoose.model("Fruit",fruitSchema);

//Insert some documents
const fruit = new Fruit ({
    name:"Apple",
	rating:8,
	review:"pretty solid as a fruit!."
});
//fruit.save();

const personSchema = new mongoose.Schema({
 name:String,
 age:Number,
 favouriteFruit:fruitSchema
});
const Person = mongoose.model("Person",personSchema);

const mango = new Fruit({
  name:"mango",
  rating:10,
  review:"summery Fruit yum! yum!"

});
   //mango.save();

 /*const person = new Person({
   name:"anju",
   age: 25,
   favouriteFruit:pineapple
 });*/

 
//person.save();
 	

/*const kiwi = new Fruit({
	name:"kiwi",
	score:10,
	review:"the best fruit!"
});
const orange = new Fruit({
	name:"orange",
	score:8,
	review:"i dont like"
});
const banana = new Fruit({
	name:"banana",
	score:9,
	review:" not so good fruit!"
});

  Fruit.insertMany([kiwi ,orange,banana ] , function (err){
 if (err){
 console.log("error");
 }else{
 console.log("succesfully added");
 }

});*/

Fruit.find(function(err ,fruits){

	if(err){
		console.log(err);
	
	}else{
		//console.log(fruits);

   fruits.forEach(function(fruit){
   	console.log(fruit.name);
   });
	}
});

/*Person.updateOne({name:"neha"},{favouriteFruit:mango},function(err){
	if(err){
		console.log(err);
	}else{
		console.log("succesfully updated");
	}
}); */

/*Fruit.deleteMany({ name:"pineapple"}, function(err){
	if(err){
		console.log(err);
	}else {
		console.log("succesfully deleted");
	}
});*/

 



