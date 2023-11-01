import type { FunctionComponent } from "react";
import classNames from 'classnames'

type Props = {
    label: string
    variant?: Variant
}

type Variant = 'success' | 'error' | "warning" | 'info'

export const Pill:FunctionComponent<Props> = ({label, variant = 'success'}) => {
const variants:Record<Variant, string> = {
    'success': 'bg-green-100 text-green-500',
    'error': 'bg-red-100 text-red-500',
    'warning': 'bg-orange-100 text-orange-500',
    'info': 'bg-blue-100 text-blue-500',
}

    return <div className={classNames(["rounded-full py-1 px-4 w-fit text-sm", variants[variant]])}><span>{label}</span></div>
}