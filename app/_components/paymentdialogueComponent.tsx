import { Button } from "@/components/ui/button";
import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";

interface DialogueProps {
  closeDialog: () => void;
  isFormValid: boolean; // Accept the isFormValid prop
}

export default function Dialogue_box({ closeDialog, isFormValid }: DialogueProps) {
  return (
    <>
      {isFormValid ? (
        // Dialog content for successful form validation
        <div className="flex flex-col items-center p-6 max-w-sm bg-green-100 rounded-lg shadow-lg">
          <AiOutlineCheckCircle className="text-green-600 text-4xl mb-2" />
          <h2 className="text-2xl font-bold text-green-800 mb-4">Payment Successful!</h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Thank you for completing your payment. Your order will be placed successfully within an hour and is being processed.
          </p>
          <Button onClick={closeDialog} className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none">
            Close
          </Button>
        </div>
      ) : (
        // Dialog content for incomplete form validation
        <div className="flex flex-col items-center p-6 max-w-sm bg-yellow-100 rounded-lg shadow-lg">
          <AiOutlineWarning className="text-yellow-600 text-4xl mb-2" />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Incomplete Information</h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Please complete all required fields to proceed with the payment. Ensure all information is correctly entered.
          </p>
          <Button onClick={closeDialog} className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none">
            Got It
          </Button>
        </div>
      )}
    </>
  );
}
