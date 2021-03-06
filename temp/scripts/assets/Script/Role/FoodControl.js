"use strict";
cc._RFpush(module, 'ff0ccQY/cdBBKBDsk2JYxxm', 'FoodControl');
// Script\Role\FoodControl.js

var Helpers = require('Helpers');

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var colorAry = Helpers.getRandomColor();
        this.node.color = new cc.Color(colorAry[0], colorAry[1], colorAry[2]);
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.tag == Helpers.MyHeadTag && self.tag == Helpers.FoodTag) {
            cc.director.GlobalEvent.emit('eatAFood', self.node);
        }
    }

});

cc._RFpop();