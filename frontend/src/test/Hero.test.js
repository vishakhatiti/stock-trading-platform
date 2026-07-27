import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  //Test Case for Hero Image
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  //Test Case for Signup Button
  test("render signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: /sign up now/i });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

  // Test Case for Hero Heading
  test("render hero heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: /invest in everything/i,
    });
    expect(heading).toBeInTheDocument();
  });

  // Test Case for Hero Description
  test("render hero description", () => {
    render(<Hero />);
    const description = screen.getByText(
      /online platform to invest in stocks, derivatives, mutual funds, etfs, bonds, and more./i,
    );
    expect(description).toBeInTheDocument();
  });

  // Test Case for Signup Button Text
  test("render signup button text", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: /sign up now/i });
    expect(signupButton).toHaveTextContent("Sign Up Now");
  });

  // Test Case for Hero Image Alt Text
  test("render hero image alt text", () => {
    render(<Hero />);
    const heroImage = screen.getByRole("img");
    expect(heroImage).toHaveAttribute("alt", "Hero Image");
  });

  // Test Case for Hero Image Count
  test("render only one hero image", () => {
    render(<Hero />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(1);
  });

  // Test Case for Signup Button Count
  test("render only one signup button", () => {
    render(<Hero />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(1);
  });
});
