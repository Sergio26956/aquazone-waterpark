'use client';
import { ReactNode } from 'react';
import { Tooltip as ShadTooltip, TooltipContent, TooltipTrigger } from '@/components/ui/shadcn/tooltip';

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <ShadTooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </ShadTooltip>
  );
}
