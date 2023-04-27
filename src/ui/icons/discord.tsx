import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const Discord: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.23633 3.38862C7.91849 3.3507 7.5923 3.38971 7.28516 3.50776C6.36623 3.8593 5.16802 4.40809 4.12109 5.25385L4.09375 5.27534L4.06836 5.29682C3.60387 5.72741 3.34881 6.24391 3.02344 6.95112C2.69807 7.65834 2.37002 8.53108 2.07227 9.51362C1.47675 11.4787 1 13.8702 1 16.164C1 16.404 1.06291 16.6536 1.1875 16.873C1.99369 18.2961 3.38757 19.0891 4.62891 19.5644C5.86014 20.0358 6.90378 20.1956 7.5 20.2167C7.51943 20.2174 7.56864 20.2246 7.57031 20.2246C7.9779 20.2246 8.50727 20.0745 8.80469 19.5117L9.72656 17.7675C11.253 18.0348 12.6982 18.031 14.2656 17.7519L15.1934 19.5078C15.4917 20.0769 16.026 20.2226 16.4297 20.2226C16.4312 20.2226 16.4775 20.2173 16.4941 20.2167C17.0904 20.1962 18.1373 20.035 19.3711 19.5624C20.6109 19.0876 22.0024 18.2965 22.8086 16.8769C22.9372 16.6537 23 16.4029 23 16.164C23 13.8702 22.5224 11.4775 21.9238 9.50971C21.6246 8.5258 21.2956 7.64967 20.9668 6.9394C20.638 6.22913 20.3733 5.70778 19.9082 5.27729L19.8828 5.25581L19.8574 5.23432C18.8215 4.39683 17.629 3.85428 16.7129 3.50581C16.1002 3.27232 15.4092 3.35529 14.8672 3.72846C14.4486 4.0163 14.3068 4.5143 14.1973 4.99995H9.80273C9.69282 4.51473 9.55186 4.01627 9.13477 3.72846C8.86364 3.54138 8.55416 3.42654 8.23633 3.38862ZM8 5.37495C8 6.26101 8.73894 6.99995 9.625 6.99995H14.373C15.2579 6.99995 15.9989 6.2596 16 5.37495H16.002C16.7883 5.67408 17.7963 6.15787 18.5625 6.76753C18.5802 6.78946 18.8775 7.18977 19.1504 7.77925C19.4292 8.38154 19.7338 9.18441 20.0098 10.0917C20.5461 11.8551 20.9488 14.0263 20.9727 15.9921C20.4907 16.7431 19.6026 17.3328 18.6562 17.6953C17.8044 18.0215 17.0977 18.1061 16.7363 18.1464L16.2734 17.2695C16.6167 17.1688 16.9576 17.0699 17.3203 16.9472C17.4468 16.9068 17.5639 16.8417 17.665 16.7555C17.766 16.6694 17.8488 16.564 17.9087 16.4455C17.9686 16.327 18.0042 16.1978 18.0136 16.0653C18.023 15.9329 18.006 15.7999 17.9635 15.6742C17.9209 15.5484 17.8538 15.4324 17.766 15.3328C17.6781 15.2333 17.5713 15.1522 17.4518 15.0944C17.3323 15.0365 17.2025 15.003 17.07 14.9959C16.9374 14.9887 16.8047 15.008 16.6797 15.0527C12.8496 16.3478 10.9651 16.3492 7.33398 15.0585C7.20863 15.0117 7.07513 14.9904 6.94141 14.996C6.70898 15.0072 6.48772 15.0991 6.31573 15.2558C6.14375 15.4126 6.03181 15.6244 5.9992 15.8548C5.96658 16.0852 6.01533 16.3198 6.13704 16.5181C6.25876 16.7164 6.44582 16.8661 6.66602 16.9414C7.02989 17.0707 7.37505 17.1762 7.7207 17.2812L7.26367 18.1464C6.90254 18.1062 6.19557 18.0214 5.34375 17.6953C4.3974 17.3329 3.50976 16.7456 3.02734 15.9941C3.05091 14.0277 3.45222 11.8561 3.98633 10.0937C4.26107 9.18711 4.56371 8.38725 4.83984 7.78706C5.10963 7.20065 5.40707 6.80133 5.41602 6.78706C6.19667 6.16644 7.21087 5.67684 8 5.37495ZM9.03906 9.99604C8.21006 9.99604 7.53906 10.8891 7.53906 11.9921C7.53906 13.0951 8.21006 13.9882 9.03906 13.9882C9.86806 13.9882 10.5391 13.0951 10.5391 11.9921C10.5211 10.8891 9.87106 9.88604 9.03906 9.99604ZM14.9961 10.0117C14.5983 10.0117 14.2167 10.2224 13.9354 10.5975C13.6541 10.9725 13.4961 11.4812 13.4961 12.0117C13.4961 12.5421 13.6541 13.0508 13.9354 13.4259C14.2167 13.801 14.5983 14.0117 14.9961 14.0117C15.3939 14.0117 15.7755 13.801 16.0568 13.4259C16.3381 13.0508 16.4961 12.5421 16.4961 12.0117C16.4961 11.4812 16.3381 10.9725 16.0568 10.5975C15.7755 10.2224 15.3939 10.0117 14.9961 10.0117Z"
            fill="currentColor"/>
    </svg>
)