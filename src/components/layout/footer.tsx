
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 text-center"> {/* Changed to background, added border */}
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Yamet AI. All rights reserved.
        </p>
        {/* Minimal links, uncomment and update hrefs when pages exist 
        <div className="mt-4 space-x-4">
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            プライバシーポリシー
          </Link>
        </div>
        */}
      </div>
    </footer>
  );
}
