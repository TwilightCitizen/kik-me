import { createEffect, createSignal } from "solid-js";
import QRCode from "qrcode";

export default function ChangePwQrCode() {
  const [qrCodeUrl, setQrCodeUrl] = createSignal("");

  createEffect(async () => {
    const url = await QRCode.toDataURL(window.location.href);
    setQrCodeUrl(url);
  });

  return (
    <p style={{ "text-align": "center" }}>
      <img 
        src={qrCodeUrl()} 
        alt="QR Code"

        style={{
          "width": "200px",
          "height": "200px",
          "border": "1px solid #c3c3c3",
          "border-radius": "10px"
        }}
      />
    </p>
  );
}