import { StageInstance } from '../objects/stageInstance';

/**
 * @interface StageInstanceUpdate
 * @see https://discord.com/developers/docs/topics/gateway#stage-instance-update
 */
export interface StageInstanceUpdate extends Event, StageInstance { }
