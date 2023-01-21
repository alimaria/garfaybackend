'use strict';

/**
 * duo-authenticate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::duo-authenticate.duo-authenticate');
