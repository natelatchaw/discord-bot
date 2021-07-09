import { Event } from "../payloads/dispatch";
import { Guild } from "../resources/guild";

export interface GuildCreate extends Event, Guild { }