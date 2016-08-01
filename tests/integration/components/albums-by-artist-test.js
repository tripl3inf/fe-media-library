import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('albums-by-artist', 'Integration | Component | albums by artist', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{albums-by-artist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#albums-by-artist}}
      template block text
    {{/albums-by-artist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
