/* Name: typed arrays
 * Category: built-ins
 * Significance: large
 * Link: http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects
 */

/*
 * Test: Int8Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Int8Array(buffer);         view[0] = 0x80;
    return view[0] === -0x80;
}

/*
 * Test: Uint8Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint8Array(buffer);        view[0] = 0x100;
    return view[0] === 0;
}

/*
 * Test: Uint8ClampedArray
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
    return view[0] === 0xFF;
}

/*
 * Test: Int16Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Int16Array(buffer);        view[0] = 0x8000;
    return view[0] === -0x8000;
}

/*
 * Test: Uint16Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint16Array(buffer);       view[0] = 0x10000;
    return view[0] === 0;
}

/*
 * Test: Int32Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Int32Array(buffer);        view[0] = 0x80000000;
    return view[0] === -0x80000000;
}

/*
 * Test: Uint32Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint32Array(buffer);       view[0] = 0x100000000;
    return view[0] === 0;
}

/*
 * Test: Float32Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Float32Array(buffer);       view[0] = 0.1;
    return view[0] === 0.10000000149011612;
}

/*
 * Test: Float64Array
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Float64Array(buffer);       view[0] = 0.1;
    return view[0] === 0.1;
}

/*
 * Test: DataView (Int8)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt8 (0, 0x80);
    return view.getInt8(0) === -0x80;
}

/*
 * Test: DataView (Uint8)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint8(0, 0x100);
    return view.getUint8(0) === 0;
}

/*
 * Test: DataView (Int16)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt16(0, 0x8000);
    return view.getInt16(0) === -0x8000;
}

/*
 * Test: DataView (Uint16)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint16(0, 0x10000);
    return view.getUint16(0) === 0;
}

/*
 * Test: DataView (Int32)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt32(0, 0x80000000);
    return view.getInt32(0) === -0x80000000;
}

/*
 * Test: DataView (Uint32)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint32(0, 0x100000000);
    return view.getUint32(0) === 0;
}

/*
 * Test: DataView (Float32)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setFloat32(0, 0.1);
    return view.getFloat32(0) === 0.10000000149011612;
}

/*
 * Test: DataView (Float64)
 */
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setFloat64(0, 0.1);
    return view.getFloat64(0) === 0.1;
}

/*
 * Test: ArrayBuffer[Symbol.species]
 */
function() {
    return typeof ArrayBuffer[Symbol.species] === 'function';
}

/*
 * Test: constructors require new
 */
function() {
    var buffer = new ArrayBuffer(64);
    var constructors = [
      'ArrayBuffer',
      'DataView',
      'Int8Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'Int16Array',
      'Uint16Array',
      'Int32Array',
      'Uint32Array',
      'Float32Array',
      'Float64Array'
    ];
    for(var i = 0; i < constructors.length; i+=1) {
      try {
        if (constructors[i] in global) {
          global[constructors[i]](constructors[i] === "ArrayBuffer" ? 64 : buffer);
        }
        return false;
      } catch(e) {
      }
    }
    return true;
}

/*
 * Test: correct prototype chains
 */
function() {
    var constructors = [
      'Int8Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'Int16Array',
      'Uint16Array',
      'Int32Array',
      'Uint32Array',
      'Float32Array',
      'Float64Array'
    ];
    var constructor = Object.getPrototypeOf(Int8Array);
    var prototype = Object.getPrototypeOf(Int8Array.prototype);
    for(var i = 0; i < constructors.length; i+=1) {
      if (!(constructors[i] in global
          && Object.getPrototypeOf(global[constructors[i]]) === constructor
          && Object.getPrototypeOf(global[constructors[i]].prototype) === prototype
          && Object.getOwnPropertyNames(global[constructors[i]].prototype).sort() + ''
            === "BYTES_PER_ELEMENT,constructor")) {
        return false;
      }
    }
    return true;
}

/*
 * Test: %TypedArray%.from
 */
function() {
turn typeof Int8Array.from === "function" &&
typeof Uint8Array.from === "function" &&
typeof Uint8ClampedArray.from === "function" &&
typeof Int16Array.from === "function" &&
typeof Uint16Array.from === "function" &&
typeof Int32Array.from === "function" &&
typeof Uint32Array.from === "function" &&
typeof Float32Array.from === "function" &&
typeof Float64Array.from === "function"}

/*
 * Test: %TypedArray%.of
 */
function() {
turn typeof Int8Array.of === "function" &&
typeof Uint8Array.of === "function" &&
typeof Uint8ClampedArray.of === "function" &&
typeof Int16Array.of === "function" &&
typeof Uint16Array.of === "function" &&
typeof Int32Array.of === "function" &&
typeof Uint32Array.of === "function" &&
typeof Float32Array.of === "function" &&
typeof Float64Array.of === "function"}

/*
 * Test: %TypedArray%.prototype.subarray
 */
function() {
turn typeof Int8Array.prototype.subarray === "function" &&
typeof Uint8Array.prototype.subarray === "function" &&
typeof Uint8ClampedArray.prototype.subarray === "function" &&
typeof Int16Array.prototype.subarray === "function" &&
typeof Uint16Array.prototype.subarray === "function" &&
typeof Int32Array.prototype.subarray === "function" &&
typeof Uint32Array.prototype.subarray === "function" &&
typeof Float32Array.prototype.subarray === "function" &&
typeof Float64Array.prototype.subarray === "function"}

/*
 * Test: %TypedArray%.prototype.join
 */
function() {
turn typeof Int8Array.prototype.join === "function" &&
typeof Uint8Array.prototype.join === "function" &&
typeof Uint8ClampedArray.prototype.join === "function" &&
typeof Int16Array.prototype.join === "function" &&
typeof Uint16Array.prototype.join === "function" &&
typeof Int32Array.prototype.join === "function" &&
typeof Uint32Array.prototype.join === "function" &&
typeof Float32Array.prototype.join === "function" &&
typeof Float64Array.prototype.join === "function"}

/*
 * Test: %TypedArray%.prototype.indexOf
 */
function() {
turn typeof Int8Array.prototype.indexOf === "function" &&
typeof Uint8Array.prototype.indexOf === "function" &&
typeof Uint8ClampedArray.prototype.indexOf === "function" &&
typeof Int16Array.prototype.indexOf === "function" &&
typeof Uint16Array.prototype.indexOf === "function" &&
typeof Int32Array.prototype.indexOf === "function" &&
typeof Uint32Array.prototype.indexOf === "function" &&
typeof Float32Array.prototype.indexOf === "function" &&
typeof Float64Array.prototype.indexOf === "function"}

/*
 * Test: %TypedArray%.prototype.lastIndexOf
 */
function() {
turn typeof Int8Array.prototype.lastIndexOf === "function" &&
typeof Uint8Array.prototype.lastIndexOf === "function" &&
typeof Uint8ClampedArray.prototype.lastIndexOf === "function" &&
typeof Int16Array.prototype.lastIndexOf === "function" &&
typeof Uint16Array.prototype.lastIndexOf === "function" &&
typeof Int32Array.prototype.lastIndexOf === "function" &&
typeof Uint32Array.prototype.lastIndexOf === "function" &&
typeof Float32Array.prototype.lastIndexOf === "function" &&
typeof Float64Array.prototype.lastIndexOf === "function"}

/*
 * Test: %TypedArray%.prototype.slice
 */
function() {
turn typeof Int8Array.prototype.slice === "function" &&
typeof Uint8Array.prototype.slice === "function" &&
typeof Uint8ClampedArray.prototype.slice === "function" &&
typeof Int16Array.prototype.slice === "function" &&
typeof Uint16Array.prototype.slice === "function" &&
typeof Int32Array.prototype.slice === "function" &&
typeof Uint32Array.prototype.slice === "function" &&
typeof Float32Array.prototype.slice === "function" &&
typeof Float64Array.prototype.slice === "function"}

/*
 * Test: %TypedArray%.prototype.every
 */
function() {
turn typeof Int8Array.prototype.every === "function" &&
typeof Uint8Array.prototype.every === "function" &&
typeof Uint8ClampedArray.prototype.every === "function" &&
typeof Int16Array.prototype.every === "function" &&
typeof Uint16Array.prototype.every === "function" &&
typeof Int32Array.prototype.every === "function" &&
typeof Uint32Array.prototype.every === "function" &&
typeof Float32Array.prototype.every === "function" &&
typeof Float64Array.prototype.every === "function"}

/*
 * Test: %TypedArray%.prototype.filter
 */
function() {
turn typeof Int8Array.prototype.filter === "function" &&
typeof Uint8Array.prototype.filter === "function" &&
typeof Uint8ClampedArray.prototype.filter === "function" &&
typeof Int16Array.prototype.filter === "function" &&
typeof Uint16Array.prototype.filter === "function" &&
typeof Int32Array.prototype.filter === "function" &&
typeof Uint32Array.prototype.filter === "function" &&
typeof Float32Array.prototype.filter === "function" &&
typeof Float64Array.prototype.filter === "function"}

/*
 * Test: %TypedArray%.prototype.forEach
 */
function() {
turn typeof Int8Array.prototype.forEach === "function" &&
typeof Uint8Array.prototype.forEach === "function" &&
typeof Uint8ClampedArray.prototype.forEach === "function" &&
typeof Int16Array.prototype.forEach === "function" &&
typeof Uint16Array.prototype.forEach === "function" &&
typeof Int32Array.prototype.forEach === "function" &&
typeof Uint32Array.prototype.forEach === "function" &&
typeof Float32Array.prototype.forEach === "function" &&
typeof Float64Array.prototype.forEach === "function"}

/*
 * Test: %TypedArray%.prototype.map
 */
function() {
turn typeof Int8Array.prototype.map === "function" &&
typeof Uint8Array.prototype.map === "function" &&
typeof Uint8ClampedArray.prototype.map === "function" &&
typeof Int16Array.prototype.map === "function" &&
typeof Uint16Array.prototype.map === "function" &&
typeof Int32Array.prototype.map === "function" &&
typeof Uint32Array.prototype.map === "function" &&
typeof Float32Array.prototype.map === "function" &&
typeof Float64Array.prototype.map === "function"}

/*
 * Test: %TypedArray%.prototype.reduce
 */
function() {
turn typeof Int8Array.prototype.reduce === "function" &&
typeof Uint8Array.prototype.reduce === "function" &&
typeof Uint8ClampedArray.prototype.reduce === "function" &&
typeof Int16Array.prototype.reduce === "function" &&
typeof Uint16Array.prototype.reduce === "function" &&
typeof Int32Array.prototype.reduce === "function" &&
typeof Uint32Array.prototype.reduce === "function" &&
typeof Float32Array.prototype.reduce === "function" &&
typeof Float64Array.prototype.reduce === "function"}

/*
 * Test: %TypedArray%.prototype.reduceRight
 */
function() {
turn typeof Int8Array.prototype.reduceRight === "function" &&
typeof Uint8Array.prototype.reduceRight === "function" &&
typeof Uint8ClampedArray.prototype.reduceRight === "function" &&
typeof Int16Array.prototype.reduceRight === "function" &&
typeof Uint16Array.prototype.reduceRight === "function" &&
typeof Int32Array.prototype.reduceRight === "function" &&
typeof Uint32Array.prototype.reduceRight === "function" &&
typeof Float32Array.prototype.reduceRight === "function" &&
typeof Float64Array.prototype.reduceRight === "function"}

/*
 * Test: %TypedArray%.prototype.reverse
 */
function() {
turn typeof Int8Array.prototype.reverse === "function" &&
typeof Uint8Array.prototype.reverse === "function" &&
typeof Uint8ClampedArray.prototype.reverse === "function" &&
typeof Int16Array.prototype.reverse === "function" &&
typeof Uint16Array.prototype.reverse === "function" &&
typeof Int32Array.prototype.reverse === "function" &&
typeof Uint32Array.prototype.reverse === "function" &&
typeof Float32Array.prototype.reverse === "function" &&
typeof Float64Array.prototype.reverse === "function"}

/*
 * Test: %TypedArray%.prototype.some
 */
function() {
turn typeof Int8Array.prototype.some === "function" &&
typeof Uint8Array.prototype.some === "function" &&
typeof Uint8ClampedArray.prototype.some === "function" &&
typeof Int16Array.prototype.some === "function" &&
typeof Uint16Array.prototype.some === "function" &&
typeof Int32Array.prototype.some === "function" &&
typeof Uint32Array.prototype.some === "function" &&
typeof Float32Array.prototype.some === "function" &&
typeof Float64Array.prototype.some === "function"}

/*
 * Test: %TypedArray%.prototype.sort
 */
function() {
turn typeof Int8Array.prototype.sort === "function" &&
typeof Uint8Array.prototype.sort === "function" &&
typeof Uint8ClampedArray.prototype.sort === "function" &&
typeof Int16Array.prototype.sort === "function" &&
typeof Uint16Array.prototype.sort === "function" &&
typeof Int32Array.prototype.sort === "function" &&
typeof Uint32Array.prototype.sort === "function" &&
typeof Float32Array.prototype.sort === "function" &&
typeof Float64Array.prototype.sort === "function"}

/*
 * Test: %TypedArray%.prototype.copyWithin
 */
function() {
turn typeof Int8Array.prototype.copyWithin === "function" &&
typeof Uint8Array.prototype.copyWithin === "function" &&
typeof Uint8ClampedArray.prototype.copyWithin === "function" &&
typeof Int16Array.prototype.copyWithin === "function" &&
typeof Uint16Array.prototype.copyWithin === "function" &&
typeof Int32Array.prototype.copyWithin === "function" &&
typeof Uint32Array.prototype.copyWithin === "function" &&
typeof Float32Array.prototype.copyWithin === "function" &&
typeof Float64Array.prototype.copyWithin === "function"}

/*
 * Test: %TypedArray%.prototype.find
 */
function() {
turn typeof Int8Array.prototype.find === "function" &&
typeof Uint8Array.prototype.find === "function" &&
typeof Uint8ClampedArray.prototype.find === "function" &&
typeof Int16Array.prototype.find === "function" &&
typeof Uint16Array.prototype.find === "function" &&
typeof Int32Array.prototype.find === "function" &&
typeof Uint32Array.prototype.find === "function" &&
typeof Float32Array.prototype.find === "function" &&
typeof Float64Array.prototype.find === "function"}

/*
 * Test: %TypedArray%.prototype.findIndex
 */
function() {
turn typeof Int8Array.prototype.findIndex === "function" &&
typeof Uint8Array.prototype.findIndex === "function" &&
typeof Uint8ClampedArray.prototype.findIndex === "function" &&
typeof Int16Array.prototype.findIndex === "function" &&
typeof Uint16Array.prototype.findIndex === "function" &&
typeof Int32Array.prototype.findIndex === "function" &&
typeof Uint32Array.prototype.findIndex === "function" &&
typeof Float32Array.prototype.findIndex === "function" &&
typeof Float64Array.prototype.findIndex === "function"}

/*
 * Test: %TypedArray%.prototype.fill
 */
function() {
turn typeof Int8Array.prototype.fill === "function" &&
typeof Uint8Array.prototype.fill === "function" &&
typeof Uint8ClampedArray.prototype.fill === "function" &&
typeof Int16Array.prototype.fill === "function" &&
typeof Uint16Array.prototype.fill === "function" &&
typeof Int32Array.prototype.fill === "function" &&
typeof Uint32Array.prototype.fill === "function" &&
typeof Float32Array.prototype.fill === "function" &&
typeof Float64Array.prototype.fill === "function"}

/*
 * Test: %TypedArray%.prototype.keys
 */
function() {
turn typeof Int8Array.prototype.keys === "function" &&
typeof Uint8Array.prototype.keys === "function" &&
typeof Uint8ClampedArray.prototype.keys === "function" &&
typeof Int16Array.prototype.keys === "function" &&
typeof Uint16Array.prototype.keys === "function" &&
typeof Int32Array.prototype.keys === "function" &&
typeof Uint32Array.prototype.keys === "function" &&
typeof Float32Array.prototype.keys === "function" &&
typeof Float64Array.prototype.keys === "function"}

/*
 * Test: %TypedArray%.prototype.values
 */
function() {
turn typeof Int8Array.prototype.values === "function" &&
typeof Uint8Array.prototype.values === "function" &&
typeof Uint8ClampedArray.prototype.values === "function" &&
typeof Int16Array.prototype.values === "function" &&
typeof Uint16Array.prototype.values === "function" &&
typeof Int32Array.prototype.values === "function" &&
typeof Uint32Array.prototype.values === "function" &&
typeof Float32Array.prototype.values === "function" &&
typeof Float64Array.prototype.values === "function"}

/*
 * Test: %TypedArray%.prototype.entries
 */
function() {
turn typeof Int8Array.prototype.entries === "function" &&
typeof Uint8Array.prototype.entries === "function" &&
typeof Uint8ClampedArray.prototype.entries === "function" &&
typeof Int16Array.prototype.entries === "function" &&
typeof Uint16Array.prototype.entries === "function" &&
typeof Int32Array.prototype.entries === "function" &&
typeof Uint32Array.prototype.entries === "function" &&
typeof Float32Array.prototype.entries === "function" &&
typeof Float64Array.prototype.entries === "function"}

/*
 * Test: %TypedArray%.prototype[Symbol.iterator]
 */
function() {
turn typeof Int8Array.prototype[Symbol.iterator] === "function" &&
typeof Uint8Array.prototype[Symbol.iterator] === "function" &&
typeof Uint8ClampedArray.prototype[Symbol.iterator] === "function" &&
typeof Int16Array.prototype[Symbol.iterator] === "function" &&
typeof Uint16Array.prototype[Symbol.iterator] === "function" &&
typeof Int32Array.prototype[Symbol.iterator] === "function" &&
typeof Uint32Array.prototype[Symbol.iterator] === "function" &&
typeof Float32Array.prototype[Symbol.iterator] === "function" &&
typeof Float64Array.prototype[Symbol.iterator] === "function"}

/*
 * Test: %TypedArray%[Symbol.species]
 */
function() {
turn typeof Int8Array[Symbol.species] === "function" &&
typeof Uint8Array[Symbol.species] === "function" &&
typeof Uint8ClampedArray[Symbol.species] === "function" &&
typeof Int16Array[Symbol.species] === "function" &&
typeof Uint16Array[Symbol.species] === "function" &&
typeof Int32Array[Symbol.species] === "function" &&
typeof Uint32Array[Symbol.species] === "function" &&
typeof Float32Array[Symbol.species] === "function" &&
typeof Float64Array[Symbol.species] === "function"}

