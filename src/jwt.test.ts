import { signUserToken } from "./jwt"

describe('json web token', () => { 
  test('signUserToken', async () => {
    const signed = await signUserToken('paul')
    expect(signed).toBeTruthy()
  })
})