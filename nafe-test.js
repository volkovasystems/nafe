const assert = require( "assert" );
const nafe = require( "./nafe.js" );

assert.equal( nafe( Array.prototype.push ), true, "should be true" );
assert.equal( nafe( Object.prototype.toString ), true, "should be true" );
assert.equal( nafe( Date.prototype.getDate ), true, "should be true" );

assert.equal( nafe( function( ){ } ), false, "should be false" );

console.log( "ok" );
