'use client';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';

export default function Anchor({ anchor }: { anchor: string }) {
  const copyToClipboard = useCallback(() => {
    const currentUrl = window.location.href.replace(/#.*$/, '');
    const text = `${currentUrl}#${anchor}`;

    navigator.clipboard.writeText(text);
  }, [anchor]);
  return (
    <>
      <div className="invisible group-hover:visible ms-2 pt-1">
        {/* modify `Link` to `a` if you are not using Next.js */}
        <Link href={`#${anchor}`} onClick={copyToClipboard}>
          <LinkIcon className="text-gray-400 hover:text-gray-600" />
        </Link>
      </div>
    </>
  );
}
