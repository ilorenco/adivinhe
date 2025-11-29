type Props = React.ComponentProps<"button"> & {
    title: string
}

export function Button({ title, ...props }: Props) {
    return (
        <button className="h-11 border-2 border-[#4f4fb9] bg-[#6363db] text-[#ebebfc] px-3.5 text-base font-bold rounded-xl" {...props}>
            {title}
        </button>
    )
}