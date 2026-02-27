/**
 * 404 Not Found Page
 *
 * Displayed when a page doesn't exist
 */

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div data-zylo-id="zylo-8722dcaf9509" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="15:5-50:11" data-zylo-component="NotFound" className="flex min-h-screen flex-col items-center justify-center p-4">
      <div data-zylo-id="zylo-9a4234227184" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="16:7-49:13" data-zylo-component="NotFound" className="text-center">
        {/* Large 404 */}
        <h1 data-zylo-id="zylo-fb930166954b" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="18:9-18:82" data-zylo-component="NotFound" className="text-9xl font-bold tracking-tighter text-primary">404</h1>

        {/* Title */}
        <h2 data-zylo-id="zylo-3886d9bff92d" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="21:9-21:83" data-zylo-component="NotFound" className="mt-4 text-3xl font-bold tracking-tight">Page not found</h2>

        {/* Description */}
        <p data-zylo-id="zylo-872ae178edec" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="24:9-26:13" data-zylo-component="NotFound" className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>

        {/* Actions */}
        <div data-zylo-id="zylo-9a784d14ef88" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="29:9-43:15" data-zylo-component="NotFound" className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button data-zylo-id="zylo-300b33ecf28c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="30:11-35:20" data-zylo-component="NotFound" asChild size="lg">
            <Link data-zylo-id="zylo-29c19a24678e" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="31:13-34:20" data-zylo-component="NotFound" href="/">
              <Home data-zylo-id="zylo-7d301ddf6845" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="32:15-32:48" data-zylo-component="NotFound" className="mr-2 h-4 w-4" />
              Go home
            </Link>
          </Button>

          <Button data-zylo-id="zylo-c1d29e142665" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="37:11-42:20" data-zylo-component="NotFound" asChild variant="outline" size="lg">
            <Link data-zylo-id="zylo-6293304070eb" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="38:13-41:20" data-zylo-component="NotFound" href="javascript:history.back()">
              <ArrowLeft data-zylo-id="zylo-e62a7e4b8060" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="39:15-39:53" data-zylo-component="NotFound" className="mr-2 h-4 w-4" />
              Go back
            </Link>
          </Button>
        </div>

        {/* Help text */}
        <p data-zylo-id="zylo-6180969323c7" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/not-found.tsx" data-zylo-loc="46:9-48:13" data-zylo-component="NotFound" className="mt-8 text-sm text-muted-foreground">
          If you think this is a mistake, please contact support
        </p>
      </div>
    </div>
  );
}