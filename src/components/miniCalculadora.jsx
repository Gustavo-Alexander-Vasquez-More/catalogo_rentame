import React from "react";
export default function MiniCalculadoraRenta({ precioDia }) {
  const [dias, setDias] = React.useState(1);

  const handleChange = (e) => {
    const val = Math.max(1, Number(e.target.value));
    setDias(val);
  };

  const handleIncrement = () => setDias((prev) => prev + 1);
  const handleDecrement = () => setDias((prev) => (prev > 1 ? prev - 1 : 1));

  const total = dias * precioDia;

  return (
    <div className="mt-2 mb-2 p-4 bg-[#f3f6fa] rounded-lg shadow flex flex-col gap-2 max-w-xs">
      <label className="text-sm font-semibold text-[#323B75] mb-1">
        Calcula tu renta por días:
      </label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-[#323B75] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-[#1f2b5e] transition"
          aria-label="Restar día"
        >
          –
        </button>
        <input
          type="number"
          min={1}
          value={dias}
          onChange={handleChange}
          className="w-16 text-center px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#323B75] text-base appearance-none"
          style={{ MozAppearance: "textfield" }}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-[#323B75] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-[#1f2b5e] transition"
          aria-label="Sumar día"
        >
          +
        </button>
        <span className="text-gray-700">día(s)</span>
      </div>
      <div className="text-base font-bold text-[#323B75] mt-1">
        Total: <span className="text-2xl">${total.toLocaleString()}</span> MXN
      </div>
    </div>
  );
}