import { SiWhatsapp } from "react-icons/si";
function WhatsAppButton() {
  const handleClick = () => {
    const whatsappLink = 'https://api.whatsapp.com/send?phone=+918956101181&text=Hello';
    window.open(whatsappLink, '_blank');
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="whatsapp-button"
    >
<SiWhatsapp className="whatsapp"/>    </a>
  );
}

export default WhatsAppButton;
