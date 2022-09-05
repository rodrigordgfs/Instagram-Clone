import SmartphoneImage from "../../assets/images/login-smartphone.png";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-row justify-center">
      <div className="flex flex-1 justify-end">
        <img src={SmartphoneImage} alt="Login Smartphone" />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
