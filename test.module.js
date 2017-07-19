const assert = require( "assert" );
const nafe = require( "./nafe.js" );

assert.equal( nafe( Array.prototype.push ), true, "should be true" );

assert.equal( nafe( Error ), true, "should return true" );

assert.equal( nafe( function( ){ } ), false, "should be false" );

assert.equal( nafe( ( ) => { } ), false, "should be true" );

console.log( "ok" );
