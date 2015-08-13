'use strict';

/**
* FUNCTION: serialize()
*	Serializes negative infinity for dynamic code evaluation.
*
* @returns {String} serialized value
*/
function serialize() {
	return 'Number.NEGATIVE_INFINITY';
} // end FUNCTION serialize()


// EXPORTS //

module.exports = serialize;
