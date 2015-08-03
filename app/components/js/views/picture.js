var app = app || {};
app.PictureView = Backbone.View.extend({
  tagname: 'li',
  className: 'entry',
  template: Handlebars.compile($('#photo-temp').html()),
  render: function() {
    this.$el.html( this.template( this.model.toJSON() ));
    return this;
  }
})