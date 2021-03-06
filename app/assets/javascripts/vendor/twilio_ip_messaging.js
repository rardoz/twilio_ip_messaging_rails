/* twilio-ip-messaging.js 0.10.4
The following license applies to all parts of this software except as
documented below.

    Copyright (c) 2016, Twilio, inc.
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:

      1. Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.

      2. Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in
         the documentation and/or other materials provided with the
         distribution.

      3. Neither the name of Twilio nor the names of its contributors may
         be used to endorse or promote products derived from this software
         without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

This software includes javascript-state-machine under the following license.

    Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

This software includes durational under the following license.

    Copyright (c) 2014 Micheil Smith

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

This software includes loglevel under the following license.

    Copyright (c) 2013 Tim Perry

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

This software includes q under the following license.

    Copyright 2009–2014 Kristopher Michael Kowal. All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

This software includes platform.js under the following license.

    Copyright 2014 Benjamin Tan <https://d10.github.io/>
    Copyright 2011-2015 John-David Dalton <http://allyoucanleet.com/>

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.Twilio || (g.Twilio = {})).IPMessaging = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _dereq_('loglevel');

var DataSyncConfig = _dereq_('./configuration.js');
var Subscriptions = _dereq_('./subscriptions.js');
var Router = _dereq_('./router.js');
var Network = _dereq_('./network.js');

var DataEntity = _dereq_('./dataentity.js');
var DataStream = _dereq_('./datastream.js');
var DataMap = _dereq_('./datamap.js');

var COREDATA_ENTITY_NOTIFICATION_TYPE = 'com.twilio.rtd.cds.entity';
var COREDATA_STREAM_NOTIFICATION_TYPE = 'com.twilio.rtd.cds.stream';
var COREDATA_MAP_NOTIFICATION_TYPE = 'com.twilio.rtd.cds.map';

/**
 * @param {String} token authorization token
 * @param {NotificationClient} notification initiated notification client instance
 *
 * @class DataSyncClient
 * @classdesc DataSync service client
 */
function DataSyncClient(token, notification, transport, options) {
  var _this = this;

  var config = new DataSyncConfig(token, options);
  var network = new Network(config, transport);
  var subscriptions = new Subscriptions(config, network);

  (0, _defineProperties2.default)(this, {
    _notification: { value: notification },
    _config: { value: config },

    _network: { value: network },
    _subscriptions: { value: subscriptions },
    _router: { value: new Router({ config: config, subscriptions: subscriptions }) }
  });

  notification.subscribe(COREDATA_ENTITY_NOTIFICATION_TYPE);
  notification.subscribe(COREDATA_STREAM_NOTIFICATION_TYPE);
  notification.subscribe(COREDATA_MAP_NOTIFICATION_TYPE);

  notification.on('message', this._router.onMessage.bind(this._router));
  notification.on('transportReady', function (state) {
    if (state) {
      _this._router.onConnected();
    }
  });
}

DataSyncClient.prototype._getDependencies = function () {
  return { config: this._config,
    datasync: this,
    network: this._network,
    router: this._router
  };
};

/**
 * Creates new data entity
 * {@see DataEntity}
 * @returns Returns promise
 */
DataSyncClient.prototype.createEntity = function (data, purpose) {
  var _this2 = this;

  var payload = { data: data };
  if (typeof purpose !== 'undefined') {
    payload.purpose = purpose;
  }

  return this._network.post(this._config.entitiesUri, payload).then(function (response) {
    log.debug('DSS I: entity created: ', response);
    return new DataEntity(_this2._getDependencies(), response.body);
  });
};

/**
 * Open exisiting data entity
 * @param {string} uri Stream location
 * @param {boolean} subscribe Should subscribe immediately
 * @return {Promise<EventStream>}
 */
DataSyncClient.prototype.openEntity = function (uri, subscribe) {
  var _this3 = this;

  if (subscribe) {
    uri += '?subscribe=true';
  }
  return this._network.get(uri).then(function (response) {
    if (response.body.hasOwnProperty('type')) {
      throw new Error('Unexpected data type: ' + response.body.type + ' when entity was expected');
    }
    var entity = new DataEntity(_this3._getDependencies(), response.body);
    if (response.body.subscriptionId) {
      _this3._subscriptions.add(entity.uri, entity, response.body.subscriptionId);
    }
    return entity;
  });
};

/**
 * Creates the new Event Stream.
 * @param {string} purpose - the purpose of created object
 * @return {Promise<EventStream>}
 */
DataSyncClient.prototype.createStream = function (purpose, context) {
  var _this4 = this;

  var payload = {};
  if (typeof purpose !== 'undefined') {
    payload.purpose = purpose;
  }

  if (typeof context !== 'undefined') {
    payload.context = context;
  }

  return this._network.post(this._config.streamsUri, payload).then(function (response) {
    log.debug('DSS I: data stream created: ', response);
    return new DataStream(_this4._getDependencies(), response.body);
  });
};

/**
 *  Open exiting event stream by given URI
 *  @param {string} uri Stream location
 *  @param {boolean} subscribe Should subscribe immediately
 *  @return Promise<EventStream>
 */
DataSyncClient.prototype.openStream = function (uri, subscribe) {
  var _this5 = this;

  if (subscribe) {
    uri += '?subscribe=true';
  }
  return this._network.get(uri).then(function (response) {
    if (response.body.type !== 'stream') {
      throw new Error('Unexpected data type: ' + response.body.type);
    }
    log.debug('DSS I: data stream opened: ', response);
    var stream = new DataStream(_this5._getDependencies(), response.body);
    if (response.body.subscriptionId) {
      _this5._subscriptions.add(stream.uri, stream, response.body.subscriptionId);
    }
    return stream;
  });
};

/**
 * Creates an instance of Map
 * @return Promise<DataMap>
 */
DataSyncClient.prototype.createMap = function (purpose, context) {
  var _this6 = this;

  var payload = {};
  if (typeof purpose !== 'undefined') {
    payload.purpose = purpose;
  }

  if (typeof context !== 'undefined') {
    payload.context = context;
  }

  return this._network.post(this._config.mapsUri, payload).then(function (response) {
    return new DataMap(_this6._getDependencies(), response.body);
  });
};

/**
 * Open an existing Map
 * @param {string} uri
 * @param {boolean} subscribe Should subscribe immediately
 * @return Promise<DataMap>
 */
DataSyncClient.prototype.openMap = function (uri, subscribe) {
  var _this7 = this;

  if (subscribe) {
    uri += '?subscribe=true';
  }
  return this._network.get(uri).then(function (response) {
    if (response.body.type !== 'map') {
      throw new Error('Unexpected data type: ' + response.body.type);
    }
    var map = new DataMap(_this7._getDependencies(), response.body);
    if (response.body.subscriptionId) {
      _this7._subscriptions.add(map.uri, map, response.body.subscriptionId);
    }
    return map;
  });
};

/**
 * Set authentication token
 * If token is already set, it will be replaced with the new one
 *
 * @param {String} Authentication token
 */
DataSyncClient.prototype.setAuthToken = function (token) {
  log.info('DSS I: authTokenUpdated');
  this._config.updateToken(token);
};

(0, _freeze2.default)(DataSyncClient);

module.exports = DataSyncClient;

},{"./configuration.js":3,"./dataentity.js":4,"./datamap.js":5,"./datastream.js":6,"./network.js":8,"./router.js":9,"./subscriptions.js":10,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"loglevel":166}],2:[function(_dereq_,module,exports){
'use strict';

/**
 * @class
 * @classdesc Entity of event stream collection
 */

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CollectionEntity(data) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _id: { value: data.id, writable: false },
    _uri: { value: data.uri, writable: false },
    _value: { value: data.value, writable: true },

    id: { enumerable: true,
      get: function get() {
        return _this._id;
      } },
    uri: { enumerable: true,
      get: function get() {
        return _this._uri;
      } },
    value: { enumerable: true,
      get: function get() {
        return _this._value;
      } }
  });
}

CollectionEntity.prototype._update = function (other) {
  this._value = other.value;
};

(0, _freeze2.default)(CollectionEntity);

module.exports = CollectionEntity;

},{"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34}],3:[function(_dereq_,module,exports){
'use strict';

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CDS_URI = 'https://cds.twilio.com';
var SUBSCRIPTIONS_PATH = '/v1/subscriptions';
var MAPS_PATH = '/v2/Maps';
var STREAMS_PATH = '/v2/Streams';
var ENTITIES_PATH = '/v2/Entities';

/**
 * @param {String} token - authentication token
 *
 * @class DataSyncConfig
 * @classdesc Settings container for the DataSync library
 */
function DataSyncConfig(token, options) {
  var _this = this;

  options = (options || {}).DataSync || {};
  var baseUri = options.cdsUri || CDS_URI;

  var settings = {
    subscriptionsUri: baseUri + SUBSCRIPTIONS_PATH,
    entitiesUri: baseUri + MAPS_PATH,
    streamsUri: baseUri + STREAMS_PATH,
    mapsUri: baseUri + ENTITIES_PATH
  };

  (0, _defineProperties2.default)(this, {
    _token: { value: token, writable: true },

    token: { enumerable: true, get: function get() {
        return _this._token;
      } },
    subscriptionsUri: { enumerable: true, get: function get() {
        return settings.subscriptionsUri;
      } },
    entitiesUri: { enumerable: true, get: function get() {
        return settings.entitiesUri;
      } },
    streamsUri: { enumerable: true, get: function get() {
        return settings.streamsUri;
      } },
    mapsUri: { enumerable: true, get: function get() {
        return settings.mapsUri;
      } }
  });
}

DataSyncConfig.prototype.updateToken = function (token) {
  this._token = token;
};

module.exports = DataSyncConfig;

},{"babel-runtime/core-js/object/define-properties":33}],4:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = _dereq_('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var JsonDiff = _dereq_('../../util/jsondiff');
var log = _dereq_('loglevel');

/**
 *  @class DataEntity
 *  @classdesc Represents a DSS object
 *
 *  @constructor
 */
function DataEntity(params, descriptor) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _config: { value: params.config },
    _datasync: { value: params.datasync },
    _network: { value: params.network },
    _router: { value: params.router },

    _pendingListeners: { value: {} },
    _isSynced: { value: true, writable: true },

    _links: { value: descriptor.links },
    _entityId: { value: descriptor.entity_id },
    _revision: { value: descriptor.entity_revision, writable: true },
    _data: { value: descriptor.data, writable: true },

    uri: { enumerable: true, get: function get() {
        return _this._links.entity;
      } },
    id: { enumerable: true, get: function get() {
        return _this._entityId;
      } },
    revision: { enumerable: true, get: function get() {
        return _this._revision;
      } }
  });

  EventEmitter.call(this);

  this._initialize();
}
inherits(DataEntity, EventEmitter);

/**
 * @private
 */
DataEntity.prototype._initialize = function () {
  var _this2 = this;

  ['keyAdded', 'keyRemoved', 'keyUpdated'].forEach(function (eventName) {
    _this2._pendingListeners[eventName] = {};
    _this2.on(eventName, function (path, data) {
      var handlers = _this2._pendingListeners[eventName][path] || [];
      handlers.forEach(function (handler) {
        handler(data);
      });
      _this2._pendingListeners[eventName][path] = [];
    });
  });
};

/**
 * Update data entity with new data
 * @private
 */
DataEntity.prototype._update = function (update) {
  switch (update.type) {
    case 'entity_update':
      var originalData = this._data;
      this._revision = update.entity_revision;
      this._data = update.data;
      this._traverse(originalData, update.data);
      this.emit('updated', update.data);

      break;
    case 'entity_delete':
      this.emit('deleted');
  }
};

/**
 * Calculate diff between old and new data
 * @private
 */
DataEntity.prototype._traverse = function (originalData, updatedData) {
  var _this3 = this;

  var diff = JsonDiff.diff(originalData, updatedData);
  diff.forEach(function (row) {
    if (row.op === 'add') {
      _this3.emit('keyAdded', row.path, row.value);
    } else if (row.op === 'replace') {
      _this3.emit('keyUpdated', row.path, row.value);
    } else if (row.op === 'remove') {
      _this3.emit('keyRemoved', row.path);
    }
  });
};

/**
 * Notifies user that he should resolve the conflict
 * If user hasn't setup any conflict event handlers, it fails immediately
 * @private
 */
DataEntity.prototype._resolveConflict = function (conflictResolver) {
  var _this4 = this;

  if (!(conflictResolver && typeof conflictResolver === 'function')) {
    return _promise2.default.reject(new Error('Can\'t resolve conflict'));
  }

  return new _promise2.default(function (resolve, reject) {
    var revision = _this4._revision;
    var localData = _this4._data;

    var rollback = function rollback(err) {
      this._revision = revision;
      this._data = localData;
      reject(err);
    }.bind(_this4);

    _this4.forceSync().then(function () {
      conflictResolver({
        localData: localData,
        remoteData: _this4._data,
        resolve: resolve,
        reject: rollback
      });
    });
  });
};

/**
 * Subscribe to changes of data entity
 */
DataEntity.prototype.subscribe = function () {
  return this._router.subscribe(this.uri, this);
};

/**
 * Unsubscribe from changes of current data entity
 */
DataEntity.prototype.unsubscribe = function () {
  return this._router.unsubscribe(this.uri, this);
};

/**
 * @returns {Object} Internal data of entity
 */
DataEntity.prototype.getData = function () {
  return this._data;
};

DataEntity.prototype.setData = function (data) {
  this._data = data;
  this._isSynced = false;
};

/**
 * @private
 */
DataEntity.prototype._pushChangesInternal = function (resolve, reject) {
  var _this5 = this;

  return this._network.put(this.uri, { data: this._data }, this._revision).then(function (response) {
    var revision = response.body.entity_revision;
    log.debug('DSS: entity updated: ', response, ' new revision is: ', revision);
    resolve(response);
    _this5._router.emulateUpdate(_this5, _this5.uri, { revision: revision, data: _this5._data });
  }).catch(reject);
};

/**
 * Push changes to the server
 * @public
 */
DataEntity.prototype.pushChanges = function (conflictResolver) {
  var _this6 = this;

  return new _promise2.default(function (resolve, reject) {

    var handleError = function handleError(err) {
      if (err.status === 412) {
        log.info('DSS I: version conflict detected!');
        this._resolveConflict(conflictResolver).then(handleMerge).catch(reject);
      } else {
        log.error('DSS E: failed to push local changes to server: ', err);
        reject(err);
      }
    }.bind(_this6);

    var handleMerge = function handleMerge(mergedData) {
      this.setData(mergedData);
      setTimeout(function () {
        this._pushChangesInternal(resolve, handleError);
      }.bind(this), 0);
    }.bind(_this6);

    _this6._pushChangesInternal(resolve, handleError);
  });
};

/**
 * Get new data from server
 */
DataEntity.prototype.softSync = function () {
  var _this7 = this;

  /* eslint-disable camelcase */
  return this._network.get(this.uri).then(function (response) {
    var revision = response.body.entity_revision;
    var data = response.body.data;
    _this7._update({ entity_revision: revision, type: 'entity_update', data: data });
    return _this7;
  });
  /* eslint-enable camelcase */
};

/**
 * Download new data from service and overwrite local changes
 * Won't fire any events and callbacks about changes
 */
DataEntity.prototype.forceSync = function () {
  var _this8 = this;

  return this._network.get(this.uri).then(function (response) {
    _this8._revision = response.body.entity_revision;
    _this8._data = response.body.data;
    return _this8;
  }).catch(function (reason) {
    log.error('DSS E: failed to get entity: ', reason);
  });
};

DataEntity.prototype.addEventHandler = function (eventName, path, handler) {
  var handlers = this._pendingListeners[eventName][path] || [];
  handlers.push(handler);
  this._pendingListeners[eventName][path] = handlers;
};

/**
 * Get value by given path
 * @param {string} path JSON path
 */
DataEntity.prototype.value = function (path) {
  var result = void 0;
  try {
    var pathArr = path.replace(/^\/|\/$/gm, '').split('/');
    var obj = this.getData();
    pathArr.forEach(function (el) {
      obj = obj[el];
    });
    result = obj;
  } finally {
    return result;
  }
};

/**
 *  Updates the value by given path
 *
 *  Value should be the same type - you can't update
 *  the object or array with the string type
 *
 *  To replace node with the value of another type, see {@see replace}
 *
 *  @param path - JSON Pointer path to the node
 *  @param value - The value to update.
 */
DataEntity.prototype.update = function (path, value) {
  var pathArr = path.replace(/^\/|\/$/gm, '').split('/').filter(function (el) {
    return el !== '';
  });

  var found = true;
  var obj = this.getData();
  for (var idx = 0; idx < pathArr.length; ++idx) {
    obj = obj[pathArr[idx]];
    if (typeof obj === 'undefined') {
      found = false;
      break;
    }
  }

  if (found) {
    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value))) {
      log.error('Can\'t have different type when updating the value!');
      return false;
    }

    switch (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) {
      case 'object':
        for (var key in value) {
          obj[key] = value[key];
        }
        break;
      default:
        obj = value;
    }

    this._isSynced = false;
    return true;
  }

  return false;
};

(0, _freeze2.default)(DataEntity);

module.exports = DataEntity;

},{"../../util/jsondiff":28,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"babel-runtime/helpers/typeof":40,"events":160,"loglevel":166,"util":205}],5:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = _dereq_('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var util = _dereq_('../../util');

var Entity = _dereq_('./collectionentity');

/**
 * @class DataMap
 * @classdec Map collection
 */
function DataMap(deps, descriptor) {
  var _this = this;

  var cacheState = {
    ensured: false
  };

  (0, _defineProperties2.default)(this, {
    _deps: { value: deps },
    _descriptor: { value: descriptor },
    _cacheState: { value: cacheState },

    _links: { get: function get() {
        return _this._descriptor.links;
      } },
    _revision: { value: descriptor.revision, writable: true },
    _context: { writable: true },
    _entities: { value: new _map2.default() },

    uri: { enumerable: true,
      get: function get() {
        return _this._descriptor.links.collection;
      } },
    entitiesUri: { enumerable: true,
      get: function get() {
        return _this._descriptor.links.entities;
      } },
    revision: { enumerable: true,
      get: function get() {
        return _this._revision;
      } }
  });

  EventEmitter.call(this);
}
inherits(DataMap, EventEmitter);

DataMap.prototype._uriForKey = function (key) {
  return this._links.entities + '?id=' + key;
};

DataMap.prototype._tryPostOrUpdate = function (uri, data) {
  var _this2 = this;

  return new _promise2.default(function (resolve, reject) {
    _this2._deps.network.post(uri, data).then(function (response) {
      return resolve({ uri: response.body.links.entity });
    }).catch(function (err) {
      if (err.status === 409) {
        var _ret = function () {
          var location = void 0;
          try {
            var body = JSON.parse(err.body);
            location = body.links.entity;
          } catch (e) {
            reject(e);
          }

          return {
            v: _this2._deps.network.put(location, data).then(function () {
              return resolve({ uri: location });
            }).catch(reject)
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }

      reject(err);
    });
  });
};

/**
 * Query events from servie and apply changes to the collection
 * @private
 */
DataMap.prototype._queryEvents = function () {
  var _this3 = this;

  var uri = this._links.events + '?from=' + this._revision + '&limit=100';
  return this._deps.network.get(uri).then(function (response) {
    response.body.results.forEach(function (event) {
      return _this3._update(event);
    });
  });
};

/**
 * @return Promise<Object> Context of collection
 */
DataMap.prototype.getContext = function () {
  var _this4 = this;

  if (typeof this._context !== 'undefined') {
    return _promise2.default.resolve(this._context);
  }

  return this._deps.network.get(this._links.context).then(function (response) {
    _this4._context = response.body.data;
    return _this4._context;
  });
};

DataMap.prototype.updateContext = function (context) {
  var _this5 = this;

  return this._deps.network.put(this._links.context, { data: context }).then(function () {
    _this5._context = context;
    _this5.emit('contextUpdated', context);
  });
};

DataMap.prototype.subscribe = function () {
  return this._deps.router.subscribe(this._links.collection, this);
};

DataMap.prototype.unsubscribe = function () {
  return this._deps.router.unsubscribe(this._links.collection, this);
};

DataMap.prototype.set = function (key, value) {
  var _this6 = this;

  var entity = this._entities.get(key);
  if (typeof entity !== 'undefined') {
    var _uri = entity.uri;
    return this._deps.network.put(_uri, { data: value }).then(function () {
      entity._update({ value: value });
    });
  }

  var uri = this._uriForKey(key);
  return this._tryPostOrUpdate(uri, { data: value }).then(function (result) {
    entity = new Entity({ id: key,
      uri: result.uri,
      value: value });
    _this6._entities.set(key, entity);
  });
};

/**
 * @param String key String identifier of entity in a map
 * @return Promise<DataMapEntity>
 */
DataMap.prototype.get = function (key) {
  var _this7 = this;

  return new _promise2.default(function (resolve, reject) {
    if (_this7._entities.has(key)) {
      resolve(_this7._entities.get(key));
    } else {
      var uri = _this7._uriForKey(key);
      _this7._deps.network.get(uri).then(function (response) {
        // let entityData = response.body.results.find((el) => el.entity_id === key);
        var entityData = response.body.results.length > 0 ? response.body.results[0] : null;
        if (entityData && entityData.entity_id === key) {
          var entity = new Entity({ id: entityData.entity_id,
            uri: entityData.links.entity,
            value: entityData.data });
          _this7._entities.set(key, entity);
          resolve(entity);
        } else {
          reject(new Error('Entity not found'));
        }
      });
    }
  });
};

/**
 * Delete an entity by given key
 * @return Promise
 */
DataMap.prototype.remove = function (key) {
  var _this8 = this;

  return this.get(key).then(function (entity) {
    return _this8._deps.network.delete(entity.uri);
  }).then(function () {
    _this8._entities.delete(key);
  });
};

DataMap.prototype.query = function (from, limit, direction) {
  var _this9 = this;

  limit = limit || 50;
  direction = direction || 'forward';
  var uri = new util.UriBuilder(this._links.entities).arg('from', from).arg('limit', limit).arg('direction', direction).build();

  return this._deps.network.get(uri).then(function (result) {
    var queryResult = result.body.results.map(function (el) {
      return new Entity({ id: el.entity_id,
        uri: el.links.entity,
        value: el.data });
    });

    queryResult.forEach(function (entity) {
      return _this9._entities.set(entity.id, entity);
    });
    return queryResult;
  });
};

/**
 * Synchronizes object with state on a server
 * Fires events about all changes
 *
 * DataMap#entityAdded
 * DataMap#entityRemoved
 * DataMap#entityUpdated
 * DataMap#contextUpdated
 *
 * @public
 */
DataMap.prototype.softSync = function () {
  this._queryEvents();
};

/**
 * Enumerate through all of maps entities
 * It always triggers server interaction when being called for the first time for an object, so could be slow
 * @param Function handler Function to handle each argument
 */
DataMap.prototype.forEach = function (handler) {
  var _this10 = this;

  var pageSize = 50;
  return new _promise2.default(function (resolve, reject) {
    if (_this10._cacheState.ensured) {
      _this10._entities.forEach(handler);
      resolve();
    } else {
      (function () {
        var processChunk = function processChunk(from, handleElement, handleEnd) {
          var _pageSize = pageSize;
          var _shouldStrip = false;

          if (typeof from !== 'undefined') {
            _pageSize += 1;
            _shouldStrip = true;
          }

          _this10.query(from, _pageSize, 'forward').then(function (result) {
            if (_shouldStrip) {
              result.shift();
            }return result;
          }) // always strip first element
          .then(function (result) {
            result.forEach(function (el) {
              handler(el);
            });return result;
          }).then(function (result) {
            if (result.length === pageSize) {
              (function () {
                var anchor = result[result.length - 1].id;
                setTimeout(function () {
                  return processChunk(anchor, handleElement, handleEnd);
                });
              })();
            } else {
              handleEnd();
            }
          }).catch(reject);
        };

        var _undefined = void 0;
        processChunk(_undefined, handler, function () {
          _this10._cacheState.ensured = true;resolve();
        });
      })();
    }
  });
};

/**
 * Handle update, which came from the server
 */
DataMap.prototype._update = function (update) {
  switch (update.type) {
    case 'entity_create':
      {
        this._handleEntityAdded(update.entity_id, update.links.entity, update.data);
      }
      break;
    case 'entity_update':
      {
        this._handleEntityUpdated(update.entity_id, update.links.entity, update.data);
      }
      break;
    case 'entity_delete':
      {
        this._handleEntityRemoved(update.entity_id, update.links.entity, update.data);
      }
      break;
    case 'context_update':
      {
        this._handleContextUpdate(update.data);
      }
      break;
    case 'collection_delete':
      {
        this.emit('deleted');
      }
      break;
  }

  if (this._revision === update.event_id - 1) {
    this._revision = update.event_id;
  }
};

/**
 * Handle entity insertion event, coming from server
 * @private
 */
DataMap.prototype._handleEntityAdded = function (entityId, uri, data) {
  if (!this._entities.has(entityId)) {
    var streamEntity = new Entity({ id: entityId,
      uri: uri,
      value: data });

    this._entities.set(entityId, streamEntity);
    this.emit('entityAdded', streamEntity);
  }
};

/**
 * Handle new value of entity, coming from server
 * @private
 */
DataMap.prototype._handleEntityUpdated = function (entityId, uri, data) {
  var streamEntity = new Entity({ id: entityId,
    uri: uri,
    value: data });

  this._entities.set(entityId, streamEntity);
  this.emit('entityUpdated', streamEntity);
};

/**
 * @private
 */
DataMap.prototype._handleEntityRemoved = function (entityId) {
  if (this._entities.has(entityId)) {
    this._entities.delete(entityId);
    this.emit('entityRemoved', entityId);
  }
};

DataMap.prototype._handleContextUpdate = function (data) {
  this._context = data;
  this.emit('contextUpdated', data);
};

(0, _freeze2.default)(DataMap);

module.exports = DataMap;

},{"../../util":27,"./collectionentity":2,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"babel-runtime/helpers/typeof":40,"events":160,"util":205}],6:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var util = _dereq_('../../util');
var log = _dereq_('loglevel');

var Entity = _dereq_('./collectionentity');
var Cache = _dereq_('./datastreamcache');

/**
 * @class EventStream
 * @classdesc
 */
function EventStream(deps, descriptor) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _config: { value: deps.config, writable: false },
    _deps: { value: deps, writable: false },
    _descriptor: { value: descriptor },
    _cache: { value: new Cache() },

    _links: { get: function get() {
        return _this._descriptor.links;
      } },
    _context: { writable: true },
    _revision: { value: descriptor.revision, writable: true },
    _entities: { value: new _map2.default() },

    uri: { enumerable: true,
      get: function get() {
        return _this._descriptor.links.collection;
      } },
    entitiesUri: { get: function get() {
        return _this._descriptor.links.entities;
      } },
    revision: { enumerable: true,
      get: function get() {
        return _this._revision;
      } }
  });

  EventEmitter.call(this);
}
inherits(EventStream, EventEmitter);

/**
 * @private
 */
EventStream.prototype._uriForKey = function (id) {
  return this._links.entities + '/' + id + '?metadata=all';
};

/**
 * Subscribe on event stream events
 * Should be called to receive entityAdded, entityUpdated, entityRemoved events
 */
EventStream.prototype.subscribe = function () {
  return this._deps.router.subscribe(this._links.collection, this);
};
/**
 * Unsubscribe from event stream event
 * Events will no longer be fired
 */
EventStream.prototype.unsubscribe = function () {
  return this._deps.router.unsubscribe(this._links.collection, this);
};

/**
 * Add element to the collection
 * @param {Object} value - value to add
 * @returns {Promise<id>} Id of a new element
 */
EventStream.prototype.add = function (value) {
  var _this2 = this;

  return this._deps.network.post(this._links.entities, { data: value }).then(function (response) {
    var entity = new Entity({ id: Number(response.body.entity_id),
      uri: response.body.links.entity,
      value: value });
    return _this2._cache.set(entity.id, entity);
  });
};

/**
 * Remove event stream entity by id
 * @returns Promise to remove, which may fail
 */
EventStream.prototype.remove = function (id) {
  var _this3 = this;

  var uri = this._uriForKey(id);
  return this._deps.network.delete(uri).then(function () {
    return _this3._cache.remove(id);
  });
};

EventStream.prototype.update = function (id, value) {
  var _this4 = this;

  var uri = this._uriForKey(id);
  return this._deps.network.put(uri, { data: value }).then(function () {
    return _this4._cache.update(id, value);
  });
};

/**
 * Retrieve event stream element by id
 * @param {Number} id - entity id
 */
EventStream.prototype.get = function (entityId) {
  var _this5 = this;

  var cached = this._cache.get(entityId);
  if (cached) {
    return _promise2.default.resolve(cached);
  }

  var uri = this._uriForKey(entityId);
  return this._deps.network.get(uri).then(function (response) {
    var id = Number(response.body.entity_id);
    if (isNaN(id)) {
      log.error('DSS E: Malformed answer from server: ', uri, response);
      throw new Error('Can\'t parse server response');
    }

    var streamEntity = new Entity({ id: id, uri: uri, value: response.body.data });
    return _this5._cache.set(streamEntity.id, streamEntity);
  });
};

/**
 * Query events from servie and apply changes to the collection
 * @private
 */
EventStream.prototype._queryEvents = function () {
  var _this6 = this;

  var uri = this._links.events + '?from=' + this._revision + '&limit=100';
  return this._deps.network.get(uri).then(function (response) {
    response.body.results.forEach(function (event) {
      return _this6._update(event);
    });
  });
};

/**
 *  Query entities from the stream
 *
 *  @param {String} direction Direction for querying, can be 'forward' or 'backwards'
 *  @param {String} from Entity, which should be used as an anchor, or "end" if it should be got from end
 *  @param {Number} limit - amount of entities to get
 *  @param {String} order - order of entities, should be 'asc' or 'desc'
 */
EventStream.prototype.queryEntities = function (direction, from, limit, order) {
  var _this7 = this;

  direction = direction || 'forward';
  order = order || 'asc';

  var cachedData = this._cache.query(direction, from, limit, order);
  if (cachedData.state === Cache.state.COMPLETE) {
    return _promise2.default.resolve(cachedData.items);
  }

  if (cachedData.state === Cache.state.HEAD || cachedData.state === Cache.state.TAIL) {
    from = cachedData.since;
  }

  var uri = new util.UriBuilder(this._links.entities).arg('direction', direction).arg('from', from).arg('limit', limit).arg('order', order).build();

  return this._deps.network.get(uri).then(function (result) {
    var queryResult = result.body.results.map(function (el) {
      return new Entity({ id: Number(el.entity_id),
        uri: el.links.entity,
        value: el.data });
    });
    return _this7._cache.store(queryResult, { from: from, direction: direction });
  }).then(function (deduplicated) {
    if (cachedData.state === Cache.state.HEAD) {
      var result = cachedData.items;
      result.push.apply(result, deduplicated);
      return result;
    }

    if (cachedData.state === Cache.state.TAIL) {
      var _result = deduplicated;
      _result.push.apply(_result, cachedData.items);
      return _result;
    }

    return deduplicated;
  });
};

/**
 * @return Promise<Object> Context of collection
 */
EventStream.prototype.getContext = function () {
  var _this8 = this;

  if (typeof this._context !== 'undefined') {
    return _promise2.default.resolve(this._context);
  }

  return this._deps.network.get(this._links.context).then(function (response) {
    _this8._context = response.body.data;
    return _this8._context;
  });
};

EventStream.prototype.updateContext = function (context) {
  var _this9 = this;

  return this._deps.network.put(this._links.context, { data: context }).then(function () {
    _this9._context = context;
    _this9.emit('contextUpdated', context);
  }).catch(function (err) {
    log.error('Failed to update context', err);
    throw err;
  });
};

/**
 * Force to check for modifications on server
 * If there are any modifications, object will fire all appropriate callbacks
 */
EventStream.prototype.softSync = function () {
  return this._queryEvents();
};

/**
 * Handle update, which came from the server
 */
EventStream.prototype._update = function (update) {
  var entityId = Number(update.entity_id);
  switch (update.type) {
    case 'entity_create':
      {
        this._handleEntityAdded(entityId, update.links.entity, update.data);
      }
      break;
    case 'entity_update':
      {
        this._handleEntityUpdated(entityId, update.links.entity, update.data);
      }
      break;
    case 'entity_delete':
      {
        this._handleEntityRemoved(entityId, update);
      }
      break;
    case 'context_update':
      {
        this._handleContextUpdate(update.data);
      }
      break;
    case 'collection_delete':
      {
        this.emit('deleted');
      }
      break;
  }

  if (this._revision === update.event_id - 1) {
    this._revision = update.event_id;
  }
};

/**
 * Handle entity insertion event, coming from server
 * @private
 */
EventStream.prototype._handleEntityAdded = function (entityId, uri, data) {
  if (!this._cache.has(entityId)) {
    var entity = new Entity({ id: Number(entityId),
      uri: uri,
      value: data });
    entity = this._cache.set(entityId, entity);
    this.emit('entityAdded', entity);
  }
};

/**
 * Handle new value of entity, coming from server
 * @private
 */
EventStream.prototype._handleEntityUpdated = function (entityId, uri, data) {
  var entity = new Entity({ id: entityId,
    uri: uri,
    value: data });
  entity = this._cache.update(entityId, entity);
  this.emit('entityUpdated', entity);
};

/**
 * @private
 */
EventStream.prototype._handleEntityRemoved = function (entityId) {
  this._cache.remove(entityId);
  this.emit('entityRemoved', entityId);
};

EventStream.prototype._handleContextUpdate = function (data) {
  this._context = data;
  this.emit('contextUpdated', data);
};

(0, _freeze2.default)(EventStream);

module.exports = EventStream;

},{"../../util":27,"./collectionentity":2,"./datastreamcache":7,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"events":160,"loglevel":166,"util":205}],7:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _getIterator2 = _dereq_('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _dereq_('loglevel');

function Cache() {
  (0, _defineProperties2.default)(this, {
    _cacheHeadEnsured: { value: false, writable: true },
    _cacheTailEnsured: { value: false, writable: true },
    _ensuredCacheRanges: { value: [], writable: true },

    _items: { value: new _map2.default() }
  });
}

Cache.state = {
  FAILED: 'failed',
  HEAD: 'head',
  TAIL: 'tail',
  COMPLETE: 'complete'
};

function mergeRange(ranges, range) {
  ranges.push(range);
  ranges.sort(function (a, b) {
    return a.begin - b.begin;
  });
  return ranges.reduce(function (res, x) {
    if (res.length === 0) {
      res.push(x);return res;
    }

    var last = res[res.length - 1];
    if (last.end < x.begin - 1) {
      res.push(x);return res;
    }

    last.end = Math.max(last.end, x.end);
    return res;
  }, []);
}

Cache.prototype._getRangeFor = function (index, direction) {
  var edge = typeof index === 'undefined';
  if (this._ensuredCacheRanges.length === 0) {
    return null;
  }

  if (edge && direction === 'forward' && this._cacheHeadEnsured) {
    return this._ensuredCacheRanges[0];
  } else if (edge && direction !== 'forward' && this._cacheTailEnsured) {
    return this._ensuredCacheRanges[this._ensuredCacheRanges.length - 1];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(this._ensuredCacheRanges), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var range = _step.value;

      if (index >= range.begin && index <= range.end) {
        return range;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
};

Cache.prototype.store = function store(items, args) {
  var _this = this;

  var dedupItems = items.map(function (item) {
    var knownItem = _this._items.get(item.id);
    if (!knownItem) {
      _this._items.set(item.id, item);
      knownItem = item;
    }
    return knownItem;
  });

  if (dedupItems.length > 0) {
    var range = [dedupItems[0].id, dedupItems[dedupItems.length - 1].id].sort(function (x, y) {
      return x - y;
    });

    // Always use "from" argument as a range edge, if provided
    if (typeof args.from !== 'undefined' && args.direction === 'forward') {
      range[0] = args.from;
    } else if (typeof args.from !== 'undefined') {
      range[1] = args.from;
    }

    if (this._cacheTailEnsured) {
      var maxItemId = items.reduce(function (prv, cur) {
        return prv > cur.id ? prv : cur.id;
      }, 0);
      var lastRange = this._getRangeFor(void 0, 'backwards');
      if (lastRange && lastRange.end < maxItemId) {
        range[0] = lastRange.end;
      }
    }

    this._ensuredCacheRanges = mergeRange(this._ensuredCacheRanges, { begin: range[0], end: range[1] });

    // If request reached begin or end - mark them as ensured
    if (typeof args.from === 'undefined' && args.direction === 'forward') {
      this._cacheHeadEnsured = true;
    } else if (typeof args.from === 'undefined') {
      this._cacheTailEnsured = true;
    }

    log.debug('DSS: New cache state: ', this._ensuredCacheRanges.map(function (rng) {
      return '{' + rng.begin + ', ' + rng.end + '}';
    }), 'Head', this._cacheHeadEnsured, 'tail', this._cacheTailEnsured);
  }

  return dedupItems;
};

Cache.prototype.has = function (id) {
  return this._items.has(id);
};

Cache.prototype.get = function (id) {
  return this._items.get(id) || null;
};

Cache.prototype.set = function (id, item) {
  return this.store([item], { from: id })[0];
};

Cache.prototype.remove = function (id) {
  this._items.delete(id);
};

Cache.prototype.update = function (id, item) {
  var cached = this._items.get(id);
  if (!cached) {
    this._items.set(id, item);
    return item;
  }

  cached._update(item);
  return cached;
};

Cache.prototype.query = function (direction, from, limit, order) {
  void order;
  var state = 'failed';
  var since = null;
  var items = [];

  var range = this._getRangeFor(from, direction);
  log.debug('DSS: Cache range for ', from, ' is ', range);
  if (!range) {
    return { state: state, items: items };
  }

  var fwd = direction === 'forward';
  var key = from || (fwd ? range.begin : range.end);
  for (;;) {
    var current = this._items.get(key);
    if (current) {
      // there may be holes in indexes
      items.push(current);
    }

    if (items.length === limit || !fwd && key === 0) {
      state = 'complete';
      break;
    }

    if (fwd) {
      if (++key > range.end) {
        state = 'head';
        break;
      }
    } else if (--key < range.begin) {
      state = 'tail';
      break;
    }
  }

  if (!fwd) {
    items.reverse();
  }

  since = key;
  log.debug('DSS: Cache state is ', state);
  return { state: state, since: since, items: items };
};

(0, _freeze2.default)(Cache.state);
(0, _freeze2.default)(Cache);

module.exports = Cache;

},{"babel-runtime/core-js/get-iterator":30,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"loglevel":166}],8:[function(_dereq_,module,exports){
'use strict';

/**
 * @class Network
 * @classdesc Separates network operations to make it possible to add some optimization/caching strategies
 */

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Network(config, transport) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _config: { value: config },
    _transport: { value: transport },
    _headers: { get: function get() {
        return _this._getHeaders();
      } }
  });
}

Network.prototype._getHeaders = function () {
  return {
    'Content-Type': 'application/json',
    'X-Twilio-Token': this._config.token
  };
};

/**
 * Make a GET request by given URI
 * @Returns Promise<Response> Result of successful get request
 */
Network.prototype.get = function (uri) {
  return this._transport.get(uri, this._headers);
};

Network.prototype.post = function (uri, body) {
  return this._transport.post(uri, this._headers, body);
};

Network.prototype.put = function (uri, body, revision) {
  /*
  Temporary disable this check.
  Need to understand first, do we have such scenarios
  if (typeof revision === 'undefined') {
    throw new Error('Can\'t make a PUT operation with undefined revision');
  }
  */

  var headers = {
    'Content-Type': 'application/json',
    'X-Twilio-Token': this._config.token
  };

  if (typeof revision !== 'undefined') {
    headers['If-Match'] = revision;
  }

  return this._transport.put(uri, headers, body);
};

Network.prototype.delete = function (uri) {
  return this._transport.delete(uri, this._headers);
};

(0, _freeze2.default)(Network);

module.exports = Network;

},{"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34}],9:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = _dereq_('../../util');
var log = _dereq_('loglevel');

var COREDATA_ENTITY_NOTIFICATION_TYPE = 'com.twilio.rtd.cds.entity';
var COREDATA_STREAM_NOTIFICATION_TYPE = 'com.twilio.rtd.cds.stream';
var COREDATA_MAP_NOTIFICATION_TYPE = 'com.twilio.rtd.cds.map';

/**
 * @class Router
 * @classdesc Routes all incoming messages to the consumers
 */
function Router(params) {
  (0, _defineProperties2.default)(this, {
    _config: { value: params.config },
    _subscriptions: { value: params.subscriptions }
  });
}

/**
 * Entry point for all incoming messages
 * @param {String} type - Type of incoming message
 * @param {Object} message - Message to route
 */
Router.prototype.onMessage = function (type, message) {
  log.trace('DSS I: message ', type, ': ', message);
  if (type === COREDATA_ENTITY_NOTIFICATION_TYPE) {
    var uri = message.event.links.entity;
    this._subscriptions.getSubscribers(uri).forEach(function (entity) {
      var copiedMessage = util.deepClone(message);
      entity._update(copiedMessage.event);
    });
  } else if (type === COREDATA_STREAM_NOTIFICATION_TYPE || type === COREDATA_MAP_NOTIFICATION_TYPE) {
    var _uri = message.collection.links.collection;
    this._subscriptions.getSubscribers(_uri).forEach(function (eventStream) {
      var copiedMessage = util.deepClone(message);
      eventStream._update(copiedMessage.event);
    });
  }
};

/**
 * Notifiy all other local instances of entity about changes
 */
Router.prototype.emulateUpdate = function (source, uri, data) {
  this._subscriptions.getSubscribers(uri).forEach(function (subscriber) {
    if (subscriber !== source) {
      var copiedData = util.deepClone(data);
      subscriber._update(copiedData);
    }
  });
};

/**
 * Subscribe for events
 */
Router.prototype.subscribe = function (entityUrl, entity) {
  return this._subscriptions.add(entityUrl, entity).then(function (isNewSubscription) {
    if (isNewSubscription) {
      entity.softSync();
    }
  });
};

/**
 * Unsubscribe from events
 */
Router.prototype.unsubscribe = function (entityUrl, entity) {
  return this._subscriptions.remove(entityUrl, entity).then(function () {});
};

/**
 * Handle transport establishing event
 * If we have any subscriptions - we should check object for modifications
 */
Router.prototype.onConnected = function () {
  // Endpoint could be an entity or event stream,
  // probably need to make some superclass for them
  this._subscriptions.forEach(function (uri, endpoint) {
    endpoint.softSync();
  });
};

(0, _freeze2.default)(Router);

module.exports = Router;

},{"../../util":27,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"loglevel":166}],10:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _set = _dereq_('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _dereq_('loglevel');

/**
 * @class Subscriptions
 * @classdesc Subscriptions container for CDS objects
 *
 * @constructor
 */
function Subscriptions(config, network) {
  (0, _defineProperties2.default)(this, {
    _config: { value: config },
    _network: { value: network },
    _subscriptions: { value: new _map2.default() },
    _serverSubscriptions: { value: new _map2.default() }
  });
}

/**
 * @private
 */
Subscriptions.prototype._subscribeOnServer = function (entityUri) {
  var _this = this;

  var uri = this._config.subscriptionsUri;
  return this._network.post(uri, {
    subscription: {
      objectUrl: entityUri,
      channelType: 'twilsock'
    }
  }).then(function (res) {
    log.debug('DSS I: subscribed: ', res.headers.location);
    if (!res.headers.location) {
      throw new Error('location header is absent or inaccessible');
    }
    _this._serverSubscriptions.set(entityUri, res.headers.location);
    return true;
  }).catch(function (err) {
    log.error('DSS E: subscription failed: ', err);
    throw err;
  });
};

/**
 * @private
 */
Subscriptions.prototype._unsubscribeOnServer = function (entityUri) {
  var _this2 = this;

  var subscriptionUri = this._serverSubscriptions.get(entityUri);
  if (!subscriptionUri) {
    throw new Error('No such subscription');
  }

  return this._network.delete(subscriptionUri).then(function (res) {
    log.debug('DSS I: subscription deleted: ', res);
    _this2._serverSubscriptions.delete(entityUri);
    return true;
  }).catch(function (err) {
    if (err.status === 404) {
      log.debug('DSS I: subscription is already deleted');
      return true;
    }

    log.error('DSS E: delete subscription failed: ', err);
    throw err;
  });
};

/**
 * Add subscription
 * @param {string} uri URI to the server object
 * @param {object} endpoint Endpoint object
 */
Subscriptions.prototype.add = function (entityUri, entity, subscriptionUri) {
  if (this._subscriptions.has(entityUri)) {
    var _subscribers = this._subscriptions.get(entityUri);
    _subscribers.add(entity);
    return _promise2.default.resolve(false);
  }

  var subscribers = new _set2.default();
  subscribers.add(entity);
  this._subscriptions.set(entityUri, subscribers);

  if (subscriptionUri) {
    this._serverSubscriptions.set(entityUri, subscriptionUri);
    return _promise2.default.resolve(true);
  }

  return this._subscribeOnServer(entityUri).then(function () {
    return true;
  });
};

/**
 * Remove subscription for the entity
 * @param {string} entityUri URI
 * @param {object} endpoint Endpoint object
 */
Subscriptions.prototype.remove = function (entityUri, entity) {
  if (!this._subscriptions.has(entityUri)) {
    return _promise2.default.resolve(true);
  }

  if (!this._subscriptions.get(entityUri).has(entity)) {
    return _promise2.default.resolve(false);
  }

  var subscribers = this._subscriptions.get(entityUri);
  subscribers.delete(entity);

  if (subscribers.size > 0) {
    this._subscriptions.set(entityUri, subscribers);
    return _promise2.default.resolve(false);
  }

  this._subscriptions.delete(entityUri);
  return this._unsubscribeOnServer(entityUri);
};

/**
 * Query subscribers for given URI
 * @return {set}
 */
Subscriptions.prototype.getSubscribers = function (entityUri) {
  var subscribers = this._subscriptions.get(entityUri);
  if (subscribers) {
    return subscribers;
  }

  return new _set2.default();
};

/**
 * Iterates through all subscriptions
 * @param {function} hanlder function to call for each subscription
 */
Subscriptions.prototype.forEach = function (handler) {
  this._subscriptions.forEach(function (subscribers, uri) {
    subscribers.forEach(function (subscriber) {
      return handler(uri, subscriber);
    });
  });
};

(0, _freeze2.default)(Subscriptions);

module.exports = Subscriptions;

},{"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"babel-runtime/core-js/set":37,"loglevel":166}],11:[function(_dereq_,module,exports){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

var MembersEntity = _dereq_('./data/members');
var Member = _dereq_('./member');
var MessagesEntity = _dereq_('./data/messages');
var JsonDiff = _dereq_('../../util/jsondiff');
var log = _dereq_('loglevel');

var fieldMappings = {
  attributes: 'attributes',
  createdBy: 'createdBy',
  dateCreated: 'dateCreated',
  dateUpdated: 'dateUpdated',
  friendlyName: 'friendlyName',
  lastConsumedMessageIndex: 'lastConsumedMessageIndex',
  name: 'friendlyName',
  sid: 'sid',
  status: 'status',
  type: 'type',
  uniqueName: 'uniqueName'
};

function parseTime(timeString) {
  try {
    return new Date(timeString);
  } catch (e) {
    return null;
  }
}

/**
 * @class
 * @classdesc A Channel represents a remote channel of communication between
 * multiple IP Messaging Clients.
 * @property {Object} attributes - The Channel's custom attributes.
 * @property {String} createdBy - The identity of the User that created this Channel.
 * @property {Date} dateCreated - The Date this Channel was created.
 * @property {Date} dateUpdated - The Date this Channel was last updated.
 * @property {String} friendlyName - The Channel's name.
 * @property {Boolean} isPrivate - Whether the channel is private (as opposed to public).
 * @property {Number} lastConsumedMessageIndex - Index of the last Message the User has consumed in this Channel.
 * @property {Map<Sid, Member>} members - A map of Members in the Channel.
 * @property {Array<Message>} messages - An sorted array of Messages in the Channel.
 * @property {String} sid - The Channel's unique system identifier.
 * @property {Enumeration} status - Whether the Channel is 'known' to local Client, Client is 'invited' to or
 *   is 'joined' to this Channel.
 * @property {Enumeration} type - The Channel's type as a String: ['private', 'public']
 * @property {String} uniqueName - The Channel's unique name (tag).
 * @fires Channel#memberJoined
 * @fires Channel#memberLeft
 * @fires Channel#memberUpdated
 * @fires Channel#memberInfoUpdated
 * @fires Channel#messageAdded
 * @fires Channel#messageRemoved
 * @fires Channel#messageUpdated
 * @fires Channel#typingEnded
 * @fires Channel#typingStarted
 * @fires Channel#updated
 */

function Channel(services, data, sid) {
  var _this = this;

  if (!(this instanceof Channel)) {
    return new Channel(services, data, sid);
  }

  var attributes = data.attributes || {};
  var createdBy = data.createdBy;
  var dateCreated = parseTime(data.dateCreated);
  var dateUpdated = parseTime(data.dateUpdated);
  var friendlyName = data.name || data.friendlyName || null;
  var lastConsumedMessageIndex = data.lastConsumedMessageIndex || null;
  var status = 'known';
  var type = data.type || Channel.type.PUBLIC;
  var uniqueName = data.uniqueName || null;
  var uri = data.channelUrl;

  if (data.isPrivate) {
    type = Channel.type.PRIVATE;
  }

  try {
    (0, _stringify2.default)(attributes);
  } catch (e) {
    throw new Error('Attributes must be a valid JSON object.');
  }

  var members = new _map2.default();
  var membersEntity = new MembersEntity(this, services.session, services.userInfos, members);
  membersEntity.on('memberJoined', this.emit.bind(this, 'memberJoined'));
  membersEntity.on('memberLeft', this.emit.bind(this, 'memberLeft'));
  membersEntity.on('memberUpdated', this.emit.bind(this, 'memberUpdated'));
  membersEntity.on('memberInfoUpdated', this.emit.bind(this, 'memberInfoUpdated'));

  var messages = [];
  var messagesEntity = new MessagesEntity(this, services.session, messages);
  messagesEntity.on('messageAdded', this.emit.bind(this, 'messageAdded'));
  messagesEntity.on('messageUpdated', this.emit.bind(this, 'messageUpdated'));
  messagesEntity.on('messageRemoved', this.emit.bind(this, 'messageRemoved'));

  (0, _defineProperties2.default)(this, {
    _attributes: {
      get: function get() {
        return attributes;
      },
      set: function set(_attributes) {
        return attributes = _attributes;
      }
    },
    _createdBy: {
      get: function get() {
        return createdBy;
      },
      set: function set(_createdBy) {
        return createdBy = _createdBy;
      }
    },
    _dateCreated: {
      get: function get() {
        return dateCreated;
      },
      set: function set(_dateCreated) {
        return dateCreated = _dateCreated;
      }
    },
    _dateUpdated: {
      get: function get() {
        return dateUpdated;
      },
      set: function set(_dateUpdated) {
        return dateUpdated = _dateUpdated;
      }
    },
    _friendlyName: {
      get: function get() {
        return friendlyName;
      },
      set: function set(_friendlyName) {
        return friendlyName = _friendlyName;
      }
    },
    _lastConsumedMessageIndex: {
      get: function get() {
        return lastConsumedMessageIndex;
      },
      set: function set(_lastConsumedMessageIndex) {
        return lastConsumedMessageIndex = _lastConsumedMessageIndex;
      }
    },
    _type: {
      get: function get() {
        return type;
      },
      set: function set(_type) {
        return type = _type;
      }
    },
    _sid: {
      get: function get() {
        return sid;
      },
      set: function set(_sid) {
        return sid = _sid;
      }
    },
    _status: {
      get: function get() {
        return status;
      },
      set: function set(_status) {
        return status = _status;
      }
    },
    _uniqueName: {
      get: function get() {
        return uniqueName;
      },
      set: function set(_uniqueName) {
        return uniqueName = _uniqueName;
      }
    },
    _entityPromise: { value: null, writable: true },
    _subscribePromise: { value: null, writable: true },
    _membersEntity: { value: membersEntity },
    _messagesEntity: { value: messagesEntity },
    _session: { value: services.session },
    _typingIndicator: { value: services.typingIndicator },
    _consumptionHorizon: { value: services.consumptionHorizon },
    _uri: { value: uri, writable: true },
    attributes: {
      enumerable: true,
      get: function get() {
        return attributes;
      }
    },
    createdBy: {
      enumerable: true,
      get: function get() {
        return createdBy;
      }
    },
    dateCreated: {
      enumerable: true,
      get: function get() {
        return dateCreated;
      }
    },
    dateUpdated: {
      enumerable: true,
      get: function get() {
        return dateUpdated;
      }
    },
    friendlyName: {
      enumerable: true,
      get: function get() {
        return friendlyName;
      }
    },
    isPrivate: {
      enumerable: true,
      get: function get() {
        return _this._type === Channel.type.PRIVATE;
      }
    },
    lastConsumedMessageIndex: {
      enumerable: true,
      get: function get() {
        return lastConsumedMessageIndex;
      }
    },
    members: {
      enumerable: true,
      value: members
    },
    messages: {
      enumerable: true,
      value: messages
    },
    sid: {
      enumerable: true,
      get: function get() {
        return sid;
      }
    },
    status: {
      enumerable: true,
      get: function get() {
        return status;
      }
    },
    type: {
      enumerable: true,
      get: function get() {
        return type;
      }
    },
    uniqueName: {
      enumerable: true,
      get: function get() {
        return uniqueName;
      }
    }
  });

  EventEmitter.call(this);
}

inherits(Channel, EventEmitter);

/**
 * The type of Channel (Public or private).
 * @readonly
 * @enum {String}
 */
Channel.type = {
  /** 'public' | This channel is Public. */
  PUBLIC: 'public',
  /** 'private' | This channel is Private. */
  PRIVATE: 'private'
};

/**
 * The status of the Channel, relative to the Client.
 * @readonly
 * @enum {String}
 */
Channel.status = {
  /** 'known' | This Client knows about the Channel, but the User is neither joined nor invited to it. */
  KNOWN: 'known',
  /** 'invited' | This Client's User is invited to the Channel. */
  INVITED: 'invited',
  /** 'joined' | This Client's User is joined to the Channel. */
  JOINED: 'joined',
  /** 'failed' | This Channel is malformed, or has failed to load. */
  FAILED: 'failed'
};

(0, _freeze2.default)(Channel.type);
(0, _freeze2.default)(Channel.status);

/**
 * Load and Subscribe to this Channel and do not subscribe to its Members and Messages.
 * This or _subscribeStreams will need to be called before any events on Channel will fire.
 * @returns {Promise}
 * @private
 */
Channel.prototype._subscribe = function _subscribe() {
  var _this2 = this;

  if (this._entityPromise) {
    return this._entityPromise;
  }
  this._entityPromise = this._session.datasync.openEntity(this._uri, true).then(function (entity) {
    _this2._entity = entity;
    entity.on('updated', function (data) {
      return _this2._update(data);
    });
    _this2._update(entity.getData());
    return _this2._entity;
  }).catch(function (err) {
    _this2._enityPromise = null;
    log.error('Failed to get channel object', err);
    throw err;
  });
  return this._entityPromise;
};

/**
 * Load the attributes of this Channel and instantiate its Members and Messages.
 * This or _subscribe will need to be called before any events on Channel will fire.
 * This will need to be called before any events on Members or Messages will fire
 * @returns {Promise}
 * @private
 */
Channel.prototype._subscribeStreams = function _subscribeStreams() {
  var _this3 = this;

  this._subscribePromise = this._subscribePromise || this._subscribe().then(function (entity) {
    var messagesUri = entity.value('/messagesUrl');
    var rosterUri = entity.value('/rosterUrl');
    return _promise2.default.all([_this3._messagesEntity.subscribe(messagesUri), _this3._membersEntity.subscribe(rosterUri)]);
  }).then(function () {
    return _this3._entity;
  }).catch(function (err) {
    _this3._subscribePromise = null;
    log.error('Failed to subscribe on channel objects', _this3.sid, err);
    throw err;
  });
  return this._subscribePromise;
};

/**
 * Load the Channel state.
 * @returns {Promise}
 * @private
 */
Channel.prototype._fetch = function _fetch() {
  return this._session.datasync.openEntity(this._uri).then(function (entity) {
    return entity.getData();
  });
};

/**
 * Stop listening for and firing events on this Channel.
 * @returns {Promise}
 * @private
 */
Channel.prototype._unsubscribe = function () {
  var promises = [];
  if (this._entityPromise) {
    promises.push(this._entity.unsubscribe());
  }

  promises.push(this._membersEntity.unsubscribe());
  promises.push(this._messagesEntity.unsubscribe());
  this._entityPromise = null;
  this._subscribePromise = null;
  return _promise2.default.all(promises);
};

/**
 * Set channel status
 * @private
 */
Channel.prototype._setStatus = function (status) {
  if (this._status === status) {
    return;
  }

  this._status = status;

  if (status === Channel.status.JOINED) {
    this._subscribeStreams();
  } else if (status === Channel.status.INVITED) {
    this._subscribe();
  } else if (this._entityPromise) {
    this._unsubscribe();
  }
};

function preprocessUpdate(update, channelSid) {
  try {
    if (typeof update.attributes === 'string') {
      update.attributes = JSON.parse(update.attributes);
    } else if (update.attributes) {
      (0, _stringify2.default)(update.attributes);
    }
  } catch (e) {
    log.warn('Retrieved malformed attributes from the server for channel: ' + channelSid);
    update.attributes = {};
  }

  try {
    if (update.dateCreated) {
      update.dateCreated = new Date(update.dateCreated);
    }
  } catch (e) {
    log.warn('Retrieved malformed attributes from the server for channel: ' + channelSid);
    delete update.dateCreated;
  }

  try {
    if (update.dateUpdated) {
      update.dateUpdated = new Date(update.dateUpdated);
    }
  } catch (e) {
    log.warn('Retrieved malformed attributes from the server for channel: ' + channelSid);
    delete update.dateUpdated;
  }
}

/**
 * Updates local channel object with new values
 * @private
 */
Channel.prototype._update = function (update) {
  preprocessUpdate(update, this._sid);

  var updated = false;
  for (var key in update) {
    var localKey = fieldMappings[key];
    if (!localKey) {
      continue;
    }

    if (localKey === fieldMappings.attributes) {
      if (!JsonDiff.isDeepEqual(this._attributes, update.attributes)) {
        this._attributes = update.attributes;
        updated = true;
      }
    } else if (update[key] instanceof Date) {
      if (!this[localKey] || this[localKey].getTime() !== update[key].getTime()) {
        this['_' + localKey] = update[key];
        updated = true;
      }
    } else if (this[localKey] !== update[key]) {
      this['_' + localKey] = update[key];
      updated = true;
    }
  }

  // if uniqueName is not present in the update - then we should set it to null on the client object
  if (!update.status && !update.uniqueName) {
    if (this._uniqueName) {
      this._uniqueName = null;
      updated = true;
    }
  }

  if (updated) {
    this.emit('updated', this);
  }
};

/**
 * Add a Client to the Channel by its Identity.
 * @param {String} identity - Identity of the Client to add.
 * @returns {Promise}
 */
Channel.prototype.add = function addByIdentity(identity) {
  if (!identity || typeof identity !== 'string') {
    throw new Error('Channel.add requires an <String>identity parameter');
  }

  return this._membersEntity.add(identity);
};

/**
 * Advance last consumed Channel's Message index to current consumption horizon.
 * Last consumed Message index is updated only if new index value is higher than previous.
 * @param {Number} index - Message index to advance to as last read.
 * @returns {Promise}
 */
Channel.prototype.advanceLastConsumedMessageIndex = function advanceLastConsumedChannelMessageIndex(index) {
  var _this4 = this;

  if (parseInt(index) !== index) {
    throw new Error('Channel.advanceLastConsumedMessageIndex requires an integral <Number>index parameter');
  }

  if (this.lastConsumedMessageIndex !== null && index <= this.lastConsumedMessageIndex || 0) {
    return _promise2.default.resolve();
  }

  return this._subscribeStreams().then(function () {
    _this4._consumptionHorizon.advanceLastConsumedMessageIndexForChannel(_this4.sid, index);
  }).then(function () {
    return _this4;
  });
};

/**
 * Decline an invitation to the Channel.
 * @returns {Promise<Channel|SessionError>}
 */
Channel.prototype.decline = function declineChannel() {
  var _this5 = this;

  return this._session.addCommand('declineInvitation', {
    channelSid: this._sid
  }).then(function () {
    return _this5;
  });
};

/**
 * Delete the Channel.
 * @returns {Promise<Channel|SessionError>}
 */
Channel.prototype.delete = function deleteChannel() {
  var _this6 = this;

  return this._session.addCommand('destroyChannel', {
    channelSid: this._sid
  }).then(function () {
    return _this6;
  });
};

/**
 * Get the custom attributes of this channel.
 * NOTE: Attributes will be empty in public channels until this is called.
 * However, private channels will already have this due to back-end limitation.
 * @returns {Promise<Object>}
 */
Channel.prototype.getAttributes = function getAttributes() {
  var _this7 = this;

  if (this._entityPromise) {
    return this._subscribe().then(function () {
      return _this7.attributes;
    });
  }

  return this._fetch().then(function (data) {
    _this7._update(data);
    return _this7.attributes;
  });
};

/**
 * Get a sorted list of Messages.
 * @param {Number} [count] - Amount of Messages to fetch
 * @param {String} [anchor='end'] - Newest Message to fetch
 * @returns {Promise<Paginator<Message>>}
 */

/**
 * Returns messages from channel using paginator interface
 * @param {Number} [pageSize=100] Number of messages to return in single chunk.
 * @param {String} [anchor='end'] Newest message to fetch.
 * @returns {Promise<Paginator<Message>>} page of messages
 */
Channel.prototype.getMessagesPaged = function getMessagesPaged(count, anchor) {
  var _this8 = this;

  return this._subscribeStreams().then(function () {
    return _this8._messagesEntity.getMessagesPaged(count, anchor);
  });
};

/**
 * Get a sorted list of Messages using paginator interface
 * @param {Number} [count] - Amount of Messages to fetch
 * @param {String} [anchor='end'] - Newest Message to fetch
 * @returns {Promise<Array<Message>>}
 */
Channel.prototype.getMessages = function getMessages(count, anchor) {
  var _this9 = this;

  return this._subscribeStreams().then(function () {
    return _this9._messagesEntity.getMessages(count, anchor);
  });
};

/**
 * Get a list of all Members joined to this Channel.
 * @returns {Promise<Array<Member>>}
 */
Channel.prototype.getMembers = function getMembers() {
  var _this10 = this;

  return this._subscribeStreams().then(function () {
    return _this10._membersEntity.getMembers();
  });
};

/**
 * Invite a user to the Channel by their Identity.
 * @param {String} identity - Identity of the user to invite.
 * @returns {Promise}
 */
Channel.prototype.invite = function inviteByIdentity(identity) {
  if (typeof identity !== 'string' || !identity.length) {
    throw new Error('Channel.invite requires an <String>identity parameter');
  }

  return this._membersEntity.invite(identity);
};

/**
 * Join the Channel.
 * @returns {Promise<Channel|SessionError>}
 */
Channel.prototype.join = function joinChannel() {
  var _this11 = this;

  return this._session.addCommand('joinChannel', {
    channelSid: this._sid
  }).then(function () {
    return _this11;
  });
};

/**
 * Leave the Channel.
 * @returns {Promise<Channel|SessionError>}
 */
Channel.prototype.leave = function leaveChannel() {
  var _this12 = this;

  if (this._status !== Channel.status.JOINED) {
    return _promise2.default.resolve(this);
  }

  return this._session.addCommand('leaveChannel', {
    channelSid: this._sid
  }).then(function () {
    return _this12;
  });
};

/**
 * Remove a Member from the Channel.
 * @param {Member|String} member - The Member (Or identity) to remove.
 * @returns {Promise<Member>}
 */
Channel.prototype.removeMember = function removeMember(member) {
  if (!member || typeof member !== 'string' && !(member instanceof Member)) {
    throw new Error('Channel.removeMember requires a <String|Member>member parameter.');
  }

  return this._membersEntity.remove(typeof member === 'string' ? member : member.identity);
};

/**
 * Send a Message on the Channel.
 * @param {String} messageBody - The message body.
 * @returns {Promise<String>} A Promise for the message ID
 */
Channel.prototype.sendMessage = function sendMessage(messageBody) {
  return this._messagesEntity.send(messageBody);
};

/**
 * Set last consumed Channel's Message index to last known Message's index in this Channel.
 * @returns {Promise}
 */
Channel.prototype.setAllMessagesConsumed = function setAllChannelMessagesConsumed() {
  var _this13 = this;

  return this._subscribeStreams().then(function () {
    return _this13.getMessages(1);
  }).then(function (messages) {
    if (messages.length > 0) {
      return _this13.advanceLastConsumedMessageIndex(messages[0].index);
    }
  }).then(function () {
    return _this13;
  });
};

/**
 * Send a notification to the server indicating that this Client is currently typing in this Channel.
 * @returns {Promise}
 */
Channel.prototype.typing = function typing() {
  return this._typingIndicator.send(this._sid);
};

/**
 * Update the Channel's attributes.
 * @param {Object} attributes - The new attributes object.
 * @returns {Promise<Channel|SessionError>} A Promise for the Channel
 */
Channel.prototype.updateAttributes = function updateAttributes(attributes) {
  var _this14 = this;

  if (typeof attributes === 'undefined') {
    throw new Error('Attributes is a required parameter for updateAttributes');
  } else if (attributes.constructor !== Object) {
    throw new Error('Attributes must be a valid JSON object.');
  }

  return this._session.addCommand('editAttributes', {
    channelSid: this._sid,
    attributes: (0, _stringify2.default)(attributes)
  }).then(function () {
    return _this14;
  });
};

/**
 * Update the Channel's friendlyName.
 * @param {String} name - The new Channel friendlyName.
 * @returns {Promise<Channel|SessionError>} A Promise for the Channel
 */
Channel.prototype.updateFriendlyName = function updateFriendlyName(name) {
  var _this15 = this;

  if (this._friendlyName === name) {
    return _promise2.default.resolve(this);
  }

  return this._session.addCommand('editFriendlyName', {
    channelSid: this._sid,
    friendlyName: name
  }).then(function () {
    return _this15;
  });
};

/**
 * Set last consumed Channel's Message index to current consumption horizon.
 * @param {Number} index - Message index to set as last read.
 * @returns {Promise}
 */
Channel.prototype.updateLastConsumedMessageIndex = function updateLastConsumedMessageIndex(index) {
  var _this16 = this;

  if (parseInt(index) !== index) {
    var err = 'Channel.updateLastConsumedMessageIndex requires an integral <Number>index parameter';
    throw new Error(err);
  }

  return this._subscribeStreams().then(function () {
    _this16._consumptionHorizon.updateLastConsumedMessageIndexForChannel(_this16.sid, index);
  }).then(function () {
    return _this16;
  });
};

/**
 * Update the Channel's type (public or private). Currently not implemented.
 * @param {String} type
 * @private
 * @returns {Promise<Channel>} A Promise for the Channel
 */
Channel.prototype.updateType = function (type) {
  if (type !== Channel.type.PRIVATE && type !== Channel.type.PUBLIC) {
    throw new Error('Can\'t set unknown channel type ' + type);
  }

  if (this._type !== type) {
    throw new Error('Changing of channel type isn\'t supported');
  }

  return _promise2.default.resolve(this);
};

/**
 * Update the Channel's unique name (tag).
 * @param {String} uniqueName - The new Channel uniqueName.
 * @returns {Promise<Channel|SessionError>} A Promise for the Channel
 */
Channel.prototype.updateUniqueName = function updateUniqueName(uniqueName) {
  var _this17 = this;

  if (this._uniqueName === uniqueName) {
    return _promise2.default.resolve(this);
  }

  return this._session.addCommand('editUniqueName', {
    channelSid: this._sid,
    uniqueName: uniqueName
  }).then(function () {
    return _this17;
  });
};

(0, _freeze2.default)(Channel);

/**
 * Fired when a Member has joined the Channel.
 * @param {Member} member
 * @event Channel#memberJoined
 */
/**
 * Fired when a Member has left the Channel.
 * @param {Member} member
 * @event Channel#memberLeft
 */
/**
 * Fired when a Member's fields has been updated.
 * @param {Member} member
 * @event Channel#memberUpdated
 */
/**
 * Fired when a Member's UserInfo fields has been updated.
 * @param {Member} member
 * @event Channel#memberInfoUpdated
 */
/**
 * Fired when a new Message has been added to the Channel on the server.
 * @param {Message} message
 * @event Channel#messageAdded
 */
/**
 * Fired when Message is removed from Channel's message list.
 * @param {Message} message
 * @event Channel#messageRemoved
 */
/**
 * Fired when an existing Message's fields are updated with new values.
 * @param {Message} message
 * @event Channel#messageUpdated
 */
/**
 * Fired when a member has stopped typing.
 * @param {Member} member
 * @event Channel#typingEnded
 */
/**
 * Fired when a member has begun typing.
 * @param {Member} member
 * @event Channel#typingStarted
 */
/**
 * Fired when the Channel's fields have been updated.
 * @param {Channel} channel
 * @event Channel#updated
 */

module.exports = Channel;

},{"../../util/jsondiff":28,"./data/members":15,"./data/messages":16,"./member":18,"babel-runtime/core-js/json/stringify":31,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"events":160,"loglevel":166,"util":205}],12:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var log = _dereq_('loglevel');

var NotificationClient = _dereq_('twilio-notifications');
var TwilsockClient = _dereq_('twilsock');
var Transport = _dereq_('twilio-transport');
var DataSyncClient = _dereq_('../datasync/client');

var Configuration = _dereq_('./configuration');
var Session = _dereq_('./session.js');
var ChannelsEntity = _dereq_('./data/channels.js');

var UserInfos = _dereq_('./data/userinfos.js');
var TypingIndicator = _dereq_('./services/typingindicator');
var ConsumptionHorizon = _dereq_('./services/consumptionhorizon');

var SDK_VERSION = _dereq_('../../../package.json').version;

/**
 * @class
 * @classdesc A Client provides an interface for the local
 *   User to interact with Channels. The Client constructor will
 *   synchronously return an instance of Client, and will hold
 *   any outgoing methods until it has asynchronously finished
 *   syncing with the server.
 * @param {AccessManager} accessManager - The Client's AccessManager
 * @param {Client#ClientOptions} options - Options to customize the Client
 * @property {AccessManager} accessManager - The Client's AccessManager
 * @property {Map<sid, Channel>} channels - A Map containing all Channels known locally on
 *   the Client. To ensure the Channels have loaded before getting a response, use
 *   {@link Client#getChannels}.
 * @property {UserInfo} userInfo - User information for logged in user
 * @property {String} identity - Deprecated: User identity for logged in user
 * @fires Client#channelAdded
 * @fires Client#channelInvited
 * @fires Client#channelJoined
 * @fires Client#channelLeft
 * @fires Client#channelRemoved
 * @fires Client#channelUpdated
 * @fires Client#memberJoined
 * @fires Client#memberLeft
 * @fires Client#memberUpdated
 * @fires Client#messageAdded
 * @fires Client#messageRemoved
 * @fires Client#messageUpdated
 * @fires Client#tokenExpired
 * @fires Client#typingEnded
 * @fires Client#typingStarted
 * @fires Client#userInfoUpdated
 */
function Client(accessManager, options) {
  var _this = this;

  options = options || {};
  options.logLevel = options.logLevel || 'error';

  log.setLevel(options.logLevel);
  var config = new Configuration(options);

  if (!accessManager || !accessManager.token) {
    throw new Error('A valid Twilio AccessManager must be passed to IPMessaging Client');
  }

  var token = accessManager.token;

  var twilsock = options.twilsockClient || new TwilsockClient(accessManager, options);
  var transport = options.transportClient || new Transport(twilsock, options);
  var notification = options.notificationClient || new NotificationClient('ip_messaging', accessManager, { transport: transport, twilsockClient: twilsock });
  var datasync = options.dataSyncClient || new DataSyncClient(token, notification, transport, options);

  var session = new Session(datasync, transport, config);
  var sessionPromise = session.initialize(token);

  var userInfos = new UserInfos(session, datasync, accessManager.identity);
  userInfos.on('userInfoUpdated', this.emit.bind(this, 'userInfoUpdated'));

  var consumptionHorizon = new ConsumptionHorizon(config, session);
  var typingIndicator = new TypingIndicator(config, accessManager, transport, notification, this.getChannelBySid.bind(this));

  var channels = new _map2.default();
  var channelsEntity = new ChannelsEntity({ session: session, userInfos: userInfos, typingIndicator: typingIndicator, consumptionHorizon: consumptionHorizon }, channels);
  var channelsPromise = sessionPromise.then(function () {
    channelsEntity.on('channelAdded', _this.emit.bind(_this, 'channelAdded'));
    channelsEntity.on('channelRemoved', _this.emit.bind(_this, 'channelRemoved'));
    channelsEntity.on('channelInvited', _this.emit.bind(_this, 'channelInvited'));
    channelsEntity.on('channelJoined', _this.emit.bind(_this, 'channelJoined'));
    channelsEntity.on('channelLeft', _this.emit.bind(_this, 'channelLeft'));
    channelsEntity.on('channelUpdated', _this.emit.bind(_this, 'channelUpdated'));

    channelsEntity.on('memberJoined', _this.emit.bind(_this, 'memberJoined'));
    channelsEntity.on('memberLeft', _this.emit.bind(_this, 'memberLeft'));
    channelsEntity.on('memberUpdated', _this.emit.bind(_this, 'memberUpdated'));

    channelsEntity.on('messageAdded', _this.emit.bind(_this, 'messageAdded'));
    channelsEntity.on('messageUpdated', _this.emit.bind(_this, 'messageUpdated'));
    channelsEntity.on('messageRemoved', _this.emit.bind(_this, 'messageRemoved'));

    channelsEntity.on('typingStarted', _this.emit.bind(_this, 'typingStarted'));
    channelsEntity.on('typingEnded', _this.emit.bind(_this, 'typingEnded'));

    return channelsEntity.fetchChannels(session);
  });

  accessManager.on('tokenExpired', function () {
    return _this.emit('tokenExpired', accessManager);
  });
  accessManager.on('tokenUpdated', function () {
    return _this._updateToken(accessManager.token);
  });

  (0, _defineProperties2.default)(this, {
    _channelsPromise: { value: channelsPromise },
    _datasync: { value: datasync },
    _notification: { value: notification },
    _session: { value: session },
    _sessionPromise: { value: sessionPromise },
    _initializePromise: { value: null, writable: true },
    _token: { value: token, writable: true },
    _twilsock: { value: twilsock },
    _typingIndicator: { value: typingIndicator },
    _userInfos: { value: userInfos },
    _userInfo: { writable: true },
    accessManager: {
      enumerable: true,
      value: accessManager
    },
    channels: {
      enumerable: true,
      value: channels
    },
    identity: {
      enumerable: true,
      get: function get() {
        return accessManager.identity;
      }
    },
    userInfo: {
      enumerable: true,
      get: function get() {
        return _this._userInfos.myUserInfo;
      }
    }
  });

  this._initializePromise = this._initialize();
  EventEmitter.call(this);
}

/**
 * Current version of this IP Messaging Client.
 * @name Client#version
 * @type String
 * @readonly
 */
(0, _defineProperties2.default)(Client, {
  version: {
    enumerable: true,
    value: SDK_VERSION
  }
});

inherits(Client, EventEmitter);

/**
 * @returns {Promise.<T>|Request}
 * @private
 */
Client.prototype._initialize = function _initialize() {
  var _this2 = this;

  return this._sessionPromise.then(function () {
    _this2._notification.subscribe('twilio.channel.new_message', 'gcm');
    _this2._notification.subscribe('twilio.channel.added_to_channel', 'gcm');
  }).then(this._typingIndicator.initialize());
};

/**
 * Initializes library
 * Library will be eventually initialized even without this method called,
 * but client can use returned promise to track library initialization state.
 * It's safe to call this method multiple times. It won't reinitialize library in ready state.
 *
 * @public
 * @returns {Promise<Client>}
 */
Client.prototype.initialize = function initialize() {
  var _this3 = this;

  return this._initializePromise.then(function () {
    return _this3;
  });
};

/**
 * Update the token used by the Client and re-register with IP Messaging services.
 * @param {String} token - The JWT string of the new token.
 * @private
 * @returns {Promise<Client>}
 */
Client.prototype._updateToken = function _updateToken(token) {
  var _this4 = this;

  if (!token || token.split('.').length !== 3) {
    return log.error('Received a malformed token from AccessManager. \
      Token not updated in IP MessagingClient.');
  }

  if (token === this._token) {
    return _promise2.default.resolve(this);
  }

  this._token = token;
  log.info('IPMSG I: authTokenUpdated');

  this._datasync.setAuthToken(token);
  return this._sessionPromise.then(function () {
    return _this4._session.updateToken(token);
  }).then(function () {
    return _this4;
  });
};

/**
 * Get a Channel by its SID.
 * @param {String} channelSid - The sid of the Channel to get.
 * @returns {Promise<Channel>}
 */
Client.prototype.getChannelBySid = function getChannelBySid(channelSid) {
  var _this5 = this;

  if (!channelSid || typeof channelSid !== 'string') {
    throw new Error('Client.getChannelBySid requires a <String>channelSid parameter');
  }

  return this._channelsPromise.then(function () {
    return _this5.channels.get(channelSid) || null;
  });
};

/**
 * Get a Channel by its unique identifier name.
 * @param {String} uniqueName - The unique identifier name of the Channel to get.
 * @returns {Promise<Channel>}
 */
Client.prototype.getChannelByUniqueName = function getChannelByUniqueName(uniqueName) {
  var _this6 = this;

  if (!uniqueName || typeof uniqueName !== 'string') {
    throw new Error('Client.getChannelByUniqueName requires a <String>uniqueName parameter');
  }

  return this._channelsPromise.then(function () {
    var foundChannel = null;
    _this6.channels.forEach(function (channel) {
      if (!foundChannel && channel.uniqueName === uniqueName) {
        foundChannel = channel;
      }
    });

    return foundChannel;
  });
};

/**
 * Get the current list of all Channels the Client knows about.
 * @returns {Promise<Array<Channel>>}
 */
Client.prototype.getChannels = function getChannels() {
  var _this7 = this;

  return this._channelsPromise.then(function () {
    var channels = [];
    _this7.channels.forEach(function (channel) {
      return channels.push(channel);
    });
    return channels;
  });
};

/**
 * Create a channel on the server.
 * @param {Client#CreateChannelOptions} [options] - Options for the Channel
 * @returns {Promise<Channel>}
 */
Client.prototype.createChannel = function createChannel(options) {
  options = options || {};
  return this._channelsPromise.then(function (channelsEntity) {
    return channelsEntity.addChannel(options);
  });
};

(0, _freeze2.default)(Client);

/**
 * These options can be passed to Client.createChannel
 * @typedef {Object} Client#CreateChannelOptions
 * @property {Object} [attributes] - Any custom attributes to attach to the Channel.
 * @property {Boolean} [isPrivate] - Whether or not this Channel should be visible
 *  to uninvited Clients.
 * @property {String} [friendlyName] - The non-unique display name of the Channel.
 * @property {String} [uniqueName] - The unique identity name of the Channel.
 */

/**
 * These options can be passed to Client constructor
 * @typedef {Object} Client#ClientOptions
 * @property {String} [logLevel='error'] - The level of logging to enable. Valid options
 *   (from strictest to broadest): ['silent', 'error', 'warn', 'info', 'debug', 'trace']
 * @property {String} [wsServer] - A custom websocket server to connect to.
 */

/**
 * Fired when a Channel becomes visible to the Client.
 * @param {Channel} channel
 * @event Client#channelAdded
 */
/**
 * Fired when the Client is invited to a Channel.
 * @param {Channel} channel
 * @event Client#channelInvited
 */
/**
 * Fired when the Client joins a Channel.
 * @param {Channel} channel
 * @event Client#channelJoined
 */
/**
 * Fired when the Client leaves a Channel.
 * @param {Channel} channel
 * @event Client#channelLeft
 */
/**
 * Fired when a Channel is no longer visible to the Client.
 * @param {Channel} channel
 * @event Client#channelRemoved
 */
/**
 * Fired when a Channel's attributes or metadata have been updated.
 * @param {Channel} channel
 * @event Client#channelUpdated
 */
/**
 * Fired when a Member has joined the Channel.
 * @param {Member} member
 * @event Client#memberJoined
 */
/**
 * Fired when a Member has left the Channel.
 * @param {Member} member
 * @event Client#memberLeft
 */
/**
 * Fired when a Member's fields has been updated.
 * @param {Member} member
 * @event Client#memberUpdated
 */
/**
 * Fired when a new Message has been added to the Channel on the server.
 * @param {Message} message
 * @event Client#messageAdded
 */
/**
 * Fired when Message is removed from Channel's message list.
 * @param {Message} message
 * @event Client#messageRemoved
 */
/**
 * Fired when an existing Message's fields are updated with new values.
 * @param {Message} message
 * @event Client#messageUpdated
 */
/**
 * Fired when the supplied token expires.
 * @event Client#tokenExpired
 */
/**
 * Fired when a member has stopped typing.
 * @param {Member} member
 * @event Client#typingEnded
 */
/**
 * Fired when a member has begun typing.
 * @param {Member} member
 * @event Client#typingStarted
 */
/**
 * Fired when a userInfo has been updated.
 * @param {UserInfo} UserInfo
 * @event Client#userInfoUpdated
 */

module.exports = Client;

},{"../../../package.json":211,"../datasync/client":1,"./configuration":13,"./data/channels.js":14,"./data/userinfos.js":17,"./services/consumptionhorizon":21,"./services/typingindicator":22,"./session.js":23,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"events":160,"loglevel":166,"twilio-notifications":190,"twilio-transport":196,"twilsock":197,"util":205}],13:[function(_dereq_,module,exports){
'use strict';

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPING_URI = 'https://aim.twilio.com';
var TYPING_PATH = '/v1/typing';
var TYPING_TIMEOUT = 5;
var CONSUMPTION_HORIZON_SENDING_INTERVAL = 'PT5S';

function IPMessagingConfig(options) {
  options = options || {};
  var _options = options.IPMessaging || {};
  var baseUri = _options.typingUri || TYPING_URI;

  (0, _defineProperties2.default)(this, {
    typingIndicatorUri: { enumerable: true,
      value: baseUri + TYPING_PATH },
    typingIndicatorTimeout: { enumerable: true,
      value: TYPING_TIMEOUT * 1000 },
    consumptionReportInterval: { enumerable: true,
      value: CONSUMPTION_HORIZON_SENDING_INTERVAL }
  });
}

module.exports = IPMessagingConfig;

},{"babel-runtime/core-js/object/define-properties":33}],14:[function(_dereq_,module,exports){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

var Channel = _dereq_('../channel');

/**
 * Creates an instance of channels collection {@see Channel}
 *
 * @class ChannelsEntity
 * @classdesc Provides an access to the channels collection
 */
function ChannelsEntity(services, channels) {
  (0, _defineProperties2.default)(this, {
    _services: { value: services },
    _userInfos: { value: services.userInfos },
    _typingIndicator: { value: services.typingIndicator },
    _session: { value: services.session },
    channels: {
      enumerable: true,
      value: channels
    }
  });

  EventEmitter.call(this);
}

inherits(ChannelsEntity, EventEmitter);

/**
 * Add channel to server
 * @private
 * @returns {Promise<Channel|SessionError>} Channel
 */
ChannelsEntity.prototype.addChannel = function addChannel(options) {
  var _this = this;

  return this._session.addCommand('createChannel', {
    friendlyName: options.friendlyName,
    uniqueName: options.uniqueName,
    type: options.isPrivate ? 'private' : 'public',
    attributes: (0, _stringify2.default)(options.attributes)
  }).then(function (response) {
    var existingChannel = _this.channels.get(response.channelSid);
    if (existingChannel) {
      existingChannel._update(response);
      return existingChannel;
    }

    var channel = new Channel(_this._services, response, response.channelSid);
    _this.channels.set(channel.sid, channel);
    _this._registerForEvents(channel);

    return channel._subscribe().then(function () {
      _this.emit('channelAdded', channel);
      return channel;
    });
  });
};

ChannelsEntity.prototype.fetchChannels = function fetchChannels(session) {
  var self = this;

  return new _promise2.default(function (resolve, reject) {
    var myUrl = session.getMyChannelsUrl();
    var publicUrl = session.getChannelsUrl();
    var called = false;

    function setChannels() {
      called = true;

      self._fetchPublicChannels(publicUrl).then(function () {
        return self._fetchMyChannels(myUrl);
      }).then(function () {
        resolve(self);
      }, function (reason) {
        reject(reason);
      });
    }

    session.onKeyUpdated('/channelsUrl', function (url) {
      publicUrl = url;
      if (myUrl && !called) {
        setChannels();
      }
    });

    session.onKeyUpdated('/myChannelsUrl', function (url) {
      myUrl = url;
      if (publicUrl && !called) {
        setChannels();
      }
    });
  });
};

/**
 * Fetch private channel list from service and create all needed objects
 * @private
 */
ChannelsEntity.prototype._fetchMyChannels = function (url) {
  var _this2 = this;

  return this._session.datasync.openMap(url, true).then(function (map) {
    map.on('entityAdded', function (entity) {
      var sid = entity.id;
      _this2._upsertChannel(sid, entity.value);
    });

    map.on('entityRemoved', function (sid) {
      var channel = _this2.channels.get(sid);
      if (channel) {
        if (channel.status === 'joined' || channel.status === 'invited') {
          channel._setStatus('known');
          _this2.emit('channelLeft', channel);
        }
        if (channel.isPrivate) {
          _this2.channels.delete(sid);
          _this2.emit('channelRemoved', channel);
        }
      }
    });

    map.on('entityUpdated', function (entity) {
      var sid = entity.id;
      _this2._upsertChannel(sid, entity.value);
    });

    var upserts = [];
    return map.forEach(function (entity) {
      var channelData = entity.value;
      var sid = entity.id;
      upserts.push(_this2._upsertChannel(sid, channelData));
    }).then(function () {
      return _promise2.default.all(upserts);
    }).then(function () {
      return _this2;
    });
  });
};

/**
 * Fetch public channel list from service and create all needed objects
 * @private
 */
ChannelsEntity.prototype._fetchPublicChannels = function (url) {
  var _this3 = this;

  return this._session.datasync.openMap(url, true).then(function (map) {
    map.on('entityAdded', function (entity) {
      var sid = entity.id;
      var channel = _this3.channels.get(sid);

      if (!channel) {
        channel = new Channel(_this3._services, entity.value, sid);
        _this3._registerForEvents(channel);
        _this3.channels.set(sid, channel);
        _this3.emit('channelAdded', channel);
      }
    });

    map.on('entityRemoved', function (sid) {
      var channel = _this3.channels.get(sid);

      if (channel) {
        if (channel.status === 'joined' || channel.status === 'invited') {
          channel._unsubscribe();
          _this3.emit('channelLeft', channel);
        }

        _this3.channels.delete(sid);
        _this3.emit('channelRemoved', channel);
      }
    });

    map.on('entityUpdated', function (entity) {
      var sid = entity.id;
      _this3._upsertChannel(sid, entity.value);
    });

    return map.forEach(function (entity) {
      var channelData = entity.value;
      var sid = entity.id;

      var channel = new Channel(_this3._services, channelData, sid);
      _this3._registerForEvents(channel);
      _this3.channels.set(sid, channel);
    }).then(function () {
      return _this3;
    });
  });
};

ChannelsEntity.prototype._upsertChannel = function (sid, data) {
  var _this4 = this;

  var channel = this.channels.get(sid);

  // Update the Channel's status if we know about it
  if (channel) {
    if (data.status === 'joined' && channel.status !== 'joined') {
      channel._setStatus('joined');

      // TODO: Do this better.
      if (data.lastConsumedMessageIndex) {
        channel._lastConsumedMessageIndex = data.lastConsumedMessageIndex;
      }

      this.emit('channelJoined', channel);
    } else if (data.status === 'invited' && channel.status !== 'invited') {
      channel._setStatus('invited');
      this.emit('channelInvited', channel);
    } else if (data.status === 'known' && (channel.status === 'invited' || channel.status === 'joined')) {
      channel._setStatus('known');
      channel._update(data);
      this.emit('channelLeft', channel);
    } else if (data.status === 'notParticipating' && data.type === 'private') {
      channel._subscribe();
    } else {
      channel._update(data);
    }

    return _promise2.default.resolve(channel);
  }

  // Fetch the Channel if we don't know about it
  channel = new Channel(this._services, data, sid);
  this._registerForEvents(channel);

  this.channels.set(sid, channel);
  return channel._subscribe().then(function () {
    if (data.status === 'joined') {
      channel._setStatus('joined');
      _this4.emit('channelJoined', channel);
    } else if (data.status === 'invited') {
      channel._setStatus('invited');
      _this4.emit('channelInvited', channel);
    }
    _this4.emit('channelAdded', channel);
    return channel;
  });
};

ChannelsEntity.prototype._registerForEvents = function (channel) {
  var _this5 = this;

  channel.on('updated', function () {
    return _this5.emit('channelUpdated', channel);
  });
  channel.on('memberJoined', this.emit.bind(this, 'memberJoined'));
  channel.on('memberLeft', this.emit.bind(this, 'memberLeft'));
  channel.on('memberUpdated', this.emit.bind(this, 'memberUpdated'));
  channel.on('messageAdded', this.emit.bind(this, 'messageAdded'));
  channel.on('messageUpdated', this.emit.bind(this, 'messageUpdated'));
  channel.on('messageRemoved', this.emit.bind(this, 'messageRemoved'));
  channel.on('typingStarted', this.emit.bind(this, 'typingStarted'));
  channel.on('typingEnded', this.emit.bind(this, 'typingEnded'));
};

module.exports = ChannelsEntity;

},{"../channel":11,"babel-runtime/core-js/json/stringify":31,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36,"events":160,"util":205}],15:[function(_dereq_,module,exports){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var log = _dereq_('loglevel');

var Member = _dereq_('../member');

/**
 * Creates members collection
 *
 * @class Members
 * @classdesc Represents the collection of members for the channel
 * @fires Members#memberJoined
 * @fires Members#memberLeft
 * @fires Members#memberUpdated
 * @fires Members#memberInfoUpdated
 */
function Members(channel, session, userInfos, members) {

  (0, _defineProperties2.default)(this, {
    _datasync: { value: session.datasync },
    _userInfos: { value: userInfos },
    _session: { value: session },
    _rosterStreamPromise: {
      writable: true,
      value: null
    },
    channel: {
      enumerable: true,
      value: channel
    },
    members: {
      enumerable: true,
      value: members
    }
  });

  EventEmitter.call(this);
}

inherits(Members, EventEmitter);

Members.prototype.unsubscribe = function unsubscribe() {
  return this._rosterStreamPromise ? this._rosterStreamPromise.then(function (entity) {
    return entity.unsubscribe();
  }) : _promise2.default.resolve();
};

Members.prototype.subscribe = function (rosterUri) {
  var _this = this;

  return this._rosterStreamPromise = this._rosterStreamPromise || this._datasync.openMap(rosterUri, true).then(function (rosterMap) {
    rosterMap.on('entityAdded', function (entity) {
      _this.upsertMember(entity.id, entity.value).then(function (member) {
        _this.emit('memberJoined', member);
      });
    });

    rosterMap.on('entityRemoved', function (memberSid) {
      if (!_this.members.has(memberSid)) {
        return;
      }
      var leftMember = _this.members.get(memberSid);
      _this.members.delete(memberSid);
      _this.emit('memberLeft', leftMember);
    });

    rosterMap.on('entityUpdated', function (entity) {
      _this.upsertMember(entity.id, entity.value);
    });

    var membersPromises = [];
    return rosterMap.forEach(function (entity) {
      membersPromises.push(_this.upsertMember(entity.id, entity.value));
    }).then(function () {
      return _promise2.default.all(membersPromises);
    }).then(function () {
      return rosterMap;
    });
  }).catch(function (err) {
    _this._rosterStreamPromise = null;
    log.error('Failed to get roster object for channel', _this.channel.sid, err);
    throw err;
  });
};

Members.prototype.upsertMember = function upsertMember(memberSid, data) {
  var _this2 = this;

  var member = this.members.get(memberSid);
  if (member) {
    member._update(data);
    return _promise2.default.resolve(member);
  }

  return this._userInfos.getUserInfo(data.identity, data.userInfo).then(function (userInfo) {
    member = new Member(_this2.channel, data, memberSid, userInfo);
    _this2.members.set(memberSid, member);
    member.on('updated', function () {
      return _this2.emit('memberUpdated', member);
    });
    member.on('userInfoUpdated', function () {
      return _this2.emit('memberInfoUpdated', member);
    });
    return member;
  });
};

/**
 * @returns Synchronously returns the list of members {@see Member}
 */
Members.prototype.getMembersList = function () {
  var members = [];
  this.members.forEach(function (member) {
    return members.push(member);
  });
  return members;
};

/**
 * @returns {Promise<Array<Member>>} returns list of members {@see Member}
 */
Members.prototype.getMembers = function () {
  var _this3 = this;

  return this._rosterStreamPromise.then(function () {
    var members = [];
    _this3.members.forEach(function (member) {
      return members.push(member);
    });
    return members;
  });
};

/**
 * Add user to the channel
 * @returns {Promise<|SessionError>}
 */
Members.prototype.add = function (username) {
  return this._session.addCommand('addMember', {
    channelSid: this.channel.sid,
    username: username
  });
};

/**
 * Invites user to the channel
 * User can choose either to join or not
 * @returns {Promise<|SessionError>}
 */
Members.prototype.invite = function (username) {
  return this._session.addCommand('inviteMember', {
    channelSid: this.channel.sid,
    username: username
  });
};

/**
 * Remove user from channel
 * @returns {Promise<|SessionError>}
 */
Members.prototype.remove = function (username) {
  return this._session.addCommand('removeMember', {
    channelSid: this.channel.sid,
    username: username
  });
};

module.exports = Members;

/**
 * Fired when member joined channel
 * @event Members#memberJoined
 * @type {Member}
 */

/**
 * Fired when member left channel
 * @event Members#memberLeft
 * @type {string}
 */

/**
 * Fired when member info updated
 * Note that event won't be fired if user haven't requested any member data
 *
 * @event Members#memberUpdated
 * @type {Member}
 */

/**
 * Fired when userInfo for member is updated
 * @event Members#memberInfoUpdated
 * @type {Member}
 */

},{"../member":18,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36,"events":160,"loglevel":166,"util":205}],16:[function(_dereq_,module,exports){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = _dereq_('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var log = _dereq_('loglevel');

var Message = _dereq_('../message');
var Paginator = _dereq_('../paginator');

function isForward(direction) {
  return direction.toLowerCase() === 'forward';
}

/*
 * Creates an instance of messages collection
 *
 * @class Messages
 * @classdesc Represents the collection of messages in a channel
 */
function Messages(channel, session, messages) {
  (0, _defineProperties2.default)(this, {
    _datasync: { value: session.datasync },
    _eventStreamPromise: { value: null, writable: true },
    _sortedMessages: { value: messages },
    _messagesByIndex: { value: new _map2.default() },
    _session: { value: session },
    channel: {
      enumerable: true,
      value: channel
    }
  });

  EventEmitter.call(this);
}
inherits(Messages, EventEmitter);

/**
 * Subscribe to the Messages Event Stream
 * @param {String} uri - The URI of the Messages resource.
 * @returns {Promise}
 */
Messages.prototype.subscribe = function subscribe(uri) {
  var _this = this;

  return this._eventStreamPromise = this._eventStreamPromise || this._datasync.openStream(uri, true).then(function (eventStream) {

    eventStream.on('entityAdded', function (entity) {
      var message = new Message(_this.channel, entity.id, entity.value);
      if (_this._messagesByIndex.has(message.index)) {
        log.debug('Message arrived, but already known and ignored', _this.channel.sid, message.index);
        return;
      }

      _this._sortedMessages.push(message);
      _this._messagesByIndex.set(message.index, message);
      message.on('updated', function () {
        return _this.emit('messageUpdated', message);
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(_this.channel.members.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var member = _step.value;

          if (member.identity === message.author) {
            member._endTyping();
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.emit('messageAdded', message);
    });

    eventStream.on('entityRemoved', function (index) {
      var message = _this._removeMessageById(index);
      if (message) {
        _this._messagesByIndex.delete(message.index);
        message.removeAllListeners('updated');
        _this.emit('messageRemoved', message);
      }
    });

    eventStream.on('entityUpdated', function (entity) {
      var message = _this._messagesByIndex.get(entity.id);
      if (message) {
        message._update(entity.value);
      }
    });

    return eventStream;
  }).catch(function (err) {
    _this._eventStreamPromise = null;
    log.error('Failed to get messages object for channel', _this.channel.sid, err);
    throw err;
  });
};

Messages.prototype.unsubscribe = function unsubscribe() {
  return this._eventStreamPromise ? this._eventStreamPromise.then(function (entity) {
    return entity.unsubscribe();
  }) : _promise2.default.resolve();
};

/**
 * @param {Number} entityId Entity ID of Message to remove.
 * @returns {Message} removedMessage The message that was removed (or undefined).
 * @private
 */
Messages.prototype._removeMessageById = function (entityId) {
  var removedMessage = void 0;

  for (var i = 0; i < this._sortedMessages.length; i++) {
    var message = this._sortedMessages[i];

    if (message.index === entityId) {
      removedMessage = this._sortedMessages.splice(i, 1)[0];
      break;
    }
  }

  return removedMessage;
};

/**
 * Send Message to the channel
 * @param {String} message - Message to post
 * @returns Returns promise which can fail
 */
Messages.prototype.send = function (message) {
  return this._session.addCommand('sendMessage', {
    channelSid: this.channel.sid,
    text: message
  });
};

/**
 * Returns messages from channel using paginator interface
 * @param {Number} [pageSize] Number of messages to return in single chunk. By default it's 100.
 * @param {String} [anchor] Most early message id which is already known, or 'end' by default
 * @returns {Promise<Paginator<Message>>} last page of messages by default
 */
Messages.prototype.getMessagesPaged = function getMessagesPaged(pageSize, anchor, direction) {
  var _this2 = this;

  anchor = typeof anchor !== 'undefined' ? anchor : 'end';
  direction = direction || 'backwards';
  return this.getMessages(pageSize, anchor, direction).then(function (messages) {
    return new Paginator(messages, pageSize, anchor, direction, _this2.getMessagesPaged.bind(_this2));
  });
};

/**
 * Returns last messages from channel
 * @param {Number} [pageSize] Number of messages to return in single chunk. By default it's 100.
 * @param {String} [anchor] Most early message id which is already known, or 'end' by default
 * @returns {Promise<Array<Message>>} last page of messages by default
 */
Messages.prototype.getMessages = function getMessages(pageSize, anchor, direction) {
  var _this3 = this;

  pageSize = pageSize || 100;
  anchor = typeof anchor !== 'undefined' ? anchor : 'end';
  direction = direction || 'backwards';
  var count = pageSize;

  if (anchor !== 'end') {
    count++;

    var isKnown = this._sortedMessages.some(function (message) {
      if (message.sid !== anchor) {
        return false;
      }
      anchor = message.index;
      return true;
    });

    if (!isKnown) {
      return _promise2.default.reject(new Error('Unknown anchor'));
    }
  }

  return this.subscribe().then(function (messagesStream) {
    return messagesStream.queryEntities(direction, anchor !== 'end' ? anchor : void 0, count);
  }).then(function (messageEntities) {
    var messages = [];
    messageEntities.forEach(function (messageEntity) {
      var messageData = messageEntity.value;
      var message = new Message(_this3.channel, messageEntity.id, messageData);

      var dedupMessage = _this3._messagesByIndex.get(message.index);
      if (!dedupMessage) {
        _this3._messagesByIndex.set(message.index, message);
        message.on('updated', function () {
          return _this3.emit('messageUpdated', message);
        });
        dedupMessage = message;
      }
      messages.push(dedupMessage);
    });

    // Remove the matched anchor
    if (anchor !== 'end') {
      if (isForward(direction)) {
        messages.shift();
      } else {
        messages.pop();
      }
    }

    _this3._updateSortedMessages();
    return messages;
  });
};

Messages.prototype._updateSortedMessages = function _updateSortedMessages() {
  var uniqueValues = [];
  this._messagesByIndex.forEach(function (message) {
    uniqueValues.push(message);
  });
  uniqueValues.sort(function (message1, message2) {
    return message1.index - message2.index;
  });

  Array.prototype.splice.apply(this._sortedMessages, [0, this._sortedMessages.length].concat(uniqueValues));
};

module.exports = Messages;

},{"../message":19,"../paginator":20,"babel-runtime/core-js/get-iterator":30,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36,"events":160,"loglevel":166,"util":205}],17:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

var UserInfo = _dereq_('../userinfo');

/**
 * @class
 * @classdesc Container for known user infos
 * @fires UserInfos#userInfoUpdated
 *
 * @constructor
 * @private
 */
function UserInfos(session, datasync, myIdentity) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _session: { value: session },
    _datasync: { value: datasync },
    _mapsUrl: { value: '', writable: true },
    _infos: { value: new _map2.default() },

    myUserInfo: { enumerable: true, get: function get() {
        return _this._infos.get(myIdentity);
      } }
  });

  var myUserInfo = new UserInfo(myIdentity, null, datasync, session);
  this._infos.set(myIdentity, myUserInfo);
  myUserInfo.on('updated', function () {
    return _this.emit('userInfoUpdated', myUserInfo);
  });

  session.onKeyUpdated('/mapsUrl', function (url) {
    _this._mapsUrl = url;
  });

  this._session.getUserInfosData().then(function (data) {
    _this._mapsUrl = data.mapsUrl;
    _this.myUserInfo._uri = data.mapsUrl + '/' + data.userInfo;
    return data;
  }).then(function () {
    return myUserInfo._ensureFetched();
  });

  EventEmitter.call(this);
}
inherits(UserInfos, EventEmitter);

/**
 * @returns {Promise<UserInfo>} Fully initialized user info for logged in user
 */
UserInfos.prototype.getMyUserInfo = function () {
  var _this2 = this;

  return this._session.getUserInfosData().then(function (data) {
    _this2._mapsUrl = data.mapsUrl;
    return data;
  }).then(function (data) {
    return _this2.getUserInfo(data.identity, data.userInfo);
  });
};

/**
 * @returns {Promise<UserInfo>} Fully initialized user info
 */
UserInfos.prototype.getUserInfo = function (identity, id) {
  var _this3 = this;

  var userInfo = this._infos.get(identity);
  if (!userInfo) {
    var url = id ? this._mapsUrl + '/' + id : null;
    userInfo = new UserInfo(identity, url, this._datasync, this._session);
    this._infos.set(identity, userInfo);
    userInfo.on('updated', function () {
      return _this3.emit('userInfoUpdated', userInfo);
    });
  }
  return userInfo._ensureFetched();
};

(0, _freeze2.default)(UserInfos);

module.exports = UserInfos;

},{"../userinfo":25,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"events":160,"util":205}],18:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

/**
 * @class
 * @classdesc A Member represents a remote Client in a Channel.
 * @property {Channel} channel - The Channel the remote Client is a Member of.
 * @property {String} identity - Deprecated: The identity of the remote Client.
 * @property {UserInfo} userInfo - UserInfo structure for member.
 * @property {Boolean} isTyping - Whether or not this Member is currently typing.
 * @property {Number} lastConsumedMessageIndex - Latest consumed Message index by this Member.
 * @property {Date} lastConsumptionTimestamp - Date when Member has updated his consumption horizon.
 * @property {String} sid - The server-assigned unique identifier for the Member.
 * @fires Member#typingEnded
 * @fires Member#typingStarted
 * @fires Member#updated
 * @fires Member#userInfoUpdated
 */
function Member(channel, data, sid, userInfo) {
  var _this = this;

  if (!(this instanceof Member)) {
    return new Member(channel, data, sid, userInfo);
  }

  var isTyping = false;
  var typingTimeout = null;

  var identity = data.identity;
  var roleSid = data.roleSid || null;
  var lastConsumedMessageIndex = data.lastConsumedMessageIndex || null;
  var lastConsumptionTimestamp = data.lastConsumptionTimestamp ? new Date(data.lastConsumptionTimestamp) : null;

  if (!data.identity) {
    throw new Error('Received invalid Member object from server: Missing identity.');
  }

  (0, _defineProperties2.default)(this, {
    _identity: {
      get: function get() {
        return identity;
      },
      set: function set(_identity) {
        return identity = _identity;
      }
    },
    _isTyping: {
      get: function get() {
        return isTyping;
      },
      set: function set(_isTyping) {
        return isTyping = _isTyping;
      }
    },
    _lastConsumedMessageIndex: {
      get: function get() {
        return lastConsumedMessageIndex;
      },
      set: function set(_lastConsumedMessageIndex) {
        return lastConsumedMessageIndex = _lastConsumedMessageIndex;
      }
    },
    _lastConsumptionTimestamp: {
      get: function get() {
        return lastConsumptionTimestamp;
      },
      set: function set(_lastConsumptionTimestamp) {
        return lastConsumptionTimestamp = _lastConsumptionTimestamp;
      }
    },
    _roleSid: {
      get: function get() {
        return roleSid;
      },
      set: function set(_roleSid) {
        return roleSid = _roleSid;
      }
    },
    _typingTimeout: {
      writable: true,
      value: typingTimeout
    },
    channel: {
      enumerable: true,
      value: channel
    },
    identity: {
      enumerable: true,
      get: function get() {
        return identity;
      }
    },
    isTyping: {
      enumerable: true,
      get: function get() {
        return isTyping;
      }
    },
    lastConsumedMessageIndex: {
      enumerable: true,
      get: function get() {
        return lastConsumedMessageIndex;
      }
    },
    lastConsumptionTimestamp: {
      enumerable: true,
      get: function get() {
        return lastConsumptionTimestamp;
      }
    },
    roleSid: {
      enumerable: true,
      get: function get() {
        return roleSid;
      }
    },
    sid: {
      enumerable: true,
      value: sid
    },
    userInfo: {
      enumerable: true,
      get: function get() {
        return userInfo;
      }
    }
  });

  EventEmitter.call(this);

  userInfo.on('updated', function () {
    return _this.emit('userInfoUpdated', _this);
  });
}

inherits(Member, EventEmitter);

(0, _freeze2.default)(Member);

/**
 * Private method used to start or reset the typing indicator timeout (with event emitting)
 * @private
 */
Member.prototype._startTyping = function (timeout) {
  var _this2 = this;

  clearTimeout(this._typingTimeout);

  this._isTyping = true;
  this.emit('typingStarted', this);
  this.channel.emit('typingStarted', this);

  this._typingTimeout = setTimeout(function () {
    return _this2._endTyping();
  }, timeout);
  return this;
};

/**
 * Private method function used to stop typing indicator (with event emitting)
 * @private
 */
Member.prototype._endTyping = function () {
  if (!this._typingTimeout) {
    return;
  }

  this._isTyping = false;
  this.emit('typingEnded', this);
  this.channel.emit('typingEnded', this);

  clearInterval(this._typingTimeout);
  this._typingTimeout = null;
};

/**
 * Private method function used update local object's property roleSid with new value
 * @private
 */
Member.prototype._update = function (data) {
  var updated = false;

  if (data.roleSid && this._roleSid !== data.roleSid) {
    this._roleSid = data.roleSid;
    updated = true;
  }

  if (data.lastConsumedMessageIndex && this._lastConsumedMessageIndex !== data.lastConsumedMessageIndex) {
    this._lastConsumedMessageIndex = data.lastConsumedMessageIndex;
    updated = true;
  }

  if (data.lastConsumptionTimestamp) {
    var lastConsumptionTimestamp = new Date(data.lastConsumptionTimestamp);
    if (!this._lastConsumptionTimestamp || this._lastConsumptionTimestamp.getTime() !== lastConsumptionTimestamp.getTime()) {
      this._lastConsumptionTimestamp = lastConsumptionTimestamp;
      updated = true;
    }
  }

  if (updated) {
    this.emit('updated', this);
  }
};

/**
 * Remove this Member from the Channel.
 * @returns Promise
 */
Member.prototype.remove = function removeMember() {
  return this.channel.removeMember(this);
};

module.exports = Member;

/**
* Fired when member started to type
* @event Member#typingStarted
* @type {Member}
*/

/**
* Fired when member ended to type
* @event Member#typingEnded
* @type {Member}
*/

/**
 * Fired when member is updated
 * @event Member#updated
 * @type {Member}
 */

/**
 * Fired when member's user info is updated
 * @event Member#userInfoUpdated
 * @type {Member}
 */

},{"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"events":160,"util":205}],19:[function(_dereq_,module,exports){
'use strict';

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

/**
 * @class
 * @classdesc A Message represents a Message in a Channel.
 * @property {String} author - The name of the user that authored this Message.
 * @property {String} body - The body of the Message.
 * @property {Channel} channel - The Channel the Message belongs to.
 * @property {Date} dateUpdated - When the Message was updated.
 * @property {Number} index - Index of Message in the Channel's messages stream.
 * @property {String} lastUpdatedBy - The name of the last user updated this Message.
 * @property {String} sid - The server-assigned unique identifier for
 *   the Message.
 * @property {Date} timestamp - When the Message was sent.
 * @fires Message#updated
 */
function Message(channel, entityId, data) {
  if (!(this instanceof Message)) {
    return new Message(channel, entityId, data);
  }

  var body = data.text;
  var dateUpdated = data.dateUpdated ? new Date(data.dateUpdated) : null;
  var lastUpdatedBy = data.lastUpdatedBy ? data.lastUpdatedBy : null;

  (0, _defineProperties2.default)(this, {
    _body: {
      get: function get() {
        return body;
      },
      set: function set(_body) {
        return body = _body;
      }
    },
    _dateUpdated: {
      get: function get() {
        return dateUpdated;
      },
      set: function set(_dateUpdated) {
        return dateUpdated = _dateUpdated;
      }
    },
    _lastUpdatedBy: {
      get: function get() {
        return lastUpdatedBy;
      },
      set: function set(_lastUpdatedBy) {
        return lastUpdatedBy = _lastUpdatedBy;
      }
    },
    author: {
      enumerable: true,
      value: data.author
    },
    body: {
      enumerable: true,
      get: function get() {
        return body;
      }
    },
    channel: {
      enumerable: true,
      value: channel
    },
    dateUpdated: {
      enumerable: true,
      get: function get() {
        return dateUpdated;
      }
    },
    index: {
      enumerable: true,
      value: parseInt(entityId)
    },
    lastUpdatedBy: {
      enumerable: true,
      get: function get() {
        return lastUpdatedBy;
      }
    },
    sid: {
      enumerable: true,
      value: data.sid
    },
    timestamp: {
      enumerable: true,
      value: new Date(data.timestamp)
    }
  });

  EventEmitter.call(this);
}
inherits(Message, EventEmitter);

Message.prototype._update = function (data) {
  var updated = false;

  if ((data.text || typeof data.text === 'string') && data.text !== this._body) {
    this._body = data.text;
    updated = true;
  }

  if (data.lastUpdatedBy && data.lastUpdatedBy !== this._lastUpdatedBy) {
    this._lastUpdatedBy = data.lastUpdatedBy;
    updated = true;
  }

  if (data.dateUpdated && new Date(data.dateUpdated).getTime() !== (this._dateUpdated && this._dateUpdated.getTime())) {
    this._dateUpdated = new Date(data.dateUpdated);
    updated = true;
  }

  if (updated) {
    this.emit('updated', this);
  }
};

/**
 * Remove the Message.
 * @returns {Promise<Message|SessionError>}
 */
Message.prototype.remove = function removeMessage() {
  var _this = this;

  return this.channel._session.addCommand('deleteMessage', {
    channelSid: this.channel.sid,
    messageIdx: this.index.toString()
  }).then(function () {
    return _this;
  });
};

/**
 * Edit message body.
 * @param {String} body - new body of Message.
 * @returns {Promise<Message|SessionError>}
 */
Message.prototype.updateBody = function updateMessageBody(body) {
  var _this2 = this;

  if (typeof body !== 'string') {
    throw new Error('Body <String> is a required parameter for updateBody');
  }

  return this.channel._session.addCommand('editMessage', {
    channelSid: this.channel.sid,
    messageIdx: this.index.toString(),
    text: body
  }).then(function () {
    return _this2;
  });
};

/**
 * Fired when the Message's fields have been updated.
 * @param {Message} message
 * @event Message#updated
 */

module.exports = Message;

},{"babel-runtime/core-js/object/define-properties":33,"events":160,"util":205}],20:[function(_dereq_,module,exports){
'use strict';

/**
 * @class
 * @classdesc Pagination helper class
 *
 * @property {Array} items Array of elements on current page
 * @property {boolean} hasNextPage
 * @property {boolean} hasPrevPage
 *
 * @constructor
 * @param {Array} items Array of element for current page
 * @param {Object} params
 */

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Paginator(items, pageSize, anchor, direction, source) {
  var hasNextPage = direction === 'backwards' ? anchor !== 'end' : items.length === pageSize;
  var hasPrevPage = direction === 'backwards' ? items.length === pageSize && items.length > 0 && items[0].index !== 0 : anchor !== 'end';

  var nextPageArgs = hasNextPage ? [pageSize, items[items.length - 1].sid, 'forward'] : null;
  var prevPageArgs = hasPrevPage ? [pageSize, items.length > 0 ? items[0].sid : 'end', 'backwards'] : null;

  (0, _defineProperties2.default)(this, {
    _source: { value: source },
    _nextPageArgs: { value: nextPageArgs },
    _prevPageArgs: { value: prevPageArgs },

    hasNextPage: { value: hasNextPage, enumerable: true },
    hasPrevPage: { value: hasPrevPage, enumerable: true },
    items: { get: function get() {
        return items;
      }, enumerable: true }
  });
}

/**
 * Request next page.
 * Does not modify existing object
 * @return {Promise<Paginator>}
 */
Paginator.prototype.nextPage = function () {
  return this.hasNextPage ? this._source.apply(null, this._nextPageArgs) : _promise2.default.reject(new Error('No next page for query'));
};

/**
 * Request previous page.
 * Does not modify existing object
 * @return {Promise<Paginator>}
 */
Paginator.prototype.prevPage = function () {
  return this.hasPrevPage ? this._source.apply(null, this._prevPageArgs) : _promise2.default.reject(new Error('No prev page for query'));
};

module.exports = Paginator;

},{"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36}],21:[function(_dereq_,module,exports){
'use strict';

/**
 * @classdesc Provides consumption horizon management functionality
 *
 * @constructor
 * @private
 */

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConsumptionHorizon(config, session) {
  (0, _defineProperties2.default)(this, {
    _session: { value: session },
    _consumptionHorizonReports: { value: new _map2.default() },
    _consumptionHorizonUpdateTimer: { value: null, writable: true }
  });
}

ConsumptionHorizon.prototype._getReportInterval = function () {
  return this._session.getConsumptionReportInterval().then(function (duration) {
    return duration.seconds * 1000;
  });
};

/**
 * Updates consumption horizon value without any checks
 */
ConsumptionHorizon.prototype.updateLastConsumedMessageIndexForChannel = function (channelSid, index) {
  var _this = this;

  this._consumptionHorizonReports.set(channelSid, {
    channelSid: channelSid,
    messageIdx: index
  });

  this._getReportInterval().then(function (delay) {
    return _this._delayedSendConsumptionHorizon(delay);
  });
};

/**
 * Move consumption horizon forward
 */
ConsumptionHorizon.prototype.advanceLastConsumedMessageIndexForChannel = function (channelSid, index) {
  var _this2 = this;

  var currentHorizon = this._consumptionHorizonReports.get(channelSid);
  if (currentHorizon && currentHorizon.messageIdx >= index) {
    return;
  }

  this._consumptionHorizonReports.set(channelSid, {
    channelSid: channelSid,
    messageIdx: index
  });

  this._getReportInterval().then(function (delay) {
    return _this2._delayedSendConsumptionHorizon(delay);
  });
};

ConsumptionHorizon.prototype._delayedSendConsumptionHorizon = function (delay) {
  var _this3 = this;

  if (this._consumptionHorizonUpdateTimer !== null) {
    return;
  }

  this._consumptionHorizonUpdateTimer = setTimeout(function () {
    var reports = [];
    _this3._consumptionHorizonReports.forEach(function (entry) {
      return reports.push(entry);
    });
    if (reports.length > 0) {
      _this3._session.addCommand('consumptionReport', { report: reports });
    }
    _this3._consumptionHorizonUpdateTimer = null;
    _this3._consumptionHorizonReports.clear();
  }, delay);
};

(0, _freeze2.default)(ConsumptionHorizon);

module.exports = ConsumptionHorizon;

},{"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34}],22:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _dereq_('loglevel');

var TYPING_INDICATOR_MESSAGE_TYPE = 'twilio.ipmsg.typing_indicator';

/**
 * @class TypingIndicator
 *
 * @constructor
 * @private
 */
function TypingIndicator(config, accessManager, transport, notifications, getChannel) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _transport: { value: transport },
    _notifications: { value: notifications },
    _config: { value: config },
    _typingTimeout: { value: null, writable: true },
    _sentUpdates: { value: new _map2.default() },
    _getChannel: { value: getChannel },
    token: { get: function get() {
        return accessManager.token;
      } },
    typingTimeout: { get: function get() {
        return _this._typingTimeout || config.typingIndicatorTimeout;
      } }
  });
}

/**
 * Initialize TypingIndicator controller
 * Registers for needed message types and sets listeners
 * @private
 */
TypingIndicator.prototype.initialize = function () {
  var _this2 = this;

  this._notifications.subscribe(TYPING_INDICATOR_MESSAGE_TYPE, 'twilsock');
  this._notifications.on('message', function (type, message) {
    if (type === TYPING_INDICATOR_MESSAGE_TYPE) {
      _this2._handleRemoteTyping(message);
    }
  });
};

/**
 * Remote members typing events handler
 * @private
 */
TypingIndicator.prototype._handleRemoteTyping = function (message) {
  var _this3 = this;

  log.trace('Got new typing indicator ', message);
  this._getChannel(message.channel_sid).then(function (channel) {
    channel.members.forEach(function (member) {
      if (member.identity === message.identity) {
        member._startTyping(_this3.typingTimeout);
      }
    });
  }).catch(function (err) {
    log.error('IMPSG E: ', err);
    throw err;
  });
};

TypingIndicator.prototype.send = function (channelSid) {
  var lastUpdate = this._sentUpdates.get(channelSid);
  if (lastUpdate && lastUpdate > Date.now() - this.typingTimeout) {
    return _promise2.default.resolve();
  }

  this._sentUpdates.set(channelSid, Date.now());
  return this._send(channelSid);
};

TypingIndicator.prototype._send = function (channelSid) {
  var _this4 = this;

  log.trace('IPMSG I: sending typing indicator');

  var url = this._config.typingIndicatorUri;
  var headers = {
    'X-Twilio-Token': this.token,
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  var body = 'ChannelSid=' + channelSid;

  this._transport.post(url, headers, body).then(function (response) {
    if (response.body.hasOwnProperty('typing_timeout')) {
      _this4._typingTimeout = response.body.typing_timeout * 1000;
    }
  }).catch(function (err) {
    log.error('IPMSG E: failed to send typing indicator: ', err);
    throw err;
  });
};

(0, _freeze2.default)(TypingIndicator);

module.exports = TypingIndicator;

},{"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"loglevel":166}],23:[function(_dereq_,module,exports){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = _dereq_('uuid');
var platform = _dereq_('platform');
var log = _dereq_('loglevel');

var ChangeTracker = _dereq_('../../util/changetracker');
var SessionError = _dereq_('./sessionerror');

var Durational = _dereq_('durational');

var SDK_VERSION = _dereq_('../../../package.json').version;

/**
*  Constructs the instance of Session
*
*  @class Session
*
*  @classdesc Provides the interface to send the command to the server
*  It is reliable, which means that it tracks the command object state
*  and waits the answer from the server.
*/
function Session(datasync, transport, token, config) {
  var _this = this;

  var platformInfo = typeof navigator !== 'undefined' ? platform.parse(navigator.userAgent) : platform;

  (0, _defineProperties2.default)(this, {
    _purpose: { value: 'com.twilio.rtd.ipmsg' },
    _endpointPlatform: {
      value: ['js', SDK_VERSION, platformInfo.os, platformInfo.name, platformInfo.version].join('|')
    },
    _pendingCommands: { value: new _map2.default() },
    _sessionContextChangeTracker: { value: new ChangeTracker() },
    _sessionStreamPromise: { value: null, writable: true },
    _config: { value: config },
    identity: { enumerable: true, get: function get() {
        return _this._sessionContextChangeTracker._data.identity;
      } },
    userInfo: { enumerable: true, get: function get() {
        return _this._sessionContextChangeTracker._data.userInfo;
      } },
    datasync: { enumerable: true, value: datasync },
    transport: { value: transport }
  });
}

Session.prototype.initialize = function (token) {
  var _this2 = this;

  var context = {
    type: 'IpMsgSession',
    version: 'v2',
    endpointPlatform: this._endpointPlatform,
    token: token
  };

  this._sessionStreamPromise = this.datasync.createStream(this._purpose, context).then(function (stream) {
    log.info('IPMSG: session created', stream.uri);

    stream.on('entityAdded', function (entity) {
      return _this2._processCommandResponse(entity);
    });
    stream.on('entityUpdated', function (entity) {
      return _this2._processCommandResponse(entity);
    });
    stream.on('contextUpdated', function (updatedContext) {
      log.info('IPMSG: session context updated');
      log.debug('IPMSG: ', updatedContext);
      _this2._sessionContextChangeTracker.update(updatedContext);
    });

    stream.subscribe();

    return stream;
  }).catch(function (err) {
    log.error('IPMSG: failed to create session', err);
    throw err;
  });
  return this._sessionStreamPromise;
};

/**
* Sends the command to the server
* @returns Promise the promise, which is being fulfilled only when service will reply
*/
Session.prototype.addCommand = function (action, params) {
  return this._processCommand(action, params);
};

/**
* @private
*/
Session.prototype._processCommand = function (action, params) {
  var _this3 = this;

  var command = { request: params };
  command.request.action = action;
  command.commandId = uuid.v4();

  log.info('IPMSG: Adding command: ', action, command.commandId);
  log.debug('IPMSG: ', params);

  return new _promise2.default(function (resolve, reject) {
    _this3._sessionStreamPromise.then(function (stream) {
      _this3._pendingCommands.set(command.commandId, {
        resolve: resolve,
        reject: reject
      });

      stream.add(command).then(function () {
        return log.debug('IPMSG: Command accepted by server', command.commandId);
      });
    }).catch(function (err) {
      log.error('IPMSG: Failed to add a command to the session', err);
      reject(new Error('Can\'t add command: ' + err.message));
    });
  });
};

/**
 * @private
 */
Session.prototype._processCommandResponse = function (entity) {
  if (entity.value.hasOwnProperty('response') && entity.value.hasOwnProperty('commandId') && this._pendingCommands.has(entity.value.commandId)) {
    var value = entity.value;
    var commandId = entity.value.commandId;
    if (value.response.status === 200) {
      log.debug('IPMSG: Command succeeded: ', value);
      var resolve = this._pendingCommands.get(commandId).resolve;
      this._pendingCommands.delete(commandId);
      resolve(value.response);
    } else {
      log.error('IPMSG: Command failed: ', value);
      var reject = this._pendingCommands.get(commandId).reject;
      this._pendingCommands.delete(commandId);
      reject(new SessionError(value.response.statusText, value.response.status));
    }
  }
};

Session.prototype.updateToken = function (token) {
  return this._sessionStreamPromise.then(function (stream) {
    return stream.getContext().then(function (context) {
      context.token = token;
      return stream.updateContext(context);
    });
  }).catch(function (err) {
    log.error('IPMSG: Couldn\'t update the token in session context', err);
    throw new Error(err);
  });
};

Session.prototype.onKeyUpdated = function (path, handler) {
  this._sessionContextChangeTracker.addEventHandler('keyAdded', path, handler);
  this._sessionContextChangeTracker.addEventHandler('keyUpdated', path, handler);
};

Session.prototype.getChannelsUrl = function () {
  var _this4 = this;

  return new _promise2.default(function (resolve) {
    _this4._sessionStreamPromise.then(function (stream) {
      return stream.getContext();
    }).then(function (context) {
      if (context.hasOwnProperty('channelsUrl')) {
        resolve(context.channelsUrl);
      } else {
        _this4.onKeyUpdated('/channelsUrl', resolve);
      }
    });
  });
};

Session.prototype.getMyChannelsUrl = function () {
  var _this5 = this;

  return new _promise2.default(function (resolve) {
    _this5._sessionStreamPromise.then(function (stream) {
      return stream.getContext();
    }).then(function (context) {
      if (context.hasOwnProperty('myChannelsUrl')) {
        resolve(context.myChannelsUrl);
      } else {
        _this5.onKeyUpdated('/myChannelsUrl', resolve);
      }
    });
  });
};

Session.prototype.getUserInfosData = function () {
  var _this6 = this;

  return new _promise2.default(function (resolve) {
    function resolveWithData(context) {
      resolve({
        mapsUrl: context.mapsUrl,
        userInfo: context.userInfo,
        identity: context.identity
      });
    }

    _this6._sessionStreamPromise.then(function (stream) {
      return stream.getContext();
    }).then(function (context) {
      if (context.hasOwnProperty('mapsUrl')) {
        resolveWithData(context);
      } else {
        _this6.onKeyUpdated('/mapsUrl', function () {
          _this6._sessionStreamPromise.then(function (stream) {
            return stream.getContext();
          }).then(function (updatedContext) {
            return resolveWithData(updatedContext);
          });
        });
      }
    });
  });
};

Session.prototype.getConsumptionReportInterval = function () {
  var _this7 = this;

  return this._sessionStreamPromise.then(function (stream) {
    return stream.getContext();
  }).then(function (context) {
    return Durational.fromString(context.consumptionReportInterval || _this7._config.consumptionReportInterval);
  });
};

module.exports = Session;

},{"../../../package.json":211,"../../util/changetracker":26,"./sessionerror":24,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36,"durational":158,"loglevel":166,"platform":167,"uuid":207}],24:[function(_dereq_,module,exports){
'use strict';

var inherits = _dereq_('util').inherits;

/**
 * @class
 * @classdesc Exception type for service-side issues
 *
 * @property {Number} code - Error code
 * @property {String} message - Error description
 */
function SessionError(message, code) {
  this.name = this.constructor.name;
  this.message = message;
  this.code = code;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
}

inherits(SessionError, Error);

module.exports = SessionError;

},{"util":205}],25:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

/**
 * @class
 * @classdesc Extended user information
 * @param {String} identity - Identity of user
 * @param {String} uri - uri to user's info object
 * @param {Object} datasync - datasync service
 * @param {Object} session - session service
 *
 * @property {String} identity - User identity
 * @property {String} friendlyName - User friendly name. Null if not set
 * @property {Object} attributes - Object with custom attributes for user
 * @fires UserInfo#updated
 */
function UserInfo(identity, uri, datasync, session) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _datasync: { value: datasync },
    _session: { value: session },
    _identity: { value: identity },
    _uri: { value: uri, writable: true }, // writable only because of lazy loading of myUserInfo
    _attributes: { value: {}, writable: true },
    _friendlyName: { value: null, writable: true },
    _promiseToFetch: { writable: true },
    identity: { enumerable: true, get: function get() {
        return _this._identity;
      } },
    attributes: { enumerable: true, get: function get() {
        return _this._attributes;
      } },
    friendlyName: { enumerable: true, get: function get() {
        return _this._friendlyName;
      } }
  });

  EventEmitter.call(this);
  this.setMaxListeners(0);
}

inherits(UserInfo, EventEmitter);

UserInfo.prototype._update = function (key, value) {
  switch (key) {
    case 'friendlyName':
      this._friendlyName = value;
      break;
    case 'attributes':
      try {
        this._attributes = JSON.parse(value);
      } catch (e) {
        this._attributes = {};
      }
      break;
    default:
      return;
  }
  this.emit('updated');
};

UserInfo.prototype._fetch = function () {
  var _this2 = this;

  if (!this._uri) {
    return _promise2.default.resolve(this);
  }

  var update = function update(item) {
    return _this2._update(item.id, item.value.value);
  };
  this._promiseToFetch = this._datasync.openMap(this._uri, true).then(function (map) {
    map.on('entityUpdated', update);
    return _promise2.default.all([map.get('friendlyName').then(update), map.get('attributes').then(update)]);
  }).then(function () {
    return _this2;
  }).catch(function (err) {
    _this2._promiseToFetch = null;
    throw err;
  });
  return this._promiseToFetch;
};

UserInfo.prototype._ensureFetched = function () {
  return this._promiseToFetch || this._fetch();
};

/**
 * Update the UserInfo's attributes.
 * @param {Object} attributes - The new attributes object.
 * @returns {Promise<UserInfo|SessionError>} A Promise for the UserInfo
 */
UserInfo.prototype.updateAttributes = function (attributes) {
  var _this3 = this;

  if (attributes.constructor !== Object) {
    throw new Error('Attributes must be an object.');
  }

  return this._session.addCommand('editUserAttributes', {
    username: this._identity,
    attributes: (0, _stringify2.default)(attributes)
  }).then(function () {
    return _this3;
  });
};

/**
 * Update the Users's friendlyName.
 * @param {String} name - The new friendlyName.
 * @returns {Promise<UserInfo|SessionError>} A Promise for the UserInfo
 */
UserInfo.prototype.updateFriendlyName = function (friendlyName) {
  var _this4 = this;

  return this._session.addCommand('editUserFriendlyName', {
    username: this._identity,
    friendlyName: friendlyName
  }).then(function () {
    return _this4;
  });
};

(0, _freeze2.default)(UserInfo);

/**
 * Fired when the UserInfo's fields have been updated.
 * @event UserInfo#updated
 */

module.exports = UserInfo;

},{"babel-runtime/core-js/json/stringify":31,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"events":160,"util":205}],26:[function(_dereq_,module,exports){
'use strict';

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var JsonDiff = _dereq_('./jsondiff');

/**
 * Tracks changes for JS objects and emits appropriate callbacks
 */
function ChangeTracker(data) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _pendingListeners: { value: {} },
    _data: { value: data || {}, writable: true }
  });
  EventEmitter.call(this);

  ['keyAdded', 'keyRemoved', 'keyUpdated'].forEach(function (eventName) {
    _this._pendingListeners[eventName] = {};
    _this.on(eventName, function (path, value) {
      var handlers = _this._pendingListeners[eventName][path] || [];
      handlers.forEach(function (handler) {
        return handler(value);
      });
      _this._pendingListeners[eventName][path] = [];
    });
  });
}
inherits(ChangeTracker, EventEmitter);

/**
 * Compare old and new data and fire events if difference found
 * @private
 */
ChangeTracker.prototype._traverse = function (originalData, updatedData) {
  var _this2 = this;

  var diff = JsonDiff.diff(originalData, updatedData);
  diff.forEach(function (row) {
    if (row.op === 'add') {
      _this2.emit('keyAdded', row.path, row.value);
    } else if (row.op === 'replace') {
      _this2.emit('keyUpdated', row.path, row.value);
    } else if (row.op === 'remove') {
      _this2.emit('keyRemoved', row.path);
    }
  });
};

/**
 * Set new data to process
 * @param Object updatedData new data set
 * @public
 */
ChangeTracker.prototype.update = function (updatedData) {
  var originalData = this._data;
  this._data = updatedData;
  this._traverse(originalData, updatedData);
};

ChangeTracker.prototype.addEventHandler = function (eventName, path, handler) {
  var handlers = this._pendingListeners[eventName][path] || [];
  handlers.push(handler);
  this._pendingListeners[eventName][path] = handlers;
};

module.exports = ChangeTracker;

},{"./jsondiff":28,"babel-runtime/core-js/object/define-properties":33,"events":160,"util":205}],27:[function(_dereq_,module,exports){
(function (Buffer){
'use strict';

/**
 * Decode a base64-encoded string.
 * @param {string} encoded - the base64-encoded string
 * @returns {string}
 */

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decodeBase64 = typeof atob === 'function' ? atob : function (encoded) {
  return new Buffer(encoded, 'base64').toString('ascii');
};

/**
 * Base64-encode a string.
 * @param {string} plaintext - the string to base64-encode
 * @returns {string}
 */
var encodeBase64 = typeof btoa === 'function' ? btoa : function (message) {
  return new Buffer(message).toString('base64');
};

var base64 = {
  decode: decodeBase64,
  encode: encodeBase64
};

/**
 * Decode a base64url-encoded string.
 * @param {string} encoded - the base64url-encoded string
 * @returns {string}
 */
function decodeBase64URL(encoded) {
  var remainder = encoded.length % 4;
  if (remainder > 0) {
    var padlen = 4 - remainder;
    encoded += new Array(padlen + 1).join('=');
  }
  encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
  return decodeBase64(encoded);
}

/**
 * Memoize a function. Be careful with this.
 * @param {function} fn - the function to memoize
 * @returns {function}
 */
function memoize(fn) {
  var memo = {};
  return function () {
    var args = Array.prototype.slice.call(arguments, 0);
    return memo[args] ? memo[args] : memo[args] = fn.apply(null, args);
  };
}

var base64URL = {
  decode: memoize(decodeBase64URL)
};

/**
 * Deep-clone an object. Note that this does not work on object containing
 * functions.
 * @param {object} obj - the object to deep-clone
 * @returns {object}
 */
function deepClone(obj) {
  return JSON.parse((0, _stringify2.default)(obj));
}

/**
 * Decode an x-www-form-urlencoded string into an array of key-value pairs.
 * @param {string} encoded - the x-www-form-urlencoded string
 * @returns {Array}
 */
// FIXME: Currently returns an object.
function fromURLFormEncoded(params) {
  if (!params) {
    return {};
  }
  var result = {};
  var pairs = params.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    var key = decodeURIComponent(pair[0]);
    var val = pair[1] ? decodeURIComponent(pair[1]) : null;
    result[key] = val;
  }
  return result;
}

function makeSystemInfo() {
  var nav = typeof navigator === 'undefined' ? {} : navigator;
  return {
    p: 'browser',
    browser: {
      userAgent: nav.userAgent || 'unknown',
      platform: nav.platform || 'unknown'
    },
    plugin: 'rtc'
  };
}

/**
 * Encode an array of key-value pairs as an x-www-form-urlencoded string.
 * @param {Array} pairs - the array of key-value pairs
 * @returns {string}
 */
// FIXME: Currently this uses objects.
function toURLFormEncoded(dict) {
  var str = '';
  for (var key in dict) {
    str += encodeURIComponent(key) + '=' + encodeURIComponent(dict[key]);
  }
  return str;
}

/**
 * Require a given module without Browserify attempting to package it for us.
 * @param {string} module - the module to require
 * @returns {Object}
 */
function requireNoBrowserify(module) {
  return eval('require(\'' + module + '\')');
}

function getKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj) {
  var values = [];
  for (var key in obj) {
    values.push(obj[key]);
  }
  return values;
}

function makeUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function _withDefaults(destination, source) {
  for (var key in source) {
    if (!(key in destination)) {
      destination[key] = source[key];
    }
  }

  return destination;
}

function withDefaults(destination, sources) {
  destination = destination || {};
  sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    _withDefaults(destination, source);
  });

  return destination;
}

function _extend(destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }

  return destination;
}

function extend(destination, sources) {
  destination = destination || {};
  sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    _extend(destination, source);
  });

  return destination;
}

function tails(xs) {
  if (xs.length === 0) {
    return [[]];
  } else {
    return [xs].concat(tails(xs.slice(1)));
  }
}

function _return(value) {
  return function () {
    return value;
  };
}

function faultTolerantWait(promises) {
  return new _promise2.default(function (resolve) {
    var totalCount = promises.length;
    var failuresCount = 0;

    if (totalCount === 0) {
      resolve();
    }

    function handle() {
      if (--totalCount <= 0) {
        resolve(failuresCount);
      }
    }

    promises.forEach(function (promise) {
      promise.then(handle).catch(function () {
        failuresCount++;handle();
      });
    });
  });
}

function emitNext() {
  var args = [].slice.call(arguments);
  var eventEmitter = args[0];
  args = args.slice(1);
  setTimeout(function () {
    eventEmitter.emit.call(eventEmitter, args);
  });
  return eventEmitter;
}

/**
 * Traverse down multiple nodes on an object and return null if
 * any link in the path is unavailable.
 * @param {Object} obj - Object to traverse
 * @param {String} path - Path to traverse. Period-separated.
 * @returns {Any|null}
 */
function getOrNull(obj, path) {
  return path.split('.').reduce(function (output, step) {
    if (!output) {
      return null;
    }
    return output[step];
  }, obj);
}

/**
 * Parse the passed userAgent string down into a simple object.
 * Example browser object: { name: 'Chrome', version: '42.0' }
 * @returns {Object} Object containing a name and version.
 */
function parseUserAgent(ua) {
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)\.(\d+)/i) || [];
  var specs = { name: M[1], version: M[2] + '.' + M[3] };

  var parts;

  if (/trident/i.test(specs.name)) {
    parts = /\brv[ :]+(\d+)\.(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: parts[1] ? parts[1] + '.' + parts[2] : '' };
  }

  if (specs.name === 'Chrome') {
    parts = ua.match(/\b(OPR|Edge)\/(\d+)\.(\d+)/);
    if (parts !== null) {
      return { name: 'Opera', version: parts[2] + '.' + parts[3] };
    }
  }

  if (specs.name === 'MSIE') {
    specs.name = 'IE';
  }

  return specs;
}

/**
 * Overwrite an existing Array with a new one. This is useful when the existing
 * Array is an immutable property of another object.
 * @param {Array} oldArray - the existing Array to overwrite
 * @param {Array} newArray - the new Array to overwrite with
 */
function overwriteArray(oldArray, newArray) {
  oldArray.splice(0, oldArray.length);
  newArray.forEach(function (item) {
    oldArray.push(item);
  });
}

/**
 * Construct URI with query parameters
 */
function UriBuilder(base) {
  (0, _defineProperties2.default)(this, {
    base: { value: base },
    args: { value: [] }
  });

  this.arg = function (name, value) {
    if (typeof value !== 'undefined') {
      this.args.push(name + '=' + value);
    }
    return this;
  };

  this.build = function () {
    return this.base + '?' + this.args.join('&');
  };
}

module.exports.base64 = base64;
module.exports.base64URL = base64URL;
module.exports.deepClone = deepClone;
module.exports.fromURLFormEncoded = fromURLFormEncoded;
module.exports.requireNoBrowserify = requireNoBrowserify;
module.exports.getKeys = getKeys;
module.exports.getValues = getValues;
module.exports.makeUUID = makeUUID;
module.exports.withDefaults = withDefaults;
module.exports.extend = extend;
module.exports.tails = tails;
module.exports.return = _return;
module.exports.emitNext = emitNext;
module.exports.getOrNull = getOrNull;
module.exports.parseUserAgent = parseUserAgent;
module.exports.overwriteArray = overwriteArray;
module.exports.faultTolerantWait = faultTolerantWait;
module.exports.UriBuilder = UriBuilder;

}).call(this,_dereq_("buffer").Buffer)
},{"babel-runtime/core-js/json/stringify":31,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36,"buffer":154}],28:[function(_dereq_,module,exports){
'use strict';

/**
 * We're using that wersion of JSONdiff instead of vanilla one
 * since vanilla has the bug in path calculation and maintaner doesn't accept the patch.
 * 
 * Should return to the using of original module when situation will change
 */

var _typeof2 = _dereq_('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JsonDiff() {}

JsonDiff.prototype.toString = Object.prototype.toString;

JsonDiff.prototype.hasOwnProperty = Object.prototype.hasOwnProperty;

JsonDiff.prototype.isArray = function (obj) {
  return this.toString.call(obj) === '[object Array]';
};

JsonDiff.prototype.isObject = function (obj) {
  return this.toString.call(obj) === '[object Object]';
};

JsonDiff.prototype.isString = function (obj) {
  return this.toString.call(obj) === '[object String]';
};

JsonDiff.prototype.isFunction = function (obj) {
  return this.toString.call(obj) === '[object Function]';
};

JsonDiff.prototype.has = function (obj, key) {
  return hasOwnProperty.call(obj, key);
};

JsonDiff.prototype.isEqual = function (a, b) {
  return this.eq(a, b, [], []);
};

JsonDiff.prototype.isContainer = function (obj) {
  return this.isArray(obj) || isObject(obj);
};

JsonDiff.prototype.isSameContainer = function (obj1, obj2) {
  return this.isArray(obj1) && this.isArray(obj2) || this.isObject(obj1) && this.isObject(obj2);
};

JsonDiff.prototype.eq = function (a, b, aStack, bStack) {
  var aCtor, bCtor, className, key, length, result, size;
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  if (!(a != null) || !(b != null)) {
    return a === b;
  }
  className = this.toString.call(a);
  if (className !== this.toString.call(b)) {
    return false;
  }
  switch (className) {
    case '[object String]':
      return a === String(b);
    case '[object Number]':
      return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
    case '[object RegExp]':
      return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.ignoreCase === b.ignoreCase;
  }
  if ((typeof a === 'undefined' ? 'undefined' : (0, _typeof3.default)(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : (0, _typeof3.default)(b)) !== 'object') {
    return false;
  }
  length = aStack.length;
  if (function () {
    var _results;
    _results = [];
    while (length--) {
      _results.push(aStack[length] === a);
    }
    return _results;
  }()) {
    return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  size = 0;
  result = true;
  if (className === '[object Array]') {
    size = a.length;
    result = size === b.length;
    if (result) {
      while (size--) {
        if (!(result = this.eq(a[size], b[size], aStack, bStack))) {
          break;
        }
      }
    }
  } else {
    aCtor = a.constructor;
    bCtor = b.constructor;
    if (aCtor !== bCtor && !(this.isFunction(aCtor) && aCtor instanceof aCtor && this.isFunction(bCtor) && bCtor instanceof bCtor)) {
      return false;
    }
    for (key in a) {
      if (this.has(a, key)) {
        size++;
        if (!(result = this.has(b, key) && this.eq(a[key], b[key], aStack, bStack))) {
          break;
        }
      }
    }
    if (result) {
      for (key in b) {
        if (this.has(b, key) && ! size--) {
          break;
        }
      }
      result = !size;
    }
  }
  aStack.pop();
  bStack.pop();
  return result;
};

JsonDiff.prototype.getParent = function (paths, path) {
  var parsedPath = path.replace(/\/[^\/]*$/, '');
  if (!parsedPath) {
    parsedPath = '/';
  }
  return paths[parsedPath];
};

JsonDiff.prototype.flattenObject = function (obj, prefix, paths) {
  var i, key, o, _i, _len;
  if (prefix == null) {
    prefix = '/';
  }
  if (paths == null) {
    paths = {};
  }
  paths[prefix] = {
    path: prefix,
    value: obj
  };
  if (prefix !== '/') {
    prefix = prefix + '/';
  }
  if (this.isArray(obj)) {
    for (i = _i = 0, _len = obj.length; _i < _len; i = ++_i) {
      o = obj[i];
      this.flattenObject(o, prefix + i, paths);
    }
  } else if (this.isObject(obj)) {
    for (key in obj) {
      o = obj[key];
      this.flattenObject(o, prefix + key, paths);
    }
  }
  return paths;
};

JsonDiff.prototype.diff = function (obj1, obj2) {
  var add, doc, doc1, doc2, key, key1, key2, keyfrom, keyto, move, patch, paths1, paths2, remove, replace;
  if (!this.isSameContainer(obj1, obj2)) {
    throw new Error('Patches can only be derived from objects or arrays');
  }
  paths1 = this.flattenObject(obj1);
  paths2 = this.flattenObject(obj2);
  add = {};
  remove = {};
  replace = {};
  move = {};
  for (key in paths1) {
    doc1 = paths1[key];
    doc2 = paths2[key];
    if (!this.getParent(paths2, key)) {
      continue;
    } else if (!doc2) {
      remove[key] = doc1;
    } else if (this.isSameContainer(doc1.value, doc2.value)) {
      continue;
    } else if (!this.isEqual(doc1.value, doc2.value)) {
      replace[key] = doc2;
    }
  }
  for (key in paths2) {
    doc1 = paths1[key];
    doc2 = paths2[key];
    if (!doc1 && this.isSameContainer(this.getParent(paths1, key), this.getParent(paths2, key))) {
      add[key] = doc2;
    }
  }
  for (key1 in remove) {
    doc1 = remove[key1];
    for (key2 in add) {
      doc2 = add[key2];
      if (this.isEqual(doc2.value, doc1.value)) {
        delete remove[key1];
        delete add[key2];
        move[key2] = key1;
        break;
      }
    }
  }
  patch = [];
  for (key in add) {
    doc = add[key];
    patch.push({
      op: 'add',
      path: key,
      value: doc.value
    });
  }
  for (key in remove) {
    patch.push({
      op: 'remove',
      path: key
    });
  }
  for (key in replace) {
    doc = replace[key];
    patch.push({
      op: 'replace',
      path: key,
      value: doc.value
    });
  }
  for (keyto in move) {
    keyfrom = move[keyto];
    patch.push({
      op: 'move',
      from: keyfrom,
      path: keyto
    });
  }
  return patch;
};

JsonDiff.diff = function (o1, o2) {
  var diff = new JsonDiff();
  return diff.diff(o1, o2);
};

JsonDiff.isDeepEqual = function (o1, o2) {
  return this.diff(o1, o2).length === 0;
};

module.exports = JsonDiff;

},{"babel-runtime/helpers/typeof":40}],29:[function(_dereq_,module,exports){
'use strict';

function IPMessaging(token, options) {
  return new IPMessaging.Client(token, options);
}

IPMessaging.Client = _dereq_('./clients/ipmessaging/client');

module.exports = IPMessaging;

},{"./clients/ipmessaging/client":12}],30:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":41}],31:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":42}],32:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":43}],33:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":44}],34:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":45}],35:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":46}],36:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":47}],37:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":48}],38:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":49}],39:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":50}],40:[function(_dereq_,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = _dereq_("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = _dereq_("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":38,"../core-js/symbol/iterator":39}],41:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.get-iterator');
},{"../modules/core.get-iterator":129,"../modules/es6.string.iterator":138,"../modules/web.dom.iterable":144}],42:[function(_dereq_,module,exports){
var core  = _dereq_('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":65}],43:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.map');
_dereq_('../modules/es7.map.to-json');
module.exports = _dereq_('../modules/_core').Map;
},{"../modules/_core":65,"../modules/es6.map":131,"../modules/es6.object.to-string":135,"../modules/es6.string.iterator":138,"../modules/es7.map.to-json":140,"../modules/web.dom.iterable":144}],44:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.define-properties');
var $Object = _dereq_('../../modules/_core').Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};
},{"../../modules/_core":65,"../../modules/es6.object.define-properties":132}],45:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.freeze');
module.exports = _dereq_('../../modules/_core').Object.freeze;
},{"../../modules/_core":65,"../../modules/es6.object.freeze":133}],46:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.keys');
module.exports = _dereq_('../../modules/_core').Object.keys;
},{"../../modules/_core":65,"../../modules/es6.object.keys":134}],47:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.promise');
module.exports = _dereq_('../modules/_core').Promise;
},{"../modules/_core":65,"../modules/es6.object.to-string":135,"../modules/es6.promise":136,"../modules/es6.string.iterator":138,"../modules/web.dom.iterable":144}],48:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.set');
_dereq_('../modules/es7.set.to-json');
module.exports = _dereq_('../modules/_core').Set;
},{"../modules/_core":65,"../modules/es6.object.to-string":135,"../modules/es6.set":137,"../modules/es6.string.iterator":138,"../modules/es7.set.to-json":141,"../modules/web.dom.iterable":144}],49:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.symbol');
_dereq_('../../modules/es6.object.to-string');
_dereq_('../../modules/es7.symbol.async-iterator');
_dereq_('../../modules/es7.symbol.observable');
module.exports = _dereq_('../../modules/_core').Symbol;
},{"../../modules/_core":65,"../../modules/es6.object.to-string":135,"../../modules/es6.symbol":139,"../../modules/es7.symbol.async-iterator":142,"../../modules/es7.symbol.observable":143}],50:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.string.iterator');
_dereq_('../../modules/web.dom.iterable');
module.exports = _dereq_('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":126,"../../modules/es6.string.iterator":138,"../../modules/web.dom.iterable":144}],51:[function(_dereq_,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],52:[function(_dereq_,module,exports){
module.exports = function(){ /* empty */ };
},{}],53:[function(_dereq_,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],54:[function(_dereq_,module,exports){
var isObject = _dereq_('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":84}],55:[function(_dereq_,module,exports){
var forOf = _dereq_('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":74}],56:[function(_dereq_,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _dereq_('./_to-iobject')
  , toLength  = _dereq_('./_to-length')
  , toIndex   = _dereq_('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":118,"./_to-iobject":120,"./_to-length":121}],57:[function(_dereq_,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = _dereq_('./_ctx')
  , IObject  = _dereq_('./_iobject')
  , toObject = _dereq_('./_to-object')
  , toLength = _dereq_('./_to-length')
  , asc      = _dereq_('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":59,"./_ctx":66,"./_iobject":81,"./_to-length":121,"./_to-object":122}],58:[function(_dereq_,module,exports){
var isObject = _dereq_('./_is-object')
  , isArray  = _dereq_('./_is-array')
  , SPECIES  = _dereq_('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":83,"./_is-object":84,"./_wks":127}],59:[function(_dereq_,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = _dereq_('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":58}],60:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_('./_cof')
  , TAG = _dereq_('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":61,"./_wks":127}],61:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],62:[function(_dereq_,module,exports){
'use strict';
var dP          = _dereq_('./_object-dp').f
  , create      = _dereq_('./_object-create')
  , hide        = _dereq_('./_hide')
  , redefineAll = _dereq_('./_redefine-all')
  , ctx         = _dereq_('./_ctx')
  , anInstance  = _dereq_('./_an-instance')
  , defined     = _dereq_('./_defined')
  , forOf       = _dereq_('./_for-of')
  , $iterDefine = _dereq_('./_iter-define')
  , step        = _dereq_('./_iter-step')
  , setSpecies  = _dereq_('./_set-species')
  , DESCRIPTORS = _dereq_('./_descriptors')
  , fastKey     = _dereq_('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":53,"./_ctx":66,"./_defined":67,"./_descriptors":68,"./_for-of":74,"./_hide":77,"./_iter-define":87,"./_iter-step":89,"./_meta":93,"./_object-create":95,"./_object-dp":96,"./_redefine-all":108,"./_set-species":111}],63:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = _dereq_('./_classof')
  , from    = _dereq_('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":55,"./_classof":60}],64:[function(_dereq_,module,exports){
'use strict';
var global         = _dereq_('./_global')
  , $export        = _dereq_('./_export')
  , meta           = _dereq_('./_meta')
  , fails          = _dereq_('./_fails')
  , hide           = _dereq_('./_hide')
  , redefineAll    = _dereq_('./_redefine-all')
  , forOf          = _dereq_('./_for-of')
  , anInstance     = _dereq_('./_an-instance')
  , isObject       = _dereq_('./_is-object')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , dP             = _dereq_('./_object-dp').f
  , each           = _dereq_('./_array-methods')(0)
  , DESCRIPTORS    = _dereq_('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":53,"./_array-methods":57,"./_descriptors":68,"./_export":72,"./_fails":73,"./_for-of":74,"./_global":75,"./_hide":77,"./_is-object":84,"./_meta":93,"./_object-dp":96,"./_redefine-all":108,"./_set-to-string-tag":112}],65:[function(_dereq_,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],66:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":51}],67:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],68:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":73}],69:[function(_dereq_,module,exports){
var isObject = _dereq_('./_is-object')
  , document = _dereq_('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":75,"./_is-object":84}],70:[function(_dereq_,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],71:[function(_dereq_,module,exports){
// all enumerable object keys, includes symbols
var getKeys = _dereq_('./_object-keys')
  , gOPS    = _dereq_('./_object-gops')
  , pIE     = _dereq_('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":101,"./_object-keys":104,"./_object-pie":105}],72:[function(_dereq_,module,exports){
var global    = _dereq_('./_global')
  , core      = _dereq_('./_core')
  , ctx       = _dereq_('./_ctx')
  , hide      = _dereq_('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":65,"./_ctx":66,"./_global":75,"./_hide":77}],73:[function(_dereq_,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],74:[function(_dereq_,module,exports){
var ctx         = _dereq_('./_ctx')
  , call        = _dereq_('./_iter-call')
  , isArrayIter = _dereq_('./_is-array-iter')
  , anObject    = _dereq_('./_an-object')
  , toLength    = _dereq_('./_to-length')
  , getIterFn   = _dereq_('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":54,"./_ctx":66,"./_is-array-iter":82,"./_iter-call":85,"./_to-length":121,"./core.get-iterator-method":128}],75:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],76:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],77:[function(_dereq_,module,exports){
var dP         = _dereq_('./_object-dp')
  , createDesc = _dereq_('./_property-desc');
module.exports = _dereq_('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":68,"./_object-dp":96,"./_property-desc":107}],78:[function(_dereq_,module,exports){
module.exports = _dereq_('./_global').document && document.documentElement;
},{"./_global":75}],79:[function(_dereq_,module,exports){
module.exports = !_dereq_('./_descriptors') && !_dereq_('./_fails')(function(){
  return Object.defineProperty(_dereq_('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":68,"./_dom-create":69,"./_fails":73}],80:[function(_dereq_,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],81:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":61}],82:[function(_dereq_,module,exports){
// check on default Array iterator
var Iterators  = _dereq_('./_iterators')
  , ITERATOR   = _dereq_('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":90,"./_wks":127}],83:[function(_dereq_,module,exports){
// 7.2.2 IsArray(argument)
var cof = _dereq_('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":61}],84:[function(_dereq_,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],85:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
var anObject = _dereq_('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":54}],86:[function(_dereq_,module,exports){
'use strict';
var create         = _dereq_('./_object-create')
  , descriptor     = _dereq_('./_property-desc')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_('./_hide')(IteratorPrototype, _dereq_('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":77,"./_object-create":95,"./_property-desc":107,"./_set-to-string-tag":112,"./_wks":127}],87:[function(_dereq_,module,exports){
'use strict';
var LIBRARY        = _dereq_('./_library')
  , $export        = _dereq_('./_export')
  , redefine       = _dereq_('./_redefine')
  , hide           = _dereq_('./_hide')
  , has            = _dereq_('./_has')
  , Iterators      = _dereq_('./_iterators')
  , $iterCreate    = _dereq_('./_iter-create')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , getPrototypeOf = _dereq_('./_object-gpo')
  , ITERATOR       = _dereq_('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":72,"./_has":76,"./_hide":77,"./_iter-create":86,"./_iterators":90,"./_library":92,"./_object-gpo":102,"./_redefine":109,"./_set-to-string-tag":112,"./_wks":127}],88:[function(_dereq_,module,exports){
var ITERATOR     = _dereq_('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":127}],89:[function(_dereq_,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],90:[function(_dereq_,module,exports){
module.exports = {};
},{}],91:[function(_dereq_,module,exports){
var getKeys   = _dereq_('./_object-keys')
  , toIObject = _dereq_('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":104,"./_to-iobject":120}],92:[function(_dereq_,module,exports){
module.exports = true;
},{}],93:[function(_dereq_,module,exports){
var META     = _dereq_('./_uid')('meta')
  , isObject = _dereq_('./_is-object')
  , has      = _dereq_('./_has')
  , setDesc  = _dereq_('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !_dereq_('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":73,"./_has":76,"./_is-object":84,"./_object-dp":96,"./_uid":124}],94:[function(_dereq_,module,exports){
var global    = _dereq_('./_global')
  , macrotask = _dereq_('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = _dereq_('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":61,"./_global":75,"./_task":117}],95:[function(_dereq_,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = _dereq_('./_an-object')
  , dPs         = _dereq_('./_object-dps')
  , enumBugKeys = _dereq_('./_enum-bug-keys')
  , IE_PROTO    = _dereq_('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _dereq_('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _dereq_('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":54,"./_dom-create":69,"./_enum-bug-keys":70,"./_html":78,"./_object-dps":97,"./_shared-key":113}],96:[function(_dereq_,module,exports){
var anObject       = _dereq_('./_an-object')
  , IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define')
  , toPrimitive    = _dereq_('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = _dereq_('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":54,"./_descriptors":68,"./_ie8-dom-define":79,"./_to-primitive":123}],97:[function(_dereq_,module,exports){
var dP       = _dereq_('./_object-dp')
  , anObject = _dereq_('./_an-object')
  , getKeys  = _dereq_('./_object-keys');

module.exports = _dereq_('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":54,"./_descriptors":68,"./_object-dp":96,"./_object-keys":104}],98:[function(_dereq_,module,exports){
var pIE            = _dereq_('./_object-pie')
  , createDesc     = _dereq_('./_property-desc')
  , toIObject      = _dereq_('./_to-iobject')
  , toPrimitive    = _dereq_('./_to-primitive')
  , has            = _dereq_('./_has')
  , IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = _dereq_('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":68,"./_has":76,"./_ie8-dom-define":79,"./_object-pie":105,"./_property-desc":107,"./_to-iobject":120,"./_to-primitive":123}],99:[function(_dereq_,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = _dereq_('./_to-iobject')
  , gOPN      = _dereq_('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":100,"./_to-iobject":120}],100:[function(_dereq_,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = _dereq_('./_object-keys-internal')
  , hiddenKeys = _dereq_('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":70,"./_object-keys-internal":103}],101:[function(_dereq_,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],102:[function(_dereq_,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = _dereq_('./_has')
  , toObject    = _dereq_('./_to-object')
  , IE_PROTO    = _dereq_('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":76,"./_shared-key":113,"./_to-object":122}],103:[function(_dereq_,module,exports){
var has          = _dereq_('./_has')
  , toIObject    = _dereq_('./_to-iobject')
  , arrayIndexOf = _dereq_('./_array-includes')(false)
  , IE_PROTO     = _dereq_('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":56,"./_has":76,"./_shared-key":113,"./_to-iobject":120}],104:[function(_dereq_,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _dereq_('./_object-keys-internal')
  , enumBugKeys = _dereq_('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":70,"./_object-keys-internal":103}],105:[function(_dereq_,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],106:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_('./_export')
  , core    = _dereq_('./_core')
  , fails   = _dereq_('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":65,"./_export":72,"./_fails":73}],107:[function(_dereq_,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],108:[function(_dereq_,module,exports){
var hide = _dereq_('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":77}],109:[function(_dereq_,module,exports){
module.exports = _dereq_('./_hide');
},{"./_hide":77}],110:[function(_dereq_,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = _dereq_('./_is-object')
  , anObject = _dereq_('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = _dereq_('./_ctx')(Function.call, _dereq_('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":54,"./_ctx":66,"./_is-object":84,"./_object-gopd":98}],111:[function(_dereq_,module,exports){
'use strict';
var global      = _dereq_('./_global')
  , core        = _dereq_('./_core')
  , dP          = _dereq_('./_object-dp')
  , DESCRIPTORS = _dereq_('./_descriptors')
  , SPECIES     = _dereq_('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":65,"./_descriptors":68,"./_global":75,"./_object-dp":96,"./_wks":127}],112:[function(_dereq_,module,exports){
var def = _dereq_('./_object-dp').f
  , has = _dereq_('./_has')
  , TAG = _dereq_('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":76,"./_object-dp":96,"./_wks":127}],113:[function(_dereq_,module,exports){
var shared = _dereq_('./_shared')('keys')
  , uid    = _dereq_('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":114,"./_uid":124}],114:[function(_dereq_,module,exports){
var global = _dereq_('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":75}],115:[function(_dereq_,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = _dereq_('./_an-object')
  , aFunction = _dereq_('./_a-function')
  , SPECIES   = _dereq_('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":51,"./_an-object":54,"./_wks":127}],116:[function(_dereq_,module,exports){
var toInteger = _dereq_('./_to-integer')
  , defined   = _dereq_('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":67,"./_to-integer":119}],117:[function(_dereq_,module,exports){
var ctx                = _dereq_('./_ctx')
  , invoke             = _dereq_('./_invoke')
  , html               = _dereq_('./_html')
  , cel                = _dereq_('./_dom-create')
  , global             = _dereq_('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_dereq_('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":61,"./_ctx":66,"./_dom-create":69,"./_global":75,"./_html":78,"./_invoke":80}],118:[function(_dereq_,module,exports){
var toInteger = _dereq_('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":119}],119:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],120:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_('./_iobject')
  , defined = _dereq_('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":67,"./_iobject":81}],121:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":119}],122:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":67}],123:[function(_dereq_,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = _dereq_('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":84}],124:[function(_dereq_,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],125:[function(_dereq_,module,exports){
var global         = _dereq_('./_global')
  , core           = _dereq_('./_core')
  , LIBRARY        = _dereq_('./_library')
  , wksExt         = _dereq_('./_wks-ext')
  , defineProperty = _dereq_('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":65,"./_global":75,"./_library":92,"./_object-dp":96,"./_wks-ext":126}],126:[function(_dereq_,module,exports){
exports.f = _dereq_('./_wks');
},{"./_wks":127}],127:[function(_dereq_,module,exports){
var store      = _dereq_('./_shared')('wks')
  , uid        = _dereq_('./_uid')
  , Symbol     = _dereq_('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":75,"./_shared":114,"./_uid":124}],128:[function(_dereq_,module,exports){
var classof   = _dereq_('./_classof')
  , ITERATOR  = _dereq_('./_wks')('iterator')
  , Iterators = _dereq_('./_iterators');
module.exports = _dereq_('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":60,"./_core":65,"./_iterators":90,"./_wks":127}],129:[function(_dereq_,module,exports){
var anObject = _dereq_('./_an-object')
  , get      = _dereq_('./core.get-iterator-method');
module.exports = _dereq_('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":54,"./_core":65,"./core.get-iterator-method":128}],130:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_('./_add-to-unscopables')
  , step             = _dereq_('./_iter-step')
  , Iterators        = _dereq_('./_iterators')
  , toIObject        = _dereq_('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":52,"./_iter-define":87,"./_iter-step":89,"./_iterators":90,"./_to-iobject":120}],131:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_('./_collection-strong');

// 23.1 Map Objects
module.exports = _dereq_('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":64,"./_collection-strong":62}],132:[function(_dereq_,module,exports){
var $export = _dereq_('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !_dereq_('./_descriptors'), 'Object', {defineProperties: _dereq_('./_object-dps')});
},{"./_descriptors":68,"./_export":72,"./_object-dps":97}],133:[function(_dereq_,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = _dereq_('./_is-object')
  , meta     = _dereq_('./_meta').onFreeze;

_dereq_('./_object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"./_is-object":84,"./_meta":93,"./_object-sap":106}],134:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_('./_to-object')
  , $keys    = _dereq_('./_object-keys');

_dereq_('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":104,"./_object-sap":106,"./_to-object":122}],135:[function(_dereq_,module,exports){

},{}],136:[function(_dereq_,module,exports){
'use strict';
var LIBRARY            = _dereq_('./_library')
  , global             = _dereq_('./_global')
  , ctx                = _dereq_('./_ctx')
  , classof            = _dereq_('./_classof')
  , $export            = _dereq_('./_export')
  , isObject           = _dereq_('./_is-object')
  , anObject           = _dereq_('./_an-object')
  , aFunction          = _dereq_('./_a-function')
  , anInstance         = _dereq_('./_an-instance')
  , forOf              = _dereq_('./_for-of')
  , setProto           = _dereq_('./_set-proto').set
  , speciesConstructor = _dereq_('./_species-constructor')
  , task               = _dereq_('./_task').set
  , microtask          = _dereq_('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_dereq_('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _dereq_('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
_dereq_('./_set-to-string-tag')($Promise, PROMISE);
_dereq_('./_set-species')(PROMISE);
Wrapper = _dereq_('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && _dereq_('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":51,"./_an-instance":53,"./_an-object":54,"./_classof":60,"./_core":65,"./_ctx":66,"./_export":72,"./_for-of":74,"./_global":75,"./_is-object":84,"./_iter-detect":88,"./_library":92,"./_microtask":94,"./_redefine-all":108,"./_set-proto":110,"./_set-species":111,"./_set-to-string-tag":112,"./_species-constructor":115,"./_task":117,"./_wks":127}],137:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_('./_collection-strong');

// 23.2 Set Objects
module.exports = _dereq_('./_collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":64,"./_collection-strong":62}],138:[function(_dereq_,module,exports){
'use strict';
var $at  = _dereq_('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":87,"./_string-at":116}],139:[function(_dereq_,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = _dereq_('./_global')
  , has            = _dereq_('./_has')
  , DESCRIPTORS    = _dereq_('./_descriptors')
  , $export        = _dereq_('./_export')
  , redefine       = _dereq_('./_redefine')
  , META           = _dereq_('./_meta').KEY
  , $fails         = _dereq_('./_fails')
  , shared         = _dereq_('./_shared')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , uid            = _dereq_('./_uid')
  , wks            = _dereq_('./_wks')
  , wksExt         = _dereq_('./_wks-ext')
  , wksDefine      = _dereq_('./_wks-define')
  , keyOf          = _dereq_('./_keyof')
  , enumKeys       = _dereq_('./_enum-keys')
  , isArray        = _dereq_('./_is-array')
  , anObject       = _dereq_('./_an-object')
  , toIObject      = _dereq_('./_to-iobject')
  , toPrimitive    = _dereq_('./_to-primitive')
  , createDesc     = _dereq_('./_property-desc')
  , _create        = _dereq_('./_object-create')
  , gOPNExt        = _dereq_('./_object-gopn-ext')
  , $GOPD          = _dereq_('./_object-gopd')
  , $DP            = _dereq_('./_object-dp')
  , $keys          = _dereq_('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  _dereq_('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  _dereq_('./_object-pie').f  = $propertyIsEnumerable;
  _dereq_('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !_dereq_('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":54,"./_descriptors":68,"./_enum-keys":71,"./_export":72,"./_fails":73,"./_global":75,"./_has":76,"./_hide":77,"./_is-array":83,"./_keyof":91,"./_library":92,"./_meta":93,"./_object-create":95,"./_object-dp":96,"./_object-gopd":98,"./_object-gopn":100,"./_object-gopn-ext":99,"./_object-gops":101,"./_object-keys":104,"./_object-pie":105,"./_property-desc":107,"./_redefine":109,"./_set-to-string-tag":112,"./_shared":114,"./_to-iobject":120,"./_to-primitive":123,"./_uid":124,"./_wks":127,"./_wks-define":125,"./_wks-ext":126}],140:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_('./_export');

$export($export.P + $export.R, 'Map', {toJSON: _dereq_('./_collection-to-json')('Map')});
},{"./_collection-to-json":63,"./_export":72}],141:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_('./_export');

$export($export.P + $export.R, 'Set', {toJSON: _dereq_('./_collection-to-json')('Set')});
},{"./_collection-to-json":63,"./_export":72}],142:[function(_dereq_,module,exports){
_dereq_('./_wks-define')('asyncIterator');
},{"./_wks-define":125}],143:[function(_dereq_,module,exports){
_dereq_('./_wks-define')('observable');
},{"./_wks-define":125}],144:[function(_dereq_,module,exports){
_dereq_('./es6.array.iterator');
var global        = _dereq_('./_global')
  , hide          = _dereq_('./_hide')
  , Iterators     = _dereq_('./_iterators')
  , TO_STRING_TAG = _dereq_('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":75,"./_hide":77,"./_iterators":90,"./_wks":127,"./es6.array.iterator":130}],145:[function(_dereq_,module,exports){
//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var Backoff = _dereq_('./lib/backoff');
var ExponentialBackoffStrategy = _dereq_('./lib/strategy/exponential');
var FibonacciBackoffStrategy = _dereq_('./lib/strategy/fibonacci');
var FunctionCall = _dereq_('./lib/function_call.js');

module.exports.Backoff = Backoff;
module.exports.FunctionCall = FunctionCall;
module.exports.FibonacciStrategy = FibonacciBackoffStrategy;
module.exports.ExponentialStrategy = ExponentialBackoffStrategy;

// Constructs a Fibonacci backoff.
module.exports.fibonacci = function(options) {
    return new Backoff(new FibonacciBackoffStrategy(options));
};

// Constructs an exponential backoff.
module.exports.exponential = function(options) {
    return new Backoff(new ExponentialBackoffStrategy(options));
};

// Constructs a FunctionCall for the given function and arguments.
module.exports.call = function(fn, vargs, callback) {
    var args = Array.prototype.slice.call(arguments);
    fn = args[0];
    vargs = args.slice(1, args.length - 1);
    callback = args[args.length - 1];
    return new FunctionCall(fn, vargs, callback);
};

},{"./lib/backoff":146,"./lib/function_call.js":147,"./lib/strategy/exponential":148,"./lib/strategy/fibonacci":149}],146:[function(_dereq_,module,exports){
//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = _dereq_('events');
var precond = _dereq_('precond');
var util = _dereq_('util');

// A class to hold the state of a backoff operation. Accepts a backoff strategy
// to generate the backoff delays.
function Backoff(backoffStrategy) {
    events.EventEmitter.call(this);

    this.backoffStrategy_ = backoffStrategy;
    this.maxNumberOfRetry_ = -1;
    this.backoffNumber_ = 0;
    this.backoffDelay_ = 0;
    this.timeoutID_ = -1;

    this.handlers = {
        backoff: this.onBackoff_.bind(this)
    };
}
util.inherits(Backoff, events.EventEmitter);

// Sets a limit, greater than 0, on the maximum number of backoffs. A 'fail'
// event will be emitted when the limit is reached.
Backoff.prototype.failAfter = function(maxNumberOfRetry) {
    precond.checkArgument(maxNumberOfRetry > 0,
        'Expected a maximum number of retry greater than 0 but got %s.',
        maxNumberOfRetry);

    this.maxNumberOfRetry_ = maxNumberOfRetry;
};

// Starts a backoff operation. Accepts an optional parameter to let the
// listeners know why the backoff operation was started.
Backoff.prototype.backoff = function(err) {
    precond.checkState(this.timeoutID_ === -1, 'Backoff in progress.');

    if (this.backoffNumber_ === this.maxNumberOfRetry_) {
        this.emit('fail', err);
        this.reset();
    } else {
        this.backoffDelay_ = this.backoffStrategy_.next();
        this.timeoutID_ = setTimeout(this.handlers.backoff, this.backoffDelay_);
        this.emit('backoff', this.backoffNumber_, this.backoffDelay_, err);
    }
};

// Handles the backoff timeout completion.
Backoff.prototype.onBackoff_ = function() {
    this.timeoutID_ = -1;
    this.emit('ready', this.backoffNumber_, this.backoffDelay_);
    this.backoffNumber_++;
};

// Stops any backoff operation and resets the backoff delay to its inital value.
Backoff.prototype.reset = function() {
    this.backoffNumber_ = 0;
    this.backoffStrategy_.reset();
    clearTimeout(this.timeoutID_);
    this.timeoutID_ = -1;
};

module.exports = Backoff;

},{"events":160,"precond":168,"util":205}],147:[function(_dereq_,module,exports){
//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = _dereq_('events');
var precond = _dereq_('precond');
var util = _dereq_('util');

var Backoff = _dereq_('./backoff');
var FibonacciBackoffStrategy = _dereq_('./strategy/fibonacci');

// Wraps a function to be called in a backoff loop.
function FunctionCall(fn, args, callback) {
    events.EventEmitter.call(this);

    precond.checkIsFunction(fn, 'Expected fn to be a function.');
    precond.checkIsArray(args, 'Expected args to be an array.');
    precond.checkIsFunction(callback, 'Expected callback to be a function.');

    this.function_ = fn;
    this.arguments_ = args;
    this.callback_ = callback;
    this.lastResult_ = [];
    this.numRetries_ = 0;

    this.backoff_ = null;
    this.strategy_ = null;
    this.failAfter_ = -1;
    this.retryPredicate_ = FunctionCall.DEFAULT_RETRY_PREDICATE_;

    this.state_ = FunctionCall.State_.PENDING;
}
util.inherits(FunctionCall, events.EventEmitter);

// States in which the call can be.
FunctionCall.State_ = {
    // Call isn't started yet.
    PENDING: 0,
    // Call is in progress.
    RUNNING: 1,
    // Call completed successfully which means that either the wrapped function
    // returned successfully or the maximal number of backoffs was reached.
    COMPLETED: 2,
    // The call was aborted.
    ABORTED: 3
};

// The default retry predicate which considers any error as retriable.
FunctionCall.DEFAULT_RETRY_PREDICATE_ = function(err) {
  return true;
};

// Checks whether the call is pending.
FunctionCall.prototype.isPending = function() {
    return this.state_ == FunctionCall.State_.PENDING;
};

// Checks whether the call is in progress.
FunctionCall.prototype.isRunning = function() {
    return this.state_ == FunctionCall.State_.RUNNING;
};

// Checks whether the call is completed.
FunctionCall.prototype.isCompleted = function() {
    return this.state_ == FunctionCall.State_.COMPLETED;
};

// Checks whether the call is aborted.
FunctionCall.prototype.isAborted = function() {
    return this.state_ == FunctionCall.State_.ABORTED;
};

// Sets the backoff strategy to use. Can only be called before the call is
// started otherwise an exception will be thrown.
FunctionCall.prototype.setStrategy = function(strategy) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.strategy_ = strategy;
    return this; // Return this for chaining.
};

// Sets the predicate which will be used to determine whether the errors
// returned from the wrapped function should be retried or not, e.g. a
// network error would be retriable while a type error would stop the
// function call.
FunctionCall.prototype.retryIf = function(retryPredicate) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.retryPredicate_ = retryPredicate;
    return this;
};

// Returns all intermediary results returned by the wrapped function since
// the initial call.
FunctionCall.prototype.getLastResult = function() {
    return this.lastResult_.concat();
};

// Returns the number of times the wrapped function call was retried.
FunctionCall.prototype.getNumRetries = function() {
    return this.numRetries_;
};

// Sets the backoff limit.
FunctionCall.prototype.failAfter = function(maxNumberOfRetry) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.failAfter_ = maxNumberOfRetry;
    return this; // Return this for chaining.
};

// Aborts the call.
FunctionCall.prototype.abort = function() {
    if (this.isCompleted() || this.isAborted()) {
      return;
    }

    if (this.isRunning()) {
        this.backoff_.reset();
    }

    this.state_ = FunctionCall.State_.ABORTED;
    this.lastResult_ = [new Error('Backoff aborted.')];
    this.emit('abort');
    this.doCallback_();
};

// Initiates the call to the wrapped function. Accepts an optional factory
// function used to create the backoff instance; used when testing.
FunctionCall.prototype.start = function(backoffFactory) {
    precond.checkState(!this.isAborted(), 'FunctionCall is aborted.');
    precond.checkState(this.isPending(), 'FunctionCall already started.');

    var strategy = this.strategy_ || new FibonacciBackoffStrategy();

    this.backoff_ = backoffFactory ?
        backoffFactory(strategy) :
        new Backoff(strategy);

    this.backoff_.on('ready', this.doCall_.bind(this, true /* isRetry */));
    this.backoff_.on('fail', this.doCallback_.bind(this));
    this.backoff_.on('backoff', this.handleBackoff_.bind(this));

    if (this.failAfter_ > 0) {
        this.backoff_.failAfter(this.failAfter_);
    }

    this.state_ = FunctionCall.State_.RUNNING;
    this.doCall_(false /* isRetry */);
};

// Calls the wrapped function.
FunctionCall.prototype.doCall_ = function(isRetry) {
    if (isRetry) {
        this.numRetries_++;
    }
    var eventArgs = ['call'].concat(this.arguments_);
    events.EventEmitter.prototype.emit.apply(this, eventArgs);
    var callback = this.handleFunctionCallback_.bind(this);
    this.function_.apply(null, this.arguments_.concat(callback));
};

// Calls the wrapped function's callback with the last result returned by the
// wrapped function.
FunctionCall.prototype.doCallback_ = function() {
    this.callback_.apply(null, this.lastResult_);
};

// Handles wrapped function's completion. This method acts as a replacement
// for the original callback function.
FunctionCall.prototype.handleFunctionCallback_ = function() {
    if (this.isAborted()) {
        return;
    }

    var args = Array.prototype.slice.call(arguments);
    this.lastResult_ = args; // Save last callback arguments.
    events.EventEmitter.prototype.emit.apply(this, ['callback'].concat(args));

    var err = args[0];
    if (err && this.retryPredicate_(err)) {
        this.backoff_.backoff(err);
    } else {
        this.state_ = FunctionCall.State_.COMPLETED;
        this.doCallback_();
    }
};

// Handles the backoff event by reemitting it.
FunctionCall.prototype.handleBackoff_ = function(number, delay, err) {
    this.emit('backoff', number, delay, err);
};

module.exports = FunctionCall;

},{"./backoff":146,"./strategy/fibonacci":149,"events":160,"precond":168,"util":205}],148:[function(_dereq_,module,exports){
//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var util = _dereq_('util');
var precond = _dereq_('precond');

var BackoffStrategy = _dereq_('./strategy');

// Exponential backoff strategy.
function ExponentialBackoffStrategy(options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
    this.factor_ = ExponentialBackoffStrategy.DEFAULT_FACTOR;

    if (options && options.factor !== undefined) {
        precond.checkArgument(options.factor > 1,
            'Exponential factor should be greater than 1 but got %s.',
            options.factor);
        this.factor_ = options.factor;
    }
}
util.inherits(ExponentialBackoffStrategy, BackoffStrategy);

// Default multiplication factor used to compute the next backoff delay from
// the current one. The value can be overridden by passing a custom factor as
// part of the options.
ExponentialBackoffStrategy.DEFAULT_FACTOR = 2;

ExponentialBackoffStrategy.prototype.next_ = function() {
    this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_;
    return this.backoffDelay_;
};

ExponentialBackoffStrategy.prototype.reset_ = function() {
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
};

module.exports = ExponentialBackoffStrategy;

},{"./strategy":150,"precond":168,"util":205}],149:[function(_dereq_,module,exports){
//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var util = _dereq_('util');

var BackoffStrategy = _dereq_('./strategy');

// Fibonacci backoff strategy.
function FibonacciBackoffStrategy(options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
}
util.inherits(FibonacciBackoffStrategy, BackoffStrategy);

FibonacciBackoffStrategy.prototype.next_ = function() {
    var backoffDelay = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ += this.backoffDelay_;
    this.backoffDelay_ = backoffDelay;
    return backoffDelay;
};

FibonacciBackoffStrategy.prototype.reset_ = function() {
    this.nextBackoffDelay_ = this.getInitialDelay();
    this.backoffDelay_ = 0;
};

module.exports = FibonacciBackoffStrategy;

},{"./strategy":150,"util":205}],150:[function(_dereq_,module,exports){
//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = _dereq_('events');
var util = _dereq_('util');

function isDef(value) {
    return value !== undefined && value !== null;
}

// Abstract class defining the skeleton for the backoff strategies. Accepts an
// object holding the options for the backoff strategy:
//
//  * `randomisationFactor`: The randomisation factor which must be between 0
//     and 1 where 1 equates to a randomization factor of 100% and 0 to no
//     randomization.
//  * `initialDelay`: The backoff initial delay in milliseconds.
//  * `maxDelay`: The backoff maximal delay in milliseconds.
function BackoffStrategy(options) {
    options = options || {};

    if (isDef(options.initialDelay) && options.initialDelay < 1) {
        throw new Error('The initial timeout must be greater than 0.');
    } else if (isDef(options.maxDelay) && options.maxDelay < 1) {
        throw new Error('The maximal timeout must be greater than 0.');
    }

    this.initialDelay_ = options.initialDelay || 100;
    this.maxDelay_ = options.maxDelay || 10000;

    if (this.maxDelay_ <= this.initialDelay_) {
        throw new Error('The maximal backoff delay must be ' +
                        'greater than the initial backoff delay.');
    }

    if (isDef(options.randomisationFactor) &&
        (options.randomisationFactor < 0 || options.randomisationFactor > 1)) {
        throw new Error('The randomisation factor must be between 0 and 1.');
    }

    this.randomisationFactor_ = options.randomisationFactor || 0;
}

// Gets the maximal backoff delay.
BackoffStrategy.prototype.getMaxDelay = function() {
    return this.maxDelay_;
};

// Gets the initial backoff delay.
BackoffStrategy.prototype.getInitialDelay = function() {
    return this.initialDelay_;
};

// Template method that computes and returns the next backoff delay in
// milliseconds.
BackoffStrategy.prototype.next = function() {
    var backoffDelay = this.next_();
    var randomisationMultiple = 1 + Math.random() * this.randomisationFactor_;
    var randomizedDelay = Math.round(backoffDelay * randomisationMultiple);
    return randomizedDelay;
};

// Computes and returns the next backoff delay. Intended to be overridden by
// subclasses.
BackoffStrategy.prototype.next_ = function() {
    throw new Error('BackoffStrategy.next_() unimplemented.');
};

// Template method that resets the backoff delay to its initial value.
BackoffStrategy.prototype.reset = function() {
    this.reset_();
};

// Resets the backoff delay to its initial value. Intended to be overridden by
// subclasses.
BackoffStrategy.prototype.reset_ = function() {
    throw new Error('BackoffStrategy.reset_() unimplemented.');
};

module.exports = BackoffStrategy;

},{"events":160,"util":205}],151:[function(_dereq_,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],152:[function(_dereq_,module,exports){
arguments[4][135][0].apply(exports,arguments)
},{"dup":135}],153:[function(_dereq_,module,exports){
arguments[4][135][0].apply(exports,arguments)
},{"dup":135}],154:[function(_dereq_,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = _dereq_('base64-js')
var ieee754 = _dereq_('ieee754')
var isArray = _dereq_('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
 *     on objects.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  function Bar () {}
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    arr.constructor = Bar
    return arr.foo() === 42 && // typed array instances can be augmented
        arr.constructor === Bar && // constructor can be set
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    array.byteLength
    that = Buffer._augment(new Uint8Array(array))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` is deprecated
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` is deprecated
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":151,"ieee754":162,"isarray":155}],155:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],156:[function(_dereq_,module,exports){
module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}

},{}],157:[function(_dereq_,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":_dereq_("../../is-buffer/index.js")})
},{"../../is-buffer/index.js":164}],158:[function(_dereq_,module,exports){
module.exports = _dereq_('./lib');

},{"./lib":159}],159:[function(_dereq_,module,exports){
var FORMAT_REGEXP = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;

function matchToInteger(match){
  return match === undefined ? 0 : parseInt(match, 10);
}

exports.fromSeconds = function(seconds){
  if(typeof seconds !== 'number'){
    throw new TypeError('Argument `seconds` must be a number');
  }

  var fullSeconds = seconds % 60;
  var fullMinutesInSeconds = (seconds - fullSeconds) % 3600;

  return {
    hours: (seconds - fullSeconds - fullMinutesInSeconds) / 3600,
    minutes: fullMinutesInSeconds / 60,
    seconds: fullSeconds
  };
};

exports.fromString = function(string){
  if(typeof string !== 'string'){
    throw new TypeError('Argument `string` must be a string');
  }

  var matches = string.match(FORMAT_REGEXP);
  if(matches === null || (matches[1] === undefined && matches[2] === undefined && matches[3] === undefined)){
    throw new Error('Could not parse "' + string + '" as a duration.');
  }

  return {
    hours:   matchToInteger(matches[1]),
    minutes: matchToInteger(matches[2]),
    seconds: matchToInteger(matches[3])
  };
};

exports.toString = function(duration) {
  if(typeof duration === 'number'){
    duration = exports.fromSeconds(duration);
  }

  var result = 'PT';

  if(duration.hours > 0){
    result += duration.hours + 'H';
  }
  if(duration.minutes > 0){
    result += duration.minutes + 'M';
  }
  if(duration.seconds > 0){
    result += duration.seconds + 'S';
  }

  if(result === 'PT'){
    result += '0S';
  }

  return result;
};

exports.toSeconds = function(stringOrDuration) {
  var duration = stringOrDuration;

  if(typeof stringOrDuration === 'string') {
    duration = exports.fromString(stringOrDuration);
  }

  return duration.hours * 3600 + duration.minutes * 60 + duration.seconds;
};

},{}],160:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],161:[function(_dereq_,module,exports){
var http = _dereq_('http');

var https = module.exports;

for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
};

https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    params.protocol = 'https:';
    return http.request.call(this, params, cb);
}

},{"http":177}],162:[function(_dereq_,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],163:[function(_dereq_,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],164:[function(_dereq_,module,exports){
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */

module.exports = function (obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

},{}],165:[function(_dereq_,module,exports){
/*

  Javascript State Machine Library - https://github.com/jakesgordon/javascript-state-machine

  Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors
  Released under the MIT license - https://github.com/jakesgordon/javascript-state-machine/blob/master/LICENSE

*/

(function () {

  var StateMachine = {

    //---------------------------------------------------------------------------

    VERSION: "2.3.5",

    //---------------------------------------------------------------------------

    Result: {
      SUCCEEDED:    1, // the event transitioned successfully from one state to another
      NOTRANSITION: 2, // the event was successfull but no state transition was necessary
      CANCELLED:    3, // the event was cancelled by the caller in a beforeEvent callback
      PENDING:      4  // the event is asynchronous and the caller is in control of when the transition occurs
    },

    Error: {
      INVALID_TRANSITION: 100, // caller tried to fire an event that was innapropriate in the current state
      PENDING_TRANSITION: 200, // caller tried to fire an event while an async transition was still pending
      INVALID_CALLBACK:   300 // caller provided callback function threw an exception
    },

    WILDCARD: '*',
    ASYNC: 'async',

    //---------------------------------------------------------------------------

    create: function(cfg, target) {

      var initial      = (typeof cfg.initial == 'string') ? { state: cfg.initial } : cfg.initial; // allow for a simple string, or an object with { state: 'foo', event: 'setup', defer: true|false }
      var terminal     = cfg.terminal || cfg['final'];
      var fsm          = target || cfg.target  || {};
      var events       = cfg.events || [];
      var callbacks    = cfg.callbacks || {};
      var map          = {}; // track state transitions allowed for an event { event: { from: [ to ] } }
      var transitions  = {}; // track events allowed from a state            { state: [ event ] }

      var add = function(e) {
        var from = (e.from instanceof Array) ? e.from : (e.from ? [e.from] : [StateMachine.WILDCARD]); // allow 'wildcard' transition if 'from' is not specified
        map[e.name] = map[e.name] || {};
        for (var n = 0 ; n < from.length ; n++) {
          transitions[from[n]] = transitions[from[n]] || [];
          transitions[from[n]].push(e.name);

          map[e.name][from[n]] = e.to || from[n]; // allow no-op transition if 'to' is not specified
        }
      };

      if (initial) {
        initial.event = initial.event || 'startup';
        add({ name: initial.event, from: 'none', to: initial.state });
      }

      for(var n = 0 ; n < events.length ; n++)
        add(events[n]);

      for(var name in map) {
        if (map.hasOwnProperty(name))
          fsm[name] = StateMachine.buildEvent(name, map[name]);
      }

      for(var name in callbacks) {
        if (callbacks.hasOwnProperty(name))
          fsm[name] = callbacks[name]
      }

      fsm.current     = 'none';
      fsm.is          = function(state) { return (state instanceof Array) ? (state.indexOf(this.current) >= 0) : (this.current === state); };
      fsm.can         = function(event) { return !this.transition && (map[event].hasOwnProperty(this.current) || map[event].hasOwnProperty(StateMachine.WILDCARD)); }
      fsm.cannot      = function(event) { return !this.can(event); };
      fsm.transitions = function()      { return transitions[this.current]; };
      fsm.isFinished  = function()      { return this.is(terminal); };
      fsm.error       = cfg.error || function(name, from, to, args, error, msg, e) { throw e || msg; }; // default behavior when something unexpected happens is to throw an exception, but caller can override this behavior if desired (see github issue #3 and #17)

      if (initial && !initial.defer)
        fsm[initial.event]();

      return fsm;

    },

    //===========================================================================

    doCallback: function(fsm, func, name, from, to, args) {
      if (func) {
        try {
          return func.apply(fsm, [name, from, to].concat(args));
        }
        catch(e) {
          return fsm.error(name, from, to, args, StateMachine.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", e);
        }
      }
    },

    beforeAnyEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbeforeevent'],                       name, from, to, args); },
    afterAnyEvent:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafterevent'] || fsm['onevent'],      name, from, to, args); },
    leaveAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleavestate'],                        name, from, to, args); },
    enterAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenterstate'] || fsm['onstate'],      name, from, to, args); },
    changeState:     function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onchangestate'],                       name, from, to, args); },

    beforeThisEvent: function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbefore' + name],                     name, from, to, args); },
    afterThisEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafter'  + name] || fsm['on' + name], name, from, to, args); },
    leaveThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleave'  + from],                     name, from, to, args); },
    enterThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenter'  + to]   || fsm['on' + to],   name, from, to, args); },

    beforeEvent: function(fsm, name, from, to, args) {
      if ((false === StateMachine.beforeThisEvent(fsm, name, from, to, args)) ||
          (false === StateMachine.beforeAnyEvent( fsm, name, from, to, args)))
        return false;
    },

    afterEvent: function(fsm, name, from, to, args) {
      StateMachine.afterThisEvent(fsm, name, from, to, args);
      StateMachine.afterAnyEvent( fsm, name, from, to, args);
    },

    leaveState: function(fsm, name, from, to, args) {
      var specific = StateMachine.leaveThisState(fsm, name, from, to, args),
          general  = StateMachine.leaveAnyState( fsm, name, from, to, args);
      if ((false === specific) || (false === general))
        return false;
      else if ((StateMachine.ASYNC === specific) || (StateMachine.ASYNC === general))
        return StateMachine.ASYNC;
    },

    enterState: function(fsm, name, from, to, args) {
      StateMachine.enterThisState(fsm, name, from, to, args);
      StateMachine.enterAnyState( fsm, name, from, to, args);
    },

    //===========================================================================

    buildEvent: function(name, map) {
      return function() {

        var from  = this.current;
        var to    = map[from] || map[StateMachine.WILDCARD] || from;
        var args  = Array.prototype.slice.call(arguments); // turn arguments into pure array

        if (this.transition)
          return this.error(name, from, to, args, StateMachine.Error.PENDING_TRANSITION, "event " + name + " inappropriate because previous transition did not complete");

        if (this.cannot(name))
          return this.error(name, from, to, args, StateMachine.Error.INVALID_TRANSITION, "event " + name + " inappropriate in current state " + this.current);

        if (false === StateMachine.beforeEvent(this, name, from, to, args))
          return StateMachine.Result.CANCELLED;

        if (from === to) {
          StateMachine.afterEvent(this, name, from, to, args);
          return StateMachine.Result.NOTRANSITION;
        }

        // prepare a transition method for use EITHER lower down, or by caller if they want an async transition (indicated by an ASYNC return value from leaveState)
        var fsm = this;
        this.transition = function() {
          fsm.transition = null; // this method should only ever be called once
          fsm.current = to;
          StateMachine.enterState( fsm, name, from, to, args);
          StateMachine.changeState(fsm, name, from, to, args);
          StateMachine.afterEvent( fsm, name, from, to, args);
          return StateMachine.Result.SUCCEEDED;
        };
        this.transition.cancel = function() { // provide a way for caller to cancel async transition if desired (issue #22)
          fsm.transition = null;
          StateMachine.afterEvent(fsm, name, from, to, args);
        }

        var leave = StateMachine.leaveState(this, name, from, to, args);
        if (false === leave) {
          this.transition = null;
          return StateMachine.Result.CANCELLED;
        }
        else if (StateMachine.ASYNC === leave) {
          return StateMachine.Result.PENDING;
        }
        else {
          if (this.transition) // need to check in case user manually called transition() but forgot to return StateMachine.ASYNC
            return this.transition();
        }

      };
    }

  }; // StateMachine

  //===========================================================================

  //======
  // NODE
  //======
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = StateMachine;
    }
    exports.StateMachine = StateMachine;
  }
  //============
  // AMD/REQUIRE
  //============
  else if (typeof define === 'function' && define.amd) {
    define(function(_dereq_) { return StateMachine; });
  }
  //========
  // BROWSER
  //========
  else if (typeof window !== 'undefined') {
    window.StateMachine = StateMachine;
  }
  //===========
  // WEB WORKER
  //===========
  else if (typeof self !== 'undefined') {
    self.StateMachine = StateMachine;
  }

}());

},{}],166:[function(_dereq_,module,exports){
/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (typeof module === 'object' && module.exports && typeof _dereq_ === 'function') {
        module.exports = definition();
    } else if (typeof define === 'function' && typeof define.amd === 'object') {
        define(definition);
    } else {
        root.log = definition();
    }
}(this, function () {
    "use strict";
    var noop = function() {};
    var undefinedType = "undefined";

    function realMethod(methodName) {
        if (typeof console === undefinedType) {
            return false; // We can't build a real method without a console to log to
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // these private functions always need `this` to be set properly

    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }
    }

    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public API
       *
       */

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Package-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    return defaultLogger;
}));

},{}],167:[function(_dereq_,module,exports){
(function (global){
/*!
 * Platform.js v1.3.1 <http://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://d10.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <http://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object` */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object */
  var oldRoot = root;

  /** Detect free variable `exports` */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module` */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Opera regexp */
  var reOpera = /\bOpera/;

  /** Possible global object */
  var thisBinding = this;

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // platform tokens defined at
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '6.4':  '10',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // detect Windows version from platform tokens
    if (pattern && label && /^Win/i.test(os) &&
        (data = data[0/*Opera 9.25 fix*/, /[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // correct character case and cleanup
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object */
    var context = root;

    /** Used to flag when a custom context is provided */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // juggle arguments
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object */
    var nav = context.navigator || {};

    /** Browser user agent string */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope] */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environment */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based)
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]` */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime */
    var data;

    /** The CPU architecture */
    var arch = ua;

    /** Platform description array */
    var description = [];

    /** Platform alpha/beta indicator */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform */
    var useFeatures = ua == userAgent;

    /** The browser/environment version */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important) */
    var layout = getLayout([
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important) */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      'Midori',
      'Nook Browser',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      'Sunrise',
      'Swiftfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important) */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nook',
      'PlayBook',
      'PlayStation 4',
      'PlayStation 3',
      'PlayStation Vita',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation 4': 1, 'PlayStation 3': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable OSes (order is important) */
    var os = getOS([
      'Windows Phone ',
      'Android',
      'CentOS',
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // lookup the manufacturer by product or scan the UA for the manufacturer
        return result || (
          value[product] ||
          value[0/*Opera 9.25 fix*/, /^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // split by forward slash and append product version if needed
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // correct character case and cleanup
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // convert layout to an array so we can add extra details
    layout && (layout = [layout]);

    // detect product names that contain their manufacturer's name
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // clean up Google TV
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // detect simulators
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // detect iOS
    if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // detect Kubuntu
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // detect Android browsers
    else if (manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // detect false positives for Firefox/Safari
    else if (!name || (data = !/\bMinefield\b|\(Android;/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // escape the `/` for Firefox 1
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // clear name of false positives
        name = null;
      }
      // reassign a generic name
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // detect Firefox OS
    if ((data = /\((Mobile|Tablet).*?Firefox\b/i.exec(ua)) && data[1]) {
      os = 'Firefox OS';
      if (!product) {
        product = data[1];
      }
    }
    // detect non-Opera versions (order is important)
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // detect stubborn layout engines
    if (layout == 'iCab' && parseFloat(version) > 3) {
      layout = ['WebKit'];
    } else if (
        layout != 'Trident' &&
        (data =
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident')
        )
    ) {
      layout = [data];
    }
    // detect NetFront on PlayStation
    else if (/\bPlayStation\b(?! Vita\b)/i.test(name) && layout == 'WebKit') {
      layout = ['NetFront'];
    }
    // detect Windows Phone 7 desktop mode
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // detect Windows Phone 8+ desktop mode
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8+';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // detect IE 11 and above
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (!/\bWPDesktop\b/i.test(ua)) {
        if (name) {
          description.push('identifying as ' + name + (version ? ' ' + version : ''));
        }
        name = 'IE';
      }
      version = data[1];
    }
    // detect Microsoft Edge
    else if ((name == 'Chrome' || name != 'IE') && (data = /\bEdge\/([\d.]+)/.exec(ua))) {
      name = 'Microsoft Edge';
      version = data[1];
      layout = ['Trident'];
    }
    // leverage environment features
    if (useFeatures) {
      // detect server-side environments
      // Rhino has a global function while others have a global object
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
          os || (os = data[0].os || null);
          try {
            data[1] = context.require('ringo/engine').version;
            version = data[1].join('.');
            name = 'RingoJS';
          } catch(e) {
            if (data[0].global.system == context.system) {
              name = 'Narwhal';
            }
          }
        }
        else if (typeof context.process == 'object' && (data = context.process)) {
          name = 'Node.js';
          arch = data.arch;
          os = data.platform;
          version = /[\d.]+/.exec(data.version)[0];
        }
        else if (rhino) {
          name = 'Rhino';
        }
      }
      // detect Adobe AIR
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // detect PhantomJS
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // detect IE compatibility modes
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // we're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // detect prerelease phases
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // detect Firefox Mobile
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // obscure Maxthon's unreliable version
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // detect Silk desktop/accelerated modes
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // detect Xbox 360 and Xbox One
    else if (/\bXbox\b/i.test(product)) {
      os = null;
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // add mobile postfix
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // detect IE platform preview
    else if (name == 'IE' && useFeatures && context.external === null) {
      description.unshift('platform preview');
    }
    // detect BlackBerry OS version
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // detect Opera identifying/masking itself as another browser
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && (
          product != 'Wii' && (
            (useFeatures && opera) ||
            (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
            (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
            (name == 'IE' && (
              (os && !/^Win/.test(os) && version > 5.5) ||
              /\bWindows XP\b/.test(os) && version > 8 ||
              version == 8 && !/\bTrident\b/.test(ua)
            ))
          )
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {

      // when "indentifying", the UA contains both Opera and the other browser's name
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // when "masking", the UA contains only the other browser's name
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // detect WebKit Nightly and approximate Chrome/Safari versions
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // correct build for numeric comparison
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // nightly builds are postfixed with a `+`
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // clear incorrect browser versions
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // use the full Chrome version when available
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // detect Blink layout engine
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && name != 'IE' && name != 'Microsoft Edge') {
        layout = ['Blink'];
      }
      // detect JavaScriptCore
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // add the postfix of ".x" or "+" for approximate versions
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // obscure version for some Safari 1-2 releases
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // detect Opera desktop modes
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // detect Chrome desktop mode
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // strip incorrect OS versions
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // add layout engine
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // don't add layout details to description if they are falsey
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // combine contextual information
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // append manufacturer
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // append product
    if (product) {
      description.push((/^on /.test(description[description.length -1]) ? '' : 'on ') + product);
    }
    // parse OS into an object
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // add browser/OS architecture
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // export platform
  // some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // define as an anonymous module so, through path mapping, it can be aliased
    define(function() {
      return parse();
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && freeModule) {
    // in Narwhal, Node.js, Rhino -require, or RingoJS
    forOwn(parse(), function(value, key) {
      freeExports[key] = value;
    });
  }
  // in a browser or Rhino
  else {
    root.platform = parse();
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],168:[function(_dereq_,module,exports){
/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

module.exports = _dereq_('./lib/checks');
},{"./lib/checks":169}],169:[function(_dereq_,module,exports){
/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = _dereq_('util');

var errors = module.exports = _dereq_('./errors');

function failCheck(ExceptionConstructor, callee, messageFormat, formatArgs) {
    messageFormat = messageFormat || '';
    var message = util.format.apply(this, [messageFormat].concat(formatArgs));
    var error = new ExceptionConstructor(message);
    Error.captureStackTrace(error, callee);
    throw error;
}

function failArgumentCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalArgumentError, callee, message, formatArgs);
}

function failStateCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalStateError, callee, message, formatArgs);
}

module.exports.checkArgument = function(value, message) {
    if (!value) {
        failArgumentCheck(arguments.callee, message,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkState = function(value, message) {
    if (!value) {
        failStateCheck(arguments.callee, message,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsDef = function(value, message) {
    if (value !== undefined) {
        return value;
    }

    failArgumentCheck(arguments.callee, message ||
        'Expected value to be defined but was undefined.',
        Array.prototype.slice.call(arguments, 2));
};

module.exports.checkIsDefAndNotNull = function(value, message) {
    // Note that undefined == null.
    if (value != null) {
        return value;
    }

    failArgumentCheck(arguments.callee, message ||
        'Expected value to be defined and not null but got "' +
        typeOf(value) + '".', Array.prototype.slice.call(arguments, 2));
};

// Fixed version of the typeOf operator which returns 'null' for null values
// and 'array' for arrays.
function typeOf(value) {
    var s = typeof value;
    if (s == 'object') {
        if (!value) {
            return 'null';
        } else if (value instanceof Array) {
            return 'array';
        }
    }
    return s;
}

function typeCheck(expect) {
    return function(value, message) {
        var type = typeOf(value);

        if (type == expect) {
            return value;
        }

        failArgumentCheck(arguments.callee, message ||
            'Expected "' + expect + '" but got "' + type + '".',
            Array.prototype.slice.call(arguments, 2));
    };
}

module.exports.checkIsString = typeCheck('string');
module.exports.checkIsArray = typeCheck('array');
module.exports.checkIsNumber = typeCheck('number');
module.exports.checkIsBoolean = typeCheck('boolean');
module.exports.checkIsFunction = typeCheck('function');
module.exports.checkIsObject = typeCheck('object');

},{"./errors":170,"util":205}],170:[function(_dereq_,module,exports){
/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = _dereq_('util');

function IllegalArgumentError(message) {
    Error.call(this, message);
    this.message = message;
}
util.inherits(IllegalArgumentError, Error);

IllegalArgumentError.prototype.name = 'IllegalArgumentError';

function IllegalStateError(message) {
    Error.call(this, message);
    this.message = message;
}
util.inherits(IllegalStateError, Error);

IllegalStateError.prototype.name = 'IllegalStateError';

module.exports.IllegalStateError = IllegalStateError;
module.exports.IllegalArgumentError = IllegalArgumentError;
},{"util":205}],171:[function(_dereq_,module,exports){
(function (process){
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn) {
  var args = new Array(arguments.length - 1);
  var i = 0;
  while (i < args.length) {
    args[i++] = arguments[i];
  }
  process.nextTick(function afterTick() {
    fn.apply(null, args);
  });
}

}).call(this,_dereq_('_process'))
},{"_process":172}],172:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],173:[function(_dereq_,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],174:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],175:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],176:[function(_dereq_,module,exports){
'use strict';

exports.decode = exports.parse = _dereq_('./decode');
exports.encode = exports.stringify = _dereq_('./encode');

},{"./decode":174,"./encode":175}],177:[function(_dereq_,module,exports){
(function (global){
var ClientRequest = _dereq_('./lib/request')
var extend = _dereq_('xtend')
var statusCodes = _dereq_('builtin-status-codes')
var url = _dereq_('url')

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/request":179,"builtin-status-codes":156,"url":201,"xtend":210}],178:[function(_dereq_,module,exports){
(function (global){
exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableByteStream)

exports.blobConstructor = false
try {
	new Blob([new ArrayBuffer(1)])
	exports.blobConstructor = true
} catch (e) {}

var xhr = new global.XMLHttpRequest()
// If location.host is empty, e.g. if this page/worker was loaded
// from a Blob, then use example.com to avoid an error
xhr.open('GET', global.location.host ? '/' : 'https://example.com')

function checkTypeSupport (type) {
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
// Safari 7.1 appears to have fixed this bug.
var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined'
var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice)

exports.arraybuffer = haveArrayBuffer && checkTypeSupport('arraybuffer')
// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer &&
	checkTypeSupport('moz-chunked-arraybuffer')
exports.overrideMimeType = isFunction(xhr.overrideMimeType)
exports.vbArray = isFunction(global.VBArray)

function isFunction (value) {
  return typeof value === 'function'
}

xhr = null // Help gc

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],179:[function(_dereq_,module,exports){
(function (process,global,Buffer){
var capability = _dereq_('./capability')
var inherits = _dereq_('inherits')
var response = _dereq_('./response')
var stream = _dereq_('readable-stream')
var toArrayBuffer = _dereq_('to-arraybuffer')

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary) {
	if (capability.fetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else if (capability.vbArray && preferBinary) {
		return 'text:vbarray'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary)

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var self = this
	return self._headers[name.toLowerCase()].value
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	var headersObj = self._headers
	var body
	if (opts.method === 'POST' || opts.method === 'PUT' || opts.method === 'PATCH') {
		if (capability.blobConstructor) {
			body = new global.Blob(self._body.map(function (buffer) {
				return toArrayBuffer(buffer)
			}), {
				type: (headersObj['content-type'] || {}).value || ''
			})
		} else {
			// get utf8 string
			body = Buffer.concat(self._body).toString()
		}
	}

	if (self._mode === 'fetch') {
		var headers = Object.keys(headersObj).map(function (name) {
			return [headersObj[name].name, headersObj[name].value]
		})

		global.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headers,
			body: body,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin'
		}).then(function (response) {
			self._fetchResponse = response
			self._connect()
		}, function (reason) {
			self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new global.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode.split(':')[0]

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		Object.keys(headersObj).forEach(function (name) {
			xhr.setRequestHeader(headersObj[name].name, headersObj[name].value)
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress()
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode)
	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
	var self = this
	self._destroyed = true
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	// Currently, there isn't a way to truly abort a fetch.
	// If you like bikeshedding, see https://github.com/whatwg/fetch/issues/27
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setTimeout = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'user-agent',
	'via'
]

}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer)
},{"./capability":178,"./response":180,"_process":172,"buffer":154,"inherits":163,"readable-stream":187,"to-arraybuffer":189}],180:[function(_dereq_,module,exports){
(function (process,global,Buffer){
var capability = _dereq_('./capability')
var inherits = _dereq_('inherits')
var stream = _dereq_('readable-stream')

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		// backwards compatible version of for (<item> of <iterable>):
		// for (var <item>,_i,_it = <iterable>[Symbol.iterator](); <item> = (_i = _it.next()).value,!_i.done;)
		for (var header, _i, _it = response.headers[Symbol.iterator](); header = (_i = _it.next()).value, !_i.done;) {
			self.headers[header[0].toLowerCase()] = header[1]
			self.rawHeaders.push(header[0], header[1])
		}

		// TODO: this doesn't respect backpressure. Once WritableStream is available, this can be fixed
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				if (result.done) {
					self.push(null)
					return
				}
				self.push(new Buffer(result.value))
				read()
			})
		}
		read()

	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {}

IncomingMessage.prototype._onXHRProgress = function () {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text:vbarray': // For IE9
			if (xhr.readyState !== rStates.DONE)
				break
			try {
				// This fails in IE8
				response = new global.VBArray(xhr.responseBody).toArray()
			} catch (e) {}
			if (response !== null) {
				self.push(new Buffer(response))
				break
			}
			// Falls through in IE8	
		case 'text':
			try { // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
				response = xhr.responseText
			} catch (e) {
				self._mode = 'text:vbarray'
				break
			}
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = new Buffer(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE)
				break
			response = xhr.response
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new global.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		self.push(null)
	}
}

}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer)
},{"./capability":178,"_process":172,"buffer":154,"inherits":163,"readable-stream":187}],181:[function(_dereq_,module,exports){
arguments[4][155][0].apply(exports,arguments)
},{"dup":155}],182:[function(_dereq_,module,exports){
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = _dereq_('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

var Readable = _dereq_('./_stream_readable');
var Writable = _dereq_('./_stream_writable');

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
},{"./_stream_readable":184,"./_stream_writable":186,"core-util-is":157,"inherits":163,"process-nextick-args":171}],183:[function(_dereq_,module,exports){
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = _dereq_('./_stream_transform');

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":185,"core-util-is":157,"inherits":163}],184:[function(_dereq_,module,exports){
(function (process){
'use strict';

module.exports = Readable;

/*<replacement>*/
var processNextTick = _dereq_('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var isArray = _dereq_('isarray');
/*</replacement>*/

/*<replacement>*/
var Buffer = _dereq_('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = _dereq_('events');

/*<replacement>*/
var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = _dereq_('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = _dereq_('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = _dereq_('buffer').Buffer;

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = _dereq_('util');
var debug = undefined;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

var Duplex;
function ReadableState(options, stream) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = _dereq_('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

var Duplex;
function Readable(options) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = _dereq_('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended) return 0;

  if (state.objectMode) return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
  }

  if (n <= 0) return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else {
      return state.length;
    }
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;

  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read pushed data synchronously, then `reading` will be false,
  // and we need to re-evaluate how much data we can return to the user.
  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended) state.needReadable = true;

  // If we tried to read() past the EOF, then emit end on the next tick.
  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    if (false === ret) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      if (state.pipesCount === 1 && state.pipes[0] === dest && src.listenerCount('data') === 1 && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error) dest.on('error', onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error];

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  // If listening to data, and it has not explicitly been paused,
  // then call resume to start the flow of data on the next tick.
  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && !this._readableState.endEmitted) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0) return null;

  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode) ret = '';else ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,_dereq_('_process'))
},{"./_stream_duplex":182,"_process":172,"buffer":154,"core-util-is":157,"events":160,"inherits":163,"isarray":181,"process-nextick-args":171,"string_decoder/":188,"util":152}],185:[function(_dereq_,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = _dereq_('./_stream_duplex');

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":182,"core-util-is":157,"inherits":163}],186:[function(_dereq_,module,exports){
(function (process){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/*<replacement>*/
var processNextTick = _dereq_('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Buffer = _dereq_('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: _dereq_('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = _dereq_('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = _dereq_('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = _dereq_('buffer').Buffer;

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

var Duplex;
function WritableState(options, stream) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // create the two objects needed to store the corked requests
  // they are not a linked list, as no new elements are inserted in there
  this.corkedRequestsFree = new CorkedRequest(this);
  this.corkedRequestsFree.next = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

var Duplex;
function Writable(options) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;

  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    state.corkedRequestsFree = holder.next;
    holder.next = null;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
}).call(this,_dereq_('_process'))
},{"./_stream_duplex":182,"_process":172,"buffer":154,"core-util-is":157,"events":160,"inherits":163,"process-nextick-args":171,"util-deprecate":203}],187:[function(_dereq_,module,exports){
(function (process){
var Stream = (function (){
  try {
    return _dereq_('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
  } catch(_){}
}());
exports = module.exports = _dereq_('./lib/_stream_readable.js');
exports.Stream = Stream || exports;
exports.Readable = exports;
exports.Writable = _dereq_('./lib/_stream_writable.js');
exports.Duplex = _dereq_('./lib/_stream_duplex.js');
exports.Transform = _dereq_('./lib/_stream_transform.js');
exports.PassThrough = _dereq_('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream;
}

}).call(this,_dereq_('_process'))
},{"./lib/_stream_duplex.js":182,"./lib/_stream_passthrough.js":183,"./lib/_stream_readable.js":184,"./lib/_stream_transform.js":185,"./lib/_stream_writable.js":186,"_process":172}],188:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = _dereq_('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":154}],189:[function(_dereq_,module,exports){
var Buffer = _dereq_('buffer').Buffer

module.exports = function (buf) {
	// If the buffer is backed by a Uint8Array, a faster version will work
	if (buf instanceof Uint8Array) {
		// If the buffer isn't a subarray, return the underlying ArrayBuffer
		if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
			return buf.buffer
		} else if (typeof buf.buffer.slice === 'function') {
			// Otherwise we need to get a proper copy
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
		}
	}

	if (Buffer.isBuffer(buf)) {
		// This is the slow version that will work with any Buffer
		// implementation (even in old browsers)
		var arrayCopy = new Uint8Array(buf.length)
		var len = buf.length
		for (var i = 0; i < len; i++) {
			arrayCopy[i] = buf[i]
		}
		return arrayCopy.buffer
	} else {
		throw new Error('Argument must be a Buffer')
	}
}

},{"buffer":154}],190:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var log = _dereq_('loglevel');

var NotificationsConfig = _dereq_('./configuration');
var Registrar = _dereq_('./registrar');

/**
 * @class
 * @alias Notifications
 * @classdesc The helper library for the notification service.
 * Provides high level api for creating and managing notification subscriptions and receiving messages
 * Creates the instance of Notification helper library
 *
 * @constructor
 * @param {string} productId id of a product, which uses notification library
 * @param {AccessManager} accessManager - Twilio Access Manager instance
 */
function NotificationsClient(productId, accessManager, options) {
  var _this = this;

  if (!accessManager) {
    throw new Error('AccessManager is required for Notifications client');
  }

  var transport = options.transport;
  var twilsock = options.twilsockClient;

  var reliableTransportState = {
    overall: false,
    transport: false,
    registration: false
  };

  var config = new NotificationsConfig(accessManager, options);
  (0, _defineProperties2.default)(this, {
    _config: { value: config },
    _registrar: { value: new Registrar(productId, transport, twilsock, config) },
    _twilsock: { value: twilsock },
    _reliableTransportState: { value: reliableTransportState }
  });

  EventEmitter.call(this);

  accessManager.on('tokenExpired', function () {
    return _this.emit('tokenExpired', accessManager);
  });
  accessManager.on('tokenUpdated', function () {
    return _this._updateAuthToken(accessManager.token);
  });

  this._twilsock.on('message', function (type, message) {
    return _this._routeMessage(type, message);
  });

  this._registrar.on('transportReady', function (state) {
    return _this.emit('transportReady', state);
  });

  this._registrar.on('stateChanged', function (state) {
    _this._onRegistrationStateChange(state);
  });
  this._registrar.on('needReliableTransport', this._onNeedReliableTransport.bind(this));

  this._twilsock.on('connected', function (notificationId) {
    _this._onTransportStateChange(true);
    _this._registrar.setNotificationId('twilsock', notificationId);
  });
  this._twilsock.on('disconnected', function () {
    _this._onTransportStateChange(false);
  });
}

inherits(NotificationsClient, EventEmitter);

/**
 * Routes messages to the external subscribers
 * @private
 */
NotificationsClient.prototype._routeMessage = function (type, message) {
  log.trace('Message arrived: ', type, message);
  this.emit('message', type, message);
};

NotificationsClient.prototype._onNeedReliableTransport = function (isNeeded) {
  if (isNeeded) {
    this._twilsock.connect();
  } else {
    this._twilsock.disconnect();
  }
};

NotificationsClient.prototype._onRegistrationStateChange = function (state) {
  this._reliableTransportState.registration = state === 'registered';
  this._updateTransportState();
};

NotificationsClient.prototype._onTransportStateChange = function (connected) {
  this._reliableTransportState.transport = connected;
  this._updateTransportState();
};

NotificationsClient.prototype._updateTransportState = function () {
  var overallState = this._reliableTransportState.transport && this._reliableTransportState.registration;

  if (this._reliableTransportState.overall !== overallState) {
    this._reliableTransportState.overall = overallState;

    log.info('NTFCN I: Transport ready ' + overallState);
    this.emit('transportReady', overallState);
  }
};

/**
 * Adds the subscription for the given message type
 * @param {string} messageType The type of message that you want to receive
 * @param {string} channelType. Supported are 'twilsock' and 'gcm'
 * @public
 */
NotificationsClient.prototype.subscribe = function (messageType, channelType) {
  channelType = channelType || 'twilsock';
  log.trace('Add subscriptions for message type: ', messageType, channelType);

  return this._registrar.subscribe(messageType, channelType);
};

/**
 * Remove the subscription for the particular message type
 * @param {string} messageType The type of message that you don't want to receive anymore
 * @param {string} Channel type. Supported are 'twilsock' and 'gcm'
 * @public
 */
NotificationsClient.prototype.unsubscribe = function (messageType, channelType) {
  channelType = channelType || 'twilsock';
  log.trace('Remove subscriptions for message type: ', messageType, channelType);

  return this._registrar.unsubscribe(messageType, channelType);
};

/**
 * Handle incoming push notification.
 * Client application should call this method when it receives push notifications and pass the received data
 * @param {Object} pushMessage - push message object
 * @public
 */
NotificationsClient.prototype.handlePushNotification = function (msg) {
  log.warn('Push message passed, but no functionality implemented yet: ' + msg);
};

/**
 * Set GCM token to enable application register for a push messages
 * @param {string} gcmToken Token received from GCM system
 * @public
 */
NotificationsClient.prototype.setGCMToken = function (gcmToken) {
  this._registrar.setNotificationId('gcm', gcmToken);
};

/**
 * Updates auth token for GCM registration
 * @private
 */
NotificationsClient.prototype._updateAuthToken = function () {
  log.info('NTFCN I: authTokenUpdated');
  this._registrar.updateToken();
};

(0, _freeze2.default)(NotificationsClient);

/**
 * Fired when new message arrived.
 * @param {Object} message`
 * @event NotificationsClient#message
 */

/**
 * Fired when a Channel's attributes or metadata have been updated.
 * @param {boolean} transport state
 * @event NotificationsClient#transportReady
 */

module.exports = NotificationsClient;

},{"./configuration":191,"./registrar":193,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"events":160,"loglevel":166,"util":205}],191:[function(_dereq_,module,exports){
'use strict';

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERS_URI = 'https://ers.twilio.com';
var ERS_PATH = '/v1/registrations';

/**
 * Notification library configuration provider
 */
function NotificationConfig(accessManager, options) {
  var _this = this;

  options = (options || {}).Notification || {};
  var uri = options.ersUri || ERS_URI;

  (0, _defineProperties2.default)(this, {
    _registrarUri: { value: uri + ERS_PATH },
    _accessManager: { value: accessManager },

    registrarUri: { get: function get() {
        return _this._registrarUri;
      } },
    token: { get: function get() {
        return _this._accessManager.token;
      } }
  });
}

module.exports = NotificationConfig;

},{"babel-runtime/core-js/object/define-properties":33}],192:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _set2 = _dereq_('babel-runtime/core-js/set');

var _set3 = _interopRequireDefault(_set2);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var StateMachine = _dereq_('javascript-state-machine');
var Backoff = _dereq_('backoff');
var log = _dereq_('loglevel');

function toArray(_set) {
  var arr = [];
  _set.forEach(function (v) {
    return arr.push(v);
  });
  return arr;
}

/**
 * Creates new instance of the ERS registrar
 *
 * @class RegistrarConnector
 * @classdesc Manages the registrations on ERS service.
 * It deduplicates registrations and manages them automatically
 *
 * @param Object configuration
 * @param string notificationId
 * @param string channelType
 * @param Array messageTypes
 */
function RegistrarConnector(context, transport, config, channelType) {
  var _this = this;

  var fsm = StateMachine.create({
    initial: { state: 'unregistered', event: 'init', defer: true },
    events: [{ name: 'userUpdate', from: ['unregistered'], to: 'registering' }, { name: 'userUpdate', from: ['registered'], to: 'unregistering' }, { name: 'registered', from: ['registering', 'retrying'], to: 'registered' }, { name: 'unregistered', from: ['unregistering'], to: 'unregistered' }, { name: 'retry', from: ['retrying'], to: 'retrying' }, { name: 'failure', from: ['registering'], to: 'retrying' }, { name: 'failure', from: ['retrying'], to: 'retrying' }, { name: 'failure', from: ['unregistering'], to: 'unregistered' }],
    callbacks: {
      onregistering: function onregistering(event, from, to, arg) {
        return _this._register(arg);
      },
      onunregistering: function onunregistering() {
        return _this._unregister();
      },
      onregistered: function onregistered() {
        return _this._onRegistered();
      },
      onunregistered: function onunregistered() {
        return _this._onUnregistered();
      },
      onretrying: function onretrying(event, from, to, arg) {
        return _this._initRetry(arg);
      },
      onfailure: function onfailure(event, from, to, arg) {
        if (from === 'retrying') {
          _this._initRetry(arg);
        }
      }
    }
  });

  var backoff = Backoff.exponential({
    randomisationFactor: 0.2,
    initialDelay: 2 * 1000,
    maxDelay: 2 * 60 * 1000
  });

  backoff.on('ready', function () {
    _this._retry();
  });

  (0, _defineProperties2.default)(this, {
    _transport: { value: transport },
    _context: { value: context },
    _url: { value: config.registrarUri, writable: false },
    _config: { value: config },
    _fsm: { value: fsm },
    _backoff: { value: backoff },
    _channelType: { value: channelType },
    _registrationId: { value: false, writable: true },
    _notificationId: { value: false, writable: true },
    _messageTypes: { value: new _set3.default(), writable: true },
    _pendingUpdate: { value: null, writable: true }
  });

  EventEmitter.call(this);
  fsm.init();
}

inherits(RegistrarConnector, EventEmitter);

RegistrarConnector.prototype.setNotificationId = function (notificationId) {
  if (this._notificationId === notificationId) {
    return;
  }

  this._notificationId = notificationId;
  this._updateRegistration();
};

RegistrarConnector.prototype.updateToken = function () {
  return this._updateRegistration();
};

RegistrarConnector.prototype.has = function (messageType) {
  return this._messageTypes.has(messageType);
};

RegistrarConnector.prototype.subscribe = function (messageType) {
  if (this._messageTypes.has(messageType)) {
    log.debug('Message type already registered ', messageType);
    return false;
  }

  this._messageTypes.add(messageType);
  this._updateRegistration();
  return true;
};

RegistrarConnector.prototype.unsubscribe = function (messageType) {
  if (!this._messageTypes.has(messageType)) {
    return false;
  }

  this._messageTypes.delete(messageType);

  if (this._messageTypes.size > 0) {
    this._updateRegistration();
  } else {
    this._removeRegistration();
  }
  return true;
};

RegistrarConnector.prototype._updateRegistration = function () {
  if (this._notificationId) {
    this._update(this._notificationId, toArray(this._messageTypes));
  }
};

RegistrarConnector.prototype._removeRegistration = function () {
  if (this._notificationId) {
    this._update(this._notificationId, toArray(this._messageTypes));
  }
};

/**
 * Update service registration
 * @param Array messageTypes Array of message type names
 * @private
 */
RegistrarConnector.prototype._update = function (notificationId, messageTypes) {
  var regData = { notificationId: notificationId, messageTypes: messageTypes };

  if (this._fsm.is('unregistered')) {
    if (regData.notificationId && regData.messageTypes.length > 0) {
      this._fsm.userUpdate(regData);
    }
  } else if (this._fsm.is('registered')) {
    this._fsm.userUpdate(regData);
    this._setPendingUpdate(regData);
  } else {
    this._setPendingUpdate(regData);
  }
};

RegistrarConnector.prototype._setPendingUpdate = function (regData) {
  this._pendingUpdate = regData;
};

RegistrarConnector.prototype._checkPendingUpdate = function () {
  if (!this._pendingUpdate) {
    return;
  }

  var pendingUpdate = this._pendingUpdate;
  this._pendingUpdate = null;

  this._updateRegistration(pendingUpdate.notificationId, pendingUpdate.messageTypes);
};

RegistrarConnector.prototype._initRetry = function (regData) {
  if (!this._pendingUpdate) {
    this._setPendingUpdate(regData);
  }

  this._backoff.backoff();
};

RegistrarConnector.prototype._retry = function () {
  if (!this._pendingUpdate) {
    return;
  }

  var pendingUpdate = this._pendingUpdate;
  this._pendingUpdate = null;

  this._register(pendingUpdate);
};

RegistrarConnector.prototype._onRegistered = function () {
  this._backoff.reset();
  this.emit('stateChanged', 'registered');
  this._checkPendingUpdate();
};

RegistrarConnector.prototype._onUnregistered = function () {
  this._backoff.reset();
  this.emit('stateChanged', 'unregistered');
  this._checkPendingUpdate();
};

RegistrarConnector.prototype._register = function (regData) {
  var _this2 = this;

  /* eslint-disable camelcase */
  var registrarRequest = {
    endpoint_platform: this._context.platform,
    channel_type: this._channelType,
    version: '2',
    message_types: regData.messageTypes,
    data: {},
    ttl: 'PT24H'
  };

  if (this._channelType === 'twilsock') {
    registrarRequest.data.url = regData.notificationId;
  } else {
    registrarRequest.data.registration_id = regData.notificationId;
  }

  var uri = this._url + '?productId=' + this._context.productId;
  var headers = {
    'Content-Type': 'application/json',
    'X-Twilio-Token': this._config.token
  };
  /* eslint-enable camelcase */

  log.trace('NTFCN I: Creating registration for channel ', this._channelType);
  return this._transport.post(uri, headers, registrarRequest).then(function (response) {
    _this2._registrationId = response.body.id;
    _this2._registrationData = regData;

    log.debug('NTFCN I: Registration created: ', response);
    _this2._fsm.registered();
  }).catch(function (error) {
    log.error('NTFCN E: Registration failed: ', error);
    _this2._fsm.failure(regData);
    return error;
  });
};

RegistrarConnector.prototype._unregister = function () {
  var _this3 = this;

  if (!this._registrationId) {
    return _promise2.default.resolve();
  }

  var uri = this._url + '/' + this._registrationId + '?productId=' + this._context.productId;
  var headers = {
    'Content-Type': 'application/json',
    'X-Twilio-Token': this._config.token
  };

  log.trace('NTFCN I: removing registration for ', this._channelType);
  this._transport.delete(uri, headers).then(function () {
    log.debug('NTFCN I: registration removed for ', _this3._channelType);
    _this3._registrationId = false;
    _this3._fsm.unregistered();
  }).catch(function (reason) {
    // failure to remove registration since being treated as "unregistered" state
    // because it is indicates that something wrong with server/connection
    log.error('NTFCN E: failed to remove of registration ', _this3.channelType, reason);
    _this3._fsm.failure();
    return reason;
  });
};

(0, _freeze2.default)(RegistrarConnector);

module.exports = RegistrarConnector;

},{"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"babel-runtime/core-js/set":37,"backoff":145,"events":160,"javascript-state-machine":165,"loglevel":166,"util":205}],193:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

var ErsConnector = _dereq_('./registrar.connector');
var TwilsockConnector = _dereq_('./twilsock.connector');

/**
 * Creates the new instance of ERS registrar client
 *
 * @class Registrar
 * @classdesc Provides an interface to the ERS registrar
 */
function Registrar(productId, transport, twilsock, config) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _conf: { value: config },
    _connectors: { value: new _map2.default() }
  });

  var platform = (typeof navigator !== 'undefined' ? navigator.userAgent : 'web').substring(0, 128);

  this._connectors.set('twilsock', new TwilsockConnector({ productId: productId, platform: platform }, twilsock, config));
  this._connectors.set('gcm', new ErsConnector({ productId: productId, platform: platform }, transport, config, 'gcm'));

  this._connectors.get('twilsock').on('transportReady', function (state) {
    return _this.emit('transportReady', state);
  });

  EventEmitter.call(this);
}

inherits(Registrar, EventEmitter);

/**
 *  Sets notification ID.
 *  If new URI is different from previous, it triggers updating of registration for given channel
 *
 *  @param {string} uri The notification ID
 */
Registrar.prototype.setNotificationId = function (channelType, notificationId) {
  this._connector(channelType).setNotificationId(notificationId);
};

/**
 * Checks if subscription for given message and channel already exists
 */
Registrar.prototype.hasSubscription = function (messageType, channelType) {
  this._connector(channelType).has(messageType);
};

/**
 * Subscribe for given type of message
 *
 * @param {String} messageType Message type identifier
 * @param {String} channelType Channel type, can be 'twilsock' or 'gcm'
 * @public
 */
Registrar.prototype.subscribe = function (messageType, channelType) {
  this._connector(channelType).subscribe(messageType);
};

/**
 * Remove subscription
 * @param {String} messageType Message type
 * @param {String} channelType Channel type (twilsock or gcm)
 * @public
 */
Registrar.prototype.unsubscribe = function (messageType, channelType) {
  this._connector(channelType).unsubscribe(messageType);
};

Registrar.prototype.updateToken = function () {
  this._connectors.forEach(function (connector) {
    return connector.updateToken();
  });
};

/**
 * @param {Strint} channelType Channel type
 * @throws {Error} Error with description
 * @private
 */
Registrar.prototype._connector = function (type) {
  var connector = this._connectors.get(type);
  if (!connector) {
    throw new Error('Unknown channel type: ' + type);
  }
  return connector;
};

(0, _freeze2.default)(Registrar);

module.exports = Registrar;

},{"./registrar.connector":192,"./twilsock.connector":194,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"events":160,"util":205}],194:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _set2 = _dereq_('babel-runtime/core-js/set');

var _set3 = _interopRequireDefault(_set2);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;

var uuid = _dereq_('uuid');
var log = _dereq_('loglevel');

var DEFAULT_TTL = 60 * 60 * 48;

function toArray(_set) {
  var arr = [];
  _set.forEach(function (v) {
    return arr.push(v);
  });
  return arr;
}

/**
 * @class
 * @classdesc Registrar connector implementation for twilsock
 *
 * @constructor
 */
function TwilsockConnector(context, twilsock, config) {
  var _this = this;

  context.id = uuid.v4();
  (0, _defineProperties2.default)(this, {
    _twilsock: { value: twilsock },
    _messageTypes: { value: new _set3.default() },

    config: { value: config },
    context: { value: context }
  });

  twilsock.on('stateChanged', function (state) {
    if (state !== 'connected') {
      _this.emit('transportReady', false);
    }
  });

  twilsock.on('registered', function (id) {
    if (context && id === context.id && twilsock.state === 'connected') {
      _this.emit('transportReady', true);
    }
  });

  EventEmitter.call(this);
}
inherits(TwilsockConnector, EventEmitter);

TwilsockConnector.prototype.setNotificationId = function () {
  return false;
};

TwilsockConnector.prototype.updateToken = function () {
  this._twilsock.removeNotificationsContext(this.context.id);
  this.context.id = uuid.v4();
  this._updateContext();
};

TwilsockConnector.prototype.has = function (messageType) {
  return this._messageTypes.has(messageType);
};

TwilsockConnector.prototype.subscribe = function (messageType) {
  if (this._messageTypes.has(messageType)) {
    log.debug('Message type already registered ', messageType);
    return false;
  }

  this._messageTypes.add(messageType);
  this._updateContext();
  return true;
};

TwilsockConnector.prototype.unsubscribe = function (messageType) {
  if (!this._messageTypes.has(messageType)) {
    return false;
  }

  this._messageTypes.delete(messageType);

  if (this._messageTypes.size > 0) {
    this._updateContext();
  } else {
    this._twilsock.removeNotificationsContext(this.context.id);
  }

  return true;
};

TwilsockConnector.prototype._updateContext = function () {
  var messageTypes = toArray(this._messageTypes);

  /* eslint-disable camelcase */
  var context = {
    product_id: this.context.productId,
    notification_protocol_version: 4,
    endpoint_platform: this.context.platform,
    ttl: DEFAULT_TTL,
    token: this.config.token,
    message_types: messageTypes
  };
  /* eslint-enable camelcase */

  this._twilsock.setNotificationsContext(this.context.id, context);
};

(0, _freeze2.default)(TwilsockConnector);

module.exports = TwilsockConnector;

},{"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/set":37,"events":160,"loglevel":166,"util":205,"uuid":207}],195:[function(_dereq_,module,exports){
'use strict';

var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XHR = typeof XMLHttpRequest === 'undefined' ? _dereq_('xmlhttprequest').XMLHttpRequest : XMLHttpRequest;

function parseResponseHeaders(headerString) {
  return headerString.split('\r\n').map(function (el) {
    return el.split(': ');
  }).filter(function (el) {
    return el.length === 2 && el[1].length > 0;
  }).reduce(function (prev, curr) {
    prev[curr[0]] = curr[1];return prev;
  }, {});
}

function extractBody(xhr) {
  var contentType = xhr.getResponseHeader('Content-Type');
  if (!contentType || contentType.indexOf('application/json') !== 0 || xhr.responseText.length === 0) {
    return xhr.responseText;
  }

  try {
    return JSON.parse(xhr.responseText);
  } catch (e) {
    return xhr.responseText;
  }
}

function request(method, params) {
  return new _promise2.default(function (resolve, reject) {
    var xhr = new XHR();
    xhr.open(method, params.url, true);

    xhr.onreadystatechange = function onreadystatechange() {
      if (xhr.readyState !== 4) {
        return;
      }

      var headers = parseResponseHeaders(xhr.getAllResponseHeaders());
      var body = extractBody(xhr);

      if (200 <= xhr.status && xhr.status < 300) {
        resolve({ status: xhr.status, headers: headers, body: body });
      } else {
        reject({ status: xhr.status, description: xhr.statusText, headers: headers, body: body });
      }
    };

    for (var headerName in params.headers) {
      xhr.setRequestHeader(headerName, params.headers[headerName]);
      if (headerName === 'Content-Type' && params.headers[headerName] === 'application/json') {
        params.body = (0, _stringify2.default)(params.body);
      }
    }

    xhr.send(params.body);
  });
}

/**
 * Use XMLHttpRequest to get a network resource.
 * @param {String} method - HTTP Method
 * @param {Object} params - Request parameters
 * @param {String} params.url - URL of the resource
 * @param {Array}  params.headers - An array of headers to pass [{ headerName : headerBody }]
 * @param {Object} params.body - A JSON body to send to the resource
 * @returns {Promise}
 **/
var Request = request;

/**
 * Sugar function for request('GET', params);
 * @param {Object} params - Request parameters
 * @returns {Promise}
 */
Request.get = function (params) {
  return request('GET', params);
};

/**
 * Sugar function for request('POST', params);
 * @param {Object} params - Request parameters
 * @returns {Promise}
 */
Request.post = function (params) {
  return request('POST', params);
};

/**
 * Sugar function for request('PUT', params);
 * @param {Object} params - Request parameters
 * @returns {Promise}
 */
Request.put = function (params) {
  return request('PUT', params);
};

/**
 * Sugar function for request('DELETE', params);
 * @param {Object} params - Request parameters
 * @returns {Promise}
 */
Request.delete = function (params) {
  return request('DELETE', params);
};

module.exports = Request;

},{"babel-runtime/core-js/json/stringify":31,"babel-runtime/core-js/promise":36,"xmlhttprequest":209}],196:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _keys = _dereq_('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = _dereq_('./request');

function parseUri(uri) {
  var match = uri.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
  if (match) {
    var uriStruct = {
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7]
    };

    if (uriStruct.search.length > 0) {
      var paramsString = uriStruct.search.substring(1);
      uriStruct.params = paramsString.split('&').map(function (el) {
        return el.split('=');
      }).reduce(function (prev, curr) {
        if (!prev.hasOwnProperty(curr[0])) {
          prev[curr[0]] = curr[1];
        } else if (Array.isArray(prev[curr[0]])) {
          prev[curr[0]].push(curr[1]);
        } else {
          prev[curr[0]] = [prev[curr[0]], curr[1]];
        }
        return prev;
      }, {});
    }
    return uriStruct;
  }
  throw new Error('Incorrect URI: ' + uri);
}

function twilsockAddress(method, uri) {
  var parsedUri = parseUri(uri);
  var to = {
    method: method,
    host: parsedUri.host,
    path: parsedUri.pathname
  };
  if (parsedUri.params) {
    to.params = parsedUri.params;
  }
  return to;
}

function twilsockParams(type, uri, headers, body) {
  return {
    to: twilsockAddress(type, uri),
    headers: headers,
    body: body
  };
}

function adaptTwilsockResponse(response) {
  return { status: response.status,
    headers: response.header.http_headers,
    body: response.body };
}

function httpParams(uri, headers, body) {
  return {
    url: uri,
    headers: headers,
    body: body
  };
}

function adaptHttpResponse(response) {
  try {
    response.body = JSON.parse(response.body);
  } finally {
    return response;
  }
}

/**
 * By RFC header names are case-insensitive
 * though it is much easier to work with them in code
 * when they have any specific case.
 * So we forcefully lowercase all headers
 */
function lowercaseHeaders(response) {
  var keys = (0, _keys2.default)(response.headers);
  var n = keys.length;
  var headers = {};
  while (n--) {
    var key = keys[n];
    headers[key.toLowerCase()] = response.headers[key];
  }
  response.headers = headers;
  return response;
}

/**
 * @class Transport
 * @classdesc Provides generic network interface
 */
function Transport(twilsock) {
  var _this = this;

  (0, _defineProperties2.default)(this, {
    _activeGetRequests: { value: new _map2.default() },
    _twilsock: { value: twilsock },
    _http: { value: request },
    _useTwilsock: { get: function get() {
        return _this._twilsock && _this._twilsock.isConnected;
      } }
  });

  if (twilsock) {
    twilsock.connect();
  }
}

/**
 * Make a GET request by given URI
 *
 * This function applies "multiplexing" optimization.
 * If several requests for the same URI happen on the same time,
 * only one will really happen, but all clients will see th result.
 *
 * @Returns Promise<Response> Result of successful get request
 */
Transport.prototype.get = function get(uri, headers) {
  var _this2 = this;

  if (this._activeGetRequests.has(uri)) {
    return this._activeGetRequests.get(uri);
  }

  var promise = this._get(uri, headers).then(function (response) {
    _this2._activeGetRequests.delete(uri);
    return response;
  }).catch(function (error) {
    _this2._activeGetRequests.delete(uri);
    throw error;
  });

  this._activeGetRequests.set(uri, promise);
  return promise;
};

/**
 * @private
 */
Transport.prototype._get = function _get(uri, headers) {
  return (this._useTwilsock ? this._twilsock.send(twilsockParams('GET', uri, headers)).then(adaptTwilsockResponse) : this._http.get(httpParams(uri, headers)).then(adaptHttpResponse)).then(lowercaseHeaders);
};

/**
 * Make a POST request by given URI
 * @Returns Promise<Response> Result of successful request
 */
Transport.prototype.post = function post(uri, headers, body) {
  return (this._useTwilsock ? this._twilsock.send(twilsockParams('POST', uri, headers, body)).then(adaptTwilsockResponse) : this._http.post(httpParams(uri, headers, body)).then(adaptHttpResponse)).then(lowercaseHeaders);
};

/**
 * Make a PUT request by given URI
 * @Returns Promise<Response> Result of successful request
 */
Transport.prototype.put = function put(uri, headers, body) {
  return (this._useTwilsock ? this._twilsock.send(twilsockParams('PUT', uri, headers, body)).then(adaptTwilsockResponse) : this._http.put(httpParams(uri, headers, body)).then(adaptHttpResponse)).then(lowercaseHeaders);
};

/**
 * Make a DELETE request by given URI
 * @Returns Promise<Response> Result of successful request
 */
Transport.prototype.delete = function del(uri, headers) {
  return (this._useTwilsock ? this._twilsock.send(twilsockParams('DELETE', uri, headers)).then(adaptTwilsockResponse) : this._http.delete(httpParams(uri, headers)).then(adaptHttpResponse)).then(lowercaseHeaders);
};

(0, _freeze2.default)(Transport);

module.exports = Transport;

},{"./request":195,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/object/keys":35}],197:[function(_dereq_,module,exports){
'use strict';

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _set = _dereq_('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var log = _dereq_('loglevel');
var uuid = _dereq_('uuid');

var Configuration = _dereq_('./configuration');
var TwilsockChannel = _dereq_('./twilsock');
var PacketInterface = _dereq_('./packetinterface');

/**
 * @class
 * @alias Twilsock
 * @classdesc Client library for the Twilsock protocol
 * @property {Boolean} connected Indicates the twilsock connection state
 *
 * @constructor
 * @param {AccessManager} AccessManager Twilio access manager instance
 */
function TwilsockClient(accessManager, options) {
  var _this = this;

  var config = new Configuration(accessManager, options);
  var twilsock = new TwilsockChannel(config);
  var packetInterface = new PacketInterface(twilsock);

  (0, _defineProperties2.default)(this, {
    _activeToken: { value: null, writable: true },
    _config: { value: config },
    _socket: { value: twilsock },
    _packet: { value: packetInterface },
    _registrations: { value: new _map2.default() },
    _registrationsInProgress: { value: new _map2.default() },

    isConnected: { get: function get() {
        return _this._socket.isConnected;
      } },
    connected: { get: function get() {
        return _this._socket.isConnected;
      } },
    state: { get: function get() {
        return _this._socket.state;
      } }
  });

  EventEmitter.call(this);

  accessManager.on('tokenExpired', function () {
    return _this.emit('tokenExpired', accessManager);
  });
  accessManager.on('tokenUpdated', function () {
    return _this._updateAuthToken();
  });

  this._socket.on('message', function (type, message) {
    return setTimeout(function () {
      _this.emit('message', type, message);
    }, 0);
  });
  this._socket.on('connected', function () {
    return _this._updateRegistrations();
  });
  this._socket.on('connected', function (uri) {
    return _this.emit('connected', uri);
  });
  this._socket.on('disconnected', function () {
    return _this.emit('disconnected');
  });
  this._socket.on('stateChanged', function (state) {
    return _this.emit('stateChanged', state);
  });
}

inherits(TwilsockClient, EventEmitter);

/**
 * Send a message
 * @param {Twilsock#Message} message Message structure with header, body and remote address
 * @public
 * @returns {Promise<Result>} Result from remote side
 */
TwilsockClient.prototype.send = function (message) {
  return this._packet.send(message.to, message.headers, message.body);
};

/**
 * @param {String} token authentification token
 * @private
 */
TwilsockClient.prototype._updateAuthToken = function () {
  var _this2 = this;

  log.info('Twilsock I: authTokenUpdated');

  // It's a hack to avoid reconnect on start
  // Since accessManager always emits 'tokenUpdated' on start.
  if (this._socket.activeToken === this._config.token) {
    return;
  }

  if (this._socket.state === TwilsockChannel.state.CONNECTED || this._socket.state === TwilsockChannel.state.CONNECTING) {
    this._socket.disconnect().then(function () {
      return _this2._socket.connect();
    });
  }
};

TwilsockClient.prototype._updateRegistration = function (contextId, context) {
  var _this3 = this;

  log.info('Twilsock: Update registration for context', contextId);
  var registrationAttempts = this._registrationsInProgress.get(contextId);
  if (!registrationAttempts) {
    registrationAttempts = new _set2.default();
    this._registrationsInProgress.set(contextId, registrationAttempts);
  }

  var attemptId = uuid.v4();
  registrationAttempts.add(attemptId);

  this._packet.putNotificationContext(contextId, context).then(function () {
    log.info('Twilsock: registration attempt succeeded for context', context);
    registrationAttempts.delete(attemptId);
    if (registrationAttempts.size === 0) {
      _this3._registrationsInProgress.delete(contextId);
      _this3.emit('registered', contextId);
    }
  }).catch(function (err) {
    log.info('Twilsock: registration attempt failed for context', context);
    log.debug(err);

    registrationAttempts.delete(attemptId);
    if (registrationAttempts.size === 0) {
      _this3._registrationsInProgress.delete(contextId);
      _this3.emit('registrationFailed', contextId, err);
    }
  });
};

TwilsockClient.prototype._updateRegistrations = function () {
  var _this4 = this;

  log.info('Twilsock: refreshing all registrations');
  this._registrations.forEach(function (context, id) {
    _this4._updateRegistration(id, context);
  });
};

TwilsockClient.prototype.setNotificationsContext = function (contextId, context) {
  if (!contextId || !context) {
    throw new Error('Invalid arguments provided');
  }

  this._registrations.set(contextId, context);
  if (this._socket.isConnected) {
    this._updateRegistration(contextId, context);
  }
};

TwilsockClient.prototype.removeNotificationsContext = function (contextId) {
  if (!this._registrations.has(contextId)) {
    return;
  }

  this._registrations.delete(contextId);
  if (this._socket.isConnected) {
    this._packet.deleteNotificationContext(contextId);
  }
};

/**
 * Connect to the server
 * @fires TwilsockClient#connected
 * @public
 */
TwilsockClient.prototype.connect = function () {
  return this._socket.connect();
};

/**
 * Connect to the server
 * @fires TwilsockClient#disconnected
 * @public
 */
TwilsockClient.prototype.disconnect = function () {
  return this._socket.disconnect();
};

(0, _freeze2.default)(TwilsockClient);

/**
 * Twilsock destination address descriptor
 * @typedef {Object} Twilsock#Address
 * @property {String} method - HTTP method. (POST, PUT, etc)
 * @property {String} host - host name without path. (e.g. my.comany.com)
 * @property {String} path - path on the host (e.g. /my/app/to/call.php)
 */

/**
 * Twilsock upstream message
 * @typedef {Object} Twilsock#Message
 * @property {Twilsock#Address} to - destination address
 * @property {Object} headers - HTTP headers
 * @property {Object} body - Body
 */

/**
 * Fired when new message received
 * @param {Object} message
 * @event TwilsockClient#message
 */

/**
 * Fired when socket connected
 * @param {String} URI of endpoint
 * @event TwilsockClient#connected
 */

/**
 * Fired when socket disconnected
 * @event TwilsockClient#disconnected
 */

module.exports = TwilsockClient;

},{"./configuration":198,"./packetinterface":199,"./twilsock":200,"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/set":37,"events":160,"loglevel":166,"util":205,"uuid":207}],198:[function(_dereq_,module,exports){
'use strict';

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TWILSOCK_URI = 'wss://tsock.twilio.com';
var TWILSOCK_PATH = '/v2/wsconnect';

/**
 * @param {String} token - authentication token
 * @param {Object} options - options to override defaults
 *
 * @class TwilsockConfig
 * @classdesc Settings container for the Twilsock client library
 */
function TwilsockConfig(accessManager, options) {
  var _this = this;

  options = options || {};
  var _options = options.Twilsock || {};
  var twilsockUri = _options.uri || options.wsServer || TWILSOCK_URI;

  (0, _defineProperties2.default)(this, {
    _twilsockWsHost: { value: twilsockUri + TWILSOCK_PATH },
    _accessManager: { value: accessManager },

    twilsockUri: { get: function get() {
        return _this._twilsockWsHost;
      } },
    token: { get: function get() {
        return _this._accessManager.token;
      } }
  });
}

module.exports = TwilsockConfig;

},{"babel-runtime/core-js/object/define-properties":33}],199:[function(_dereq_,module,exports){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = _dereq_('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _dereq_('loglevel');
var REQUEST_TIMEOUT = 30000;

function PacketInterface(socket) {
  (0, _defineProperties2.default)(this, {
    _activeRequests: { value: new _map2.default() },
    _socket: { value: socket }
  });

  this._socket.on('reply', this._processReply.bind(this));
}

function isHttpSuccess(code) {
  return [200, 201, 204].indexOf(code) !== -1;
}

function isHttpReply(packet) {
  return packet && packet.header && packet.header.http_status;
}

PacketInterface.prototype._processReply = function (reply) {
  var request = this._activeRequests.get(reply.id);
  if (request) {
    clearTimeout(request.timeout);
    this._activeRequests.delete(reply.id);

    setTimeout(function () {
      // User shouldn't intercept connection handling, thus making it asynchronous
      if (!isHttpSuccess(reply.status.code)) {
        request.reject(new Error('Transport failure: ' + reply.status.status));
      } else if (isHttpReply(reply) && !isHttpSuccess(reply.header.http_status.code)) {
        request.reject({ status: reply.header.http_status.code,
          description: reply.header.http_status.status,
          body: reply.body });
      } else {
        request.resolve(reply);
      }
    }, 0);
  }
};

PacketInterface.prototype._storeRequest = function (id, resolve, reject) {
  var requestDescriptor = { resolve: resolve,
    reject: reject,
    timeout: setTimeout(function () {
      log.debug('Request', id, 'is timed out');
      reject(new Error('Twilsock: request timeout: ' + id));
    }, REQUEST_TIMEOUT)
  };
  this._activeRequests.set(id, requestDescriptor);
};

PacketInterface.prototype.send = function (address, headers, body) {
  var _this = this;

  return new _promise2.default(function (resolve, reject) {
    var id = _this._socket.sendUpstreamMessage(address, headers, body);
    log.trace('Twilsock: message sent: ', { id: id, address: address, headers: headers, body: body });
    _this._storeRequest(id, resolve, reject);
  });
};

PacketInterface.prototype.putNotificationContext = function (contextId, context) {
  var _this2 = this;

  return new _promise2.default(function (resolve, reject) {
    var header = { method: 'put_notification_ctx', notification_ctx_id: contextId }; // eslint-disable-line camelcase
    var id = _this2._socket.send(header, context);
    _this2._storeRequest(id, resolve, reject);
  });
};

PacketInterface.prototype.deleteNotificationContext = function (contextId) {
  var _this3 = this;

  return new _promise2.default(function (resolve, reject) {
    var packet = { method: 'delete_notification_ctx', notification_ctx_id: contextId }; // eslint-disable-line camelcase
    var id = _this3._socket.send(packet);
    _this3._storeRequest(id, resolve, reject);
  });
};

PacketInterface.prototype.shutdown = function () {
  this._activeRequests.forEach(function (descriptor) {
    clearTimeout(descriptor.timeout);
  });
  this._activeRequests.clear();
};

module.exports = PacketInterface;

},{"babel-runtime/core-js/map":32,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/promise":36,"loglevel":166}],200:[function(_dereq_,module,exports){
(function (Buffer){
'use strict';

var _promise = _dereq_('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = _dereq_('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _freeze = _dereq_('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _defineProperties = _dereq_('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _dereq_('events').EventEmitter;
var inherits = _dereq_('util').inherits;
var log = _dereq_('loglevel');

var uuid = _dereq_('uuid');
var Backoff = _dereq_('backoff');
var WebSocket = _dereq_('ws');
var StateMachine = _dereq_('javascript-state-machine');

var ACTIVITY_CHECK_INTERVAL = 5000;
var ACTIVITY_TIMEOUT = 45000;

/**
 * @class TwilsockChannel
 * @classdesc Twilsock connection
 *
 * @param config
 */
function TwilsockChannel(config) {
  var _this = this,
      _arguments = arguments;

  EventEmitter.call(this);

  var fsm = StateMachine.create({
    initial: 'disconnected',
    events: [{ name: 'userConnect', from: ['disconnected'], to: 'connecting' }, { name: 'userDisconnect', from: ['connecting', 'connected', 'retrying'], to: 'disconnecting' }, { name: 'userRetry', from: ['retrying'], to: 'connecting' }, { name: 'socketConnected', from: ['connecting'], to: 'connected' }, { name: 'socketClosed', from: ['connecting', 'connected', 'error'], to: 'retrying' }, { name: 'socketError', from: ['connected'], to: 'retrying' }, { name: 'socketClosed', from: ['disconnecting'], to: 'disconnected' }, { name: 'socketRejected', from: ['connecting', 'connected'], to: 'disconnecting' }, { name: 'protocolError', from: ['connected'], to: 'error' }],
    callbacks: {
      onconnecting: function onconnecting() {
        _this._startWatchdogTimer();
        _this._setupSocket();
        _this.emit('connecting');
      },
      onretrying: function onretrying() {
        _this._initRetry();
        _this.emit('connecting');
      },
      onenterconnected: this._onConnected.bind(this),
      onuserDisconnect: this._closeSocket.bind(this),
      ondisconnected: function ondisconnected() {
        _this._stopWatchdogTimer();
        _this._onDisconnected();
        if (_this._disconnectedPromiseResolve) {
          var resolve = _this._disconnectedPromiseResolve;
          _this._disconnectedPromiseResolve = null;
          resolve();
        }
      },
      onsocketRejected: function onsocketRejected() {
        var args = Array.prototype.slice.call(_arguments, 3, _arguments.length);
        _this._onSocketRejected(args);
      },
      onerror: function onerror() {
        _this._closeSocket();
      },
      onenterstate: function onenterstate() {
        _this.emit('stateChanged', _this.state);
      }
    },
    error: function error() {
      log.trace('Twilsock FSM: unexpected transition', arguments);
    }
  });

  var backoff = Backoff.exponential({
    randomisationFactor: 0.2,
    initialDelay: 2 * 1000,
    maxDelay: 2 * 60 * 1000
  });

  backoff.on('ready', function () {
    _this._retry();
  });

  (0, _defineProperties2.default)(this, {
    _config: { value: config },
    _transportReady: { value: false, writable: true },
    _disconnectedPromiseResolve: { value: null, writable: true },
    _backoff: { value: backoff },
    _fsm: { value: fsm },
    _watchTimer: { value: null, writable: true },
    _timestamp: { value: 0, writable: true },
    _socket: { value: null, writable: true },
    _activeToken: { value: null, writable: true },
    activeToken: { enumerable: true, get: function get() {
        return _this._activeToken;
      } },
    state: { enumberable: true, get: function get() {
        return _this._getState();
      } },
    isConnected: { enumberable: true, get: function get() {
        return _this._isConnected();
      } }
  });
}

inherits(TwilsockChannel, EventEmitter);

/**
 * Enum for connection state values.
 * @readonly
 * @enum {number}
 */
TwilsockChannel.state = {
  DISCONNECTED: 'disconnected',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  DISCONNECTING: 'disconnecting'
};
(0, _freeze2.default)(TwilsockChannel.state);

/**
 * Checks if connection established
 * @public
 */
TwilsockChannel.prototype._isConnected = function () {
  return this.state === TwilsockChannel.state.CONNECTED && this._socket && this._socket.readyState === 1;
};

/**
 * @returns {Number} Connection state
 * @public
 */
TwilsockChannel.prototype._getState = function () {
  switch (this._fsm.current) {
    case 'connecting':
    case 'retrying':
      return TwilsockChannel.state.CONNECTING;
    case 'connected':
      return TwilsockChannel.state.CONNECTED;
    case 'disconnecting':
      return TwilsockChannel.state.DISCONNECTING;
    case 'disconnected':
    case 'error':
    default:
      return TwilsockChannel.state.DISCONNECTED;
  }
};

TwilsockChannel.prototype._initRetry = function () {
  this._backoff.backoff();
};

TwilsockChannel.prototype._retry = function () {
  this._socket = null;
  this._activeToken = null;
  this._fsm.userRetry();
};

TwilsockChannel.prototype._onConnected = function () {
  this._backoff.reset();
  this.emit('connected', this._wschannelUrl);
};

TwilsockChannel.prototype._onDisconnected = function () {
  this._backoff.reset();
  this._wschannelUrl = null;
  this._socket = null;
  this._activeToken = null;
  this.emit('disconnected');
};

function getMagic(buffer) {
  var strMagic = '';
  var idx = 0;
  for (; idx < buffer.length; ++idx) {
    var chr = String.fromCharCode(buffer[idx]);
    strMagic += chr;
    if (chr === '\r') {
      idx += 2;
      break;
    }
  }

  var magics = strMagic.split(' ');
  return {
    size: idx,
    protocol: magics[0],
    version: magics[1],
    headerSize: Number(magics[2])
  };
}

/**
 * @param {Uint8Array} array
 * @returns {Object}
 */
function getJsonObject(array) {
  var str = new Buffer(array).toString();
  try {
    return JSON.parse(str);
  } catch (e) {
    log.error('Twilsock E: Failed to parse input: ', str);
    throw e;
  }
}

TwilsockChannel.prototype._setupSocket = function () {
  var self = this;
  var token = this._config.token;
  var uri = this._config.twilsockUri + '?token=' + token;

  var socket = new WebSocket(uri);
  socket.binaryType = 'arraybuffer';

  socket.onopen = function () {
    log.info('Twilsock I: Twilsock socket opened');
  };

  socket.onclose = function () {
    log.info('Twilsock I: socket closed');
    self._fsm.socketClosed();
  };

  socket.onerror = function (error) {
    log.error('Twilsock: ', error);
    // self._fsm.socketError();
  };

  socket.onmessage = function (message) {
    log.trace('Twilsock: ', message.data);

    var fieldMargin = 2;

    var dataView = new Uint8Array(message.data);
    var magic = getMagic(dataView);
    if (magic.protocol !== 'TWILSOCK' || magic.version !== 'V1.0') {
      log.error('Twilsock E: unsupported protocol: ' + magic.protocol + ' ver ' + magic.version);
      self._fsm.socketRejected('Unsupported protocol');
      return;
    }

    var header = null;
    try {
      header = getJsonObject(dataView.subarray(magic.size, magic.size + magic.headerSize));
    } catch (e) {
      log.error('Twilsock: failed to parse message header', e, message);
      self._fsm.protocolError();
      return;
    }
    log.trace('Twilsock: message received: ', header);

    var payload = null;
    if (header.payload_size > 0) {
      var payloadOffset = fieldMargin + magic.size + magic.headerSize;
      var payloadSize = header.payload_size;
      if (!header.hasOwnProperty('payload_type') || header.payload_type.indexOf('application/json') === 0) {
        try {
          payload = getJsonObject(dataView.subarray(payloadOffset, payloadOffset + payloadSize));
        } catch (e) {
          log.error('Twilsock: failed to parse message body', e, message);
          self._fsm.protocolError();
          return;
        }
      } else if (header.payload_type.indexOf('text/plain') === 0) {
        payload = new Buffer(dataView.subarray(payloadOffset, payloadOffset + payloadSize)).toString();
      }
    }

    self._updateActivityTimestamp();

    if (header.method === 'ready') {
      log.trace('Twilsock ready', payload);
      self._wschannelUrl = payload.wschannel_url;
      self._confirmReceiving(header);
      self._fsm.socketConnected();
    } else if (header.method === 'notification') {
      self._confirmReceiving(header);
      self.emit('message', header.message_type, payload);
    } else if (header.method === 'reply') {
      self.emit('reply', { id: header.id,
        status: header.status,
        header: header,
        body: payload });
    } else if (header.method === 'ping') {
      self._confirmReceiving(header);
    } else if (header.method === 'close') {
      log.trace('Twilsock connection close initated by server');
      self._confirmReceiving(header);
      self._fsm.socketRejected(payload);
    }
  };

  this._activeToken = token;
  this._socket = socket;
};

/**
 * Should be called for each message to confirm it received
 */
TwilsockChannel.prototype._confirmReceiving = function (messageHeader) {
  /* eslint-disable camelcase */
  var header = {
    method: 'reply',
    id: messageHeader.id,
    payload_type: 'application/json',
    status: { code: 200, status: 'OK' }
  };
  /* eslint-enable camelcase */

  try {
    this._sendPacket(header);
  } catch (e) {
    log.debug('Twilsock: Failed to confirm packet receiving', e);
  }
};

/**
 * Makes sure that body is properly stringified
 */
function preparePayload(payload) {
  switch (typeof payload === 'undefined' ? 'undefined' : (0, _typeof3.default)(payload)) {
    case 'undefined':
      return '';
    case 'object':
      return (0, _stringify2.default)(payload);
    default:
      return payload;
  }
}

/**
 * Prepare binary packet and send it over the network
 */
TwilsockChannel.prototype._sendPacket = function (header, payload) {
  /* eslint-disable camelcase */
  var payloadString = preparePayload(payload);

  header.payload_size = Buffer.byteLength(payloadString);
  var headerString = (0, _stringify2.default)(header) + '\r\n';
  var magicString = 'TWILSOCK V1.0 ' + (Buffer.byteLength(headerString) - 2) + '\r\n';
  var message = new Uint8Array(new Buffer(magicString + headerString + payloadString));

  try {
    this._socket.send(message.buffer);
  } catch (e) {
    log.info('Failed to send ', header, e);
    log.info(e.stack);
    throw e;
  }
  /* eslint-enable camelcase */
};

/**
 * Cancels pending retry attempt if it exists
 * @private
 */
TwilsockChannel.prototype._cancelRetryAttempt = function () {
  this._backoff.reset();
};

/**
 * Shutdown connection
 * @private
 */
TwilsockChannel.prototype._closeSocket = function () {
  this._cancelRetryAttempt();
  if (this._socket) {
    this._socket.close();
  }
};

/**
 * Initiate the twilsock connection
 * If already connected, it does nothing
 */
TwilsockChannel.prototype.connect = function () {
  this._fsm.userConnect();
};

/**
 * Close twilsock connection
 * If already disconnected, it does nothing
 */
TwilsockChannel.prototype.disconnect = function () {
  var _this2 = this;

  if (this._fsm.is('disconnected')) {
    return _promise2.default.resolve();
  }

  return new _promise2.default(function (resolve) {
    _this2._fsm.userDisconnect();
    _this2._disconnectedPromiseResolve = resolve;
  });
};

/**
 * Send upstream message
 * @returns {String} id of sent message
 */
TwilsockChannel.prototype.sendUpstreamMessage = function (address, headers, body) {
  var id = uuid.v4();

  var httpHeader = {
    host: address.host,
    path: address.path,
    method: address.method
  };

  if (address.hasOwnProperty('params')) {
    httpHeader.params = address.params;
  }

  /* eslint-disable camelcase */
  var twilsockHeader = {
    method: 'message',
    id: id,
    http_header: httpHeader
  };

  if (headers) {
    twilsockHeader.http_header.headers = headers;
  }

  if (headers && headers.hasOwnProperty('Content-Type')) {
    twilsockHeader.payload_type = headers['Content-Type'];
  }

  this._sendPacket(twilsockHeader, body);
  return id;
  /* eslint-enable camelcase */
};

TwilsockChannel.prototype.send = function (header, body) {
  header.id = header.id || uuid.v4();
  this._sendPacket(header, body);
  return header.id;
};

/**
 * @private
 */
TwilsockChannel.prototype._onSocketRejected = function socketRejected(reason) {
  log.error('Twilsock connection closed by server', reason);
  this._closeSocket();
};

/**
 * @private
 */
TwilsockChannel.prototype._startWatchdogTimer = function () {
  var _this3 = this;

  this._timestamp = Date.now();
  this._watchTimer = setInterval(function () {
    if (Date.now() - _this3._timestamp > ACTIVITY_TIMEOUT && _this3._socket) {
      _this3._socket.close();
      _this3._socket.onmessage = null;
      _this3._socket = null;
      _this3._fsm.socketClosed();
    }
  }, ACTIVITY_CHECK_INTERVAL);
};

/**
 * @private
 */
TwilsockChannel.prototype._stopWatchdogTimer = function () {
  clearInterval(this._watchTimer);
};

/**
 * @private
 */
TwilsockChannel.prototype._updateActivityTimestamp = function () {
  this._timestamp = Date.now();
};

(0, _freeze2.default)(TwilsockChannel);

module.exports = TwilsockChannel;

}).call(this,_dereq_("buffer").Buffer)
},{"babel-runtime/core-js/json/stringify":31,"babel-runtime/core-js/object/define-properties":33,"babel-runtime/core-js/object/freeze":34,"babel-runtime/core-js/promise":36,"babel-runtime/helpers/typeof":40,"backoff":145,"buffer":154,"events":160,"javascript-state-machine":165,"loglevel":166,"util":205,"uuid":207,"ws":208}],201:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = _dereq_('punycode');
var util = _dereq_('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = _dereq_('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"./util":202,"punycode":173,"querystring":176}],202:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],203:[function(_dereq_,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],204:[function(_dereq_,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],205:[function(_dereq_,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = _dereq_('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = _dereq_('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":204,"_process":172,"inherits":163}],206:[function(_dereq_,module,exports){
(function (global){

var rng;

if (global.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],207:[function(_dereq_,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = _dereq_('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":206}],208:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],209:[function(_dereq_,module,exports){
(function (process,Buffer){
/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var Url = _dereq_("url");
var spawn = _dereq_("child_process").spawn;
var fs = _dereq_("fs");

exports.XMLHttpRequest = function() {
  "use strict";

  /**
   * Private variables
   */
  var self = this;
  var http = _dereq_("http");
  var https = _dereq_("https");

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*",
  };

  var headers = {};
  var headersCase = {};

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = "";
  this.status = null;
  this.statusText = null;
  
  // Whether cross-site Access-Control requests should be made using
  // credentials such as cookies or authorization headers
  this.withCredentials = false;

  /**
   * Private methods
   */

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw new Error("SecurityError: Request method not allowed");
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request or appends the value if one is already set.
   *
   * @param string header Header name
   * @param string value Header value
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn("Refused to set unsafe header \"" + header + "\"");
      return;
    }
    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send flag is true");
    }
    header = headersCase[header.toLowerCase()] || header;
    headersCase[header.toLowerCase()] = header;
    headers[header] = headers[header] ? headers[header] + ', ' + value : value;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string"
      && this.readyState > this.OPENED
      && response
      && response.headers
      && response.headers[header.toLowerCase()]
      && !errorFlag
    ) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    if (typeof name === "string" && headersCase[name.toLowerCase()]) {
      return headers[headersCase[name.toLowerCase()]];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
    }

    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send has already been called");
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host;
    // Determine the server
    switch (url.protocol) {
      case "https:":
        ssl = true;
        // SSL & non-SSL both need host, no break here.
      case "http:":
        host = url.hostname;
        break;

      case "file:":
        local = true;
        break;

      case undefined:
      case null:
      case "":
        host = "localhost";
        break;

      default:
        throw new Error("Protocol not supported.");
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw new Error("XMLHttpRequest: Only GET method is supported");
      }

      if (settings.async) {
        fs.readFile(url.pathname, "utf8", function(error, data) {
          if (error) {
            self.handleError(error);
          } else {
            self.status = 200;
            self.responseText = data;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.responseText = fs.readFileSync(url.pathname, "utf8");
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : "");

    // Set the defaults if they haven't been set
    for (var name in defaultHeaders) {
      if (!headersCase[name.toLowerCase()]) {
        headers[name] = defaultHeaders[name];
      }
    }

    // Set the Host header or the server may reject the request
    headers.Host = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers.Host += ":" + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password === "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers.Authorization = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: false,
      withCredentials: self.withCredentials
    };

    // Reset error flag
    errorFlag = false;

    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      var responseHandler = function responseHandler(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? "GET" : settings.method,
            headers: headers,
            withCredentials: self.withCredentials
          };

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on("error", errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        response.setEncoding("utf8");

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on("data", function(chunk) {
          // Make sure there's some data
          if (chunk) {
            self.responseText += chunk;
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on("end", function() {
          if (sendFlag) {
            // Discard the end event if the connection has been aborted
            setState(self.DONE);
            sendFlag = false;
          }
        });

        response.on("error", function(error) {
          self.handleError(error);
        });
      };

      // Error handler for the request
      var errorHandler = function errorHandler(error) {
        self.handleError(error);
      };

      // Create the request
      request = doRequest(options, responseHandler).on("error", errorHandler);

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
        + "var options = " + JSON.stringify(options) + ";"
        + "var responseText = '';"
        + "var req = doRequest(options, function(response) {"
        + "response.setEncoding('utf8');"
        + "response.on('data', function(chunk) {"
        + "  responseText += chunk;"
        + "});"
        + "response.on('end', function() {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "response.on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "}).on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
        + "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
      while(fs.existsSync(syncFile)) {
        // Wait while the sync file is empty
      }
      var resp = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);

      if (resp.err) {
        self.handleError(resp.err);
      } else {
        response = resp.data;
        self.status = resp.data.statusCode;
        self.responseText = resp.data.text;
        setState(self.DONE);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   */
  this.handleError = function(error) {
    this.status = 0;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
    this.dispatchEvent('error');
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = defaultHeaders;
    this.status = 0;
    this.responseText = "";
    this.responseXML = "";

    errorFlag = true;

    if (this.readyState !== this.UNSENT
        && (this.readyState !== this.OPENED || sendFlag)
        && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
    this.dispatchEvent('abort');
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function(event) {
    if (typeof self["on" + event] === "function") {
      self["on" + event]();
    }
    if (event in listeners) {
      for (var i = 0, len = listeners[event].length; i < len; i++) {
        listeners[event][i].call(self);
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if (state == self.LOADING || self.readyState !== state) {
      self.readyState = state;

      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
        self.dispatchEvent("readystatechange");
      }

      if (self.readyState === self.DONE && !errorFlag) {
        self.dispatchEvent("load");
        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
        self.dispatchEvent("loadend");
      }
    }
  };
};

}).call(this,_dereq_('_process'),_dereq_("buffer").Buffer)
},{"_process":172,"buffer":154,"child_process":153,"fs":153,"http":177,"https":161,"url":201}],210:[function(_dereq_,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],211:[function(_dereq_,module,exports){
module.exports={
  "name": "twilio-ip-messaging",
  "version": "0.10.4",
  "description": "A library for Twilio IP messaging",
  "main": "lib/index.js",
  "author": "Twilio",
  "license": "MIT",
  "dependencies": {
    "backoff": "^2.4.1",
    "durational": "^1.1.0",
    "javascript-state-machine": "^2.3.5",
    "loglevel": "^1.3.1",
    "platform": "^1.3.0",
    "twilio": "^2.5.1",
    "twilio-notifications": "^0.1.2",
    "twilio-transport": "0.0.1",
    "twilsock": "^0.1.1",
    "uuid": "^2.0.2",
    "ws": "^0.8.0",
    "xmlhttprequest": "^1.7.0"
  },
  "devDependencies": {
    "async": "^2.0.0-rc.1",
    "babel-eslint": "^4.1.3",
    "babel-plugin-transform-runtime": "^6.7.5",
    "babel-preset-es2015": "^6.3.13",
    "babel-runtime": "^6.6.1",
    "babelify": "^7.2.0",
    "browserify": "^12.0.1",
    "chai": "^3.2.0",
    "chai-as-promised": "^5.1.0",
    "cheerio": "^0.19.0",
    "del": "^2.0.2",
    "event-to-promise": "^0.6.0",
    "express": "^4.13.3",
    "gulp": "^3.9.0",
    "gulp-derequire": "^2.1.0",
    "gulp-eslint": "^1.0.0",
    "gulp-exit": "0.0.2",
    "gulp-insert": "^0.5.0",
    "gulp-istanbul": "^0.10.3",
    "gulp-mocha": "^2.2.0",
    "gulp-rename": "^1.2.2",
    "gulp-replace": "^0.5.4",
    "gulp-tap": "^0.1.3",
    "gulp-uglify": "^1.2.0",
    "ink-docstrap": "^1.1.4",
    "jsdoc": "^3.4.0",
    "jsdoc-babel": "^0.1.0",
    "mocha.parallel": "^0.11.2",
    "proxyquire": "^1.7.3",
    "run-sequence": "^1.1.0",
    "sinon": "^1.15.4",
    "sinon-as-promised": "^4.0.0",
    "sinon-chai": "^2.8.0",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "engines": {
    "node": ">=0.12"
  }
}

},{}]},{},[29])(29)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
/* eslint strict:0 */
(function(root) {
  /* globals define */
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return require('./twilio-ip-messaging-bundle.js');
    });
  } else {
    var Twilio = root.Twilio = root.Twilio || {};
    Twilio.IPMessaging = Twilio.IPMessaging || require('./twilio-ip-messaging-bundle.js');
  }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./twilio-ip-messaging-bundle.js":1}]},{},[2]);
