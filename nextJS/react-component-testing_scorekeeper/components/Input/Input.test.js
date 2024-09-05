import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  // Рендерим компонент Input
  render(
    <Input
      labelText="Username"
      placeholder="Enter your username"
      name="username"
      value=""
      onChange={() => {}}
      required
    />
  );

  // Ищем элемент label и проверяем его текст
  const label = screen.getByLabelText("Username");
  expect(label).toBeInTheDocument();

  // Проверяем наличие атрибутов у input
  const input = screen.getByPlaceholderText("Enter your username");
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("placeholder", "Enter your username");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  // Мокаем функцию onChange
  const handleChange = jest.fn();

  // Рендерим компонент Input
  render(
    <Input
      labelText="Username"
      placeholder="Enter your username"
      name="username"
      value=""
      onChange={handleChange}
    />
  );

  // Ищем input
  const input = screen.getByPlaceholderText("Enter your username");

  // Используем userEvent для симуляции ввода текста
  await userEvent.type(input, "Ruslan");

  // Проверяем, что callback был вызван 4 раза (по одному разу на каждую букву)
  expect(handleChange).toHaveBeenCalledTimes(6);
});
