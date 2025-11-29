import { Header } from "./components/header"

function handleRestart() {
    alert("Reiniciar jogo")
}

export function App() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="border-2 border-red-500 w-[556px] h-[801px]">
                <Header currentAttempt={1} maxAttempts={10} onRestart={handleRestart} />
            </div>
        </div>
    )
}