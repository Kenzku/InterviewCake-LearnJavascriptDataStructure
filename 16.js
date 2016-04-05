/**
 * Created by huang on 03/04/16.
 */
const assert = require('assert');

var testArray = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15}
];
assert.equal(maxDuffelBagValue(testArray, 20), 555);

testArray = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15}
];
assert.equal(maxDuffelBagValue(testArray, 0), 0);

testArray = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
    {weight: 0, value: 15}
];
assert.equal(maxDuffelBagValue(testArray, 10), Infinity);

function maxDuffelBagValue(cakeTypes, weightCapacity) {

    // we make an array to hold the maximum possible value at every
    // duffel bag weight capacity from 0 to weightCapacity
    // starting each index with value 0
    var maxValuesAtCapacities = [];
    for (var i = 0; i <= weightCapacity; i++) {
        maxValuesAtCapacities[i] = 0;
    }

    for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
        var currentMaxValue = 0; // reset every loop
        for (var j = 0; j < cakeTypes.length; j++) {
            var cakeType = cakeTypes[j];
            // edge case: if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
            if (cakeType.weight === 0 && cakeType.value !== 0) {
                return Infinity;
            }
            var maxValueUsingCake;
            // if the cake weighs as much or less than the current capacity
            // see what our max value could be if we took it!
            if (cakeType.weight <= currentCapacity) {
                // find maxValueUsingCake
                // Since remainingCapacityAfterTakingCake is a lower capacity,
                // we'll have always already computed its max value and stored it in our maxValuesAtCapacities!
                maxValueUsingCake = maxValuesAtCapacities[currentCapacity - cakeType.weight] + cakeType.value;
                currentMaxValue = Math.max(currentMaxValue, maxValueUsingCake);
            }

        }
        // add each capacity's max value to our array so we can use them
        // when calculating all the remaining capacities
        maxValuesAtCapacities[currentCapacity] = currentMaxValue;
    }
    return maxValuesAtCapacities[weightCapacity];
}