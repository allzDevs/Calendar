import { HTMLAttributes, ReactNode } from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

export const View = ({children, ...rest}: Props) => {
    return <div {...rest}>{children}</div>
}