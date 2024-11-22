export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: { info: string; price: number; address: string };
  title: string;
}
