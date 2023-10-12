
type Fills = 'f1' | 'f2' | 'f3'
export interface IIcon {
 class?: string;
 width?: string;
 height?: string;
 fills?: string[];
 active?: boolean;
 activeFills?: string[];
}

export * from "./EmailIcon"
export * from "./LockIcon"
export * from "./FacebookIcon";
export * from "./GoogleIcon";
export * from "./LogoIcon";
export * from "./FemaleIcon";
export * from "./MaleIcon";
export * from "../svg/apple.svg";

