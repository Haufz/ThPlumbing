'use client'

// Global error boundary - catches any errors that escape regular error boundaries  
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div data-zylo-id="zylo-2ee45f4df93f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="12:5-46:11" data-zylo-component="GlobalError" className="min-h-screen flex items-center justify-center p-8 font-sans">
      <div data-zylo-id="zylo-e8d8abca58f2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="13:7-45:13" data-zylo-component="GlobalError" className="text-center max-w-md">
        <h1 data-zylo-id="zylo-e344cdbef3aa" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="14:9-16:14" data-zylo-component="GlobalError" className="text-2xl font-bold mb-4 text-red-600">
          Something went wrong!
        </h1>
        <p data-zylo-id="zylo-97f5784418f0" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="17:9-19:13" data-zylo-component="GlobalError" className="text-lg mb-8 text-gray-600">
          The application encountered an unexpected error. This is likely temporary.
        </p>
        <div data-zylo-id="zylo-23d27c2c3bdf" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="20:9-33:15" data-zylo-component="GlobalError" className="flex gap-4 justify-center flex-wrap">
          <button data-zylo-id="zylo-97707c4bda46" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="21:11-26:20" data-zylo-component="GlobalError"
            onClick={reset}
            className="px-6 py-3 bg-blue-500 text-white border-0 rounded-lg cursor-pointer text-base hover:bg-blue-600"
          >
            Try Again
          </button>
          <button data-zylo-id="zylo-771cab6b9cb7" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="27:11-32:20" data-zylo-component="GlobalError"
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gray-500 text-white border-0 rounded-lg cursor-pointer text-base hover:bg-gray-600"
          >
            Go Home
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details data-zylo-id="zylo-fa4406a846bb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="35:11-43:21" data-zylo-component="GlobalError" className="mt-8 text-left">
            <summary data-zylo-id="zylo-069508122d14" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="36:13-38:23" data-zylo-component="GlobalError" className="cursor-pointer font-bold">
              Error Details (Development Only)
            </summary>
            <pre data-zylo-id="zylo-4d17406c5650" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/global-error.tsx" data-zylo-loc="39:13-42:19" data-zylo-component="GlobalError" className="mt-4 p-4 bg-gray-100 rounded-lg text-sm overflow-auto">
              {error.message}
              {error.stack && '\n\nStack trace:\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}