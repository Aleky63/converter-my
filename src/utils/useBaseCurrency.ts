import { useState, useEffect } from "react";

export function useBaseCurrency() {
  // Всегда начинаем с USD
  const [base, setBase] = useState<string>("USD");

  // При загрузке компонента, очищаем старое значение JPY если оно там есть
  useEffect(() => {
    // Устанавливаем USD как начальное значение
    localStorage.setItem("base", "USD");
  }, []);

  // Сохраняем выбранную валюту в localStorage
  useEffect(() => {
    localStorage.setItem("base", base);
  }, [base]);

  return [base, setBase] as [string, (b: string) => void];
}

export const currencies = [
  "USD",
  "EUR",
  "RUB",
  "TRY",
  "GEL",
  "KZT",
  "AMD",
  "GBP",
  "JPY",
  "CNY",
  "AED",
];
