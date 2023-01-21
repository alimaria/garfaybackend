'use strict';

/**
 * crypto-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crypto-info.crypto-info');
