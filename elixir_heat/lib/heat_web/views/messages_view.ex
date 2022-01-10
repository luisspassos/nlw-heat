defmodule HeatWeb.MessagesView do
  use HeatWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
