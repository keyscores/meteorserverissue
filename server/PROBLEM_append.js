Meteor.methods({
  append: function(){
    
    // You should test with an existing timestamp
    var timeStamp = Aggregate.findOne().timeStamp
    console.log('Testing with: ', timeStamp);
    
    Aggregate.update({timeStamp: timeStamp}, {$set: { credit: 111111}}); //this fails on server

    Aggregate.update({afterTaxTotal:2}, {$set: { credit: 222222}}); //this is successful on server

    Aggregate.update({title: "Bem-Vindo a Nova York"}, {$set: { credit: 333333}}); //this is successful on server

    console.log("Append Done");
  }
});
