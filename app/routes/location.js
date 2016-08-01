import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.query('artist', {location: params.location});
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('location', model.get('firstObject.basedIn'));
    }
});
