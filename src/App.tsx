import { Header } from "./components/header"
import { Tip } from "./components/tip"

function handleRestart() {
    alert("Reiniciar jogo")
}

export function App() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-12">
            <div className="w-[556px] h-[801px] flex flex-col gap-12">
                <Header currentAttempt={1} maxAttempts={10} onRestart={handleRestart} />
                <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
            </div>
        </div>
    )
}