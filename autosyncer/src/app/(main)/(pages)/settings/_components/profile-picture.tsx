"use client";
import React from "react";
import UploadCareButton from "./uploadcare-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {};

const ProfilePicture = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
    </div>
  );
};
export default ProfilePicture;
