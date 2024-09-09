import localFont from 'next/font/local';
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const vazirFont = localFont({
  src: '../../public/fonts/Vazirmatn-Regular.woff2',
});
