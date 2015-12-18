Meteor.methods({
    aggregate:function(titlesArray){

    Aggregate.remove({});

    var temp = BaseData.rawCollection()
    var aggregateQuery = Meteor.wrapAsync(temp.aggregate, temp);
    var tempAgg = aggregateQuery([
      {
        $match: { Title : { $exists: true} }
      },
      {
        $project:  {
          timeStamp: "$timeStamp",
          Title: "$Title",
          Units: "$Units",

        }
      },
      {
        $group: {
          _id: {
            timeStamp: "$timeStamp",
            title: "$Title"
          },
          afterTaxTotal: {
            $sum:   "$Units"
          },
          credit: { $sum : 0 }
        }
      },
    ]);

    ////////////////////////////
    //PLACE PURE AGGREGATE IN DB
    ////////////////////////////

    //initialize bulk operation
    var bulkAgg = Aggregate.rawCollection().initializeOrderedBulkOp();

    //clean the _id object
    _.each(tempAgg, function (eachAggregatedContract) {
      eachAggregatedContract.timeStamp = eachAggregatedContract._id.timeStamp
      eachAggregatedContract.title = eachAggregatedContract._id.title
      delete eachAggregatedContract._id

      // insert
      bulkAgg.insert(eachAggregatedContract);

    })
    Meteor.wrapAsync(bulkAgg.execute)(function(error, result){
      if (result){
          console.log("Aggregate Done");
          Meteor.call('append');
      }
    });
    return "ok"
  }
});
