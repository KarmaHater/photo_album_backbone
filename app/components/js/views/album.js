var app = app || app

app.AlbumView = Backbone.View.extend({
  el: '#album',
  events: {
    'submit #AddPictureForm' : 'addPicture'
  },
  initialize: function() {
    this.collection = new app.Album();
    this.collection.fetch({reset: true})
    this.newPicForm = $('#AddPictureForm');
    this.picturesList = $('#theList')
    this.listenTo( this.collection, 'add', this.renderPicture );
  },
  render: function() {
    this.collection.each( function( pic ) {
      this.renderPicture(pic);
    }, this)
  },
  renderPicture: function(pic) {
    var picView = new app.PictureView({ model: pic });
    this.$el.append( picView.render().el )
  },
  addPicture: function(e) {
    e.preventDefault();
    var formData = {}
    this.newPicForm.children('input').each(function ( i, el ) {
      var el = $( el )
      if( el.is( ':text' ) && el.val() != '' ) {
        formData[el.attr( 'name' )] = el.val();
      }
    })
    this.collection.create(formData);
    this.resetForm();
  },
  resetForm: function() {
    this.newPicForm[0].reset();
  },
  renderPicture: function(pic) {
    var picView = new app.PictureView({ model: pic })
    this.picturesList.append( picView.render().el )
  }
})