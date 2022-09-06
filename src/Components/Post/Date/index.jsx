import moment from "moment";

export default function Date({ data }) {
  const postDate = () => {
    const date = moment(data);
    const now = moment();
    const diff = now.diff(date, "seconds");
    if (diff <= 60) {
      return "há alguns segundos";
    } else if (diff <= 3600) {
      return `há ${now.diff(date, "minutes")} minutos`;
    } else if (diff <= 86400) {
      return `há ${now.diff(date, "hours")} horas`;
    } else if (diff <= 604800) {
      return `há ${now.diff(date, "days")} dias`;
    } else if (diff >= 2628000) {
      return `há ${now.diff(date, "months")} ${
        now.diff(date, "months") === 1 ? "mês" : "meses"
      }`;
    }
  };
  return (
    <p className="font-open text-zinc-500 text-xs px-3 py-2">{postDate()}</p>
  );
}
