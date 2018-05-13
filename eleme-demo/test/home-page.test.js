'use strict';

import helper from './helper';

import {
  assert,
} from 'chai';

const {
  driver,
  BASE_URL,
} = helper;

// API Document: https://macacajs.github.io/macaca-wd/

describe('test/home-page.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          userAgent: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0 Safari/537.36',
          width: 375,
          height: 667,
          deviceScaleFactor: 2,
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('page landing', () => {
      return driver
        .getUrl(`${BASE_URL}/home.html`)
        .source()
        .then(html => {
          assert.ok(html.includes('首页'));
        });
    });
  });
});
