'use strict';

import {
  webpackHelper,
} from 'macaca-wd';

const {
  driver,
} = webpackHelper;

const port = 9090;

exports.driver = driver;
exports.BASE_URL = `http://127.0.0.1:${port}`;
