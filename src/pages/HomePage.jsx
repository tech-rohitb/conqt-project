import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import InputField from "../components/InputField";

const HomePage = () => {
  const [isItemChecked, setIsItemChecked] = useState(false);
  const [isSupplierChecked, setIsSupplierChecked] = useState(false);

  return (
    <div>
      <h1>Item and Supplier Input Fields</h1>
      <Checkbox
        label="Item"
        checked={isItemChecked}
        onChange={() => setIsItemChecked(!isItemChecked)}
      />
      <Checkbox
        label="Supplier"
        checked={isSupplierChecked}
        onChange={() => setIsSupplierChecked(!isSupplierChecked)}
      />
      {isItemChecked && (
        <div>
          <h2>Item Section</h2>
          <InputField
            label="Item Name"
            type="text"
            maxLength="225"
            placeholder="Samsung Laptop 32SE"
          />
          <InputField label="Quantity" type="number" placeholder="4" />
          <InputField label="Unit Price" type="number" placeholder="12,000" />
          <InputField label="Date of Submission" type="date" />
        </div>
      )}
      {/* supplier */}
      {isSupplierChecked && (
        <div>
          <h2>Supplier Section</h2>

          <InputField
            label="Supplier Name"
            type="text"
            maxLength="225"
            placeholder="Jean, Google"
          />
          <InputField label="Quantity" type="number" placeholder="4" />
          <InputField
            label="Email"
            type="text"
            placeholder="sampleseller@gmail.com"
          />
          <InputField
            label="Phone Number"
            type="number"
            placeholder="9835123456"
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
