This started as a Next.js experiment to see if we can have domain based locales with static optimization by rewriting URLs on the server to prepend the locale. We almost got it working but then [Next.js v9.5.0 broke it](issues/3). We gave up and just used next-i18next with [a known solution](https://github.com/isaachinman/next-i18next/issues/16#issuecomment-520853281) to the problem.

## Install and Run

1. Install: `npm i`
2. Modify your hosts file as [described below](#hosts).
2. Start the server: `npm run dev`
3. Open your browser to port `3000` on any of the hosts from the hosts file. Example: http://nexttest.de:3000.

## Key Pieces

### Custom i18next Language Detector

All of the magic is done by a custom language detector in the [i18n.js](blob/master/src/i18n.js) file. Read through the comments in that file to see how it works. The interface for the custom language detector is [described here](https://github.com/i18next/i18next-http-middleware#interface).

### Hosts

This code is configured to work with the domains listed below. This is enabled for local development by [modifying the hosts file](https://www.hostgator.com/help/article/how-do-i-change-my-hosts-file).

- nexttest.com
- nexttest.es
- nexttest.de
- it.nexttest.international
- ua.nexttest.international

You can use any hosts you want as long as you configure them in the [i18n.js](blob/master/src/i18n.js) file.