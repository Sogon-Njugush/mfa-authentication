import { LucideIcon, Smartphone, Laptop } from "lucide-react";
import { UAParser } from "ua-parser-js";
import { formatDistanceToNowStrict, isPast, format } from "date-fns";

type DeviceType = "mobile" | "desktop";

interface AgentType {
  deviceType: string;
  os: string;
  browser: string;
  timeAgo: string;
  icon: LucideIcon;
}

export const parseUserAgent = (
  userAgent: string,
  createdAt: string
): AgentType => {
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  const deviceType = result.device.type || "desktop";
  const browser = result.browser.name || "Web";
  const os = `${result.os.name} ${result.os.version}`;

  const icon = deviceType === "mobile" ? Smartphone : Laptop;

  const fromattedAt = isPast(new Date(createdAt))
    ? `${formatDistanceToNowStrict(new Date(createdAt))} ago`
    : format(new Date(createdAt), "dd/MM/yyyy");

  return {
    deviceType,
    os,
    browser,
    timeAgo: fromattedAt,
    icon,
  };
};
