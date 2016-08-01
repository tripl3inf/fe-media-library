import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.query('album', { year: params.album_year });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('year', model.query.year);
    }
});
