import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function GithubRedirectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icons.gitHub className="h-5 w-5" />
          GitHub
        </CardTitle>
        <CardDescription>
          Check out my projects and open-source contributions on GitHub.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Visit GitHub
        </Link>
      </CardContent>
    </Card>
  );
}