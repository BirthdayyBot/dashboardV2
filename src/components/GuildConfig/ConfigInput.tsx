'use client';
import { timezonesOffsets } from '@/types/config';
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui';
import { Textarea } from '@/ui/textarea';
import { APIChannel, APIRole } from 'discord-api-types/v10';
import { useState } from 'react';

interface ConfigRoleInputProps {
  configType: 'role';
  guildId: string;
  defaultRole: string;
  roles: APIRole[];
}
interface ConfigChannelInputProps {
  configType: 'channel';
  guildId: string;
  defaultChannel: string;
  channels: APIChannel[];
}

interface ConfigTimezoneOffsetInputProps {
  defaultTimezoneOffset: string;
  option: 1 | 2;
  guildId: string;
}

interface ConfigBirthdayMessageInputProps {
  defaultBirthdayMessage: string;
  premium: boolean;
  guildId: string;
}

export function ConfigRoleInput({ roles, defaultRole, guildId }: ConfigRoleInputProps) {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(defaultRole);
  const role = roles.find((role) => role.id === selectedRoleId);

  return (
    <div className="ConfigRoleInput">
      <Select value={role?.id}>
        <SelectTrigger>
          <SelectValue placeholder={role?.name ?? 'Select a role'} />
        </SelectTrigger>
        <SelectContent>
          {roles.map((r) => {
            if (r.id === guildId) return null;
            return (
              <SelectItem key={r.id} value={r.id} onSelect={() => setSelectedRoleId(r.id)}>
                {r.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export function ConfigChannelInput({ channels, defaultChannel }: ConfigChannelInputProps) {
  const [selectedChannelId, setSelectedChannelId] = useState<string>(defaultChannel);
  const channel = channels.find((channel) => channel.id === selectedChannelId);

  return (
    <div className="ConfigRoleInput">
      <Select value={channel?.id}>
        <SelectTrigger>
          <SelectValue placeholder={channel?.name ?? 'Select a channel'} />
        </SelectTrigger>
        <SelectContent>
          {channels.map((c) => (
            <SelectItem key={c.id} value={c.id} onSelect={() => setSelectedChannelId(c.id)}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
export function ConfigTimezoneOffsetInput({ defaultTimezoneOffset, option }: ConfigTimezoneOffsetInputProps) {
  const [selectedTimezone, setSelectedTimezone] = useState<string>(defaultTimezoneOffset);

  return (
    <div className="ConfigTimezoneOffsetInput">
      {option === 1 ? (
        <Input
          type="number"
          defaultValue={defaultTimezoneOffset}
          onChange={(e) => setSelectedTimezone(e.target.value)}
          max={'12'}
          min={'-11'}
          step={'1'}
          placeholder="Timezone offset"
        />
      ) : (
        <Select value={selectedTimezone}>
          <SelectTrigger>
            <SelectValue placeholder={defaultTimezoneOffset ?? 'Select a timezone offset'} />
          </SelectTrigger>
          <SelectContent>
            {timezonesOffsets.map((timezone) => (
              <SelectItem key={timezone} value={timezone}>
                {timezone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}

export function ConfigBirthdayMessageInput({
  defaultBirthdayMessage,
  premium,
  guildId,
}: ConfigBirthdayMessageInputProps) {
  return (
    <div className="ConfigBirthdayMessageInput">
      <Input type="text" defaultValue={defaultBirthdayMessage} placeholder="Birthday message" disabled={!premium} />
      <Textarea placeholder="Happy Birthday!" disabled={!premium} rows={4} />
    </div>
  );
}
