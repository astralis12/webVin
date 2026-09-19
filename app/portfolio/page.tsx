import { redirect } from "next/navigation";

export default function PortfolioPage() {
  const url = process.env.NEXT_PUBLIC_PORTFOLIO_LINK;
  redirect(url || "/");
}