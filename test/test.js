/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	serialize = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'serialize', function tests() {

	it( 'should export a function', function test() {
		expect( serialize ).to.be.a( 'function' );
	});

	it( 'should serialize negative infinity', function test() {
		/* jshint evil:true */
		var val,
			out;

		val = Number.NEGATIVE_INFINITY;
		out = serialize();

		assert.strictEqual( out, 'Number.NEGATIVE_INFINITY' );
		assert.strictEqual( val, eval( out ) );
	});

});
