type Props = {
    letter: string
}

export function Letter({ letter }: Props) {
    return (
        <div className="w-14 h-14 bg-[#ebebfc] text-[#6363db] uppercase text-3xl font-bold flex items-center justify-center rounded-xl">
            <span>{letter}</span>

        </div>
    )
}