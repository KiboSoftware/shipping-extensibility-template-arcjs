class ShippingAdapter {
  constructor(context) {
    // TODO: get custom configured credentials from context
    const apiKey = context.credentials?.find((cred) => cred.key === 'apiKey')?.value
    this.context = context
    this.apiKey = apiKey
  }
  async getRates(ratesRequest) {
    throw new Error('Not implemented')
    try {
      // TODO: get rates
      return []
    } catch (error) {
      console.error(error)
      throw new Error('Unable to get rates')
    }
  }

  async getLabels(shipmentRequest) {
    throw new Error('Not implemented')
    try {
      const isReturn = shipmentRequest.shipmentRequestType === 'Return'
      if (isReturn) {
        // TODO: get return labels
      } else {
        // TODO: get outbound labels
      }
    } catch (error) {
      console.error(error)
      throw new Error('Unable to get labels')
    }
  }

  async getManifest(request) {
    throw new Error('Not implemented')
    try {
      // TODO: get manifest
      return
    } catch (error) {
      this.logger.error(error)
      throw new Error('Unable to get manifest')
    }
  }

  async getManifestUrl(request) {
    throw new Error('Not implemented')
    try {
      return `https://example.com/manifest/`
    } catch (error) {
      console.error(error)
      throw new Error('Unable to get manifest url')
    }
  }

  async cancelLabels(request) {
    throw new Error('Not implemented')
    try {
      // TODO: cancel labels
      return
    } catch (error) {
      console.error(error)
      throw new Error('Unable to get labels')
    }
  }
}
module.exports = ShippingAdapter
