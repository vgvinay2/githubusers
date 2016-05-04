import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    model() {
        return this.get('ajax').request('https://api.github.com/users');
    },

    actions: {
        search:function(stuff) {
            var searchRegexp = new RegExp(stuff, "i");
            var self = this;
            this.get('ajax').request('https://api.github.com/users').then(function (result) {
                var searchResult = result.filter(function (user) {
                    return user.login.match(searchRegexp)
                });
                self.controller.set('model', searchResult);
            });
        }
    }
});
