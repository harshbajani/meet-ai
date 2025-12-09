"use client";
import { ResponsiveDialog } from "@/components/ResponsiveDialog";
import { useRouter } from "next/navigation";
import { MeetingsForm } from "./MeetingsForm";

interface NewMeetingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewMeetingsDialog = ({
  open,
  onOpenChange,
}: NewMeetingsDialogProps) => {
  const router = useRouter();
  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingsForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
