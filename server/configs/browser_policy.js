import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy-common';

/**
 * Protect the application from unwanted attacks
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

  // Allow trusted services
  const allowedOrigins = Meteor.settings.browserPolicy.allowOriginForAll;
  allowedOrigins.forEach((allowedOrigin) => {
    BrowserPolicy.content.allowOriginForAll(allowedOrigin);
  });
}
