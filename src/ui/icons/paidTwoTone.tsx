import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const PaidTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_786)">
            <path opacity="0.3" d="M16.25 5H7.5V25H22.5V11.25H16.25V5ZM20 22.5H10V20H20V22.5ZM20 15V17.5H10V15H20Z"
                  fill="currentColor"/>
            <path
                d="M10 20H20V22.5H10V20ZM10 15H20V17.5H10V15ZM17.5 2.5H7.5C6.125 2.5 5 3.625 5 5V25C5 26.375 6.1125 27.5 7.4875 27.5H22.5C23.875 27.5 25 26.375 25 25V10L17.5 2.5ZM22.5 25H7.5V5H16.25V11.25H22.5V25Z"
                fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_786">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)