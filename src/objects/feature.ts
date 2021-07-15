/**
 * @interface Feature
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export interface Feature { }

/**
 * guild has access to set an animated guild icon
 */
export class AnimatedIcon extends String implements Feature { this = 'ANIMATED_ICON'; }

/**
 * guild has access to set a guild banner image
 */
export class Banner extends String implements Feature { this = 'BANNER'; }

/**
 * guild has access to use commerce features (i.e. create store channels)
 */
export class Commerce extends String implements Feature { this = 'COMMERCE'; }

/**
 * guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates
 */
export class Community extends String implements Feature { this = 'COMMUNITY'; }

/**
 * guild is able to be discovered in the directory
 */
export class Discoverable extends String implements Feature { this = 'DISCOVERABLE'; }

/**
 * guild is able to be featured in the directory
 */
export class Featurable extends String implements Feature { this = 'FEATURABLE'; }

/**
 * guild is able to be featured in the directory
 */
export class InviteSplash extends String implements Feature { this = 'INVITE_SPLASH'; }

/**
 * guild has enabled Membership Screening
 * @see https://discord.com/developers/docs/resources/guild#membership-screening-object
 */
export class MemberVerificationGateEnabled extends String implements Feature { this = 'MEMBER_VERIFICATION_GATE_ENABLED'; }

/**
 * guild has access to create news channels
 */
export class News extends String implements Feature { this = 'INVITE_SPLASH'; }

/**
 * guild is partnered
 */
export class Partnered extends String implements Feature { this = 'PARTNERED'; }

/**
 * guild can be previewed before joining via Membership Screening or the directory
 */
export class PreviewEnabled extends String implements Feature { this = 'PREVIEW_ENABLED'; }

/**
 * guild has access to set a vanity URL
 */
export class VanityURL extends String implements Feature { this = 'VANITY_URL'; }

/**
 * guild is verified
 */
export class Verified extends String implements Feature { this = 'VERIFIED'; }

/**
 * guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
 */
export class VIPRegions extends String implements Feature { this = 'VIP_REGIONS'; }

/**
 * guild has enabled the welcome screen
 */
export class WelcomeScreenEnabled extends String implements Feature { this = 'WELCOME_SCREEN_ENABLED'; }

/**
 * guild has enabled ticketed events
 */
export class TicketedEventsEnabled extends String implements Feature { this = 'TICKETED_EVENTS_ENABLED'; }

/**
 * guild has enabled monetization
 */
export class MonetizationEnabled extends String implements Feature { this = 'MONETIZATION_ENABLED'; }

/**
 * guild has increased custom sticker slots
 */
export class MoreStickers extends String implements Feature { this = 'MORE_STICKERS'; }

/**
 * guild has access to the three day archive time for threads
 */
export class ThreeDayThreadArchive extends String implements Feature { this = 'THREE_DAY_THREAD_ARCHIVE'; }

/**
 * guild has access to the seven day archive time for threads
 */
export class SevenDayThreadArchive extends String implements Feature { this = 'SEVEN_DAY_THREAD_ARCHIVE'; }

/**
 * guild has access to create private threads
 */
export class PrivateThreads extends String implements Feature { this = 'PRIVATE_THREADS'; }


