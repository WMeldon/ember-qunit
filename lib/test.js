import Ember from 'ember';
//import QUnit from 'qunit'; // Assumed global in runner
import testContext from './test-context';

function resetViews() {
  Ember.View.views = {};
}

export default function test(testName, callback) {

  function wrapper() {
    var context = testContext.get();

    resetViews();
    var result = callback.call(context);
  }

  specify(testName, wrapper);
}

