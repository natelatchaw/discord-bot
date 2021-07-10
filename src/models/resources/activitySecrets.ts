/**
 * @interface ActivitySecrets
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export interface ActivitySecrets {
    /**
     * @param { string } join - the secret for joining a party
     */
    join: string;

    /**
     * @param { string } spectate - the secret for spectating a game
     */
    spectate: string;

    /**
     * @param { string } match - the secret for a specific instanced match
     */
    match: string;
}
