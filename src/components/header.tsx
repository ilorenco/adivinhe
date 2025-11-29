import logo from "../assets/logo.png"
import restart from "../assets/restart.svg"

type Props = {
    currentAttempt: number
    maxAttempts: number
    onRestart: () => void
}

export function Header({ currentAttempt, maxAttempts, onRestart }: Props) {

    return (
        <div className="w-full flex flex-col items-center">
            <img className="h-14" src={logo} />
            
            <header className="w-full flex justify-between items-center pt-12 pl-8 pr-8">
                <span className="text-lg text-[#9b9b9b]">
                    <strong className="text-xl text-[#e8891c]">{currentAttempt}</strong> de {maxAttempts} tentativas
                </span>

                <button type="button" className="bg-transparent border-none" onClick={onRestart}>
                    <img className="hover:scale-110 transition-all duration-300 h-8" src={restart} alt="Reiniciar jogo" />
                </button>
            </header>
        </div>
    )
}