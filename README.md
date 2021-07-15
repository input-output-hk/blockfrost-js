<img src="https://blockfrost.io/images/logo.svg" width="250">

A JavaScript/TypeScript SDK for interacting with the https://blockfrost.io API.

<br/>

###### BEFORE YOU START

Login to the https://blockfrost.io. Create a project and get your api key.

<img src="https://i.imgur.com/smY12ro.png">

<br/>

###### INSTALLATION

```typescript
yarn add @blockfrost/blockfrost-js
```

<br/>

##### USAGE

###### API

```typescript
import { BlockfrostAPI } from '@blockfrost/blockfrost-js';

const API = new BlockFrostAPI({
  projectId: 'YOUR API KEY HERE',
});

try {
  const latestBlock = await API.blocksLatest();
  const assets = await API.assets();
  const health = await API.health();
  const address = await API.addresses(
    'addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz',
  );

  console.log(address, assets, latestBlock, health);
} catch (err) {
  console.log(err);
}
```

###### IPFS

```typescript
import { BlockfrostIPFS } from '@blockfrost/blockfrost-js';

const IPFS = new BlockfrostIPFS({
  projectId: 'YOUR API KEY HERE',
});

try {
  const added = await IPFS.add({
    path: 'https://blockfrost.io/images/logo.svg',
    sourceType: 'url',
  });

  console.log('added', added);

  const pinned = await IPFS.pin(added.cid);

  console.log('pinned', pinned);
} catch (err) {
  console.log('error', err);
}
```
