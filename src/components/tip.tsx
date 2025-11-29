import tipIcon from "../assets/tip.svg"

type Props = {
    tip: string
}

export function Tip({ tip }: Props) {
    return (
        <div className="w-full bg-[#ebebfc] text-[#4f4fb9] rounded-xl flex items-center gap-4 p-4">
            <img className="h-8" src={tipIcon} />
            
            <div>
                <h3 className="text-xl font-bold">Dica</h3>
                <p className="text-base mt-1.5">{tip}</p>
            </div>
        </div>
    )
}