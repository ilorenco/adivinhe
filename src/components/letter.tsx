import { cn } from "../utils/cn"

type Props = {
    letter: string
    size?: "default" | "small"
    color?: "default" | "correct" | "incorrect"
}

export function Letter({ letter, size = "default", color = "default" }: Props) {
    return (
        <div className={cn(
            "w-14 h-14 uppercase text-3xl font-bold flex items-center justify-center rounded-xl",
            size === "small" && "w-10 h-10 rounded-[0.4rem] text-lg font-medium border",
            color === "default" && "bg-[#ebebfc] text-[#6363db]",
            size === "small" && color === "default" && "border-[#6363db] bg-transparent",
            color === "correct" && "bg-[#e1f5ec] border border-[#03ab4f]",
            color === "incorrect" && "bg-[#ffcf62] border border-[#691b0a]"
        )}>
            <span className={cn(
                color === "correct" && "text-[#03ab4f]",
                color === "incorrect" && "text-[#691b0a]"
            )}>{letter}</span>

        </div>
    )
}