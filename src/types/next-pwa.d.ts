declare module "next-pwa" {
  import { NextConfig } from "next";

  interface RuntimeCachingRule {
    urlPattern: RegExp | string;
    handler: string;
    options?: {
      cacheName?: string;
      expiration?: {
        maxEntries?: number;
        maxAgeSeconds?: number;
      };
      networkTimeoutSeconds?: number;
      cacheableResponse?: {
        statuses?: number[];
        headers?: {
          [key: string]: string;
        };
      };
      backgroundSync?: {
        name: string;
        options?: {
          maxRetentionTime?: number;
        };
      };
      broadcastUpdate?: {
        channelName?: string;
        options?: {
          headersToCheck?: string[];
        };
      };
      matchOptions?: {
        ignoreSearch?: boolean;
        ignoreVary?: boolean;
      };
      fetchOptions?: {
        mode?: string;
        credentials?: string;
      };
      plugins?: unknown[];
    };
  }

  interface PWAOptions {
    /** Destination directory for the PWA files */
    dest: string;
    /** Enable or disable service worker registration */
    register: boolean;
    /** Enable skipWaiting in service worker */
    skipWaiting: boolean;
    /** Disable PWA in development mode */
    disable?: boolean;

    // Other potential options
    scope?: string;
    sw?: string;
    runtimeCaching?: RuntimeCachingRule[];
    publicExcludes?: string[];
    buildExcludes?: Array<string | RegExp>;
    fallbacks?: {
      [key: string]: string;
    };
  }

  type WithPWA = (nextConfig?: NextConfig) => NextConfig;

  function NextPWA(options: PWAOptions): WithPWA;

  export default NextPWA;
}
