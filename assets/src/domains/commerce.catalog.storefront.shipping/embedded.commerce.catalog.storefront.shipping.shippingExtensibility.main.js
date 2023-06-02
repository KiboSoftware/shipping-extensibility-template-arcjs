const ShippingAdapter = require('../../shipping-extension/ShippingAdapter')
const shippingExtMethods = {
  rates: 'getRates',
  labels: 'getLabels',
  manifest: 'getManifest',
  'manifest-url': 'getManifestUrl',
  'cancel-labels': 'cancelLabels',
}
async function handler(context) {
  const shippingRequest = context.get.request()
  const shippingExtMethod = context.get.method()
  console.log('starting shipping extension method: ', shippingExtMethod)
  const shippingAdapter = new ShippingAdapter(shippingRequest.context)
  const action = shippingExtMethods[context.get.method()]
  if (!action) {
    throw new Error(`Mapping for method ${shippingExtMethod} to adapter method not found`)
  }
  return shippingAdapter[action](shippingRequest.request)
}

module.exports = function (context, callback) {
  handler(context)
    .then((response) => callback(null, response))
    .catch((error) => {
      console.error(error)
      callback(error)
    })
}
