import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
    tagName: 'ul',
    sortedAlbums: computed('albums.[]', function(){
        return this.get('albums').reduce((prev, cur) => {
            if(!prev[cur.get('artist.name')]){
                prev[cur.get('artist.name')] = [cur.get('name')];
            }
            else{
                prev[cur.get('artist.name')].push(cur.get('name'));
            }
            return prev;
        }, {});
    })
});
