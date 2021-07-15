/**
 * @interface ActivitySecrets
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export interface ActivitySecrets {
    /**
     * @property { string | undefined } join - the secret for joining a party
     */
    join?: string;

    /**
     * @property { string | undefined } spectate - the secret for spectating a game
     */
    spectate?: string;

    /**
     * @property { string | undefined } match - the secret for a specific instanced match
     */
    match?: string;
}
