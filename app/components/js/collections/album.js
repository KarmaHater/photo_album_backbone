var app = app || {}
app.Album = Backbone.Collection.extend({
  model: app.Picture,
  localStorage: new Backbone.LocalStorage('album-pictures')
})

