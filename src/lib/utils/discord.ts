import { GuildInfoMock } from '@/mock/guild.mock';
import { APIGuild } from 'discord-api-types/v10';

export async function fetchDiscordGuildInformation(guildId: string): Promise<APIGuild> {
	return GuildInfoMock;
	// if (USE_MOCK) return GuildInfoMock;
	//else create fetch request to Birthdayy API to get GuildInfos
}

export function formatGuildIcon(icon: string, guildId: string) {
	const baseUrl = 'https://cdn.discordapp.com/';
	return `${baseUrl}icons/${guildId}/${icon}.png`;
}
