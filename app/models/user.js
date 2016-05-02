import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  login: attr(),
  avatar_url: attr(),
  url: attr()
});
