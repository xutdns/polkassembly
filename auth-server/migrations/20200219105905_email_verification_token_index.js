// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
exports.up = function(knex) {
	return knex.schema.table('email_verification_token', (table) => {
		table.index('token');
	});
};

exports.down = function(knex) {
	return knex.schema.table('email_verification_token', (table) => {
		table.dropIndex('token');
	});
};
