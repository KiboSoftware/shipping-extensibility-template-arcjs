module.exports = {
  'embedded.commerce.catalog.storefront.shipping.shippingExtensibility.main': {
      actionName: 'embedded.commerce.catalog.storefront.shipping.shippingExtensibility.main',
      customFunction: require('./domains/commerce.catalog.storefront.shipping/embedded.commerce.catalog.storefront.shipping.shippingExtensibility.main')
  },
  'embedded.platform.applications.install': {
     actionName: 'embedded.platform.applications.install',
     customFunction: require('./domains/platform.applications/embedded.platform.applications.install.js')
  }
};
