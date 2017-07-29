"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

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
	@end-test-license

	@test-configuration:
		{
			"package": "nafe",
			"path": "nafe/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/nafe.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"nafe": "nafe"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const nafe = require( "./nafe.js" );
//: @end-server

//: @client:
const nafe = require( "./nafe.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "nafe", ( ) => {


	describe( "`nafe( Array.prototype.push )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( nafe( Array.prototype.push ), true );

		} );
	} );


	describe( "`nafe( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( nafe( Error ), true );

		} );
	} );


	describe( "`nafe( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( nafe( function( ){ } ), false );

		} );
	} );

	describe( "`nafe( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( nafe( ( ) => { } ), false );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "nafe", ( ) => {


	describe( "`nafe( Array.prototype.push )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( nafe( Array.prototype.push ), true );

		} );
	} );


	describe( "`nafe( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( nafe( Error ), true );

		} );
	} );


	describe( "`nafe( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( nafe( function( ){ } ), false );

		} );
	} );

	describe( "`nafe( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( nafe( ( ) => { } ), false );

		} );
	} );

} );
//: @end-client


//: @bridge:

describe( "nafe", ( ) => {

	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;


	//let result = browser.url( bridgeURL ).execute( ( ) => <test> );
	//assert.equal( result.value, <expected> );
	describe( "`nafe( Array.prototype.push )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nafe( Array.prototype.push ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`nafe( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nafe( Error ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`nafe( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nafe( function( ){ } ) );
			assert.equal( result.value, false );

		} );
	} );

	describe( "`nafe( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nafe( ( ) => { } ) );
			assert.equal( result.value, false );

		} );
	} );

} );

//: @end-bridge
