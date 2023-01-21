'use strict';

/**
 * duo-authenticate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::duo-authenticate.duo-authenticate');
