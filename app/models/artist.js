import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';

const {computed} = Ember;

export default Model.extend({
    albums: hasMany('album', {async: true}),

    name: attr('string'),
    basedIn: attr('string'),
    foundingYear: attr('number'),
    updatedAt: attr('date'),

    albumsSold: computed.mapBy('albums', 'totalSold'),
    totalAlbumsSold: computed.sum('albumsSold')
});
