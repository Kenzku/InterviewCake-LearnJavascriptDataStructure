/**
 * Created by huang on 10/04/16.
 */
var a = [[1,2,3,4],[5,6,7],[8,9,10]],
    b = [];

for (var i = 0; i < a.length;) {
    b = b.concat(a.shift());
}

console.log(b);