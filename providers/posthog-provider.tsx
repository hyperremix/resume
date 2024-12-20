'use client';

import { PostHogPageView } from '@/components/custom/posthog-page-view';
import { environment } from '@/environment';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const PostHogProvider = ({ children }: Props) => {
  useEffect(() => {
    posthog.init(environment.postHogKey, {
      api_host: environment.postHogHost,
      capture_pageview: false,
      capture_pageleave: true,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
};
