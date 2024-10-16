import { Plus } from 'lucide-react'
import logo from './assets/logo-in.svg'
import letsStart from './assets/lets-start-illustration.png'
import { Button } from './components/ui/button'
export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo.in" style={{ width: '5%', height: '10%' }} />
      <img
        src={letsStart}
        alt="logo.in"
        style={{ width: '15%', height: '25%' }}
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <Button>
        <Plus className="size-4" />
        Cadastar meta
      </Button>

      {/* <button
        type="button"
        className="px-4 py-2.5 rounded-lg  bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600"
      >
        <Plus className="size-4" />
        Cadastar meta
      </button> */}
    </div>
  )
}
