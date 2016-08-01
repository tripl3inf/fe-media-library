import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
        submit(){
            let album = this.get('album'),
                name = this.get('name'),
                message = this.get('message');

            if (name && message) {
                this.get('store').createRecord('comment', {
                    album: album,
                    author: name,
                    message: message
                }).save().then(comment => {
                    album.get('comments').pushObject(comment);
                    album.save().then(() => {
                        this.setProperties({
                            name: '',
                            message: ''
                        });
                    });
                });
            }
            else {
                alert('You must fill in the form before submission!');
            }
        }
    }
});
