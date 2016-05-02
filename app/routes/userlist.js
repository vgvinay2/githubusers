import Ember from 'ember';

export default Ember.Route.extend({
	filter:null,
	ajax: Ember.inject.service(),
	model() {
	return this.get('ajax').request('https://api.github.com/users');
	},
	actions: {
		search(filter){
			console.log( "i am here" + filter);
			var filter = this.get('filter');
			alert(filter);		
		}
	}
});
