import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
    albumYears: computed('albums.[]', function () {
        return this.get('albums').reduce(function(acc, value) {
            acc[value.get('year')] = (acc[value.get('year')] || 0) + value.get('totalSold');
            return acc;
        }, {});
    }),

    sortedYears: computed.sort('albumYears', [])
});
