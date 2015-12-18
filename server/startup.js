Meteor.startup(function(){

  BaseData.remove({});
  Aggregate.remove({});

  Meteor.call( 'import' )
  Meteor.call( 'aggregate' )

});
