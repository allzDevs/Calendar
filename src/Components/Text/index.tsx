import { HTMLAttributes, ReactNode } from "react"

type Props = HTMLAttributes<HTMLParagraphElement> & {
    children: ReactNode
}

export const Text = ({children, ...rest}: Props) =>  {
    return <p {...rest}>{children}</p>
}