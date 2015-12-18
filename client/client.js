Template.hello.helpers({
  tableCollection: function () {
      return Aggregate.find({}).fetch();
  },
  reactiveTableSettings: function () {
    return {
        rowsPerPage: 10,
        showFilter: true,
        fields: ['timeStamp',  'title', 'afterTaxTotal', 'credit']
    };
  },
});
