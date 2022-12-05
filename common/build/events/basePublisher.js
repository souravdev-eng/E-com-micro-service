"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher(client) {
        this.client = client;
    }
    Publisher.prototype.publish = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.client
                .createChannel()
                .then(function (channel) {
                channel.assertQueue(_this.subject, {
                    durable: false,
                    autoDelete: true,
                    messageTtl: 5 * 60 * 1000,
                    expires: 2 * 3600 * 1000,
                });
                channel.sendToQueue(_this.subject, Buffer.from(JSON.stringify(data)));
                console.log("Event published to subject: ".concat(_this.subject));
                resolve();
            })
                .catch(function (error) { return reject(error); });
        });
    };
    return Publisher;
}());
exports.Publisher = Publisher;
