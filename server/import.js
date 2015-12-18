Meteor.methods({
  import: function(){
    //see GLOBALDATA in fixtures.js
    var bulkImport = BaseData.rawCollection().initializeUnorderedBulkOp();
    _.each(GLOBALDATA, function(e){
      //data set may have strings instead of numbers
      e["Units"] = Number(e["Units"])

      //use moment.js to parse dates from strings
      parsedDate = moment(e["Download Date (PST)"], "MM-DD-YY")
      e.timeStamp = parsedDate.valueOf()

      bulkImport.insert(e);
    })

    Meteor.wrapAsync(bulkImport.execute)();
  }
});
