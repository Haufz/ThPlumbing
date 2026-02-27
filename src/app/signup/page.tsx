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

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement auth
      console.log('Signup attempt:', email);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign up failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-zylo-id="zylo-a75658b94606" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="54:5-118:11" data-zylo-component="SignupPage" className="flex min-h-screen items-center justify-center px-4">
      <Card data-zylo-id="zylo-46c62721050c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="55:7-117:14" data-zylo-component="SignupPage" className="w-full max-w-md">
        <CardHeader data-zylo-id="zylo-02c25963410b" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="56:9-61:22" data-zylo-component="SignupPage" className="space-y-1">
          <CardTitle data-zylo-id="zylo-f0a8f23a4742" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="57:11-57:72" data-zylo-component="SignupPage" className="text-2xl">Create an account</CardTitle>
          <CardDescription data-zylo-id="zylo-49cb993d05cb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="58:11-60:29" data-zylo-component="SignupPage">
            Enter your email and password to get started
          </CardDescription>
        </CardHeader>
        <form data-zylo-id="zylo-2df972d6a2c8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="62:9-116:16" data-zylo-component="SignupPage" onSubmit={handleSubmit}>
          <CardContent data-zylo-id="zylo-8ff493657871" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="63:11-104:25" data-zylo-component="SignupPage" className="space-y-4">
            <div data-zylo-id="zylo-7cccb0539c7a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="64:13-75:19" data-zylo-component="SignupPage" className="space-y-2">
              <Label data-zylo-id="zylo-c4c98a3253c7" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="65:15-65:51" data-zylo-component="SignupPage" htmlFor="email">Email</Label>
              <Input data-zylo-id="zylo-cd2be6f0ab4b" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="66:15-74:17" data-zylo-component="SignupPage"
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div data-zylo-id="zylo-203f3c2b8f39" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="76:13-87:19" data-zylo-component="SignupPage" className="space-y-2">
              <Label data-zylo-id="zylo-fcb909b77ba1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="77:15-77:57" data-zylo-component="SignupPage" htmlFor="password">Password</Label>
              <Input data-zylo-id="zylo-6fc7fe545243" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="78:15-86:17" data-zylo-component="SignupPage"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
                minLength={8}
              />
            </div>
            <div data-zylo-id="zylo-b9a219a79622" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="88:13-98:19" data-zylo-component="SignupPage" className="space-y-2">
              <Label data-zylo-id="zylo-b930b6eaa9e3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="89:15-89:72" data-zylo-component="SignupPage" htmlFor="confirmPassword">Confirm Password</Label>
              <Input data-zylo-id="zylo-21589a280de0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="90:15-97:17" data-zylo-component="SignupPage"
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <div data-zylo-id="zylo-63e1f5d9d3bb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="100:15-102:21" data-zylo-component="SignupPage" className="text-sm text-destructive" role="alert">
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter data-zylo-id="zylo-cbca708d1a4e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="105:11-115:24" data-zylo-component="SignupPage" className="flex flex-col space-y-4">
            <Button data-zylo-id="zylo-f8bec212a6c1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="106:13-108:22" data-zylo-component="SignupPage" type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Sign up'}
            </Button>
            <p data-zylo-id="zylo-345f55442ad6" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="109:13-114:17" data-zylo-component="SignupPage" className="text-sm text-muted-foreground text-center">
              Already have an account?{' '}
              <Link data-zylo-id="zylo-d503b3a82870" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/signup/page.tsx" data-zylo-loc="111:15-113:22" data-zylo-component="SignupPage" href="/login" className="text-primary underline-offset-4 hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
