interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    label: string;
    error?: string;
    options: string[];
    className?: string;
}

export type {SelectProps}
