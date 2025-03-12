import { useEffect, useState } from "react";
import { MobileView } from "react-device-detect";

export const DeviceSpacificResponse = ({setDeferredPrompt, deferredPrompt, setDevicePopupStatus, DevicePopupStatus}) => {

  useEffect(() => {
    console.log('fired')
    const handleBeforeInstallPrompt = (e) => {
      console.log('this works')
      console.log("beforeinstallprompt event fired"); // Debug log
      e.preventDefault();
      setDeferredPrompt(e);
      setDevicePopupStatus(prev => !prev); // Force re-render
    };

    document.body.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      document.body.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, [setDeferredPrompt, setDevicePopupStatus]);

  const handleInstallClick = () => {
    console.log('mf')
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log(
        choiceResult.outcome === "accepted"
          ? "User accepted the install prompt"
          : "User dismissed the install prompt"
      );
      setDeferredPrompt(null);
    });
  };
  console.log(deferredPrompt)

  return (
    <MobileView>
      {DevicePopupStatus && (
        <div className="flex flex-row justify-between items-center p-2">
          <p className="text-xl">Mobile View</p>
            <button
              onClick={handleInstallClick}
              className="text-sm border p-2 rounded-md bg-info/50 text-base-content hover:bg-info"
            >
              Install App
            </button>
          <p onClick={() => setDevicePopupStatus(false)}>x</p>
        </div>
      )}
    </MobileView>
  );
};
