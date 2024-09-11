import { cn } from '@/lib/utils';

export default function Container({className, children}) {
    return <div className={cn('mx-auto max-w-[1330px] px-5', className)}>{children}</div>;
}