import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const {computed} = Ember;

export default Model.extend({
    album: belongsTo('album', {async: true}),

    author: attr('string'),
    message: attr('string'),
    updatedAt: attr('date'),
    updateDate: computed('updatedAt', function(){
        return new Date(this.get('updatedAt'));
    })
});
