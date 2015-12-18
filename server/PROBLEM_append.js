Meteor.methods({
  append: function(){
    
    Aggregate.update({timeStamp: 1424311200000}, {$set: { credit: 111111}}); //this fails on server

    Aggregate.update({afterTaxTotal:2}, {$set: { credit: 222222}}); //this is successful on server

    Aggregate.update({title: "Bem-Vindo a Nova York"}, {$set: { credit: 333333}}); //this is successful on server

    console.log("Append Done");
  }
});
