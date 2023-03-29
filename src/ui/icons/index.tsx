"use client"
import {cloneElement, FC} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

export type SvgIconProps = {
    height?: number;
    width?: number;
} & CommonUiComponentProps

const createSvgIcon = (Component: any) => (props: SvgIconProps) => {
    const {
        className,
        ...rest
    } = props;
    const cls = clsx(
        'text-red cursor-pointer',
        className
    )

    return cloneElement(
        Component,
        {
            className: cls,
            ...rest
        }
    )
}

export const Facebook: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.525 8.99994H14V6.99994C14 5.96794 14.084 5.31794 15.563 5.31794H17.431V2.13794C16.522 2.04394 15.608 1.99794 14.693 1.99994C11.98 1.99994 10 3.65694 10 6.69894V8.99994H7V12.9999L10 12.9989V21.9999H14V12.9969L17.066 12.9959L17.525 8.99994Z" fill="currentColor"/>
    </svg>
)
export const Instagram: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z" fill="currentColor"/>
    </svg>
)

export const Discord: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.23633 3.38862C7.91849 3.3507 7.5923 3.38971 7.28516 3.50776C6.36623 3.8593 5.16802 4.40809 4.12109 5.25385L4.09375 5.27534L4.06836 5.29682C3.60387 5.72741 3.34881 6.24391 3.02344 6.95112C2.69807 7.65834 2.37002 8.53108 2.07227 9.51362C1.47675 11.4787 1 13.8702 1 16.164C1 16.404 1.06291 16.6536 1.1875 16.873C1.99369 18.2961 3.38757 19.0891 4.62891 19.5644C5.86014 20.0358 6.90378 20.1956 7.5 20.2167C7.51943 20.2174 7.56864 20.2246 7.57031 20.2246C7.9779 20.2246 8.50727 20.0745 8.80469 19.5117L9.72656 17.7675C11.253 18.0348 12.6982 18.031 14.2656 17.7519L15.1934 19.5078C15.4917 20.0769 16.026 20.2226 16.4297 20.2226C16.4312 20.2226 16.4775 20.2173 16.4941 20.2167C17.0904 20.1962 18.1373 20.035 19.3711 19.5624C20.6109 19.0876 22.0024 18.2965 22.8086 16.8769C22.9372 16.6537 23 16.4029 23 16.164C23 13.8702 22.5224 11.4775 21.9238 9.50971C21.6246 8.5258 21.2956 7.64967 20.9668 6.9394C20.638 6.22913 20.3733 5.70778 19.9082 5.27729L19.8828 5.25581L19.8574 5.23432C18.8215 4.39683 17.629 3.85428 16.7129 3.50581C16.1002 3.27232 15.4092 3.35529 14.8672 3.72846C14.4486 4.0163 14.3068 4.5143 14.1973 4.99995H9.80273C9.69282 4.51473 9.55186 4.01627 9.13477 3.72846C8.86364 3.54138 8.55416 3.42654 8.23633 3.38862ZM8 5.37495C8 6.26101 8.73894 6.99995 9.625 6.99995H14.373C15.2579 6.99995 15.9989 6.2596 16 5.37495H16.002C16.7883 5.67408 17.7963 6.15787 18.5625 6.76753C18.5802 6.78946 18.8775 7.18977 19.1504 7.77925C19.4292 8.38154 19.7338 9.18441 20.0098 10.0917C20.5461 11.8551 20.9488 14.0263 20.9727 15.9921C20.4907 16.7431 19.6026 17.3328 18.6562 17.6953C17.8044 18.0215 17.0977 18.1061 16.7363 18.1464L16.2734 17.2695C16.6167 17.1688 16.9576 17.0699 17.3203 16.9472C17.4468 16.9068 17.5639 16.8417 17.665 16.7555C17.766 16.6694 17.8488 16.564 17.9087 16.4455C17.9686 16.327 18.0042 16.1978 18.0136 16.0653C18.023 15.9329 18.006 15.7999 17.9635 15.6742C17.9209 15.5484 17.8538 15.4324 17.766 15.3328C17.6781 15.2333 17.5713 15.1522 17.4518 15.0944C17.3323 15.0365 17.2025 15.003 17.07 14.9959C16.9374 14.9887 16.8047 15.008 16.6797 15.0527C12.8496 16.3478 10.9651 16.3492 7.33398 15.0585C7.20863 15.0117 7.07513 14.9904 6.94141 14.996C6.70898 15.0072 6.48772 15.0991 6.31573 15.2558C6.14375 15.4126 6.03181 15.6244 5.9992 15.8548C5.96658 16.0852 6.01533 16.3198 6.13704 16.5181C6.25876 16.7164 6.44582 16.8661 6.66602 16.9414C7.02989 17.0707 7.37505 17.1762 7.7207 17.2812L7.26367 18.1464C6.90254 18.1062 6.19557 18.0214 5.34375 17.6953C4.3974 17.3329 3.50976 16.7456 3.02734 15.9941C3.05091 14.0277 3.45222 11.8561 3.98633 10.0937C4.26107 9.18711 4.56371 8.38725 4.83984 7.78706C5.10963 7.20065 5.40707 6.80133 5.41602 6.78706C6.19667 6.16644 7.21087 5.67684 8 5.37495ZM9.03906 9.99604C8.21006 9.99604 7.53906 10.8891 7.53906 11.9921C7.53906 13.0951 8.21006 13.9882 9.03906 13.9882C9.86806 13.9882 10.5391 13.0951 10.5391 11.9921C10.5211 10.8891 9.87106 9.88604 9.03906 9.99604ZM14.9961 10.0117C14.5983 10.0117 14.2167 10.2224 13.9354 10.5975C13.6541 10.9725 13.4961 11.4812 13.4961 12.0117C13.4961 12.5421 13.6541 13.0508 13.9354 13.4259C14.2167 13.801 14.5983 14.0117 14.9961 14.0117C15.3939 14.0117 15.7755 13.801 16.0568 13.4259C16.3381 13.0508 16.4961 12.5421 16.4961 12.0117C16.4961 11.4812 16.3381 10.9725 16.0568 10.5975C15.7755 10.2224 15.3939 10.0117 14.9961 10.0117Z" fill="currentColor"/>
    </svg>
)

export const DashboardTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_780)">
            <path opacity="0.3" d="M6.25 6.25H11.25V13.75H6.25V6.25ZM18.75 16.25H23.75V23.75H18.75V16.25ZM6.25 21.25H11.25V23.75H6.25V21.25ZM18.75 6.25H23.75V8.75H18.75V6.25Z" fill="currentColor"/>
            <path d="M3.75 16.25H13.75V3.75H3.75V16.25ZM6.25 6.25H11.25V13.75H6.25V6.25ZM16.25 26.25H26.25V13.75H16.25V26.25ZM18.75 16.25H23.75V23.75H18.75V16.25ZM16.25 3.75V11.25H26.25V3.75H16.25ZM23.75 8.75H18.75V6.25H23.75V8.75ZM3.75 26.25H13.75V18.75H3.75V26.25ZM6.25 21.25H11.25V23.75H6.25V21.25Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_780">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const PaidTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_786)">
            <path opacity="0.3" d="M16.25 5H7.5V25H22.5V11.25H16.25V5ZM20 22.5H10V20H20V22.5ZM20 15V17.5H10V15H20Z" fill="currentColor"/>
            <path d="M10 20H20V22.5H10V20ZM10 15H20V17.5H10V15ZM17.5 2.5H7.5C6.125 2.5 5 3.625 5 5V25C5 26.375 6.1125 27.5 7.4875 27.5H22.5C23.875 27.5 25 26.375 25 25V10L17.5 2.5ZM22.5 25H7.5V5H16.25V11.25H22.5V25Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_786">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const PeopleTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_792)">
            <path opacity="0.3" d="M11.25 12.5C12.2855 12.5 13.125 11.6605 13.125 10.625C13.125 9.58947 12.2855 8.75 11.25 8.75C10.2145 8.75 9.375 9.58947 9.375 10.625C9.375 11.6605 10.2145 12.5 11.25 12.5Z" fill="currentColor" />
            <path opacity="0.3" d="M5.42505 21.25H17.075C16.025 20.525 13.4875 19.6875 11.25 19.6875C9.01255 19.6875 6.47505 20.525 5.42505 21.25Z" fill="currentColor" />
            <path d="M11.25 15C13.6625 15 15.625 13.0375 15.625 10.625C15.625 8.2125 13.6625 6.25 11.25 6.25C8.8375 6.25 6.875 8.2125 6.875 10.625C6.875 13.0375 8.8375 15 11.25 15ZM11.25 8.75C12.2875 8.75 13.125 9.5875 13.125 10.625C13.125 11.6625 12.2875 12.5 11.25 12.5C10.2125 12.5 9.375 11.6625 9.375 10.625C9.375 9.5875 10.2125 8.75 11.25 8.75ZM11.25 17.1875C8.325 17.1875 2.5 18.65 2.5 21.5625V23.75H20V21.5625C20 18.65 14.175 17.1875 11.25 17.1875ZM5.425 21.25C6.475 20.525 9.0125 19.6875 11.25 19.6875C13.4875 19.6875 16.025 20.525 17.075 21.25H5.425ZM20.05 17.2625C21.5 18.3125 22.5 19.7125 22.5 21.5625V23.75H27.5V21.5625C27.5 19.0375 23.125 17.6 20.05 17.2625ZM18.75 15C21.1625 15 23.125 13.0375 23.125 10.625C23.125 8.2125 21.1625 6.25 18.75 6.25C18.075 6.25 17.45 6.4125 16.875 6.6875C17.6625 7.8 18.125 9.1625 18.125 10.625C18.125 12.0875 17.6625 13.45 16.875 14.5625C17.45 14.8375 18.075 15 18.75 15Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_249_792">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const RequestQuoteTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_799)">
            <path opacity="0.3" d="M15 5C9.4875 5 5 9.4875 5 15C5 20.5125 9.4875 25 15 25C20.5125 25 25 20.5125 25 15C25 9.4875 20.5125 5 15 5ZM16.5375 21.6625V23.75H13.625V21.6375C11.75 21.25 10.1625 20.0375 10.05 17.925H12.1875C12.3 19.075 13.0875 19.975 15.0875 19.975C17.225 19.975 17.7125 18.9 17.7125 18.2375C17.7125 17.325 17.225 16.475 14.7875 15.9C12.075 15.2375 10.2125 14.125 10.2125 11.8875C10.2125 10 11.7375 8.7875 13.6125 8.375V6.25H16.5375V8.3875C18.575 8.875 19.5875 10.425 19.65 12.1H17.5125C17.4625 10.8875 16.8125 10.05 15.0875 10.05C13.45 10.05 12.4625 10.7875 12.4625 11.8375C12.4625 12.75 13.175 13.3625 15.3875 13.925C17.6 14.5 19.9625 15.45 19.9625 18.2C19.95 20.2 18.45 21.3 16.5375 21.6625Z" fill="currentColor" />
            <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM15.3875 13.925C13.175 13.3625 12.4625 12.75 12.4625 11.8375C12.4625 10.7875 13.45 10.05 15.0875 10.05C16.8125 10.05 17.4625 10.875 17.5125 12.1H19.65C19.5875 10.425 18.5625 8.8875 16.5375 8.3875V6.25H13.625V8.3625C11.7375 8.7625 10.225 9.9875 10.225 11.875C10.225 14.1125 12.0875 15.2375 14.8 15.8875C17.2375 16.4625 17.725 17.325 17.725 18.225C17.725 18.8875 17.2375 19.9625 15.1 19.9625C13.1 19.9625 12.3125 19.0625 12.2 17.9125H10.05C10.175 20.0375 11.75 21.2375 13.625 21.625V23.75H16.55V21.6625C18.45 21.3 19.95 20.2125 19.9625 18.2C19.95 15.45 17.5875 14.5 15.3875 13.925Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_249_799">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const KeyboardArrowRight: FC<SvgIconProps> = createSvgIcon(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_770)">
            <path d="M7.15833 13.825L10.975 10L7.15833 6.175L8.33333 5L13.3333 10L8.33333 15L7.15833 13.825Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_770">
                <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Person: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M15 12.625C16.4497 12.625 17.625 11.4497 17.625 10C17.625 8.55025 16.4497 7.375 15 7.375C13.5503 7.375 12.375 8.55025 12.375 10C12.375 11.4497 13.5503 12.625 15 12.625Z" fill="currentColor"/>
        <path opacity="0.3" d="M15 18.625C11.2875 18.625 7.375 20.45 7.375 21.25V22.625H22.625V21.25C22.625 20.45 18.7125 18.625 15 18.625Z" fill="currentColor"/>
        <path d="M15 16.25C11.6625 16.25 5 17.925 5 21.25V25H25V21.25C25 17.925 18.3375 16.25 15 16.25ZM22.625 22.625H7.375V21.25C7.375 20.45 11.2875 18.625 15 18.625C18.7125 18.625 22.625 20.45 22.625 21.25V22.625ZM15 15C17.7625 15 20 12.7625 20 10C20 7.2375 17.7625 5 15 5C12.2375 5 10 7.2375 10 10C10 12.7625 12.2375 15 15 15ZM15 7.375C16.45 7.375 17.625 8.55 17.625 10C17.625 11.45 16.45 12.625 15 12.625C13.55 12.625 12.375 11.45 12.375 10C12.375 8.55 13.55 7.375 15 7.375Z" fill="currentColor"/>
    </svg>
)
export const Groups: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_295_168)">
            <g opacity="0.3">
                <path d="M10.0875 20C10.2 19.7125 10.25 19.5125 11.225 19.1375C12.4375 18.6625 13.7125 18.4375 15 18.4375C16.2875 18.4375 17.5625 18.6625 18.775 19.1375C19.7375 19.5125 19.7875 19.7125 19.9125 20H10.0875ZM15 10C15.6875 10 16.25 10.5625 16.25 11.25C16.25 11.9375 15.6875 12.5 15 12.5C14.3125 12.5 13.75 11.9375 13.75 11.25C13.75 10.5625 14.3125 10 15 10Z" fill="currentColor"/>
            </g>
            <path d="M5 16.25C6.375 16.25 7.5 15.125 7.5 13.75C7.5 12.375 6.375 11.25 5 11.25C3.625 11.25 2.5 12.375 2.5 13.75C2.5 15.125 3.625 16.25 5 16.25ZM6.4125 17.625C5.95 17.55 5.4875 17.5 5 17.5C3.7625 17.5 2.5875 17.7625 1.525 18.225C0.6 18.625 0 19.525 0 20.5375V22.5H5.625V20.4875C5.625 19.45 5.9125 18.475 6.4125 17.625ZM25 16.25C26.375 16.25 27.5 15.125 27.5 13.75C27.5 12.375 26.375 11.25 25 11.25C23.625 11.25 22.5 12.375 22.5 13.75C22.5 15.125 23.625 16.25 25 16.25ZM30 20.5375C30 19.525 29.4 18.625 28.475 18.225C27.4125 17.7625 26.2375 17.5 25 17.5C24.5125 17.5 24.05 17.55 23.5875 17.625C24.0875 18.475 24.375 19.45 24.375 20.4875V22.5H30V20.5375ZM20.3 17.0625C18.8375 16.4125 17.0375 15.9375 15 15.9375C12.9625 15.9375 11.1625 16.425 9.7 17.0625C8.35 17.6625 7.5 19.0125 7.5 20.4875V22.5H22.5V20.4875C22.5 19.0125 21.65 17.6625 20.3 17.0625ZM10.0875 20C10.2 19.7125 10.25 19.5125 11.225 19.1375C12.4375 18.6625 13.7125 18.4375 15 18.4375C16.2875 18.4375 17.5625 18.6625 18.775 19.1375C19.7375 19.5125 19.7875 19.7125 19.9125 20H10.0875ZM15 10C15.6875 10 16.25 10.5625 16.25 11.25C16.25 11.9375 15.6875 12.5 15 12.5C14.3125 12.5 13.75 11.9375 13.75 11.25C13.75 10.5625 14.3125 10 15 10ZM15 7.5C12.925 7.5 11.25 9.175 11.25 11.25C11.25 13.325 12.925 15 15 15C17.075 15 18.75 13.325 18.75 11.25C18.75 9.175 17.075 7.5 15 7.5Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_295_168">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Group: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="-0.000244141" width="34" height="34" rx="8" fill="#100C08" fillOpacity="0.34"/>
        <path opacity="0.3" d="M12.75 14.1664C13.9236 14.1664 14.875 13.215 14.875 12.0414C14.875 10.8678 13.9236 9.91638 12.75 9.91638C11.5764 9.91638 10.625 10.8678 10.625 12.0414C10.625 13.215 11.5764 14.1664 12.75 14.1664Z" fill="currentColor"/>
        <path opacity="0.3" d="M6.14832 24.0831H19.3516C18.1616 23.2614 15.2858 22.3123 12.75 22.3123C10.2141 22.3123 7.33832 23.2614 6.14832 24.0831Z" fill="currentColor"/>
        <path d="M12.75 16.9998C15.4842 16.9998 17.7084 14.7756 17.7084 12.0415C17.7084 9.3073 15.4842 7.08313 12.75 7.08313C10.0159 7.08313 7.79171 9.3073 7.79171 12.0415C7.79171 14.7756 10.0159 16.9998 12.75 16.9998ZM12.75 9.91646C13.9259 9.91646 14.875 10.8656 14.875 12.0415C14.875 13.2173 13.9259 14.1665 12.75 14.1665C11.5742 14.1665 10.625 13.2173 10.625 12.0415C10.625 10.8656 11.5742 9.91646 12.75 9.91646ZM12.75 19.479C9.43504 19.479 2.83337 21.1365 2.83337 24.4373V26.9165H22.6667V24.4373C22.6667 21.1365 16.065 19.479 12.75 19.479ZM6.14837 24.0831C7.33837 23.2615 10.2142 22.3123 12.75 22.3123C15.2859 22.3123 18.1617 23.2615 19.3517 24.0831H6.14837ZM22.7234 19.564C24.3667 20.754 25.5 22.3406 25.5 24.4373V26.9165H31.1667V24.4373C31.1667 21.5756 26.2084 19.9465 22.7234 19.564ZM21.25 16.9998C23.9842 16.9998 26.2084 14.7756 26.2084 12.0415C26.2084 9.3073 23.9842 7.08313 21.25 7.08313C20.485 7.08313 19.7767 7.2673 19.125 7.57896C20.0175 8.8398 20.5417 10.384 20.5417 12.0415C20.5417 13.699 20.0175 15.2431 19.125 16.504C19.7767 16.8156 20.485 16.9998 21.25 16.9998Z" fill="currentColor"/>
    </svg>

)