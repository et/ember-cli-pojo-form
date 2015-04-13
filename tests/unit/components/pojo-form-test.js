import { test, moduleForComponent } from 'ember-qunit';

var App;

moduleForComponent('pojo-form', 'PojoFormComponent');

test('is a form tag', function(assert) {
  assert.expect(3);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // render the component on the page
  this.render();

  assert.equal(component._state, 'inDOM');
  assert.equal('FORM', this.$().prop('tagName'));
});
