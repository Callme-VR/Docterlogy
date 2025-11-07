import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// 
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // India numbers: +91 (10 digits) or without country code (10 digits)
  if (phoneNumberLength <= 10) {
    // Handle without country code
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5, 10)}`;
  } else {
    // Handle with country code (+91)
    const countryCode = phoneNumber.slice(0, 2);
    const mainNumber = phoneNumber.slice(2);
    
    if (mainNumber.length < 4) return `+${countryCode} ${mainNumber}`;
    if (mainNumber.length < 7) {
      return `+${countryCode} ${mainNumber.slice(0, 3)} ${mainNumber.slice(3)}`;
    }
    return `+${countryCode} ${mainNumber.slice(0, 5)} ${mainNumber.slice(5, 10)}`;
  }
};
