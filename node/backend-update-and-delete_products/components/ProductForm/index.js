import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import { useEffect, useState } from "react";

export default function ProductForm({ onSubmit, isEditMode, data }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currency: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{isEditMode ? `Update` : "Add a new Fish"}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData?.name}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          value={formData?.description}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          value={formData?.price}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select
          id="currency"
          name="currency"
          value={formData?.currency}
          onChange={handleInputChange}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">
        {isEditMode ? "Update" : "Submit"}
      </StyledButton>
    </StyledForm>
  );
}
