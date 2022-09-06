import Header from "../../Components/Header";
import MenuMobile from "../../Components/MenuMobile";
import TimeLine from "../../Components/TimeLine";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      <TimeLine />
      <MenuMobile />
    </main>
  );
}
