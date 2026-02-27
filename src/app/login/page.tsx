'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // TODO: Implement auth
      console.log('Login attempt:', email);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-zylo-id="zylo-6a51a717ada9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="42:5-94:11" data-zylo-component="LoginPage" className="flex min-h-screen items-center justify-center px-4">
      <Card data-zylo-id="zylo-e283369648ae" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="43:7-93:14" data-zylo-component="LoginPage" className="w-full max-w-md">
        <CardHeader data-zylo-id="zylo-76445e193ec9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="44:9-49:22" data-zylo-component="LoginPage" className="space-y-1">
          <CardTitle data-zylo-id="zylo-5993f51d66c6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="45:11-45:62" data-zylo-component="LoginPage" className="text-2xl">Sign in</CardTitle>
          <CardDescription data-zylo-id="zylo-0f1301873f75" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="46:11-48:29" data-zylo-component="LoginPage">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <form data-zylo-id="zylo-af60b3568ff1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="50:9-92:16" data-zylo-component="LoginPage" onSubmit={handleSubmit}>
          <CardContent data-zylo-id="zylo-0fdaceb62ad6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="51:11-80:25" data-zylo-component="LoginPage" className="space-y-4">
            <div data-zylo-id="zylo-9c2944a44432" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="52:13-63:19" data-zylo-component="LoginPage" className="space-y-2">
              <Label data-zylo-id="zylo-ce505e74bdb2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="53:15-53:51" data-zylo-component="LoginPage" htmlFor="email">Email</Label>
              <Input data-zylo-id="zylo-15992707a24e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="54:15-62:17" data-zylo-component="LoginPage"
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div data-zylo-id="zylo-89163bd4f4bb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="64:13-74:19" data-zylo-component="LoginPage" className="space-y-2">
              <Label data-zylo-id="zylo-44e321685255" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="65:15-65:57" data-zylo-component="LoginPage" htmlFor="password">Password</Label>
              <Input data-zylo-id="zylo-7e0212a9c759" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="66:15-73:17" data-zylo-component="LoginPage"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <div data-zylo-id="zylo-a9d987d98ef6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="76:15-78:21" data-zylo-component="LoginPage" className="text-sm text-destructive" role="alert">
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter data-zylo-id="zylo-b98ab2c40f32" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="81:11-91:24" data-zylo-component="LoginPage" className="flex flex-col space-y-4">
            <Button data-zylo-id="zylo-613c0abaa96d" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="82:13-84:22" data-zylo-component="LoginPage" type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
            <p data-zylo-id="zylo-7ecb90a7f254" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="85:13-90:17" data-zylo-component="LoginPage" className="text-sm text-muted-foreground text-center">
              Don&apos;t have an account?{' '}
              <Link data-zylo-id="zylo-c997806897a2" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/login/page.tsx" data-zylo-loc="87:15-89:22" data-zylo-component="LoginPage" href="/signup" className="text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
