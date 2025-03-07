import { useEffect, useState } from "react";
import { MobileView } from "react-device-detect";

export const DeviceSpacificResponse = () => {
  const [DevicePopupStatus, setDevicePopupStatus] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);


  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    });
  };

  return (
    <>
      <MobileView>
        {DevicePopupStatus && (
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-xl">Mobile View</p>
            {deferredPrompt &&<button onClick={handleInstallClick} className="text-sm border-1 p-2 rounded-md bg-info/50 text-base-content hover:bg-info">
              Install App
            </button>}
            <p onClick={() => setDevicePopupStatus(false)}>x</p>
          </div>
        )}
      </MobileView>
    </>
  );
};
