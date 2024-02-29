import { SignJWT } from "jose"

export async function signUserToken(user: string) {
  const secret = new TextEncoder().encode('aoc58iun9owirluadksfjcf')

  return new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('issuer')
    .setAudience('audience')
    .setExpirationTime('72h')
    .sign(secret)
}