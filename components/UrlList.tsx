'use client';

import { Check, CopyIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Url = {
    id: string;
    shortCode: string;
    originalUrl: string;
    visits: number;
};

const UrlList = () => {
    const [urls, setUrls] = useState<Url[]>([]);
    const [copied, setCopied] = useState<boolean>(false);
    const [copyUrl, setCopyUrl] = useState<string>('');
    
    const shortenerUrl = (code: string) => `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;


    const handleCopyUrl = (code: string) => {
        const fullUrl = shortenerUrl(code);
        navigator.clipboard.writeText(fullUrl).then(() => {
            setCopied(true);
            setCopyUrl(code);
            setTimeout(() => {
                setCopied(false);
                setCopyUrl('');
            }, 2000);
        });
    };

    useEffect(() => {
        fetchUrls();
    }, []);

    return (
        <div className="relative">
            <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
            <ul className="space-y-2">
                {urls.map(url => (
                    <li key={url.id} className="flex flex-col gap-2 bg-card rounded-md text-card-foreground border py-2 px-3">
                        <div className="flex justify-between items-center">
                            <Link
                                href={`/${url.shortCode}`}
                                className="text-blue-500 hover:text-blue-400 transition dark:text-blue-300 dark:hover:text-blue-400"
                                target="_blank"
                            >
                                {shortenerUrl(url.shortCode)}
                            </Link>
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="cursor-pointer"
                                    onClick={() => handleCopyUrl(url.shortCode)}
                                >
                                    {copied && copyUrl === url.shortCode ? (
                                        <Check className="w-4 h-4" />
                                    ) : (
                                        <CopyIcon className="w-4 h-4" />
                                    )}
                                    <span className="sr-only">Copy URL</span>
                                </Button>
                                {/* Tulisan "Copied!" yang mengambang di bawah button */}
                                {copied && copyUrl === url.shortCode && (
                                    <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md opacity-100 transition-opacity duration-300 animate-fade-in dark:bg-white dark:text-black">
                                        Copied!
                                    </span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UrlList;
