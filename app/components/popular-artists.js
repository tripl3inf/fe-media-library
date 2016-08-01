import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
    sorting: ['totalAlbumsSold:desc'],
    sortedBySales: computed.sort('artists', 'sorting'),
    top5BySales: computed('sortedBySales', function () {
        return this.get('sortedBySales').slice(0, 6);
    })
});

