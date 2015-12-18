Meteor.methods({
  append: function(){
    var timeStamp = 1424311200000
    var title = "Bem-Vindo a Nova York"

    Aggregate.update({afterTaxTotal:2}, {$set: { credit: 222}});//
    //this fails on server
    Aggregate.update({timeStamp: 1424311200000}, {$set: { credit: 333}});
    //this is successful on server
    Aggregate.update({title: title}, {$set: { credit: 444}});
    //this is successful on server
    // Aggregate.update({region: "World", country: "US"}, {$set: { recoup: 555}});

    // Meteor.call('balance');
    console.log("Append Done");
  }
});
