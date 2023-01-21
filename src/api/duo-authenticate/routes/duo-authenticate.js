'use strict';

/**
 * duo-authenticate router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::duo-authenticate.duo-authenticate');
