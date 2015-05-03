define(
  [
    'vendor/tpl!../../templates/dash_stack.html', 
    'app' 
  ],

  function (template) {
  
  var SummaryPanel = Backbone.View.extend({
    template: template,
    id: "dashboard-stack",
    subviews: {},

    initialize: function() {
      // if(!this.collection) {
      //   this.collection = new BullionTypes();
      //   this.collection.fetch();
      // }

    },

    render: function() {
      this.$el.html(this.template());

      return this;
    },

   
       
    close: function() {
      this.remove();
      this.unbind();
      if(this.model) {
        this.model.unbind("change", this.modelChanged);
      }
    }
  });                 

  return SummaryPanel;
});