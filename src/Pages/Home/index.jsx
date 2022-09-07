import TimeLine from "../../Components/Home/TimeLine";
import Header from "../../Components/Shared/Header";
import MenuMobile from "../../Components/Shared/MenuMobile";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      <TimeLine />
      <MenuMobile />
    </main>
  );
}
