import Link from 'next/link';

import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: 'default' | 'primary';
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  className,
  href,
  variant = 'default',
}) => {
  console.log('Hrefs: ', href, 'variant: ', variant);
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted-foreground text-secondary',
        'hover:opacity-90 cursor-pointer',
        className,
      )}
    >
      {children}
    </Link>
  );
};
