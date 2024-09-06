import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  // Рендерим компонент Player
  render(
    <Player
      name="Ruslan"
      score={20}
      onDecreasePlayerScore={() => {}}
      onIncreasePlayerScore={() => {}}
    />
  );

  // Проверяем, что имя игрока отображается
  const playerName = screen.getByText("Ruslan");
  expect(playerName).toBeInTheDocument();

  // Проверяем, что текущее количество очков отображается
  const playerScore = screen.getByText("20");
  expect(playerScore).toBeInTheDocument();

  // Проверяем, что отображаются две кнопки
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  // Мокаем функции onDecreasePlayerScore и onIncreasePlayerScore
  const onDecreasePlayerScore = jest.fn();
  const onIncreasePlayerScore = jest.fn();

  // Рендерим компонент Player
  render(
    <Player
      name="Ruslan"
      score={20}
      onDecreasePlayerScore={onDecreasePlayerScore}
      onIncreasePlayerScore={onIncreasePlayerScore}
    />
  );

  // Находим кнопки увеличения и уменьшения очков
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });
  const increaseButton = screen.getByRole("button", { name: "Increase Score" });

  // Кликаем на кнопку уменьшения очков
  await userEvent.click(decreaseButton);
  expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);

  // Кликаем на кнопку увеличения очков
  await userEvent.click(increaseButton);
  expect(onIncreasePlayerScore).toHaveBeenCalledTimes(1);
});
