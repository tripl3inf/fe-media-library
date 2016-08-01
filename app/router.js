import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artist', {path: '/artists/:artist_id'}, function() {
    this.route('album', {path: '/albums/:album_id'});
  });
  this.route('year', {path: '/year/:album_year'});
  this.route('location', {path: '/location/:location'});
});

export default Router;
