import { Event } from '../event';
import { VoiceState } from '../resources/voiceState';

/**
 * @interface VoiceStateUpdate
 * @see https://discord.com/developers/docs/topics/gateway#voice-state-update
 */
export interface VoiceStateUpdate extends Event, VoiceState { }
