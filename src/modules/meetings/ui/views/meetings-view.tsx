"use client";

import { ErrorState } from "@/components/ErrorState";
import { LoadingState } from "@/components/LoadingState";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
  return <div>{JSON.stringify(data)}</div>;
};

export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Meetings"
      description="Please wait while we load your meetings."
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error Loading Meetings"
      description="Please try again later."
    />
  );
};
