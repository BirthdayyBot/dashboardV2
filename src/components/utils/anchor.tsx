'use client';
import { cn } from '@/utils/shadcn';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Anchor({
  anchor,
  alwaysDisplay,
  disableCopyToClipboard,
}: {
  anchor: string;
  alwaysDisplay: boolean;
  disableCopyToClipboard: boolean;
}) {
  function copyToClipboard() {
    if (disableCopyToClipboard) return;
    const currentUrl = window.location.href.replace(/#.*$/, '');
    const urlWithId = `${currentUrl}#${anchor}`;

    navigator.clipboard.writeText(urlWithId);
  }

  return (
    <div className={cn('ms-2 pt-1', !alwaysDisplay && 'invisible group-hover:visible')}>
      <Link href={`#${anchor}`} onClick={copyToClipboard}>
        <LinkIcon className="text-gray-600 hover:text-gray-400" />
      </Link>
    </div>
  );
}
