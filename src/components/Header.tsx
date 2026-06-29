import { Link } from "react-router-dom";

type Props = {
  dark: boolean;
  setDark: (v: boolean) => void;
};

export default function Header({ dark, setDark }: Props) {
  return (
    <header
      style={{
        padding: "12px 15px",
        backgroundColor: dark ? "#111827" : "#fff",
        borderBottom: dark ? "1px solid #374151" : "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background-color 0.3s, border-color 0.3s",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {/* 👈 Левая часть: Логотип (картинка) + Название */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Логотип - КАРТИНКА с яркой анимацией */}
        <img
          src="/logo.jpg"
          alt="Currency App Logo"
          className="logo-hover"
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(79, 70, 229, 0.4)",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15) rotate(-5deg)";
            // 🔥 Яркое многослойное свечение
            e.currentTarget.style.boxShadow = `
              0 0 10px rgba(79, 70, 229, 0.8),
              0 0 20px rgba(79, 70, 229, 0.6),
              0 0 30px rgba(79, 70, 229, 0.4),
              0 0 40px rgba(79, 70, 229, 0.3)
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            e.currentTarget.style.boxShadow =
              "0 2px 8px rgba(79, 70, 229, 0.4)";
          }}
        />
        {/* Название */}
        <span
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: dark ? "#f3f4f6" : "#333",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap",
            cursor: "pointer",
            transition:
              "color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#4f46e5";
            e.currentTarget.style.transform = "translateX(5px)";
            e.currentTarget.style.textShadow =
              "0 0 10px rgba(79, 70, 229, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = dark ? "#f3f4f6" : "#333";
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          Currency App
        </span>
      </div>

      {/* 👉 Правая часть: Навигация + Кнопка темы */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {/* Навигация */}
        <nav style={{ display: "flex", gap: 15 }}>
          <Link
            to="/converter"
            style={{
              color: dark ? "#f3f4f6" : "#333",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              transition: "color 0.2s, transform 0.2s, text-shadow 0.2s",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4f46e5";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.textShadow =
                "0 0 8px rgba(79, 70, 229, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = dark ? "#f3f4f6" : "#333";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            Конвертер
          </Link>
          <Link
            to="/rates"
            style={{
              color: dark ? "#f3f4f6" : "#333",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              transition: "color 0.2s, transform 0.2s, text-shadow 0.2s",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4f46e5";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.textShadow =
                "0 0 8px rgba(79, 70, 229, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = dark ? "#f3f4f6" : "#333";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            Курсы
          </Link>
        </nav>

        {/* Кнопка переключения темы */}
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            border: "none",
            backgroundColor: dark ? "#374151" : "#e5e7eb",
            color: dark ? "#f3f4f6" : "#333",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: 600,
            fontSize: 13,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = dark
              ? "#4b5563"
              : "#d1d5db";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(79, 70, 229, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = dark
              ? "#374151"
              : "#e5e7eb";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {dark ? "☀️ Светлая" : "🌙 Тёмная"}
        </button>
      </div>

      {/* 📱 Адаптивные стили для мобильных (до 320px) */}
      <style>{`
        @media (max-width: 480px) {
          header {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
          }
          header > div:first-child {
            justify-content: center !important;
            margin-bottom: 10px !important;
          }
          header > div:last-child {
            justify-content: center !important;
            flex-direction: column !important;
            gap: 10px !important;
          }
          nav {
            justify-content: center !important;
          }
        }
        @media (max-width: 320px) {
          header {
            padding: 10px 8px !important;
          }
          header > div:first-child {
            gap: 8px !important;
          }
          header > div:first-child > img {
            width: 40px !important;
            height: 40px !important;
          }
          header > div:first-child > span {
            font-size: 18px !important;
          }
          nav {
            gap: 10px !important;
          }
          nav a {
            font-size: 13px !important;
          }
          button {
            padding: 6px 10px !important;
            font-size: 11px !important;
          }
        }
        
        /* 🎨 Анимация логотипа */
        .logo-hover {
          animation: logoFloat 3s ease-in-out infinite;
        }
        
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-3px) rotate(2deg);
          }
        }
        
        @media (max-width: 320px) {
          .logo-hover {
            animation: none !important;
          }
        }
      `}</style>
    </header>
  );
}
