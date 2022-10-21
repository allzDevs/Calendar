import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLButtonElement> & {
    name: string
    label: string
}

export const Button = ({name, label, ...rest}: Props) => {
    return <button name={name} {...rest}>{label}</button>
}