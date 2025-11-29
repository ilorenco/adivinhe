import { Header } from "./components/header"
import { Tip } from "./components/tip"
import { Letter } from "./components/letter"
import { Input } from "./components/input"

function handleRestart() {
    alert("Reiniciar jogo")
}

export function App() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-12">
            <div className="w-[556px] h-[801px] flex flex-col gap-12 bg-[#ffffff] p-8 rounded-sm">
                <Header currentAttempt={1} maxAttempts={10} onRestart={handleRestart} />
                <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
                <div className="w-full flex-wrap flex gap-4 justify-center">
                    <Letter letter="A" />
                    <Letter letter="B" />
                    <Letter letter="C" />
                    <Letter letter="D" />
                    <Letter letter="E" />
                    <Letter letter="F" />
                    <Letter letter="G" />
                </div>


                <div>
                    <h4 className="text-lg font-bold">Palpite</h4>
                    <Input autoFocus maxLength={1} placeholder="?" />
                </div>
            </div>
        </div>
    )
}