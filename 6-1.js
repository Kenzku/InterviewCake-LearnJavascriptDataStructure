/**
 * Created by huang on 28/03/16.
 */
const assert = require('assert');

assert.deepEqual(findOverlapRange(3,5,7,4), {startPoint:7, width:1});

assert.deepEqual(findOverlapRange(3,8,6,3), {startPoint:6, width:3});

assert.deepEqual(findOverlapRange(3,1,4,1), {startPoint:null, width:null});

assert.deepEqual(findOverlapRange(3,2,7,3), {startPoint:null, width:null});

/**
 * find overlapped range in one dimension.
 * @param point1 either x or y
 * @param length1 the length
 * @param point2 same unit as point 1
 * @param length2 same unit as length 1
 */
function findOverlapRange(point1, length1, point2, length2) {
    var overlappedRange = {startPoint:null, width:null},
        higherStartPoint,
        lowerEndPoint;

    /**
     * when overlap:
     * higherStartPoint on the right of the overlap,
     * lowerEndPoint on the left of the overlap,
     *
     * when no overlap:
     * higherStartPoint on the right of the lowerEndPoint
     */
    higherStartPoint = Math.max(point1, point2);
    lowerEndPoint = Math.min(point1+length1, point2+length2);

    if (higherStartPoint >= lowerEndPoint) {
        return  overlappedRange;
    }
    overlappedRange.startPoint = higherStartPoint;
    overlappedRange.width = lowerEndPoint - higherStartPoint;
    return overlappedRange;
}

exports=findOverlapRange;