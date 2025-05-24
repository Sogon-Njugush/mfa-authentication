"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { revokeMFAMutationFn } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React, { useCallback } from "react";

const RevokeMfa = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: revokeMFAMutationFn,
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast({
        title: "Success",
        description: "You have successfully revoked MFA",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleClick = useCallback(() => {
    mutate();
  }, []);
  return (
    <Button
      className="h-[35px] text-[#c40006d3] bg-red-100 shadow-none mr-1"
      onClick={handleClick}
      disabled={isPending}>
      {isPending && <Loader className="animate-spin" />}
      Revoke Access
    </Button>
  );
};

export default RevokeMfa;
