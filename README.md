This started as a Next.js experiment to see if we can have domain based locales with static optimization by rewriting URLs on the server to prepend the locale. We almost got it working but then [Next.js v9.5.0 broke it](issues/3). We gave up and just used next-i18next with [a known solution](https://github.com/isaachinman/next-i18next/issues/16#issuecomment-520853281) to the problem.

### Hosts

- nexttest.com
- nexttest.es
- nexttest.de
- it.nexttest.international
- ua.nexttest.international
