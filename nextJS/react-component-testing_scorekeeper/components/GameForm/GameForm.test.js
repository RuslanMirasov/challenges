import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  // Рендерим компонент GameForm
  render(<GameForm onCreateGame={() => {}} />);

  // Проверяем наличие двух input-полей
  const gameInput = screen.getByLabelText("Name of game");
  const playerInput = screen.getByLabelText("Player names, separated by comma");
  expect(gameInput).toBeInTheDocument();
  expect(playerInput).toBeInTheDocument();

  // Проверяем наличие кнопки
  const createButton = screen.getByRole("button", { name: "Create game" });
  expect(createButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  // Рендерим компонент GameForm
  render(<GameForm onCreateGame={() => {}} />);

  // Проверяем наличие формы с правильным именем
  const form = screen.getByRole("form", { name: "Create a new game" });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  // Мокаем функцию onCreateGame
  const onCreateGame = jest.fn();

  // Рендерим компонент GameForm
  render(<GameForm onCreateGame={onCreateGame} />);

  // Ищем поля и кнопку
  const gameInput = screen.getByLabelText("Name of game");
  const playersInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const createButton = screen.getByRole("button", { name: "Create game" });

  // Заполняем поля
  await userEvent.type(gameInput, "Mortal Kombat");
  await userEvent.type(playersInput, "Sub Zero, Scorpion");

  // Кликаем на кнопку создания игры
  await userEvent.click(createButton);

  // Проверяем, что onCreateGame вызвана с правильными данными
  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Mortal Kombat",
    playerNames: ["Sub Zero", "Scorpion"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  // Мокаем функцию onCreateGame
  const onCreateGame = jest.fn();

  // Рендерим компонент GameForm
  render(<GameForm onCreateGame={onCreateGame} />);

  // Ищем поля и кнопку
  const gameInput = screen.getByLabelText("Name of game");
  const createButton = screen.getByRole("button", { name: "Create game" });

  // Заполняем только одно поле
  await userEvent.type(gameInput, "Mortal Kombat");

  // Кликаем на кнопку создания игры
  await userEvent.click(createButton);

  // Проверяем, что onCreateGame не была вызвана
  expect(onCreateGame).not.toHaveBeenCalled();
});
