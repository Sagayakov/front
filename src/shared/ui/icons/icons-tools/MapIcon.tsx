interface Props {
  color: string
}

export const MapIcon = ({color}: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6072 1.5C9.52406 1.50246 7.52699 2.33105 6.05403 3.80402C4.58106 5.27699 3.75247 7.27405 3.75001 9.35714C3.74751 11.0594 4.30357 12.7156 5.33287 14.0714C5.33287 14.0714 5.54715 14.3536 5.58215 14.3943L11.6072 21.5L17.635 14.3907C17.6664 14.3529 17.8814 14.0714 17.8814 14.0714L17.8822 14.0693C18.9109 12.714 19.4667 11.0587 19.4643 9.35714C19.4618 7.27405 18.6332 5.27699 17.1603 3.80402C15.6873 2.33105 13.6902 1.50246 11.6072 1.5ZM11.6072 12.2143C11.0421 12.2143 10.4897 12.0467 10.0198 11.7328C9.54995 11.4188 9.18375 10.9726 8.9675 10.4505C8.75125 9.92845 8.69466 9.35397 8.80491 8.79974C8.91515 8.24551 9.18727 7.73642 9.58685 7.33684C9.98642 6.93726 10.4955 6.66514 11.0498 6.5549C11.604 6.44466 12.1785 6.50124 12.7005 6.71749C13.2226 6.93374 13.6688 7.29994 13.9828 7.7698C14.2967 8.23965 14.4643 8.79205 14.4643 9.35714C14.4633 10.1146 14.162 10.8408 13.6264 11.3764C13.0908 11.912 12.3646 12.2133 11.6072 12.2143Z"
        fill={color}
      />
    </svg>
  );
};
