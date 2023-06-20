# Shipping Extensibility Template - Api Extensions

Use this template to extend Kibo's Shipping capabilities using Kibo's API Extension framework by implementing methods on Shipping Adapter Interface

```ts
interface ShippingExtensionAdapter {
  getRates(request: any): Promise<any>
  getLabels(request: any): Promise<any>
  getManifest(request: any): Promise<any>
  getManifestUrl(request: any): Promise<any>
  cancelLabels(request: any): Promise<any>
}
```

## Requirements

- Kibo Developer Account
- Kibo API Extension Application
- NodeJS

Note: This README assumes you are familiar with Kibo's API Extension framework.
If you are not, please review the API Extensions guide found [here](https://docs.kibocommerce.com/help/getting-started-with-api-extensions)

## Getting Started

1. Configure Shipping Extension in your Kibo Developer Center

2. Fork or Clone this repo

3. Configure your mozu.config.json file

```bash
cp mozu.config-template.json ./mozu.config.json
```

4. Install Dependencies

```bash
npm install
```

5. Implement the methods for your use on the [Shipping Adapter class](assets/src/shipping-extension/ShippingAdapter.js)

6. Deploy application with

```bash
grunt
```
