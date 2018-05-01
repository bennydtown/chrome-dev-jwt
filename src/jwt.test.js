import React from 'react';
import makeToken from './jwt';

describe('makeToken', () => {
  it('parses roles correctly', () => {
    const token = makeToken({
      userId: '1',
      roles: '[ "sales" ]',
      impUserId: '',
      impRoles: ''
    })
    expect(token.decoded.roles[0]).toBe('sales');
  });
});
