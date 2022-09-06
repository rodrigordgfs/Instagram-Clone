import { Link } from "react-router-dom";
import Header from "../../Components/Header";

export default function NotFound() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 px-2">
        <h1 className="font-semibold text-2xl">
          Esta página não está disponível.
        </h1>
        <p className="text-base mt-3">
          O link em que você clicou pode não estar funcionando, ou a página pode
          ter sido removida. <Link to="/">Voltar para o Instagram</Link>.
        </p>
      </div>
    </main>
  );
}
