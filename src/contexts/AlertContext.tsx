import React, { createContext, useContext, useState } from "react";
import CustomAlert from "../components/Alerts/CustomAlert";

type AlertType = "success" | "error" | "warning" | "info";

type AlertPayload = {
  title?: string;
  message: string;
  type: AlertType;
  iconName?: string;
};

type AlertContextType = {
  showAlert: (payload: AlertPayload) => void;
  hideAlert: () => void;
  alert: AlertPayload | null;
};

export const AlertContext = React.createContext<AlertContextType | null>(null);

export const useAlert = (): AlertContextType => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used within Alertprovider");
  return ctx;
};

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<AlertPayload | null>(null);

  const showAlert = (payload: AlertPayload) => {
    setAlert(payload);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, alert }}>
      <CustomAlert
        title={alert?.title}
        message={alert?.message ?? ""}
        type={alert?.type ?? "info"}
        iconName={alert?.iconName}
        visible={!!alert}
        onClose={hideAlert}
      />
      {children}
    </AlertContext.Provider>
  );
};
