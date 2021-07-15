import { EventData } from '../eventData';
import { GatewayPayload } from '../gatewayPayload';
import { UpdatePresence } from '../objects/updatePresence';

/**
 * OPCODE 2 IDENTIFY
 * @interface Identify
 * @see https://discord.com/developers/docs/topics/gateway#identify
 */
export interface Identify extends GatewayPayload {
  /**
   * @property { number } op - the opcode for the payload
   */
  op: 2;

  /**
   * @property { IdentifyData } d - object containing the identify event
   * @see https://discord.com/developers/docs/topics/gateway#identify-identify-structure
   */
  d: IdentifyData;

  /**
   * @property { null } s - not applicable for non-zero opcode payloads
   */
  s: null;

  /**
   * @property { null } t - not applicable for non-zero opcode payloads
   */
  t: null;
}

/**
 * OPCODE 2 IDENTIFY
 * @interface IdentifyData
 * @see https://discord.com/developers/docs/topics/gateway#identify-identify-structure
 */
export interface IdentifyData extends EventData {
  /**
   * @property { string } token - authentication token
   */
  token: string;

  /**
   * @property { object } properties - connection properties
   * @see https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
   */
  properties: object;

  /**
   * @property { boolean | undefined } compress - whether this connection supports compression of packets
   * default: false
   */
  compress?: boolean;

  /**
   * @property { number | undefined } large_threshold - value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list
   * default: 50
   */
  large_threshold?: number;

  /**
   * @property { Array<number> | undefined } shard - used for Guild Sharding
   * @see https://discord.com/developers/docs/topics/gateway#sharding
   * array of two integers (shard_id, num_shards)
   */
  shard?: Array<number>;

  /**
   * @property { UpdatePresence | undefined } presence - presence structure for initial presence information
   * @see https://discord.com/developers/docs/topics/gateway#update-presence-gateway-presence-update-structure
   */
  presence?: UpdatePresence;

  /**
   * @property { number } intents - the Gateway Intents you wish to receive
   * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
   */
  intents: number;
}
