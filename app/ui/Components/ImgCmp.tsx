import { Program } from "../../lib/definitions";
export default function ImgCmp(props: { program: Program }) {
  const program1 = props.program;
  return (
    program1.image_url && (
      <div className="h-56 w-full overflow-hidden relative">
        <img
          src={program1.image_url}
          alt={program1.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    )
  );
}
