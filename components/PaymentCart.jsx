import { Checkbox } from "@mantine/core";
import React from "react";

const PaymentCart = () => {
  return (
    <div className="p-4 space-y-3">
      {[
        {
          method: "mpesa",
          label: "0723****33",
        },
        {
          method: "visa",
          label: "2139 ***** ***** 3450",
        },
      ].map((method) => (
        <Checkbox
          value={method.method}
          label={<PaymentLabel method={method?.method} label={method?.label} />}
        />
      ))}
    </div>
  );
};

const PaymentLabel = ({ method, label }) => {
  return (
    <div className="flex space-x-3">
      <img src={`/${method}.png`} className="h-[32px] mt-[-6px]" />
      <p>{label}</p>
    </div>
  );
};

export default PaymentCart;
