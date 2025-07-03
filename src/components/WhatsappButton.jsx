import { FaWhatsapp } from 'react-icons/fa6'
export default function WhatsappButton() {
  return (
    <a
      aria-label="Whatsapp"
      href="https://wa.me/message/584242760113"
      target="_blank"
      className="fixed bottom-4 right-4 p-2 rounded-full text-white bg-[#309B42] text-2xl z-50 hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp />
    </a>
  )
}
