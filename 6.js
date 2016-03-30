/**
 * Created by huang on 28/03/16.
 */
const assert = require('assert'),
    findOverlapRange = require('./6-1.js');

var rec1 = {
        // coordinates of bottom-left corner
        leftX: 1,
        bottomY: 5,

        // width and height
        width: 10,
        height: 4
    },
    rec2 = {
        // coordinates of bottom-left corner
        leftX: 0,
        bottomY: 1,

        // width and height
        width: 2,
        height: 1
    },
    expect = {
        // coordinates of bottom-left corner
        leftX: 1,
        bottomY: 1,

        // width and height
        width: 1,
        height: 1
    };

assert.deepEqual(findOverlapRectangle(rec1,rec2),expect);

var rec1 = {
        // coordinates of bottom-left corner
        leftX: 2,
        bottomY: 5,

        // width and height
        width: 10,
        height: 4
    },
    rec2 = {
        // coordinates of bottom-left corner
        leftX: 0,
        bottomY: 1,

        // width and height
        width: 2,
        height: 1
    },
    expect = {
        // coordinates of bottom-left corner
        leftX: null,
        bottomY: null,

        // width and height
        width: null,
        height: null
    };

assert.deepEqual(findOverlapRectangle(rec1,rec2),expect);


function findOverlapRectangle(rect1, rect2) {
    /**
     * each rectangle has 2 points will fit in findOverlapRange
     * in rect 1:
     * leftX and width is point1 and length1
     * bottomY and height is another point1 and length1
     * which matches rect 2:
     * leftX and width is point2 and length2
     * bottomY and height is another point2 and length2
     */
    var overlapRec = {leftX:null, bottomY:null, width:null, height:null},
        overlapRangeX = findOverlapRange(rect1.leftX, rect1.width, rect2.leftX, rect2.width),
        overlapRangeY = findOverlapRange(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);
    if (overlapRangeX.startPoint === null && overlapRangeY.startPoint === null) {
        return overlapRec;
    }
    overlapRec.leftX = overlapRangeX.startPoint;
    overlapRec.width = overlapRangeX.width;
    overlapRec.bottomY = overlapRangeY.startPoint;
    overlapRec.height = overlapRec.width;
    return overlapRec;
}