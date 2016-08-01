import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
    commentSorting: ['updateDate:desc'],
    sortedComments: computed.sort('comments', 'commentSorting'),

    actions: {
        deleteComment(comment){
            comment.get('album').then(album => {
                album.get('comments').removeObject(comment);
                album.save().then(()=> comment.destroyRecord());
            });
        }
    }
});
