
import { useState } from "react";
import { Check, CreditCard, Smartphone } from "lucide-react";

interface PaymentMethodSelectorProps {
  selectedMethod: string | null;
  onSelectMethod: (method: string) => void;
}

const PaymentMethodSelector = ({ selectedMethod, onSelectMethod }: PaymentMethodSelectorProps) => {
  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      icon: <CreditCard className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      id: "gpay",
      name: "GPay",
      icon: <Smartphone className="h-5 w-5" />,
      color: "bg-green-500",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/GPay_Logo.svg/512px-GPay_Logo.svg.png"
    },
    {
      id: "phonepe",
      name: "PhonePe",
      icon: <Smartphone className="h-5 w-5" />,
      color: "bg-purple-500",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" 
    },
    {
      id: "paytm",
      name: "Paytm",
      icon: <Smartphone className="h-5 w-5" />,
      color: "bg-blue-600",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className={`border rounded-md p-3 cursor-pointer transition-all flex items-center gap-2 ${
            selectedMethod === method.name
              ? "border-primary bg-primary/10"
              : "border-border hover:border-primary/50 hover:bg-primary/5"
          }`}
          onClick={() => onSelectMethod(method.name)}
        >
          <div className={`rounded-full w-8 h-8 flex items-center justify-center ${method.color} text-white`}>
            {method.logoUrl ? (
              <img src={method.logoUrl} alt={method.name} className="w-4 h-4 object-contain" />
            ) : (
              method.icon
            )}
          </div>
          <span className="text-sm font-medium flex-1">{method.name}</span>
          {selectedMethod === method.name && (
            <Check className="h-4 w-4 text-primary" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodSelector;
