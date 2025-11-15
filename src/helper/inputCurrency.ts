const formatCurrency = (val: string) => {
  // Hapus semua karakter selain angka dan koma
  let value = val.replace(/[^0-9,]/g, "");

  // Pisahkan desimal jika ada
  let parts = value.split(",");
  let integerPart = parts[0];
  let decimalPart = parts[1];

  // Format ribuan
  let remainder = integerPart.length % 3;
  let formatted = integerPart.substr(0, remainder);
  let thousands = integerPart.substr(remainder).match(/\d{3}/g);
  if (thousands) {
    let separator = remainder ? "." : "";
    formatted += separator + thousands.join(".");
  }

  // Tambahkan desimal jika ada
  if (decimalPart !== undefined) {
    formatted += "," + decimalPart;
  }

  return "Rp " + formatted;
};

export const handleChange = (e: string) => {
  const rawValue = e.target.value;
  const formattedValue = formatCurrency(rawValue);
  setInputValue(formattedValue);

  // Kirim angka mentah ke parent (tanpa "Rp" dan titik ribuan)
  const numericValue = formattedValue.replace(/[^0-9,]/g, "");
  onChange && onChange(numericValue);
};
