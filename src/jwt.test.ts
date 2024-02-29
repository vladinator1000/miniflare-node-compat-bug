import { signUserToken } from "./jwt"

describe('json web token', () => { 
  test('signUserToken', () => {
    const signed = signUserToken('paul')
    expect(signed).toEqual(2)
  })
})