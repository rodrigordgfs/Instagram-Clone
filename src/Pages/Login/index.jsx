
export default function Login() {
  return (
    <div className="my-0 mx-auto min-h-screen bg-slate-50 flex flex-row justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="border border-zinc-500 bg-white flex flex-col items-center pt-14 pb-8 max-w-xl w-full">
          <img src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/logo.png" alt="Logo" />
          <form className="flex flex-col">
            <input type="email" className="border border-zinc-500 bg-zinc-100 w-64 p-2  text-xs rounded-sm mt-3 outline-none" placeholder="Telefone, nome de usuário ou e-mail" />
            <input type="password" className="border border-zinc-500 bg-zinc-100 w-64 p-2 text-xs rounded-sm mt-2 outline-none" placeholder="Senha" />
            <button type="submit" className="rounded-md bg-blue-500 text-white font-semibold py-1 mt-4">Entrar</button>
          </form>
          <div className="flex flex-row w-full items-center justify-center gap-4 py-6">
            <span className="flex-1 border-t border-zinc-500"></span>
            <p className="text-xs">OU</p>
            <span className="flex-1 border-t border-zinc-500"></span>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img className="w-4 h-4" src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/facebook.svg" alt="Facebook" />
            <p className="text-sm text-blue-900 font-semibold">Entrar com o Facebook</p>
          </div>
          <p className="text-xs mt-4">Esqueceu a senha?</p>
        </div>
        <div className="border border-zinc-500 bg-white flex flex-col mt-4">
          <p>Não tem uma conta? <span className="font-semibold text-blue-500">Cadastre-se</span></p>
        </div>
      </div>
    </div>
  );
}
