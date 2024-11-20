type ButtonProps = {
  label: string;
  link?: string;
  type: "button" | "submit";
};
export default function Button({ label, link, type }: ButtonProps) {
  return (
    <>
      {type === "button" ? (
        <button type="button">
          <a
            className="bg-[#2A629A] px-4 py-4 rounded-lg text-xl lg:text-2xl text-gray-200 hover:bg-slate-700 duration-300 font-bold"
            href={link}
          >
            {label}
          </a>
        </button>
      ) : (
        <button
          type="submit"
          className="w-full lg:text-2xl text-xl bg-[#2A629A] px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-700 duration-300 font-bold"
        >
          {label}
        </button>
      )}
    </>
  );
}
