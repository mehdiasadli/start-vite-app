# React + TypeScript + Vite (start-vite-app)

## Folder Structure
### `src`

- `main.tsx` (Entry file)
- `vite-env.d.ts` (env type module)
- `app` (Main folder)
  - `index.tsx` - Hosts `App` component which `main.tsx` file renders, it holds `Providers` and `Navigator` components
  - `Providers.tsx` - Multiple provider (Usually external) components seperated from `App` component. (Includes BrowserRouter, QueryClientProvider and MantineProviders)
  - `Navigator.tsx` - Main navigation file of the application, serves different pages with `react-router-dom`
- `assets` (Asset files)
- `components` (Application's components)
- `config` (Config files)
  - `theme.ts` - MantineTheme that is used by MantineProvider
- `hooks` (Custom hooks)
  - `useFetch.ts` - Basically, `useQuery` hook of `@tanstack/react-query` with a bit more config.
  - `useMutation.ts` - Basically, `useMutation` hook of `@tanstack/react-query` with a bit more config.
  - `useToast.ts` - Toast hook which uses `@mantine/notifications` Notification
- `pages` (Application's pages)
  - `index.tsx` - Exports all pages from `pages` folder
  - `LandingPage.tsx` - Public Page, rendered on `/`
  - `LoginPage.tsx` - Auth Page, rendered on `/auth`
  - `ProfilePage.tsx` - Private Page, rendered on `/profile`
- `resources` (Data that will be used on the app)
  - `constants.ts` - Contains multiple constant values, mostly DEFAULTs
  - `regex.ts` - Contains regexes
- `schemas` (Zod schemas folder)
  - `LoginSchema.ts` - Zod schema that is can potentially be used on `LoginPage`
- `store` (Zustand store folder)
  - `settings.store.ts` - Zustand `useSettings` hook, to store settings of the application
- `utils` (Utility functions)
  - `webStorage.ts` - Utility function for getting and settings values to `window.localStorage`
- `api` (API Services)
  - `index.ts` - Configuration for API, contains abstract `Api`, `PublicApi`, `PrivateApi` (uses interceptor) classes
  - `services`
    - `auth.service.ts` - Auth Service Class
  - `hooks`
    - `auth.hooks.ts` - Custom hooks to use Auth Service Class