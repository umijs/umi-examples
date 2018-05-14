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

describe('test/index-page.test.js', () => {
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

    it('index page landing', () => {
      return driver
        .getUrl(`${BASE_URL}/`)
        .sleep(1000)
        .elementByCss('[accessbilityid="increase"]')
        .click()
        .elementByCss('[accessbilityid="increase"]')
        .click()
        .elementByCss('[accessbilityid="count"]')
        .text()
        .then(text => {
          assert.equal(text, 'Count: 2');
        });
    });

    it('index page func', () => {
      return driver
        .getUrl(`${BASE_URL}/`)
        .sleep(1000)
        .elementByCss('[accessbilityid="set-title"]')
        .click()
        .elementByCss('#root > div > div > h2')
        .text()
        .then(text => {
          assert.ok(text.includes('setted dva'));
        });
    });

    it('list route', () => {
      return driver
        .getUrl(`${BASE_URL}/list`)
        .sleep(1000);
    });

    it('list route', () => {
      return driver
        .getUrl(`${BASE_URL}/list/list`)
        .sleep(1000);
    });

    it('search route', () => {
      return driver
        .getUrl(`${BASE_URL}/list/search`)
        .sleep(1000);
    });

    it('login route', () => {
      return driver
        .getUrl(`${BASE_URL}/login`)
        .sleep(1000)
        .elementByCss('#root > div > div > button')
        .click()
        .source()
        .then(html => {
          assert.ok(html.includes('Admin Page'));
        });
    });
  });
});

