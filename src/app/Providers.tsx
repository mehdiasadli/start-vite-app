import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import theme from '../config/theme';
import { useSettings } from '../store/settings.store';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  const colorScheme = useSettings((state) => state.colorScheme);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
          <ModalsProvider>
            <DatesProvider settings={{ locale: 'en' }}>
              {children}
              <Notifications />
            </DatesProvider>
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
