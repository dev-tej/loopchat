// useCustomToast.js
import { useCallback } from "react";
import toast from "react-hot-toast";

const useToast = () => {
  const notify = useCallback((text, status) => {
    toast(text, {
      icon: getIcon(status),
      style: {
        border: `1px solid ${getStatusColor(status)}`,
        padding: "16px",
        color: getStatusColor(status),
      },
    });
  }, []);

  const getIcon = (status) => {
    switch (status) {
      case "success":
        return "✔️";
      case "error":
        return "❌";
      case "info":
        return "ℹ️";
      case "warning":
        return "⚠️";
      default:
        return "";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "info":
        return "#2196f3";
      case "warning":
        return "#ff9800";
      default:
        return "#000";
    }
  };

  return { notify };
};

export default useToast;
