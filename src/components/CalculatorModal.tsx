"use client";
import { useEffect, useState } from "react";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalculatorModal({
  isOpen,
  onClose,
}: CalculatorModalProps) {
  const [price, setPrice] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [tenor, setTenor] = useState<string>("");
  const [bank, setBank] = useState<string>("BCA");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setPrice("");
      setDownPayment("");
      setTenor("");
      setBank("BCA");
      setMonthlyPayment(null);
      setError("");
    }
  }, [isOpen]);

  useEffect(() => {
    // Close modal on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  const handleContactUs = () => {
    const priceNum = parseFloat(price.replace(/,/g, ""));
    const downPaymentNum = parseFloat(downPayment.replace(/,/g, ""));
    const tenorNum = parseInt(tenor);
    const annualRate = bank === "BCA" ? 0.03 : bank === "BRI" ? 0.05 : 0.045;

    const msg = `Halo, saya tertarik dengan kalkulasi KPR:
- Bank: ${bank}
- Bunga: ${(annualRate * 100).toFixed(1)}% per tahun
- Harga Properti: Rp ${priceNum.toLocaleString("id-ID")}
- Down Payment: Rp ${downPaymentNum.toLocaleString("id-ID")}
- Tenor: ${tenorNum} tahun
- Estimasi Cicilan Bulanan: Rp ${monthlyPayment?.toLocaleString("id-ID")}

Saya ingin mendapatkan informasi lebih lanjut.`;

    window.open(
      `https://wa.me/6287867309782?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const calculateMonthlyPayment = () => {
    const priceNum = parseFloat(price.replace(/,/g, ""));
    const downPaymentNum = parseFloat(downPayment.replace(/,/g, ""));
    const tenorNum = parseInt(tenor);

    if (!priceNum || !downPaymentNum || !tenorNum) {
      setError("Semua field harus diisi");
      return;
    }

    if (downPaymentNum >= priceNum) {
      setError("Down payment harus kurang dari harga properti");
      return;
    }

    if (tenorNum < 1 || tenorNum > 30) {
      setError("Tenor harus antara 1-30 tahun");
      return;
    }

    const loanAmount = priceNum - downPaymentNum;
    const annualRate = bank === "BCA" ? 0.03 : bank === "BRI" ? 0.05 : 0.045;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = tenorNum * 12;

    const monthlyPaymentCalc =
      (loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPaymentCalc);
    setError("");
  };

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^\d]/g, "");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(formatCurrency(e.target.value));
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownPayment(formatCurrency(e.target.value));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-[#1a1814] border border-white/10 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="font-display text-xl text-[#c8a96e] font-medium">
            Kalkulator KPR
          </h3>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Harga Properti (Rp)
            </label>
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="1,000,000,000"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:border-[#c8a96e]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Down Payment (Rp)
            </label>
            <input
              type="text"
              value={downPayment}
              onChange={handleDownPaymentChange}
              placeholder="100,000,000"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:border-[#c8a96e]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Tenor (Tahun)
            </label>
            <input
              type="number"
              value={tenor}
              onChange={(e) => setTenor(e.target.value)}
              placeholder="20"
              min="1"
              max="30"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:border-[#c8a96e]/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Nama Bank
            </label>
            <select
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm focus:border-[#c8a96e]/50 focus:outline-none transition-colors"
            >
              <option className="text-black" value="BCA">
                Bank BCA (3%)
              </option>
              <option className="text-black" value="BRI">
                Bank BRI (5%)
              </option>
              <option className="text-black" value="BTN">
                Bank BTN (4.5%)
              </option>
            </select>
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-3 py-2 rounded">
              {error}
            </div>
          )}

          <button
            onClick={calculateMonthlyPayment}
            className="w-full bg-[#c8a96e] text-[#0f0e0c] py-3 text-sm tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-colors"
          >
            Hitung Cicilan
          </button>

          {monthlyPayment !== null && (
            <div className="bg-[#c8a96e]/10 border border-[#c8a96e]/20 p-4 rounded">
              <div className="text-[#c8a96e] text-xs tracking-widest uppercase mb-2">
                Estimasi Cicilan Bulanan
              </div>
              <div className="font-display text-2xl text-white font-medium">
                Rp {monthlyPayment.toLocaleString("id-ID")}
              </div>
              <div className="text-white/50 text-xs mt-1">
                *Bunga {bank === "BCA" ? "3%" : bank === "BRI" ? "5%" : "4.5%"}{" "}
                per tahun, belum termasuk biaya administrasi
              </div>
              <button
                onClick={handleContactUs}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#c8a96e] text-[#0f0e0c] py-2 text-xs tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-colors"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                  <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                </svg>
                Hubungi Kami
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
