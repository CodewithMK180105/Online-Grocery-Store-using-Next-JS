
import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineWarning } from "react-icons/ai";

interface DialogueProps {
  closeDialog: () => void;
}

export default function Dialogue_box({ closeDialog }: DialogueProps) {
  return (
    <>
      <div className="mb-4 w-full max-w-sm">
        <div className="flex items-center space-x-2">
          <AiOutlineWarning className="text-yellow-500 text-xl" />
          <h2 className="text-xl font-bold text-gray-800">Please Complete All Fields</h2>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        You need to fill in all the required fields to proceed with the payment. Please ensure all information is correctly entered.
      </p>

      <div className="flex justify-end">
        <Button onClick={closeDialog} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
          Got It
        </Button>
      </div>
    </>
  );
}
