import { API_URLS } from './config';
import { Got } from 'got';
import {
  add,
  list,
  pin,
  listByPath,
  pinRemove,
  gateway,
} from './endpoints/ipfs';
import { Options, ValidatedOptions } from './types';
import { validateOptions } from './utils';
import { getInstance } from './utils/got';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

class BlockFrostIPFS {
  apiUrl: string;
  projectId?: string;
  userAgent?: string;
  options: ValidatedOptions;
  instance: Got;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    const apiBase = API_URLS.ipfs;

    this.apiUrl = `${apiBase}/v${this.options.version}`;

    this.userAgent =
      options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.instance = getInstance(this.apiUrl, this.options, this.userAgent);

    this.projectId = this.options.projectId;
  }

  /**
   * add - Add a file or directory to ipfs
   *
   * @returns information about added ipfs object
   */
  add = add;

  /**
   * gateway - Relay to an ipfs gateway
   *
   * @returns the object content
   *
   */
  gateway = gateway;

  /**
   * pin - Pin an object
   *
   * @returns pinned object
   *
   */
  pin = pin;

  /**
   * listByPath - List objects pinned to local storage
   *
   * @returns list of pinned objects
   *
   */
  listByPath = listByPath;

  /**
   * list - List objects pinned to local storage
   *
   * @returns list of pinned objects
   *
   */
  list = list;

  /**
   * pinRemove - Remove pinned objects from local storage
   *
   * @returns removed pinned object
   *
   */
  pinRemove = pinRemove;
}

export { BlockFrostIPFS };
