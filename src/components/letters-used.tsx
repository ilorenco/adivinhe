import { Letter } from "./letter"

export function LettersUsed() {
    return (
        <div className="w-full mt-12 border-t border-[#c3c3c3]">
            <h5 className="text-[#32325f] text mt-3 font-semibold">
                Letras utilizadas
            </h5>

            <div className="flex gap-3 flex-wrap mt-3">
                <Letter letter="A" size="small" color="correct" />
                <Letter letter="B" size="small" color="incorrect" />
                <Letter letter="C" size="small" color="default" />
                <Letter letter="D" size="small" color="default" />
            </div>
        </div>
    )
}