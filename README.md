An example of writing integration tests with Miniflare, [jose](https://github.com/panva/jose) and Vitest.


Run the tests
```
npm run test
```

Observe an error

```
 src/jwt.test.ts [ src/jwt.test.ts ]
TypeError: deprecate is not a function
 ❯ node_modules/jose/dist/node/esm/runtime/rsaes.js:23:38
```

It happens because [the jose](https://github.com/panva/jose) library uses this and it seems like [vitest-pool-workers](https://github.com/mrbbot/vitest-pool-workers-prerelease-getting-started) doesn't support it.

```ts
import { deprecate } from 'node:util';
```

The [jose library](https://github.com/panva/jose) works in the production runtime of Cloudflare workers without the `nodejs_compat` flag, but `vitest-pool-workers` requires the flag, which feels paradoxical.
