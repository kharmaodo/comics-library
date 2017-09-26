import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: comics-library', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<comics-library />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
