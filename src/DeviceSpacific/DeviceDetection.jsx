import { useEffect, useState } from "react";
import { MobileView } from "react-device-detect";

export const DeviceSpecificResponse = ({
  setDeferredPrompt,
  deferredPrompt,
  setDevicePopupStatus,
  DevicePopupStatus,
}) => {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log("beforeinstallprompt event fired");
      e.preventDefault();
      setDeferredPrompt(e);
      setDevicePopupStatus((prev) => !prev);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [setDeferredPrompt, setDevicePopupStatus]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      console.log(
        choiceResult.outcome === "accepted"
          ? "User accepted the install prompt"
          : "User dismissed the install prompt"
      );
    } catch (error) {
      console.error("Error during installation prompt:", error);
    } finally {
      setDeferredPrompt(null);
    }
  };

  return (
    <MobileView>
      {DevicePopupStatus && (
        <div className="flex flex-row justify-between items-center p-2">
          <p className="text-xl">Mobile View</p>
          {deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="text-sm border p-2 rounded-md bg-info/50 text-base-content hover:bg-info"
              aria-label="Install App"
            >
              Install App
            </button>
          )}
          <button
            onClick={() => setDevicePopupStatus(false)}
            aria-label="Close"
            className="text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </MobileView>
  );
};