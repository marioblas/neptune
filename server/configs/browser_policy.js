import { BrowserPolicy } from 'meteor/browser-policy-common';

/**
 * Protect our application from unwanted attacks
 * @see https://github.com/meteor/meteor/blob/devel/packages/browser-policy/README.md
 * @see https://themeteorchef.com/snippets/using-the-browser-policy-package
 */
export default function () {
  // Disable any framing
  BrowserPolicy.framing.disallow();
  // Disable any usage of eval()
  BrowserPolicy.content.disallowEval();
  // Allow fonts to be loaded via data URLs
  BrowserPolicy.content.allowFontDataUrl();
  // Allow all content types to be loaded from the current domain
  BrowserPolicy.content.allowSameOriginForAll();

  const trustedServices = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    '*.google-analytics.com',
  ];

  trustedServices.forEach((trustedService) => {
    BrowserPolicy.content.allowOriginForAll(trustedService);
  });
}
