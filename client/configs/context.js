// Application Context is available to all actions and containers,
// so this is the place for shared variables in your app

import { Meteor } from 'meteor/meteor';
import * as Collections from '/lib/collections';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
  };
}
