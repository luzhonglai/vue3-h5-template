<!--
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-07-23 23:53:50
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-11-30 14:04:18
-->

# vue3-h5-template

> ð¥ ð Vue 3.0 + TypeScript + Vue-Router 4.0 + Vant + Axios + Vuex

## åºç¡æ¯æ

> æ¨¡çå¼åä¹åãæä»¬åäºä»¥ä¸åå¤å·¥ä½

- æ­å»ºå¼åç¯å¢
- çº¦å®ä»£ç è§è
- å°è£ API è¯·æ±
- è¯·æ±æ¥å¿çªå£
- æéç®¡ç
- å¤ç¯å¢åå¸ (å¯¹åº serve,build)
  - dev
  - test
  - prod

## æä»¶ä»ç»

### vue3

```js

// æ·»å å¨å±api
app.config.globalProperties.$api = { ...api }
app.config.globalProperties.$fetch = fetch
app.config.globalProperties.$wsCache = wsCache

// å¦ä½å»ä½¿ç¨
const { proxy:{ $api, $fetch, $wsCache }: any = getCurrentInstance() // è·åå¨å±æ¹æ³

$api.user.getInfo()
$fetch.get()

$wsCache.get('userInfo')
$wsCache.set('token')

```

### ä½¿ç¨

ä½¿ç¨ `yarn`ï¼

```bash
#å®è£æ¹å¼
yarn install

#è¿è¡
yarn run serve
```

ä½¿ç¨ `npm`ï¼

```bash
# å®è£ä¾èµ
npm install

# è¿è¡;
npm run serve
```

### ä¼åæ»ç»

```javascriptw
/*
    ç¼è¯ä¼åãç­æ´æ°ç¼å­åçãæå40%
*/
const HardSourWebpackPlugin = require('HardSourWebpackPlugin')
```

### æå
