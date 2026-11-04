// Components.d.ts — the complete catalog of the 14 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AU) and usable directly in JSX.
import * as React from 'react';

// figma layer: "AU" (node 1:32)
export interface AUProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "arrow-right" (node 1:463)
export interface ArrowRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "arrow-up" (node 1:465)
export interface ArrowUpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Avatar" (node 1:82)
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  placeholder?: boolean;
  text?: boolean;
  statusIcon?: "false" | "online indicator" | "company";
  state?: "default" | "hover" | "focused";
  /** Text content; defaults to "OR". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_Avatar company icon" (node 1:53)
export interface AvatarCompanyIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

// figma layer: "_Avatar online indicator" (node 1:61)
export interface AvatarOnlineIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  online?: boolean;
}

// figma layer: "Badge" (node 1:527)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  icon?: "false" | "dot" | "country" | "x close" | "avatar" | "icon right" | "icon left" | "only";
  color?: "primary" | "error" | "warning" | "success" | "blue light" | "blue" | "indigo" | "purple" | "pink" | "rosé" | "orange" | "blue gray" | "gray";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Badge base" (node 1:469)
export interface BadgeBaseProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "false" | "dot" | "x close" | "country" | "avatar" | "icon right" | "icon left" | "only";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Play button" (node 1:1156)
export interface PlayButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  style2?: "glassmorphism" | "outline";
  state?: "default" | "hover";
}

// figma layer: "plus" (node 1:467)
export interface PlusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "user" (node 1:78)
export interface UserProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Video player" (node 1:1229)
export interface VideoPlayerProps {
  className?: string;
  style?: React.CSSProperties;
  playing?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Text content; defaults to "How to get started". */
  text1?: string;
  /** Text content; defaults to "How to get started". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_Video progress" (node 1:5)
export interface VideoProgressProps {
  className?: string;
  style?: React.CSSProperties;
  playing?: boolean;
}

// figma layer: "x" (node 1:461)
export interface XProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AU: React.FC<AUProps>;
declare const ArrowRight: React.FC<ArrowRightProps>;
declare const ArrowUp: React.FC<ArrowUpProps>;
declare const Avatar: React.FC<AvatarProps>;
declare const AvatarCompanyIcon: React.FC<AvatarCompanyIconProps>;
declare const AvatarOnlineIndicator: React.FC<AvatarOnlineIndicatorProps>;
declare const Badge: React.FC<BadgeProps>;
declare const BadgeBase: React.FC<BadgeBaseProps>;
declare const PlayButton: React.FC<PlayButtonProps>;
declare const Plus: React.FC<PlusProps>;
declare const User: React.FC<UserProps>;
declare const VideoPlayer: React.FC<VideoPlayerProps>;
declare const VideoProgress: React.FC<VideoProgressProps>;
declare const X: React.FC<XProps>;
declare global {
  interface Window {
    AU: React.FC<AUProps>;
    ArrowRight: React.FC<ArrowRightProps>;
    ArrowUp: React.FC<ArrowUpProps>;
    Avatar: React.FC<AvatarProps>;
    AvatarCompanyIcon: React.FC<AvatarCompanyIconProps>;
    AvatarOnlineIndicator: React.FC<AvatarOnlineIndicatorProps>;
    Badge: React.FC<BadgeProps>;
    BadgeBase: React.FC<BadgeBaseProps>;
    PlayButton: React.FC<PlayButtonProps>;
    Plus: React.FC<PlusProps>;
    User: React.FC<UserProps>;
    VideoPlayer: React.FC<VideoPlayerProps>;
    VideoProgress: React.FC<VideoProgressProps>;
    X: React.FC<XProps>;
  }
}
