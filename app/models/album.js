import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    artist: belongsTo('artist', {async: true}),
    comments: hasMany('comment', {async: true}),

    name: attr('string'),
    year: attr('number'),
    totalSold: attr('number')
});
